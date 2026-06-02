import { useEffect, useMemo, useState } from 'react';
import { FaCheckCircle, FaSave } from 'react-icons/fa';
import { ref, update } from 'firebase/database';
import { db } from '../../../auth/firebaseConfig.js';
import { normalizeMediaPhotos } from '../media/media.utils.js';
import './perfil.css';

function PerfilApp({ user, profile, onUpdate }) {
  const [currentProfile, setCurrentProfile] = useState(profile);
  const [draftProfile, setDraftProfile] = useState({ nombre_completo: '', descripcion: '' });
  const [unsavedPromptOpen, setUnsavedPromptOpen] = useState(false);
  const [photoPickerOpen, setPhotoPickerOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setCurrentProfile({
      ...profile,
      estado_texto: profile?.estado_texto || '',
      verificado: profile?.verificado === true,
    });
    setDraftProfile({
      nombre_completo: profile?.nombre_completo || '',
      descripcion: profile?.descripcion || '',
    });
    setUnsavedPromptOpen(false);
  }, [profile]);

  const visibleFotos = useMemo(() => normalizeMediaPhotos(currentProfile?.fotos || {}).filter((foto) => foto?.url), [currentProfile?.fotos]);

  const hasDraftChanges =
    String(draftProfile.nombre_completo || '').trim() !== String(currentProfile?.nombre_completo || '').trim() ||
    String(draftProfile.descripcion || '').trim() !== String(currentProfile?.descripcion || '').trim();

  const handleDraftChange = (field, value) => {
    setDraftProfile((current) => ({
      ...current,
      [field]: value,
    }));
  };

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
    return {
      ...currentProfile,
      nombre_completo: String(draftProfile.nombre_completo || '').trim(),
      descripcion: String(draftProfile.descripcion || '').trim(),
      estado_texto: String(currentProfile.estado_texto || '').trim(),
      fotos: cleanFotos(currentProfile.fotos),
      verificado: profile?.verificado === true,
    };
  };

  const saveProfile = async ({ showAlert = true, includeStatusTimestamp = false } = {}) => {
    setSaving(true);

    try {
      const profileRef = ref(db, `perfil/${user.uid}`);
      const dataToSave = {
        ...buildProfilePayload(),
        ...(includeStatusTimestamp ? { estado_actualizado_en: new Date().toISOString() } : {}),
      };

      await update(profileRef, dataToSave);
      onUpdate(dataToSave);

      setCurrentProfile(dataToSave);
      setUnsavedPromptOpen(false);

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
    await saveProfile({ showAlert: true });
  };

  const requestDiscardChanges = () => {
    if (hasDraftChanges) {
      setUnsavedPromptOpen(true);
      return;
    }

    setDraftProfile({
      nombre_completo: currentProfile?.nombre_completo || '',
      descripcion: currentProfile?.descripcion || '',
    });
  };

  const confirmDiscardChanges = () => {
    setDraftProfile({
      nombre_completo: currentProfile?.nombre_completo || '',
      descripcion: currentProfile?.descripcion || '',
    });
    setUnsavedPromptOpen(false);
  };

  const selectProfilePhoto = async (photoUrl) => {
    if (!user?.uid) {
      return;
    }

    setSaving(true);

    try {
      const nextProfile = {
        ...currentProfile,
        foto_perfil: photoUrl,
      };

      await update(ref(db, `perfil/${user.uid}`), { foto_perfil: photoUrl });
      setCurrentProfile(nextProfile);
      onUpdate?.(nextProfile);
      setPhotoPickerOpen(false);
    } catch (error) {
      console.error('Error guardando foto de perfil:', error);
      alert(`Error al guardar la foto de perfil: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="perfil-app">
      <section className="perfil-hero-card">
        <div className="perfil-hero-main">
          <div className="perfil-hero-identity">
            <div className="perfil-avatar-wrap">
              {currentProfile.foto_perfil ? (
                <button type="button" className="perfil-avatar-button" onClick={() => setPhotoPickerOpen(true)}>
                  <img src={currentProfile.foto_perfil} alt={currentProfile.nombre_completo || 'Perfil'} className="perfil-avatar" />
                </button>
              ) : (
                <button type="button" className="perfil-avatar-button" onClick={() => setPhotoPickerOpen(true)}>
                  <div className="perfil-avatar placeholder">Sin foto</div>
                </button>
              )}
              <button type="button" className="perfil-photo-link" onClick={() => setPhotoPickerOpen(true)}>
                Cambiar foto de perfil
              </button>
            </div>

            <div className="perfil-hero-copy">
              <div className="perfil-hero-heading-row">
                <h3>{currentProfile.nombre_completo || 'Sin nombre'}</h3>
                {currentProfile.verificado && (
                  <span className="perfil-verify-icon" aria-label="Verificado" title="Verificado">
                    <FaCheckCircle />
                  </span>
                )}
              </div>
              <p className="perfil-username">@{currentProfile.nombre_usuario || 'usuario'}</p>
              <div className="perfil-hero-meta-row">
                <p><strong>Email:</strong> {currentProfile.email || 'Sin correo'}</p>
                <p><strong>Rol:</strong> {currentProfile.rol || 'usuario'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="perfil-inline-editor-shell">
          <div className="perfil-inline-editor">
            <div className="perfil-section-content">
              <div className="form-group">
                <label>Nombre o alias</label>
                <input
                  type="text"
                  value={draftProfile.nombre_completo || ''}
                  onChange={(event) => handleDraftChange('nombre_completo', event.target.value)}
                  disabled={saving}
                />
              </div>
              <div className="form-group perfil-form-full">
                <label>Informacion</label>
                <textarea
                  rows="4"
                  value={draftProfile.descripcion || ''}
                  onChange={(event) => handleDraftChange('descripcion', event.target.value)}
                  disabled={saving}
                />
              </div>
            </div>

            <div className="perfil-inline-editor-actions">
              <button type="button" className="primary-button" onClick={handleSave} disabled={saving || !hasDraftChanges}>
                <FaSave /> {saving ? 'Guardando...' : 'Guardar cambios'}
              </button>
              <button type="button" className="secondary-button" onClick={requestDiscardChanges} disabled={saving}>
                Descartar cambios
              </button>
            </div>
          </div>

        </div>
      </section>

      {unsavedPromptOpen && (
        <div className="perfil-modal-overlay" role="dialog" aria-modal="true">
          <div className="perfil-modal perfil-unsaved-modal">
            <div className="perfil-modal-header">
              <div>
                <h4>Cambios sin guardar</h4>
                <p>¿Quieres guardar los cambios antes de salir?</p>
              </div>
            </div>

            <div className="perfil-modal-actions">
              <button type="button" className="primary-button" onClick={handleSave} disabled={saving}>
                <FaSave /> Guardar cambios
              </button>
              <button type="button" className="secondary-button" onClick={confirmDiscardChanges} disabled={saving}>
                No guardar
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
                    className={`perfil-photo-picker-item ${currentProfile.foto_perfil === foto.url ? 'active' : ''}`}
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
