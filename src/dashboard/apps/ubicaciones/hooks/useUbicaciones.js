import { useEffect, useMemo, useState } from 'react';
import { ref, update } from 'firebase/database';
import { db } from '../../../../auth/firebaseConfig.js';
import { cleanUbicacionesMap, createNextUbicacionKey, normalizeUbicacionesMap } from '../ubicaciones.utils.js';

export function useUbicaciones({ user, profile, onUpdate }) {
  const [items, setItems] = useState({});
  const [currentSelection, setCurrentSelection] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setItems(normalizeUbicacionesMap(profile?.ubicaciones || {}));
    setCurrentSelection(String(profile?.disponible_hoy_en || '').trim());
  }, [profile?.ubicaciones, profile?.disponible_hoy_en]);

  const entries = useMemo(() => Object.entries(items), [items]);

  const itemOptions = useMemo(
    () => entries
      .map(([, value]) => String(value || '').trim())
      .filter(Boolean),
    [entries]
  );

  const persistItems = async (nextItems, nextSelection) => {
    if (!user?.uid) {
      return;
    }

    setSaving(true);

    try {
      const cleanedItems = cleanUbicacionesMap(nextItems);
      const safeSelection = cleanedItems[nextSelection] ? nextSelection : '';
      const payload = {
        ubicaciones: cleanedItems,
        disponible_hoy_en: safeSelection,
      };

      await update(ref(db, `perfil/${user.uid}`), payload);
      onUpdate?.({
        ...profile,
        ...payload,
      });
      setItems(cleanedItems);
      setCurrentSelection(safeSelection);
    } catch (error) {
      console.error('Error guardando ubicaciones:', error);
      alert(`Error al guardar ubicaciones: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };

  const addItem = () => {
    const nextKey = createNextUbicacionKey(items, 'u');
    setItems((current) => ({
      ...current,
      [nextKey]: '',
    }));
  };

  const updateItem = async (key, value, persist = false) => {
    const nextItems = {
      ...items,
      [key]: value,
    };

    setItems(nextItems);

    if (persist) {
      await persistItems(nextItems, currentSelection);
    }
  };

  const saveItem = async () => {
    await persistItems(items, currentSelection);
  };

  const removeItem = async (key) => {
    const nextItems = { ...items };
    delete nextItems[key];
    await persistItems(nextItems, currentSelection);
  };

  const changeCurrentSelection = async (value) => {
    const nextValue = String(value || '').trim();
    setCurrentSelection(nextValue);
    await persistItems(items, nextValue);
  };

  return {
    entries,
    itemOptions,
    currentSelection,
    saving,
    addItem,
    updateItem,
    saveItem,
    removeItem,
    changeCurrentSelection,
  };
}
