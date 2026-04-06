import homeConfig from './home/home.config.js';

const config = {
  app: {
    title: 'Lindas GT',
  },
  home: homeConfig,
  login: {
    title: 'Iniciar sesión',
    googleButtonText: 'Iniciar con Google',
    cancelButtonText: 'Cancelar',
    hintText: 'Usa tu cuenta de Google para iniciar sesión.',
  },
  welcome: {
    title: 'Hola Mundo',
    message: '¡Has iniciado sesión correctamente y ves este mensaje de Hola Mundo!',
    logoutButtonText: 'Cerrar sesión',
  },
};

export default config;
