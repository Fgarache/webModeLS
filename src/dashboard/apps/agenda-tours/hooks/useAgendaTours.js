import { useEffect, useState } from 'react';
import { get, push, ref, remove, set } from 'firebase/database';
import { db } from '../../../../auth/firebaseConfig.js';
import {
  buildSlotKey,
  formatHour12,
  normalizeTour,
  sortTours,
} from '../agendaTours.utils.js';

async function readTourById(tourId) {
  const [publicoSnapshot, privadoSnapshot] = await Promise.all([
    get(ref(db, `tour/${tourId}`)),
    get(ref(db, `tourAgenda/${tourId}`)).catch(() => null),
  ]);

  if (!publicoSnapshot.exists()) {
    return null;
  }

  return normalizeTour(tourId, {
    publico: publicoSnapshot.val(),
    privado: privadoSnapshot?.exists?.() ? privadoSnapshot.val() : { reservados: {} },
  });
}

async function readOwnTours(userId) {
  const publicToursSnapshot = await get(ref(db, 'tour'));
  const allTours = publicToursSnapshot.exists() ? publicToursSnapshot.val() : {};
  const ownTourIds = Object.entries(allTours)
    .filter(([, tour]) => tour?.creado_por_uid === userId)
    .map(([tourId]) => tourId);

  const loadedTours = await Promise.all(ownTourIds.map((tourId) => readTourById(tourId)));
  const ownTours = sortTours(
    loadedTours.filter((tour) => tour && tour.publico?.creado_por_uid === userId)
  );

  return ownTours;
}

function getErrorMessage(error, fallbackMessage) {
  if (error?.code === 'PERMISSION_DENIED') {
    return 'Firebase rechazo la operacion por permisos.';
  }

  if (error?.message) {
    return error.message;
  }

  return fallbackMessage;
}

