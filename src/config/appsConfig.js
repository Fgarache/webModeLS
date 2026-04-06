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
      id: 'agenda-tours',
      icon: 'FaSuitcaseRolling',
      titulo: 'Agenda Tours',
      rolesPermitidos: getAppRoles('agenda-tours'),
    },
    {
      id: 'agenda',
      icon: 'FaAddressBook',
      titulo: 'Agenda',
      rolesPermitidos: getAppRoles('agenda'),
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
    {
      id: 'rifas',
      icon: 'FaTicketAlt',
      titulo: 'Rifas',
      rolesPermitidos: getAppRoles('rifas'),
    },
  ],
};

export default appsConfig;
