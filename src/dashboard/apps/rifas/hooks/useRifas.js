import { useEffect, useState } from 'react';
import { get, push, ref, remove, set } from 'firebase/database';
import { db } from '../../../../auth/firebaseConfig.js';
import { normalizeRifa, parseListToMap, sortRifas } from '../rifas.utils.js';

async function readRifaById(rifaId) {
  const [rifaSnapshot, compraSnapshot] = await Promise.all([
    get(ref(db, `rifa/${rifaId}`)),
    get(ref(db, `rifaCompra/${rifaId}`)).catch(() => null),
  ]);

  if (!rifaSnapshot.exists()) {
    return null;
  }

  return normalizeRifa(rifaId, rifaSnapshot.val(), compraSnapshot?.exists?.() ? compraSnapshot.val() : {});
}

function getErrorMessage(error, fallbackMessage) {
  if (error?.code === 'PERMISSION_DENIED') {
    return 'Firebase rechazo la operacion por permisos.';
  }

  return error?.message || fallbackMessage;
}

function useRifas(user) {
  const [rifas, setRifas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function loadRifas() {
      if (!user?.uid) {
        setRifas([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError('');

      try {
        const publicSnapshot = await get(ref(db, 'rifa'));
        const allRifas = publicSnapshot.exists() ? publicSnapshot.val() : {};
        const ownRifaIds = Object.entries(allRifas)
          .filter(([, rifa]) => rifa?.creado_por_uid === user.uid)
          .map(([rifaId]) => rifaId);

        const loaded = await Promise.all(ownRifaIds.map((rifaId) => readRifaById(rifaId)));
        const ownRifas = sortRifas(loaded.filter(Boolean));

        if (!cancelled) {
          setRifas(ownRifas);
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(getErrorMessage(loadError, 'No se pudieron cargar las rifas.'));
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadRifas();

    return () => {
      cancelled = true;
    };
  }, [user]);

  const saveRifa = async ({ editingRifaId, form }) => {
    if (!user?.uid) {
      setError('Debes iniciar sesion para guardar rifas.');
      return false;
    }

    if (!form.titulo.trim()) {
      setError('La rifa necesita un titulo.');
      return false;
    }

    if (!Number(form.total_numeros)) {
      setError('La rifa necesita un total de numeros valido.');
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const rifaId = editingRifaId || push(ref(db, 'rifa')).key;
      const currentRifa = editingRifaId ? rifas.find((rifa) => rifa.id === editingRifaId) : null;
      const payload = {
        titulo: form.titulo.trim(),
        detalles: form.detalles.trim(),
        fecha_sorteo: form.fecha_sorteo,
        hora_sorteo: form.hora_sorteo,
        activa: form.activa !== false,
        terminos_condiciones: form.terminos_condiciones.trim(),
        premios: parseListToMap(form.premios_texto || '', 'p'),
        ganadores: parseListToMap(form.ganadores_texto || '', 'g'),
        precio: Number(form.precio) || 0,
        total_numeros: Number(form.total_numeros) || 0,
        creado_por_uid: user.uid,
        creado_en: currentRifa?.creado_en || new Date().toISOString(),
        actualizado_en: new Date().toISOString(),
        numeros_ocupados: currentRifa?.numeros_ocupados || {},
      };

      await set(ref(db, `rifa/${rifaId}`), payload);
      const savedRifa = await readRifaById(rifaId);
      setRifas((current) => sortRifas([...current.filter((rifa) => rifa.id !== rifaId), savedRifa]));
      return true;
    } catch (saveError) {
      setError(getErrorMessage(saveError, 'No se pudo guardar la rifa.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const createCompra = async ({ rifaId, numberKey, form }) => {
    if (!rifaId || !numberKey) {
      return false;
    }

    if (!form.contacto.trim()) {
      setError('La compra necesita un contacto.');
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const payload = {
        contacto: form.contacto.trim(),
        canal: form.canal || 'whatsapp',
        lugar: form.lugar.trim(),
        detalles: form.detalles.trim(),
      };

      await set(ref(db, `rifaCompra/${rifaId}/${numberKey}`), payload);
      await set(ref(db, `rifa/${rifaId}/numeros_ocupados/${numberKey}`), true);

      setRifas((current) =>
        sortRifas(
          current.map((rifa) => {
            if (rifa.id !== rifaId) {
              return rifa;
            }

            return {
              ...rifa,
              numeros_ocupados: {
                ...(rifa.numeros_ocupados || {}),
                [numberKey]: true,
              },
              compras: {
                ...(rifa.compras || {}),
                [numberKey]: payload,
              },
            };
          })
        )
      );

      return true;
    } catch (saveError) {
      setError(getErrorMessage(saveError, 'No se pudo guardar la compra.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const updateCompra = async ({ rifaId, numberKey, form }) => {
    if (!rifaId || !numberKey) {
      return false;
    }

    if (!form.contacto.trim()) {
      setError('La compra necesita un contacto.');
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const payload = {
        contacto: form.contacto.trim(),
        canal: form.canal || 'whatsapp',
        lugar: form.lugar.trim(),
        detalles: form.detalles.trim(),
      };

      await set(ref(db, `rifaCompra/${rifaId}/${numberKey}`), payload);

      setRifas((current) =>
        sortRifas(
          current.map((rifa) => {
            if (rifa.id !== rifaId) {
              return rifa;
            }

            return {
              ...rifa,
              compras: {
                ...(rifa.compras || {}),
                [numberKey]: payload,
              },
            };
          })
        )
      );

      return true;
    } catch (saveError) {
      setError(getErrorMessage(saveError, 'No se pudo actualizar la compra.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const deleteCompra = async ({ rifaId, numberKey }) => {
    if (!rifaId || !numberKey) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      await remove(ref(db, `rifaCompra/${rifaId}/${numberKey}`));
      await remove(ref(db, `rifa/${rifaId}/numeros_ocupados/${numberKey}`));

      setRifas((current) =>
        sortRifas(
          current.map((rifa) => {
            if (rifa.id !== rifaId) {
              return rifa;
            }

            const nextOccupied = { ...(rifa.numeros_ocupados || {}) };
            const nextCompras = { ...(rifa.compras || {}) };
            delete nextOccupied[numberKey];
            delete nextCompras[numberKey];

            return {
              ...rifa,
              numeros_ocupados: nextOccupied,
              compras: nextCompras,
            };
          })
        )
      );

      return true;
    } catch (saveError) {
      setError(getErrorMessage(saveError, 'No se pudo borrar la compra.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const deleteRifa = async (rifaId) => {
    if (!rifaId) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      await remove(ref(db, `rifaCompra/${rifaId}`));
      await remove(ref(db, `rifa/${rifaId}`));
      setRifas((current) => current.filter((rifa) => rifa.id !== rifaId));
      return true;
    } catch (saveError) {
      setError(getErrorMessage(saveError, 'No se pudo eliminar la rifa.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  return {
    rifas,
    loading,
    saving,
    error,
    saveRifa,
    createCompra,
    updateCompra,
    deleteCompra,
    deleteRifa,
  };
}

export default useRifas;