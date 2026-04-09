import { useEffect, useMemo, useState } from 'react';
import { FaCheckCircle, FaEdit, FaMapMarkerAlt, FaSave, FaSignature, FaTools, FaTrash } from 'react-icons/fa';
import { ref, update } from 'firebase/database';
import { db } from '../../../auth/firebaseConfig.js';
import { normalizeMediaPhotos } from '../media/media.utils.js';
import './perfil.css';

const DESCRIPTION_PREVIEW_LIMIT = 180;

const SECTION_ITEMS = [
  { id: 'nombre', label: 'Nombre', Icon: FaSignature },
  { id: 'servicios', label: 'Servicios', Icon: FaTools },
  { id: 'ubicaciones', label: 'Ubicaciones', Icon: FaMapMarkerAlt },
];

function PerfilApp({ user, profile, onUpdate }) {
  const [activeSection, setActiveSection] = useState('nombre');
  const [editedProfile, setEditedProfile] = useState(profile);
  const [modalOpen, setModalOpen] = useState(false);
  const [photoPickerOpen, setPhotoPickerOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);

  useEffect(() => {
    setEditedProfile({
      ...profile,
      estado_texto: profile?.estado_texto || '',
      verificado: profile?.verificado === true,
    });
    setDescriptionExpanded(false);
  }, [profile]);

  const locationOptions = useMemo(() => {
    const values = Object.values(editedProfile?.ubicaciones || {})
      .map((item) => String(item || '').trim())
      .filter(Boolean);

    const uniqueValues = Array.from(new Set(values));
    const current = String(editedProfile?.disponible_hoy_en || '').trim();

    if (current && !uniqueValues.includes(current)) {
      uniqueValues.push(current);
    }

    return uniqueValues;
  }, [editedProfile]);

  const visibleServicios = useMemo(
    () => Object.values(editedProfile?.servicios || {}).filter(Boolean),
    [editedProfile]
  );

  const visibleUbicaciones = useMemo(
    () => Object.values(editedProfile?.ubicaciones || {}).filter(Boolean),
    [editedProfile]
  );

  const visibleFotos = useMemo(() => normalizeMediaPhotos(editedProfile?.fotos || {}).filter((foto) => foto?.url), [editedProfile?.fotos]);

  const descriptionText = String(editedProfile?.descripcion || '').trim();
  const shouldCollapseDescription = descriptionText.length > DESCRIPTION_PREVIEW_LIMIT || descriptionText.split(/\r?\n/).length > 3;

  const handleInputChange = (field, value) => {
    setEditedProfile((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleMapValueChange = (parent, key, value) => {
    setEditedProfile((current) => ({
      ...current,
      [parent]: {
        ...(current[parent] || {}),
        [key]: value,
      },
    }));
  };

  const removeMapItem = (parent, key) => {
    setEditedProfile((current) => {
      const nextItems = { ...(current[parent] || {}) };
      delete nextItems[key];

      return {
        ...current,
        [parent]: nextItems,
        ...(parent === 'ubicaciones' && current.disponible_hoy_en === current[parent]?.[key]
          ? { disponible_hoy_en: '' }
          : {}),
      };
    });
  };

  const addMapItem = (parent, prefix, initialValue) => {
    const nextKey = `${prefix}${Object.keys(editedProfile?.[parent] || {}).length + 1}`;
    setEditedProfile((current) => ({
      ...current,
      [parent]: {
        ...(current[parent] || {}),
        [nextKey]: initialValue,
      },
    }));
  };

  const cleanStringMap = (map) =>
    Object.entries(map || {}).reduce((accumulator, [key, value]) => {
      const nextValue = String(value || '').trim();
      if (nextValue) {
        accumulator[key] = nextValue;
      }
      return accumulator;
    }, {});

  const cleanFotos = (fotos) =>
    Object.entries(fotos || {}).reduce((accumulator, [key, foto]) => {
      const url = String(foto?.url || '').trim();

      if (url) {
        accumulator[key] = {
          titulo: String(foto?.titulo || '').trim(),
          url,
          fecha: foto?.fecha || new Date().toISOString().split('T')[0],
        };
      }

      return accumulator;
    }, {});

  const buildProfilePayload = () => {
    const ubicaciones = cleanStringMap(editedProfile.ubicaciones);
    const disponibleHoy = locationOptions.includes(editedProfile.disponible_hoy_en) ? editedProfile.disponible_hoy_en : '';

    return {
      ...editedProfile,
      estado_texto: String(editedProfile.estado_texto || '').trim(),
      fotos: cleanFotos(editedProfile.fotos),
      servicios: cleanStringMap(editedProfile.servicios),
      ubicaciones,
      disponible_hoy_en: disponibleHoy,
      verificado: profile?.verificado === true,
    };
  };

  const saveProfile = async ({ closeModalOnSave = false, showAlert = true, includeStatusTimestamp = false } = {}) => {
    setSaving(true);

    try {
      const profileRef = ref(db, `perfil/${user.uid}`);
      const dataToSave = {
        ...buildProfilePayload(),
        ...(includeStatusTimestamp ? { estado_actualizado_en: new Date().toISOString() } : {}),
      };

      await update(profileRef, dataToSave);
      onUpdate(dataToSave);

      if (closeModalOnSave) {
        setModalOpen(false);
      }

      if (showAlert) {
        alert('Perfil guardado exitosamente');
      }
    } catch (error) {
      console.error('Error guardando:', error);
      alert(`Error al guardar el perfil: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async () => {
    await saveProfile({ closeModalOnSave: true, showAlert: true });
  };

  const selectProfilePhoto = (photoUrl) => {
    handleInputChange('foto_perfil', photoUrl);
    setPhotoPickerOpen(false);
  };

  const renderNombreSection = () => (
    <div className="perfil-section-content">
      <div className="form-group">
        <label>Nombre o alias</label>
        <input type="text" value={editedProfile.nombre_completo || ''} onChange={(event) => handleInputChange('nombre_completo', event.target.value)} />
      </div>
      <div className="form-group perfil-form-full">
        <label>Descripcion</label>
        <textarea rows="4" value={editedProfile.descripcion || ''} onChange={(event) => handleInputChange('descripcion', event.target.value)} />
      </div>
    </div>
  );

  const renderServiciosSection = () => (
    <div className="perfil-section-content perfil-form-full">
      <div className="perfil-subheader">
        <h4>Servicios</h4>
        <button type="button" className="secondary-button" onClick={() => addMapItem('servicios', 's', '')}>
          Agregar servicio
        </button>
      </div>
      <div className="perfil-stack-list">
        {Object.entries(editedProfile.servicios || {}).map(([key, servicio]) => (
          <div key={key} className="perfil-inline-grid single-line compact-action-row">
            <input type="text" placeholder="Servicio" value={servicio || ''} onChange={(event) => handleMapValueChange('servicios', key, event.target.value)} />
            <button type="button" className="secondary-button perfil-inline-delete-button" onClick={() => removeMapItem('servicios', key)} aria-label="Eliminar servicio" title="Eliminar servicio">
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderUbicacionesSection = () => (
    <div className="perfil-section-content perfil-form-full">
      <div className="perfil-subheader">
        <h4>Ubicaciones</h4>
        <button type="button" className="secondary-button" onClick={() => addMapItem('ubicaciones', 'u', '')}>
          Agregar ubicacion
        </button>
      </div>
      <div className="perfil-stack-list">
        {Object.entries(editedProfile.ubicaciones || {}).map(([key, ubicacion]) => (
          <div key={key} className="perfil-inline-grid single-line">
            <input type="text" placeholder="Ubicacion" value={ubicacion || ''} onChange={(event) => handleMapValueChange('ubicaciones', key, event.target.value)} />
            <button type="button" className="secondary-button" onClick={() => removeMapItem('ubicaciones', key)}>
              Quitar
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderModalSection = () => {
    switch (activeSection) {
      case 'nombre':
        return renderNombreSection();
      case 'servicios':
        return renderServiciosSection();
      case 'ubicaciones':
        return renderUbicacionesSection();
      default:
        return null;
    }
  };

  return (
    <div className="perfil-app">
      <section className="perfil-hero-card">
        <div className="perfil-hero-main">
          <div className="perfil-hero-identity">
            <div className="perfil-avatar-wrap">
              {editedProfile.foto_perfil ? (
                <button type="button" className="perfil-avatar-button" onClick={() => setPhotoPickerOpen(true)}>
                  <img src={editedProfile.foto_perfil} alt={editedProfile.nombre_completo || 'Perfil'} className="perfil-avatar" />
                </button>
              ) : (
                <button type="button" className="perfil-avatar-button" onClick={() => setPhotoPickerOpen(true)}>
                  <div className="perfil-avatar placeholder">Sin foto</div>
                </button>
              )}
              <span className={`perfil-verify-pill ${editedProfile.verificado ? 'verified' : ''}`}>
                <FaCheckCircle /> {editedProfile.verificado ? 'Verificado' : 'No verificado'}
              </span>
            </div>

            <div className="perfil-hero-heading">
              <h3>{editedProfile.nombre_completo || 'Sin nombre'}</h3>
              <p className="perfil-username">@{editedProfile.nombre_usuario || 'usuario'}</p>
            </div>
          </div>

          <div className="perfil-hero-copy">
            <div className="perfil-description-block">
              <p className={`perfil-description-copy ${descriptionExpanded ? 'expanded' : 'collapsed'}`.trim()}>
                {descriptionText || 'Todavia no has agregado una descripcion.'}
              </p>
              {shouldCollapseDescription && (
                <button
                  type="button"
                  className="perfil-description-toggle"
                  onClick={() => setDescriptionExpanded((current) => !current)}
                >
                  {descriptionExpanded ? 'Ver menos' : 'Ver mas'}
                </button>
              )}
            </div>
            <div className="perfil-hero-actions">
              <button type="button" className="primary-button" onClick={() => setModalOpen(true)}>
                <FaEdit /> Editar perfil
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="perfil-summary-grid">
        <article className="perfil-summary-card">
          <h4>Datos de cuenta</h4>
          <p><strong>Email:</strong> {editedProfile.email || 'Sin correo'}</p>
          <p><strong>Rol:</strong> {editedProfile.rol || 'usuario'}</p>
          <p><strong>Disponible hoy:</strong> {editedProfile.disponible_hoy_en || 'Sin ubicacion'}</p>
        </article>

        <article className="perfil-summary-card">
          <h4>Servicios</h4>
          {!visibleServicios.length && <p>Sin servicios registrados.</p>}
          {!!visibleServicios.length && (
            <div className="perfil-chip-list">
              {visibleServicios.map((item) => (
                <span key={item} className="perfil-chip">{item}</span>
              ))}
            </div>
          )}
        </article>

        <article className="perfil-summary-card">
          <h4>Ubicaciones</h4>
          {!visibleUbicaciones.length && <p>Sin ubicaciones registradas.</p>}
          {!!visibleUbicaciones.length && (
            <div className="perfil-chip-list">
              {visibleUbicaciones.map((item) => (
                <span key={item} className="perfil-chip">{item}</span>
              ))}
            </div>
          )}
        </article>
      </section>

      {modalOpen && (
        <div className="perfil-modal-overlay" role="dialog" aria-modal="true">
          <div className="perfil-modal">
            <div className="perfil-modal-header">
              <div>
                <h4>Editar perfil</h4>
                <p>Actualiza tu perfil por secciones.</p>
              </div>
            </div>

            <div className="perfil-menu-grid">
              {SECTION_ITEMS.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  type="button"
                  className={`perfil-icon-tile ${activeSection === id ? 'active' : ''}`}
                  onClick={() => setActiveSection(id)}
                >
                  <span className="perfil-icon-circle">
                    <Icon />
                  </span>
                  <span className="perfil-icon-label">{label}</span>
                </button>
              ))}
            </div>

            <div className="perfil-modal-content">{renderModalSection()}</div>

            <div className="perfil-modal-actions">
              <button type="button" className="primary-button" onClick={handleSave} disabled={saving}>
                <FaSave /> {saving ? 'Guardando...' : 'Guardar'}
              </button>
              <button type="button" className="secondary-button" onClick={() => !saving && setModalOpen(false)} disabled={saving}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {photoPickerOpen && (
        <div className="perfil-modal-overlay" role="dialog" aria-modal="true">
          <div className="perfil-modal perfil-photo-picker-modal">
            <div className="perfil-modal-header">
              <div>
                <h4>Selecciona tu foto de perfil</h4>
                <p>Elige una de las fotos que ya subiste en tu galeria.</p>
              </div>
              <button type="button" className="modal-close-button" onClick={() => !saving && setPhotoPickerOpen(false)} disabled={saving}>
                Cerrar
              </button>
            </div>

            {!visibleFotos.length && (
              <div className="perfil-photo-picker-empty">
                <p>Todavia no tienes fotos subidas. Ve a Fotos para cargar una primero.</p>
              </div>
            )}

            {!!visibleFotos.length && (
              <div className="perfil-photo-picker-grid">
                {visibleFotos.map((foto) => (
                  <button
                    key={foto.id}
                    type="button"
                    className={`perfil-photo-picker-item ${editedProfile.foto_perfil === foto.url ? 'active' : ''}`}
                    onClick={() => selectProfilePhoto(foto.url)}
                  >
                    <img src={foto.url} alt={foto.titulo || 'Foto'} />
                    <strong>{foto.titulo || 'Sin titulo'}</strong>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PerfilApp;
