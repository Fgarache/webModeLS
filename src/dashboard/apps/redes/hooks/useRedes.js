import { useMemo, useState } from 'react';
import { ref, update } from 'firebase/database';
import { db } from '../../../../auth/firebaseConfig.js';
import { buildRedPayload, generateRedKey, normalizeRedes } from '../redes.utils.js';

function useRedes(user, profile, onUpdateProfile) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const redes = useMemo(() => normalizeRedes(profile?.redes || {}), [profile?.redes]);

  const persistRedes = async (nextRedes) => {
    const payload = buildRedPayload(nextRedes);
    await update(ref(db, `perfil/${user.uid}`), { redes: payload });
    onUpdateProfile({
      ...profile,
      redes: payload,
    });
  };

  const addRed = async (draft) => {
    if (!user?.uid) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const nextRedes = [
        ...redes,
        {
          id: generateRedKey(),
          ...draft,
        },
      ];
      await persistRedes(nextRedes);
      return true;
    } catch (saveError) {
      setError(saveError?.message || 'No se pudo agregar la red.');
      return false;
    } finally {
      setSaving(false);
    }
  };

  const updateRed = async (redId, draft) => {
    if (!user?.uid || !redId) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const nextRedes = redes.map((item) => (item.id === redId ? { ...item, ...draft } : item));
      await persistRedes(nextRedes);
      return true;
    } catch (saveError) {
      setError(saveError?.message || 'No se pudo actualizar la red.');
      return false;
    } finally {
      setSaving(false);
    }
  };

  const deleteRed = async (redId) => {
    if (!user?.uid || !redId) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const nextRedes = redes.filter((item) => item.id !== redId);
      await persistRedes(nextRedes);
      return true;
    } catch (saveError) {
      setError(saveError?.message || 'No se pudo eliminar la red.');
      return false;
    } finally {
      setSaving(false);
    }
  };

  return {
    error,
    redes,
    saving,
    addRed,
    updateRed,
    deleteRed,
  };
}

export default useRedes;