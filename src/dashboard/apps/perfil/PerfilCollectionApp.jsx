import { useEffect, useMemo, useState } from 'react';
import { FaMapMarkerAlt, FaSave, FaTrash, FaTools } from 'react-icons/fa';
import { ref, update } from 'firebase/database';
import { db } from '../../../auth/firebaseConfig.js';
import FloatingActionButton from '../../components/FloatingActionButton.jsx';
import AppSectionHeader from '../../components/AppSectionHeader.jsx';
import './perfil.css';

const TITLE_MAP = {
  servicios: FaTools,
  ubicaciones: FaMapMarkerAlt,
};

function cleanStringMap(map) {
  return Object.entries(map || {}).reduce((accumulator, [key, value]) => {
    const nextValue = String(value || '').trim();
    if (nextValue) {
      accumulator[key] = nextValue;
    }
    return accumulator;
  }, {});
}

function ProfileCollectionApp({
  user,
  profile,
  onUpdate,
  collectionKey,
  title,
  addLabel,
  helpTitle,
  helpText,
  emptyText,
  itemLabel,
  prefix,
  includeAvailableToday = false,
}) {
  const [items, setItems] = useState({});
  const [currentSelection, setCurrentSelection] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setItems(profile?.[collectionKey] || {});
    if (includeAvailableToday) {
      setCurrentSelection(profile?.disponible_hoy_en || '');
    }
  }, [profile, collectionKey, includeAvailableToday]);

  const entries = useMemo(() => Object.entries(items), [items]);
  const itemOptions = useMemo(
    () => entries.map(([, value]) => String(value || '').trim()).filter(Boolean),
    [entries]
  );

  const addItem = () => {
    const nextKey = `${prefix}${Object.keys(items).length + 1}`;
    setItems((current) => ({
      ...current,
      [nextKey]: '',
    }));
  };

  const updateItem = (key, value) => {
    setItems((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const removeItem = (key) => {
    setItems((current) => {
      const nextItems = { ...current };
      delete nextItems[key];
      return nextItems;
    });
  };

  const handleSave = async () => {
    if (!user?.uid) {
      return;
    }

    setSaving(true);

    try {
      const cleanedItems = cleanStringMap(items);
      const payload = {
        [collectionKey]: cleanedItems,
        ...(includeAvailableToday
          ? { disponible_hoy_en: cleanedItems[currentSelection] ? currentSelection : '' }
          : {}),
      };

      await update(ref(db, `perfil/${user.uid}`), payload);
      onUpdate?.({
        ...profile,
        ...payload,
      });

      alert(`${title} guardado exitosamente`);
    } catch (error) {
      console.error(`Error guardando ${collectionKey}:`, error);
      alert(`Error al guardar ${title.toLowerCase()}: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };

  const Icon = TITLE_MAP[collectionKey];

  return (
    <section className="perfil-app perfil-collection-app">
      <AppSectionHeader
        title={title}
        addLabel={addLabel}
        helpTitle={helpTitle}
        helpText={helpText}
        onAdd={addItem}
        addDisabled={saving || !user?.uid}
        addButtonClassName="perfil-collection-add-button"
      />

      <article className="perfil-summary-card perfil-collection-card">
        <div className="perfil-collection-hero">
          <span className="perfil-collection-icon">
            {Icon && <Icon />}
          </span>
          <div>
            <h4>{title}</h4>
            <p>{itemOptions.length ? `${itemOptions.length} elementos guardados` : emptyText}</p>
          </div>
        </div>

        {includeAvailableToday && (
          <div className="form-group perfil-form-full">
            <label htmlFor="perfil_disponible_hoy_en">Disponible hoy en</label>
            <select
              id="perfil_disponible_hoy_en"
              value={currentSelection}
              onChange={(event) => setCurrentSelection(event.target.value)}
              disabled={saving}
            >
              <option value="">Sin ubicacion</option>
              {itemOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="perfil-stack-list">
          {entries.length === 0 && <p>{emptyText}</p>}
          {entries.map(([key, value]) => (
            <div key={key} className="perfil-inline-grid single-line compact-action-row">
              <input
                type="text"
                placeholder={itemLabel}
                value={value || ''}
                onChange={(event) => updateItem(key, event.target.value)}
                disabled={saving}
              />
              <button
                type="button"
                className="secondary-button perfil-inline-delete-button"
                onClick={() => removeItem(key)}
                aria-label={`Eliminar ${itemLabel.toLowerCase()}`}
                title={`Eliminar ${itemLabel.toLowerCase()}`}
                disabled={saving}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="perfil-modal-actions">
          <button type="button" className="primary-button" onClick={handleSave} disabled={saving || !user?.uid}>
            <FaSave /> {saving ? 'Guardando...' : 'Guardar cambios'}
          </button>
        </div>
      </article>

      <FloatingActionButton
        ariaLabel={addLabel}
        title={addLabel}
        onClick={addItem}
        disabled={saving || !user?.uid}
        className="perfil-collection-fab"
      />
    </section>
  );
}

export default ProfileCollectionApp;