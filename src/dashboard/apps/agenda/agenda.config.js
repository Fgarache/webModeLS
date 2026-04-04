const agendaConfig = {
  header: {
    title: 'Mi agenda',
    description: 'Guarda contactos, deposito, fecha y detalles en una agenda privada por usuario.',
    addButton: 'Agregar agenda',
    loadingText: 'Cargando agenda...',
    emptyText: 'Todavia no has agregado registros en tu agenda.',
    upcomingSection: 'Proximas agendas',
    pastSection: 'Agendas pasadas',
    pastEmptyText: 'No hay agendas pasadas.',
  },
  card: {
    untitledContact: 'Sin contacto',
    labels: {
      date: 'Fecha y hora',
    },
    actions: {
      view: 'Ver',
      contact: 'Escribir',
      edit: 'Editar',
      delete: 'Eliminar',
    },
  },
  modal: {
    title: 'Agregar agenda',
    editTitle: 'Editar agenda',
    close: 'Cerrar',
    save: 'Guardar agenda',
    saveEdit: 'Guardar cambios',
    saving: 'Guardando...',
    cancel: 'Cancelar',
    fields: {
      contact: 'Contacto',
      type: 'Tipo de contacto',
      deposit: 'Deposito',
      date: 'Fecha',
      hour: 'Hora',
      period: 'Periodo',
      details: 'Detalles',
    },
    contactTypes: [
      { value: 'whatsapp', label: 'WhatsApp' },
      { value: 'telegram', label: 'Telegram' },
      { value: 'deposito', label: 'Deposito' },
    ],
    periods: [
      { value: 'AM', label: 'AM' },
      { value: 'PM', label: 'PM' },
    ],
  },
  confirm: {
    title: 'Eliminar agenda',
    label: 'Eliminar agenda',
    cancel: 'Cancelar',
    processing: 'Procesando...',
  },
  detail: {
    title: 'Detalle de agenda',
    close: 'Cerrar',
  },
};

export default agendaConfig;