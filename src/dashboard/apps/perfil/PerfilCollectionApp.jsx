import { useEffect, useMemo, useState } from 'react';
import { FaExternalLinkAlt, FaMapMarkerAlt, FaPen, FaSave, FaTrash, FaTools } from 'react-icons/fa';
import { ref, update } from 'firebase/database';
import { db } from '../../../auth/firebaseConfig.js';
import FloatingActionButton from '../../components/FloatingActionButton.jsx';
import AppSectionHeader from '../../components/AppSectionHeader.jsx';
import './perfil.css';

const TITLE_MAP = {
  servicios: FaTools,
  ubicaciones: FaMapMarkerAlt,
};

function isServiceCollection(collectionKey) {
  return collectionKey === 'servicios';
}

function normalizeCollectionMap(collectionKey, map) {
  if (!isServiceCollection(collectionKey)) {
    return map || {};
  }

  return Object.entries(map || {}).reduce((accumulator, [key, value]) => {
    if (typeof value === 'string') {
      accumulator[key] = {
        nombre: value,
        link: '',
      };
      return accumulator;
    }

    accumulator[key] = {
      nombre: value?.nombre || '',
      link: value?.link || '',
    };
    return accumulator;
  }, {});
}

function cleanCollectionMap(collectionKey, map) {
  if (!isServiceCollection(collectionKey)) {
    return Object.entries(map || {}).reduce((accumulator, [key, value]) => {
      const nextValue = String(value || '').trim();
      if (nextValue) {
        accumulator[key] = nextValue;
      }
      return accumulator;
    }, {});
  }

  return Object.entries(map || {}).reduce((accumulator, [key, value]) => {
    const nombre = String((typeof value === 'string' ? value : value?.nombre) || '').trim();
    const link = String(value?.link || '').trim();

    if (nombre) {
      accumulator[key] = link ? { nombre, link } : { nombre };
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
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [editingServiceKey, setEditingServiceKey] = useState(null);
  const [serviceDraft, setServiceDraft] = useState({ nombre: '', link: '' });
  const serviceCollection = isServiceCollection(collectionKey);

  useEffect(() => {
    setItems(normalizeCollectionMap(collectionKey, profile?.[collectionKey] || {}));
    if (includeAvailableToday) {
      setCurrentSelection(profile?.disponible_hoy_en || '');
    }
  }, [profile, collectionKey, includeAvailableToday]);

  const entries = useMemo(() => Object.entries(items), [items]);
  const itemOptions = useMemo(
    () => entries
      .map(([, value]) => {
        if (serviceCollection) {
          return String(value?.nombre || '').trim();
        }

        return String(value || '').trim();
      })
      .filter(Boolean),
    [entries, serviceCollection]
  );

  const addItem = () => {
    if (serviceCollection) {
      setEditingServiceKey(null);
      setServiceDraft({ nombre: '', link: '' });
      setServiceModalOpen(true);
      return;
    }

    const nextKey = `${prefix}${Object.keys(items).length + 1}`;
    setItems((current) => ({
      ...current,
      [nextKey]: serviceCollection ? { nombre: '', link: '' } : '',
    }));
  };

  const openEditServiceModal = (key, value) => {
    setEditingServiceKey(key);
    setServiceDraft({
      nombre: String(value?.nombre || '').trim(),
      link: String(value?.link || '').trim(),
    });
    setServiceModalOpen(true);
  };

  const closeServiceModal = () => {
    if (saving) {
      return;
    }

    setServiceModalOpen(false);
    setEditingServiceKey(null);
    setServiceDraft({ nombre: '', link: '' });
  };

  const buildServiceHref = (link) => {
    const value = String(link || '').trim();
    if (!value) {
      return '';
    }

    return /^https?:\/\//i.test(value) ? value : `https://${value}`;
  };

  const saveServiceDraft = () => {
    const nombre = String(serviceDraft.nombre || '').trim();
    const link = String(serviceDraft.link || '').trim();

    if (!nombre) {
      return;
    }

    const nextKey = editingServiceKey || `${prefix}${Object.keys(items).length + 1}`;
    setItems((current) => ({
      ...current,
      [nextKey]: link ? { nombre, link } : { nombre },
    }));

    closeServiceModal();
  };

  const updateItem = (key, value, field = 'nombre') => {
    setItems((current) => ({
      ...current,
      [key]: serviceCollection
        ? {
            ...(current[key] || { nombre: '', link: '' }),
            [field]: value,
          }
        : value,
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
      const cleanedItems = cleanCollectionMap(collectionKey, items);
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
          {entries.map(([key, value]) => {
            if (serviceCollection) {
              const href = buildServiceHref(value?.link);

              return (
                <article key={key} className="perfil-service-card">
                  <div className="perfil-service-copy">
                    <strong>{value?.nombre || itemLabel}</strong>
                    <span>{value?.link || 'Sin link'}</span>
                  </div>
                  <div className="perfil-service-actions">
                    <button
                      type="button"
                      className="secondary-button perfil-service-edit"
                      onClick={() => openEditServiceModal(key, value)}
                      disabled={saving}
                    >
                      <FaPen />
                    </button>
                    {href && (
                      <a className="primary-button perfil-service-link" href={href} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt /> Ir
                      </a>
                    )}
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
                </article>
              );
            }

            return (
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
            );
          })}
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

      {serviceCollection && serviceModalOpen && (
        <div className="tour-modal-overlay" role="dialog" aria-modal="true">
          <div className="tour-modal redes-modal-card">
            <div className="tour-modal-header">
              <div>
                <h4>{editingServiceKey ? `Editar ${itemLabel.toLowerCase()}` : addLabel}</h4>
                <p>Agrega el nombre del servicio y un link opcional.</p>
              </div>
            </div>

            <div className="redes-modal-form">
              <div className="form-group redes-modal-full">
                <label htmlFor="perfil_servicio_nombre">{itemLabel}</label>
                <input
                  id="perfil_servicio_nombre"
                  type="text"
                  value={serviceDraft.nombre}
                  onChange={(event) => setServiceDraft((current) => ({ ...current, nombre: event.target.value }))}
                  disabled={saving}
                />
              </div>

              <div className="form-group redes-modal-full">
                <label htmlFor="perfil_servicio_link">Link (opcional)</label>
                <input
                  id="perfil_servicio_link"
                  type="url"
                  placeholder="https://..."
                  value={serviceDraft.link}
                  onChange={(event) => setServiceDraft((current) => ({ ...current, link: event.target.value }))}
                  disabled={saving}
                />
              </div>
            </div>

            <div className="confirm-modal-actions redes-modal-actions">
              <button
                type="button"
                className="primary-button"
                onClick={saveServiceDraft}
                disabled={saving || !String(serviceDraft.nombre || '').trim()}
              >
                Guardar
              </button>
              <button type="button" className="secondary-button" onClick={closeServiceModal} disabled={saving}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProfileCollectionApp;