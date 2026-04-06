const mediaConfig = {
  title: 'Fotos',
  description: 'Sube fotos a Firebase Storage, organiza tus imagenes y define tu foto principal.',
  help: {
    title: 'Como funcionan tus fotos',
    text: [
      'Estas son las fotos que apareceran en el perfil de tu pagina publica.',
    ],
  },
  upload: {
    maxPhotos: 12,
    acceptedTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  },
  compression: {
    maxWidth: 1600,
    maxHeight: 1600,
    quality: 0.82,
    outputType: 'image/jpeg',
  },
  labels: {
    selectPhoto: 'Seleccionar foto',
    uploadPhoto: 'Subir foto',
    uploading: 'Subiendo...',
    title: 'Titulo',
    profile: 'Foto de perfil',
    makeProfile: 'Poner de perfil',
    edit: 'Editar',
    delete: 'Eliminar',
    save: 'Guardar',
    cancel: 'Cancelar',
    remove: 'Quitar',
    close: 'Cerrar',
    empty: 'Todavia no has subido fotos.',
    limitReached: 'Ya alcanzaste el limite de fotos configurado.',
    compressionInfo: 'Compresion actual',
    confirmDeleteTitle: 'Eliminar foto',
    confirmDeleteMessage: 'Se eliminara la foto seleccionada del storage y del perfil.',
    confirmDeleteLabel: 'Eliminar foto',
    editTitle: 'Editar titulo',
  },
};

export default mediaConfig;