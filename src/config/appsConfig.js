const appsConfig = {
  apps: [
    {
      id: 'perfil',
      icon: 'FaCog',
      titulo: 'Configuración del perfil',
      rolesPermitidos: ['usuario', 'prestador', 'user'],
    },
    {
      id: 'agenda-tours',
      icon: 'FaCalendarAlt',
      titulo: 'Agenda Tours',
      rolesPermitidos: ['prestador', 'user'],
    },
    {
      id: 'agenda',
      icon: 'FaAddressBook',
      titulo: 'Agenda',
      rolesPermitidos: ['usuario', 'prestador', 'user', 'admin'],
    },
    {
      id: 'media',
      icon: 'FaImages',
      titulo: 'Fotos',
      rolesPermitidos: ['usuario', 'prestador', 'user', 'admin'],
    },
    {
      id: 'rifas',
      icon: 'FaTicketAlt',
      titulo: 'Rifas',
      rolesPermitidos: ['user', 'prestador', 'admin'],
    },
  ],
};

export default appsConfig;