function useAgendaTours(user) {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadTours() {
      if (!user?.uid) {
        setTours([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError('');

      try {
        const ownTours = await readOwnTours(user.uid);
        if (!cancelled) {
          setTours(ownTours);
        }
      } catch (error) {
        if (!cancelled) {
          setError(getErrorMessage(error, 'No se pudieron cargar tus tours.'));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadTours();

    return () => {
      cancelled = true;
    };
  }, [user]);

  const saveTour = async ({ editingTourId, form }) => {
    if (!user?.uid) {
      setError('Debes iniciar sesion para guardar tours.');
      return false;
    }

    if (!form.titulo.trim()) {
      setError('El tour necesita un titulo.');
      return false;
    }

    if (!form.fecha) {
      setError('Selecciona una fecha para el tour.');
      return false;
    }

    if (!Object.keys(form.disponibles || {}).length) {
      setError('Selecciona al menos un horario disponible.');
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const tourId = editingTourId || push(ref(db, 'tour')).key;
      const now = new Date().toISOString();
      const currentTour = editingTourId ? tours.find((tour) => tour.id === editingTourId) : null;
      const tourPayload = {
        titulo: form.titulo.trim(),
        detalles: form.detalles.trim(),
        fecha: form.fecha,
        activo: Boolean(form.activo),
        disponibles: form.disponibles || {},
        ubicacion_maps: form.ubicacion_maps.trim(),
        creado_por_uid: user.uid,
        actualizado_en: now,
        creado_en: currentTour?.publico?.creado_en || now,
      };

      await set(ref(db, `tour/${tourId}`), tourPayload);
      const savedTour = await readTourById(tourId);

      setTours((current) => {
        const filtered = current.filter((tour) => tour.id !== tourId);
        return sortTours([...filtered, savedTour]);
      });

      return true;
    } catch (error) {
      setError(getErrorMessage(error, 'No se pudo guardar el tour.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const createReservation = async ({ tourId, slotKey, hour, form }) => {
    if (!tourId || !slotKey) {
      return false;
    }

    if (!form.lugar.trim()) {
      setError('La agenda necesita un lugar.');
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const reservationPayload = {
        lugar: form.lugar.trim(),
        contacto: form.contacto.trim(),
        canal_contacto: form.canal_contacto || 'whatsapp',
        detalle: form.detalle.trim(),
        hora: hour,
        hora_legible: formatHour12(hour),
        creado_en: new Date().toISOString(),
      };

      await set(ref(db, `tourAgenda/${tourId}/reservados/${slotKey}`), reservationPayload);
      await remove(ref(db, `tour/${tourId}/disponibles/${slotKey}`));

      setTours((current) =>
        sortTours(
          current.map((tour) => {
            if (tour.id !== tourId) {
              return tour;
            }

            const nextDisponibles = { ...(tour.publico?.disponibles || {}) };
            const nextReservados = { ...(tour.privado?.reservados || {}) };
            delete nextDisponibles[slotKey];
            nextReservados[slotKey] = reservationPayload;

            return {
              ...tour,
              publico: {
                ...tour.publico,
                disponibles: nextDisponibles,
              },
              privado: {
                ...tour.privado,
                reservados: nextReservados,
              },
            };
          })
        )
      );

      return true;
    } catch (error) {
      setError(getErrorMessage(error, 'No se pudo guardar la agenda.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const updateReservation = async ({ tourId, slotKey, form, originalReservation }) => {
    if (!tourId || !slotKey) {
      return false;
    }

    if (!form.lugar.trim()) {
      setError('La agenda necesita un lugar.');
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const reservationPayload = {
        ...originalReservation,
        lugar: form.lugar.trim(),
        contacto: form.contacto.trim(),
        canal_contacto: form.canal_contacto || 'whatsapp',
        detalle: form.detalle.trim(),
        actualizado_en: new Date().toISOString(),
      };

      await set(ref(db, `tourAgenda/${tourId}/reservados/${slotKey}`), reservationPayload);

      setTours((current) =>
        sortTours(
          current.map((tour) => {
            if (tour.id !== tourId) {
              return tour;
            }

            return {
              ...tour,
              privado: {
                ...tour.privado,
                reservados: {
                  ...(tour.privado?.reservados || {}),
                  [slotKey]: reservationPayload,
                },
              },
            };
          })
        )
      );

      return true;
    } catch (error) {
      setError(getErrorMessage(error, 'No se pudo actualizar la agenda.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const deleteReservation = async ({ tourId, slotKey, reservation }) => {
    if (!tourId || !slotKey) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const restoredHour = reservation?.hora || `${slotKey.slice(1, 3)}:${slotKey.slice(3, 5)}`;

      await remove(ref(db, `tourAgenda/${tourId}/reservados/${slotKey}`));
      await set(ref(db, `tour/${tourId}/disponibles/${buildSlotKey(restoredHour)}`), restoredHour);

      setTours((current) =>
        sortTours(
          current.map((tour) => {
            if (tour.id !== tourId) {
              return tour;
            }

            const nextDisponibles = { ...(tour.publico?.disponibles || {}) };
            const nextReservados = { ...(tour.privado?.reservados || {}) };
            delete nextReservados[slotKey];
            nextDisponibles[buildSlotKey(restoredHour)] = restoredHour;

            return {
              ...tour,
              publico: {
                ...tour.publico,
                disponibles: nextDisponibles,
              },
              privado: {
                ...tour.privado,
                reservados: nextReservados,
              },
            };
          })
        )
      );

      return true;
    } catch (error) {
      setError(getErrorMessage(error, 'No se pudo eliminar la agenda.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const deleteTour = async (tourId) => {
    if (!user?.uid || !tourId) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      await remove(ref(db, `tourAgenda/${tourId}`));
      await remove(ref(db, `tour/${tourId}`));

      setTours((current) => current.filter((tour) => tour.id !== tourId));
      return true;
    } catch (error) {
      setError(getErrorMessage(error, 'No se pudo eliminar el tour.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  return {
    tours,
    loading,
    saving,
    error,
    saveTour,
    createReservation,
    updateReservation,
    deleteReservation,
    deleteTour,
  };
}

export default useAgendaTours;