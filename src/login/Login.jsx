import { useState } from 'react';
import { FaArrowLeft, FaGoogle, FaMapMarkedAlt } from 'react-icons/fa';
import './login.css';

function Login({ config, onLogin, onCancel, errorMessage }) {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await onLogin();
    } catch (error) {
      console.error('Error en login con Google:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="login-screen">
      <div className="login-shell-card">
        <div className="login-showcase">
          <img src="/icons/logo.png" alt="Site Mode LS" className="login-brand-logo" />
          <div className="login-badge">Acceso seguro</div>
          <h2>{config.title}</h2>
          <p className="login-lead">
            Gestiona tu perfil, tus tours y tus rifas desde un acceso unico con tu cuenta de Google.
          </p>

          <div className="login-feature-list">
            <div className="login-feature-item">
              <span className="login-feature-icon"><FaMapMarkedAlt /></span>
              <div>
                <strong>Ubicacion y disponibilidad</strong>
                <p>Actualiza tu estado visible y donde estas disponible hoy.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="login-panel">
          <div className="login-panel-top">
            <img src="/icons/logoSmall.png" alt="Site Mode LS" className="login-panel-logo" />
            <p className="login-kicker">Google Sign-In</p>
            <h3>Continua con tu cuenta</h3>
            <p className="login-hint">{config.hintText}</p>
          </div>

          <div className="login-form">
            <button className="google-button" onClick={handleGoogleLogin} disabled={loading}>
              <span className="google-button-icon"><FaGoogle /></span>
              <span>{loading ? 'Cargando...' : config.googleButtonText}</span>
            </button>

            {errorMessage && <p className="login-error">{errorMessage}</p>}

            <div className="login-actions">
              <button className="secondary-button login-back-button" type="button" onClick={onCancel}>
                <FaArrowLeft /> {config.cancelButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
