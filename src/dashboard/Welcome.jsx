import { useEffect, useMemo, useState } from 'react';
import { FaCheckCircle, FaPen } from 'react-icons/fa';
import { ref, update } from 'firebase/database';
import { db } from '../auth/firebaseConfig.js';
import AppsLauncher from './AppsLauncher.jsx';
import AgendaApp from './apps/agenda/AgendaApp.jsx';
import PerfilApp from './apps/perfil/PerfilApp.jsx';
import AgendaToursApp from './apps/agenda-tours/AgendaToursApp.jsx';
import MediaApp from './apps/media/MediaApp.jsx';
import RedesApp from './apps/redes/RedesApp.jsx';
import RifasApp from './apps/rifas/RifasApp.jsx';
import AppLoader from '../components/AppLoader.jsx';
import './dashboard.css';

const DESCRIPTION_PREVIEW_LIMIT = 180;
const SUPPORT_WHATSAPP_NUMBER = '50248037777';
const SUPPORT_REFERENCE_EMAIL = 'velaxmia@gail.com';
const STATUS_MAX_AGE = 24 * 60 * 60 * 1000;

function getVisibleStatusText(profile) {
  const statusText = String(profile?.estado_texto || '').trim();
  const updatedAt = profile?.estado_actualizado_en;

  if (!statusText || !updatedAt) {
    return '';
  }

  const timestamp = new Date(updatedAt).getTime();
  if (Number.isNaN(timestamp)) {
    return '';
  }

  return Date.now() - timestamp <= STATUS_MAX_AGE ? statusText : '';
}

function renderFormattedText(text) {
  return String(text || '')
    .split(/\r?\n/)
    .map((line, lineIndex) => {
      const parts = line.split(/(\*\*.*?\*\*)/g).filter(Boolean);

      return (
        <span key={`line-${lineIndex}`} className="formatted-text-line">
          {parts.map((part, partIndex) => {
            const boldMatch = part.match(/^\*\*(.*)\*\*$/);
            if (boldMatch) {
              return <strong key={`part-${lineIndex}-${partIndex}`}>{boldMatch[1]}</strong>;
            }

            return <span key={`part-${lineIndex}-${partIndex}`}>{part}</span>;
          })}
        </span>
      );
    });
}

