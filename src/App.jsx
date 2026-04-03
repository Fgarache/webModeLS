import { useState } from 'react';
import config from './config.js';
import Home from './home/Home.jsx';
import Login from './login/Login.jsx';
import Welcome from './dashboard/Welcome.jsx';
import { AuthProvider, useAuth } from './auth/AuthContext.jsx';

function AppInner() {
  const { user, profile, loading, loginWithGoogle, logout } = useAuth();
  const [activePage, setActivePage] = useState('home');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNavigate = (page) => {
    setErrorMessage('');
    setActivePage(page);
  };

  const handleLogin = async () => {
    try {
      setErrorMessage('');
      await loginWithGoogle();
    } catch (error) {
      setErrorMessage(error.message || 'Error al iniciar sesión con Google.');
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (user && profile) {
    return (
      <div className="app-shell">
        <header className="app-header">
          <h1>{config.app.title}</h1>
        </header>
        <main className="app-main">
          <Welcome config={config.welcome} user={user} profile={profile} onLogout={() => { logout(); setActivePage('home'); }} />
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>{config.app.title}</h1>
      </header>
      <main className="app-main">
        {activePage === 'home' && <Home config={config.home} onNavigate={handleNavigate} />}
        {activePage === 'login' && (
          <Login
            config={config.login}
            onLogin={handleLogin}
            onCancel={() => handleNavigate('home')}
            errorMessage={errorMessage}
          />
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  );
}

export default App;
