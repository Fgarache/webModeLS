import { useEffect, useMemo, useState } from 'react';
import config from './config.js';
import Home from './home/Home.jsx';
import Login from './login/Login.jsx';
import Welcome from './dashboard/Welcome.jsx';
import PublicProfilePage from './public-profile/PublicProfilePage.jsx';
import { AuthProvider, useAuth } from './auth/AuthContext.jsx';

const PATH_TO_APP = {
  '/perfil': 'perfil',
  '/agenda': 'agenda',
  '/tours': 'agenda-tours',
  '/rifas': 'rifas',
  '/fotos': 'media',
  '/redes': 'redes',
};

const APP_TO_PATH = {
  perfil: '/perfil',
  agenda: '/agenda',
  'agenda-tours': '/tours',
  rifas: '/rifas',
  media: '/fotos',
  redes: '/redes',
};

function getRouteState(pathname) {
  if (pathname === '/login') {
    return { page: 'login', app: null, username: '' };
  }

  if (PATH_TO_APP[pathname]) {
    return { page: 'login', app: PATH_TO_APP[pathname], username: '' };
  }

  const normalizedPath = String(pathname || '/').replace(/\/+$/, '') || '/';
  const segments = normalizedPath.split('/').filter(Boolean);

  if (segments.length === 1) {
    const rawUsername = decodeURIComponent(segments[0]);
    const normalizedUsername = rawUsername.startsWith('@') ? rawUsername.slice(1) : rawUsername;
    return { page: 'public-profile', app: null, username: normalizedUsername };
  }

  return { page: 'home', app: null, username: '' };
}

function AppInner() {
  const { user, profile, loading, loginWithGoogle, logout } = useAuth();
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname || '/');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const routeState = useMemo(() => getRouteState(currentPath), [currentPath]);

  const navigateTo = (path) => {
    if (window.location.pathname === path) {
      setCurrentPath(path);
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const handleNavigate = (page) => {
    setErrorMessage('');
    navigateTo(page === 'login' ? '/login' : '/');
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

  const handleAuthenticatedBack = () => {
    if (routeState.app) {
      navigateTo('/');
      return;
    }

    navigateTo('/');
  };

  if (user && profile) {
    return (
      <div className="app-shell">
        <header className="app-header auth-app-header">
          <div className="auth-navbar">
            <div className="auth-navbar-brand">
              <img src="/icons/logo.png" alt="Site Mode LS" className="auth-navbar-logo" />
              <h1>{config.app.title}</h1>
            </div>
            <div className="auth-navbar-side right">
              {routeState.app && (
                <button type="button" className="auth-nav-text-button" onClick={handleAuthenticatedBack}>
                  Volver
                </button>
              )}
            </div>
          </div>
        </header>
        <main className="app-main">
          <Welcome
            config={config.welcome}
            user={user}
            profile={profile}
            initialApp={routeState.app}
            onAppRouteChange={(appId) => navigateTo(appId ? APP_TO_PATH[appId] || '/' : '/')}
            onLogout={() => {
              logout();
              navigateTo('/');
            }}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-brand">
          <img src="/icons/logo.png" alt="Site Mode LS" className="app-brand-logo" />
          <h1>{config.app.title}</h1>
        </div>
      </header>
      <main className="app-main">
        {routeState.page === 'home' && <Home config={config.home} onNavigate={handleNavigate} />}
        {routeState.page === 'public-profile' && <PublicProfilePage username={routeState.username} onNavigate={handleNavigate} />}
        {routeState.page === 'login' && (
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
