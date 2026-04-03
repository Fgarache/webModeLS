import { useState } from 'react';
import AppsLauncher from './AppsLauncher.jsx';
import PerfilApp from './apps/perfil/PerfilApp.jsx';
import AgendaToursApp from './apps/agenda-tours/AgendaToursApp.jsx';
import RifasApp from './apps/rifas/RifasApp.jsx';
import './dashboard.css';

function Welcome({ config, user, profile, onLogout }) {
  const [currentProfile, setCurrentProfile] = useState(profile);
  const [activeApp, setActiveApp] = useState(null);

  if (!profile || !user) {
    return <div>Cargando perfil...</div>;
  }

  const handleProfileUpdate = (updatedProfile) => {
    setCurrentProfile(updatedProfile);
  };

  const handleSelectApp = (appId) => {
    setActiveApp(appId);
  };

  const handleBack = () => {
    setActiveApp(null);
  };

  const renderApp = () => {
    switch (activeApp) {
      case 'perfil':
        return (
          <div className="app-content-wrapper">
            <button className="back-button" onClick={handleBack}>← Volver</button>
            <PerfilApp user={user} profile={currentProfile} onUpdate={handleProfileUpdate} />
          </div>
        );
      case 'agenda-tours':
        return (
          <div className="app-content-wrapper">
            <button className="back-button" onClick={handleBack}>← Volver</button>
            <AgendaToursApp />
          </div>
        );
      case 'rifas':
        return (
          <div className="app-content-wrapper">
            <button className="back-button" onClick={handleBack}>← Volver</button>
            <RifasApp />
          </div>
        );
      default:
        return <AppsLauncher role={currentProfile.rol} onSelectApp={handleSelectApp} />;
    }
  };

  return (
    <section className="welcome-screen">
      <div className="welcome-header">
        <div className="header-content">
          {currentProfile.foto_perfil && (
            <img src={currentProfile.foto_perfil} alt="Foto de perfil" className="profile-header-photo" />
          )}
          <div className="header-info">
            <h2>{config.title}</h2>
            <p className="header-name"><strong>{currentProfile.nombre_completo}</strong></p>
            <p className="header-role">Rol: <span>{currentProfile.rol}</span></p>
          </div>
        </div>
        <p>{config.message}</p>
      </div>

      {renderApp()}

      <div className="logout-section">
        <button className="secondary-button" onClick={onLogout}>
          {config.logoutButtonText}
        </button>
      </div>
    </section>
  );
}

export default Welcome;
