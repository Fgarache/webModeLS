import { getAppRoles } from '../dashboard/apps/apps.roles.config.js';

const appsConfig = {
  apps: [
    {
      id: 'perfil',
      icon: 'FaCog',
      titulo: 'Configuración del perfil',
      rolesPermitidos: getAppRoles('perfil'),
    },
    {
      id: 'servicios',
      icon: 'FaTools',
      titulo: 'Servicios',
      rolesPermitidos: getAppRoles('servicios'),
    },
    {
      id: 'ubicaciones',
      icon: 'FaMapMarkerAlt',
      titulo: 'Ubicaciones',
      rolesPermitidos: getAppRoles('ubicaciones'),
    },
    {
      id: 'media',
      icon: 'FaImages',
      titulo: 'Fotos',
      rolesPermitidos: getAppRoles('media'),
    },
    {
      id: 'redes',
      icon: 'FaShareAlt',
      titulo: 'Redes',
      rolesPermitidos: getAppRoles('redes'),
    },
  ],
};

export default appsConfig;