function Welcome({ config, user, profile, initialApp = null, onAppRouteChange, onLogout }) {
  const [currentProfile, setCurrentProfile] = useState(profile);
  const [activeApp, setActiveApp] = useState(initialApp);
  const [headerModalOpen, setHeaderModalOpen] = useState(false);
  const [savingHeader, setSavingHeader] = useState(false);
  const [headerDraft, setHeaderDraft] = useState({ estado_texto: '', disponible_hoy_en: '' });
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const isFullAppView = activeApp === 'perfil' || activeApp === 'agenda' || activeApp === 'agenda-tours' || activeApp === 'media' || activeApp === 'redes' || activeApp === 'rifas';

  useEffect(() => {
    setCurrentProfile(profile);
    setDescriptionExpanded(false);
    setHeaderDraft({
      estado_texto: getVisibleStatusText(profile),
      disponible_hoy_en: profile?.disponible_hoy_en || '',
    });
  }, [profile]);

  useEffect(() => {
    setActiveApp(initialApp);
  }, [initialApp]);

  const availableLocations = useMemo(() => {
    const values = Object.values(currentProfile?.ubicaciones || {})
      .map((item) => String(item || '').trim())
      .filter(Boolean);

    const uniqueValues = Array.from(new Set(values));
    const current = String(currentProfile?.disponible_hoy_en || '').trim();

    if (current && !uniqueValues.includes(current)) {
      uniqueValues.push(current);
    }

    return uniqueValues;
  }, [currentProfile]);

  const visibleStatusText = useMemo(() => {
    return getVisibleStatusText(currentProfile);
  }, [currentProfile?.estado_actualizado_en, currentProfile?.estado_texto]);

  const descriptionText = String(currentProfile?.descripcion || config.message || '').trim();
  const shouldCollapseDescription = descriptionText.length > DESCRIPTION_PREVIEW_LIMIT || descriptionText.split(/\r?\n/).length > 3;
  const supportWhatsappLink = `https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, quiero sugerir cambios o reportar un error. Referencia: ${SUPPORT_REFERENCE_EMAIL}`)}`;

  if (!profile || !user) {
    return <AppLoader message="Cargando perfil" detail="Preparando tu panel personal..." />;
  }

  const handleProfileUpdate = (updatedProfile) => {
    setCurrentProfile(updatedProfile);
    setHeaderDraft({
      estado_texto: getVisibleStatusText(updatedProfile),
      disponible_hoy_en: updatedProfile?.disponible_hoy_en || '',
    });
  };

  const handleSelectApp = (appId) => {
    setActiveApp(appId);
    onAppRouteChange?.(appId);
  };

  const handleBack = () => {
    setActiveApp(null);
    onAppRouteChange?.(null);
  };

  const openHeaderModal = () => {
    setHeaderDraft({
      estado_texto: getVisibleStatusText(currentProfile),
      disponible_hoy_en: currentProfile?.disponible_hoy_en || '',
    });
    setHeaderModalOpen(true);
  };

  const closeHeaderModal = () => {
    if (savingHeader) {
      return;
    }

    setHeaderModalOpen(false);
  };

  const handleHeaderDraftChange = (field, value) => {
    setHeaderDraft((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const saveHeaderProfile = async () => {
    if (!user?.uid) {
      return;
    }

    setSavingHeader(true);

    try {
      const payload = {
        estado_texto: String(headerDraft.estado_texto || '').trim(),
        estado_actualizado_en: new Date().toISOString(),
        disponible_hoy_en: String(headerDraft.disponible_hoy_en || '').trim(),
      };

      await update(ref(db, `perfil/${user.uid}`), payload);
      setCurrentProfile((current) => ({
        ...current,
        ...payload,
      }));
      setHeaderModalOpen(false);
    } catch (error) {
      console.error('Error guardando encabezado del perfil:', error);
    } finally {
      setSavingHeader(false);
    }
  };

  const handleAvailabilityChange = async (value) => {
    if (!user?.uid) {
      return;
    }

    const nextValue = String(value || '').trim();
    setCurrentProfile((current) => ({
      ...current,
      disponible_hoy_en: nextValue,
    }));

    try {
      await update(ref(db, `perfil/${user.uid}`), {
        disponible_hoy_en: nextValue,
      });
    } catch (error) {
      console.error('Error guardando disponibilidad actual:', error);
    }
  };

  const handleDisponibilidadToggle = async (value) => {
    if (!user?.uid) {
      return;
    }

    const nextValue = value === 'true';
    setCurrentProfile((current) => ({
      ...current,
      disponible: nextValue,
    }));

    try {
      await update(ref(db, `perfil/${user.uid}`), {
        disponible: nextValue,
      });
    } catch (error) {
      console.error('Error guardando disponibilidad general:', error);
    }
  };

  const renderApp = () => {
    switch (activeApp) {
      case 'perfil':
        return (
          <div className="app-content-wrapper">
            <PerfilApp user={user} profile={currentProfile} onUpdate={handleProfileUpdate} />
          </div>
        );
      case 'agenda':
        return (
          <div className="app-content-wrapper">
            <AgendaApp />
          </div>
        );
      case 'agenda-tours':
        return (
          <div className="app-content-wrapper">
            <AgendaToursApp />
          </div>
        );
      case 'media':
        return (
          <div className="app-content-wrapper">
            <MediaApp user={user} profile={currentProfile} onUpdateProfile={handleProfileUpdate} />
          </div>
        );
      case 'redes':
        return (
          <div className="app-content-wrapper">
            <RedesApp user={user} profile={currentProfile} onUpdateProfile={handleProfileUpdate} />
          </div>
        );
      case 'rifas':
        return (
          <div className="app-content-wrapper">
            <RifasApp />
          </div>
        );
      default:
        return <AppsLauncher role={currentProfile.rol} onSelectApp={handleSelectApp} />;
    }
  };

  return (
    <section className="welcome-screen">
      {!isFullAppView && (
        <div className="welcome-header">
          <div className="header-content">
            <div className="profile-header-block">
              {currentProfile.foto_perfil && (
                <img src={currentProfile.foto_perfil} alt="Foto de perfil" className="profile-header-photo" />
              )}
              <div className="profile-header-identity">
                <div className="header-profile-name-row">
                  <strong className="header-profile-name">{currentProfile.nombre_completo}</strong>
                  <span className={`header-verified ${currentProfile.verificado ? 'verified' : 'unverified'}`}>
                    <FaCheckCircle />
                  </span>
                </div>
                <div className="header-profile-meta">
                  <span className="header-role inline">{currentProfile.rol}</span>
                  <span className="header-username">@{currentProfile.nombre_usuario || 'usuario'}</span>
                </div>
              </div>
            </div>
            <div className="header-info">
              <div className="header-summary-row">
                <div className="header-status-row">
                  <span className="header-status-bubble">{visibleStatusText || 'Sin estado activo'}</span>
                  <button
                    type="button"
                    className="header-edit-icon"
                    onClick={openHeaderModal}
                    aria-label="Editar estado"
                    title="Editar estado"
                  >
                    <FaPen />
                  </button>
                </div>
                <div className="header-availability">
                  <div className="header-availability-grid">
                    <div>
                      <label htmlFor="header_disponible_hoy_inline">Disponible en</label>
                      <select
                        id="header_disponible_hoy_inline"
                        value={currentProfile.disponible_hoy_en || ''}
                        onChange={(event) => handleAvailabilityChange(event.target.value)}
                      >
                        <option value="">Sin ubicacion</option>
                        {availableLocations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="header-availability-toggle-wrap">
                      <label htmlFor="header_disponible_toggle">Disponible</label>
                      <button
                        id="header_disponible_toggle"
                        type="button"
                        className={`header-availability-toggle ${currentProfile.disponible ? 'active' : 'inactive'}`}
                        onClick={() => handleDisponibilidadToggle(currentProfile.disponible ? 'false' : 'true')}
                        aria-pressed={currentProfile.disponible}
                      >
                        <span className="header-availability-toggle-track">
                          <span className="header-availability-toggle-thumb" />
                        </span>
                        <span className="header-availability-toggle-label">
                          {currentProfile.disponible ? 'Si' : 'No'}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-description-block">
                <div className={`header-description-copy ${descriptionExpanded ? 'expanded' : 'collapsed'}`.trim()}>
                  {renderFormattedText(descriptionText)}
                </div>
                {shouldCollapseDescription && (
                  <button
                    type="button"
                    className="header-description-toggle"
                    onClick={() => setDescriptionExpanded((current) => !current)}
                  >
                    {descriptionExpanded ? 'Ver menos' : 'Ver mas'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {headerModalOpen && (
        <div className="header-modal-overlay" role="dialog" aria-modal="true">
          <div className="header-modal-card">
            <div className="header-modal-top">
              <div>
                <h3>Editar estado</h3>
                <p>Actualiza tu estado visible y donde estas disponible hoy.</p>
              </div>
            </div>

            <div className="header-modal-form">
              <div className="form-group">
                <label htmlFor="header_estado_texto">Estado</label>
                <textarea
                  id="header_estado_texto"
                  rows="3"
                  value={headerDraft.estado_texto}
                  onChange={(event) => handleHeaderDraftChange('estado_texto', event.target.value)}
                  disabled={savingHeader}
                />
              </div>
            </div>

            <div className="header-modal-actions">
              <button type="button" className="primary-button" onClick={saveHeaderProfile} disabled={savingHeader}>
                {savingHeader ? 'Guardando...' : 'Guardar'}
              </button>
              <button type="button" className="secondary-button" onClick={closeHeaderModal} disabled={savingHeader}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {renderApp()}

      {!isFullAppView && (
        <div className="logout-section">
          <a className="support-link" href={supportWhatsappLink} target="_blank" rel="noreferrer">
            Sugerir cambios o reportar error
          </a>
          <button className="secondary-button" onClick={onLogout}>
            {config.logoutButtonText}
          </button>
        </div>
      )}
    </section>
  );
}

export default Welcome;
