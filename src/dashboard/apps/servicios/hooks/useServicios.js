import { useEffect, useMemo, useState } from 'react';
import { ref, update } from 'firebase/database';
import { db } from '../../../../auth/firebaseConfig.js';
import { cleanServiciosMap, createNextServicioKey, normalizeServiciosMap } from '../servicios.utils.js';

export function useServicios({ user, profile, onUpdate }) {
  const [items, setItems] = useState({});
  const [saving, setSaving] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [editingKey, setEditingKey] = useState(null);
  const [draft, setDraft] = useState({ nombre: '', link: '', precio: '', detalles: '' });

  useEffect(() => {
    setItems(normalizeServiciosMap(profile?.servicios || {}));
  }, [profile?.servicios]);

  const entries = useMemo(() => Object.entries(items), [items]);

  const persistItems = async (nextItems) => {
    if (!user?.uid) {
      return;
    }

    setSaving(true);

    try {
      const cleanedItems = cleanServiciosMap(nextItems);
      await update(ref(db, `perfil/${user.uid}`), { servicios: cleanedItems });
      onUpdate?.({
        ...profile,
        servicios: cleanedItems,
      });
      setItems(cleanedItems);
    } catch (error) {
      console.error('Error guardando servicios:', error);
      alert(`Error al guardar servicios: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };

  const openAddModal = () => {
    setEditingKey(null);
    setDraft({ nombre: '', link: '', precio: '', detalles: '' });
    setServiceModalOpen(true);
  };

  const openEditModal = (key, value) => {
    setEditingKey(key);
    setDraft({
      nombre: String(value?.nombre || '').trim(),
      link: String(value?.link || '').trim(),
      precio: String(value?.precio || '').trim(),
      detalles: String(value?.detalles || '').trim(),
    });
    setServiceModalOpen(true);
  };

  const closeModal = () => {
    if (saving) {
      return;
    }

    setServiceModalOpen(false);
    setEditingKey(null);
    setDraft({ nombre: '', link: '', precio: '', detalles: '' });
  };

  const saveDraft = async () => {
    const nombre = String(draft.nombre || '').trim();
    const link = String(draft.link || '').trim();
    const precio = String(draft.precio || '').trim();
    const detalles = String(draft.detalles || '').trim();

    if (!nombre) {
      return;
    }

    const nextKey = editingKey || createNextServicioKey(items, 's');
    const nextItems = {
      ...items,
      [nextKey]: {
        nombre,
        ...(link ? { link } : {}),
        ...(precio ? { precio } : {}),
        ...(detalles ? { detalles } : {}),
      },
    };

    await persistItems(nextItems);
    closeModal();
  };

  const deleteServicio = async (key) => {
    const nextItems = { ...items };
    delete nextItems[key];
    await persistItems(nextItems);
  };

  return {
    entries,
    saving,
    serviceModalOpen,
    editingKey,
    draft,
    setDraft,
    openAddModal,
    openEditModal,
    closeModal,
    saveDraft,
    deleteServicio,
  };
}
