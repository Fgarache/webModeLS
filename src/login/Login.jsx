import { useState } from 'react';
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
      <h2>{config.title}</h2>
      <div className="login-form">
        <button
          className="google-button"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          {loading ? 'Cargando...' : config.googleButtonText}
        </button>
        <p className="login-hint">{config.hintText}</p>
        {errorMessage && <p className="login-error">{errorMessage}</p>}
        <div className="login-actions">
          <button className="secondary-button" type="button" onClick={onCancel}>
            {config.cancelButtonText}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Login;
