const homeConfig = {
  brandLabel: 'Lindas GT',
  title: 'Administra tu perfil en Lindas GT',
  subtitle: 'Organiza tu perfil, tus tours, tus rifas y tus fotos desde una sola pagina visual, clara y pensada para gestionar tu presencia en Lindas GT.',
  loginButtonText: 'Iniciar seccion',
  highlightTitle: 'Todo tu panel en un solo lugar',
  highlightText: 'Edita tu perfil, publica fotos, controla disponibilidad, administra tours y mueve tus rifas sin salir del mismo panel.',
  footerTitle: 'Lindas GT',
  footerText: 'Una portada clara para entrar, administrar tu perfil y mantener tus herramientas listas desde el mismo espacio.',
  footerTagline: 'Perfil, tours, rifas y fotos en una sola pagina.',
  badges: [
    { icon: 'user', label: 'Perfil' },
    { icon: 'map', label: 'Tours' },
    { icon: 'ticket', label: 'Ventas' },
    { icon: 'camera', label: 'Fotos' },
  ],
  features: [
    {
      title: 'Perfil visible',
      description: 'Actualiza estado, ubicaciones, redes y tu foto principal para mantener tu perfil listo.',
    },
    {
      title: 'Tours y agenda',
      description: 'Crea tours, organiza cupos, horarios y reservas desde una vista directa.',
    },
    {
      title: 'Rifas activas',
      description: 'Administra numeros, compras y rifas archivadas con una interfaz compacta.',
    },
    {
      title: 'Galeria de fotos',
      description: 'Sube imagenes, edita titulos y define rapidamente cual sera tu foto de perfil.',
    },
  ],
  visual: {
    backgroundImage: '/icons/logo.png',
    backgroundImageOpacity: 0.06,
    backgroundImageSize: 'cover',
    backgroundImagePosition: 'center center',
    backgroundImageFilter: 'grayscale(1) brightness(2)',
    mutedTextOpacity: 0.75,
    glassOpacity: 0.04,
    glassCardOpacity: 0.02,
    borderOpacity: 0.1,
    heroAccentOpacity: 0.12,
    heroSurfaceStartOpacity: 0.98,
    heroSurfaceEndOpacity: 0.99,
  },
};

export default homeConfig;