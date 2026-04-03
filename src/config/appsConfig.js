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
      id: 'rifas',
      icon: 'FaTicketAlt',
      titulo: 'Rifas',
      rolesPermitidos: ['user', 'prestador', 'admin'],
    },
  ],
};

export default appsConfig;
