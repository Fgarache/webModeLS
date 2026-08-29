import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { get, push, ref, remove, set } from 'firebase/database';
import { db } from '../../../../auth/firebaseConfig.js';
import { buildAgendaDateTime, normalizeAgenda, sanitizeAgendaContact, sortAgenda } from '../agenda.utils.js';

function getErrorMessage(error, fallbackMessage) {
  if (error?.code === 'PERMISSION_DENIED') {
    return 'Firebase rechazo la operacion por permisos.';
  }
  return error?.message || fallbackMessage;
}

function useAgenda(user) {
  const queryClient = useQueryClient();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const { data: agendaItems = [], isLoading: loading } = useQuery({
    queryKey: ['agenda', user?.uid],
    queryFn: async () => {
      if (!user?.uid) return [];
      const snapshot = await get(ref(db, `agenda/${user.uid}`));
      const agendaMap = snapshot.exists() ? snapshot.val() : {};
      const loaded = Object.entries(agendaMap).map(([agendaId, agendaData]) => normalizeAgenda(agendaId, agendaData));
      return sortAgenda(loaded);
    },
    enabled: !!user?.uid,
    staleTime: 5 * 60 * 1000,
  });

  const saveAgenda = async ({ editingAgendaId, form }) => {
    if (!user?.uid) {
      setError('Debes iniciar sesion para guardar agendas.');
      return false;
    }

    if (!sanitizeAgendaContact(form.contacto)) {
      setError('Debes escribir un contacto.');
      return false;
    }

    const agendaDateTime = buildAgendaDateTime(form);

    if (form.fecha_activa !== false && !agendaDateTime) {
      setError('Debes elegir una fecha.');
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const agendaId = editingAgendaId || push(ref(db, `agenda/${user.uid}`)).key;
      const currentAgenda = editingAgendaId ? agendaItems.find((item) => item.id === editingAgendaId) : null;
      const payload = {
        contacto: sanitizeAgendaContact(form.contacto),
        tipo_contacto: String(form.tipo_contacto || 'whatsapp').trim(),
        deposito: String(form.deposito || '').trim(),
        fecha: agendaDateTime,
        detalles: String(form.detalles || '').trim(),
        creado_por_uid: user.uid,
        creado_en: currentAgenda?.creado_en || new Date().toISOString(),
        actualizado_en: new Date().toISOString(),
      };

      await set(ref(db, `agenda/${user.uid}/${agendaId}`), payload);
      const savedAgenda = normalizeAgenda(agendaId, payload);
      
      queryClient.setQueryData(['agenda', user.uid], (old = []) => {
        return sortAgenda([...old.filter((item) => item.id !== agendaId), savedAgenda]);
      });
      return true;
    } catch (saveError) {
      setError(getErrorMessage(saveError, 'No se pudo guardar la agenda.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const deleteAgenda = async (agendaId) => {
    if (!user?.uid || !agendaId) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      await remove(ref(db, `agenda/${user.uid}/${agendaId}`));
      queryClient.setQueryData(['agenda', user.uid], (old = []) => {
        return old.filter((item) => item.id !== agendaId);
      });
      return true;
    } catch (deleteError) {
      setError(getErrorMessage(deleteError, 'No se pudo eliminar la agenda.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  return {
    agendaItems,
    loading,
    saving,
    error,
    saveAgenda,
    deleteAgenda,
  };
}

export default useAgenda;