export const AVAILABLE_TIME_OPTIONS = Array.from({ length: 17 }, (_, index) => {
  const hour = index + 6;
  return `${String(hour).padStart(2, '0')}:00`;
});

export function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

export function isPastTourDate(value, today = getTodayDate()) {
  if (!value) {
    return false;
  }

  return value < today;
}

export function isTourArchived(tour, today = getTodayDate()) {
  const isInactive = tour?.publico?.activo === false;
  const isExpired = isPastTourDate(tour?.publico?.fecha, today);

  return isInactive || isExpired;
}

export function createEmptyTourForm() {
  return {
    titulo: '',
    detalles: '',
    fecha: getTodayDate(),
    activo: true,
    disponibles: {},
    ubicacion_maps: '',
  };
}

export function createEmptyReservationForm() {
  return {
    lugar: '',
    contacto: '',
    canal_contacto: 'whatsapp',
    detalle: '',
  };
}

export function buildSlotKey(hourValue) {
  return `h${hourValue.replace(':', '')}`;
}

export function formatHour12(value) {
  if (!value) {
    return '';
  }

  const [hourText, minuteText] = value.split(':');
  const hour = Number(hourText);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;

  return `${displayHour}:${minuteText} ${suffix}`;
}

export function formatDateLabel(value) {
  if (!value) {
    return 'Sin fecha';
  }

  const date = new Date(`${value}T00:00:00`);
  return new Intl.DateTimeFormat('es-GT', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  }).format(date);
}

export function getTourLocations(value) {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === 'object') {
    return Object.values(value).map((item) => String(item).trim()).filter(Boolean);
  }

  return String(value)
    .split(/\r?\n|\s*\|\s*/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function normalizeTour(tourId, tourData) {
  const hasNestedSchema = Boolean(tourData?.publico || tourData?.privado);
  const publico = hasNestedSchema ? tourData?.publico || {} : tourData || {};
  const privado = hasNestedSchema ? tourData?.privado || {} : { reservados: tourData?.reservados || {} };
  const normalizedReservados = Object.entries(privado?.reservados || {}).reduce((accumulator, [slotKey, reservation]) => {
    accumulator[slotKey] = {
      ...reservation,
      hora: reservation?.hora || reservation?.hora_texto || publico?.disponibles?.[slotKey] || `${slotKey.slice(1, 3)}:${slotKey.slice(3, 5)}`,
      lugar: reservation?.lugar || reservation?.cliente_nombre || '',
      detalle: reservation?.detalle || '',
      canal_contacto: reservation?.canal_contacto || 'whatsapp',
    };

    return accumulator;
  }, {});

  return {
    id: tourId,
    publico: {
      ...publico,
      disponibles: publico.disponibles || {},
      ubicacion_maps: publico.ubicacion_maps || '',
    },
    privado: {
      ...privado,
      reservados: normalizedReservados,
    },
  };
}

export function sortTours(list) {
  return [...list].sort((left, right) => {
    const leftDate = left.publico?.fecha || '';
    const rightDate = right.publico?.fecha || '';

    if (leftDate !== rightDate) {
      return leftDate.localeCompare(rightDate);
    }

    return (left.publico?.titulo || '').localeCompare(right.publico?.titulo || '');
  });
}

export function splitToursByStatus(list, today = getTodayDate()) {
  return list.reduce(
    (accumulator, tour) => {
      if (isTourArchived(tour, today)) {
        accumulator.archived.push(tour);
      } else {
        accumulator.current.push(tour);
      }

      return accumulator;
    },
    { current: [], archived: [] }
  );
}

export function getSortedSlots(disponibles) {
  return Object.entries(disponibles || {}).sort((left, right) => left[1].localeCompare(right[1]));
}

export function getSortedReservations(reservados) {
  return Object.entries(reservados || {}).sort((left, right) => {
    return (left[1]?.hora || '').localeCompare(right[1]?.hora || '');
  });
}

export function buildContactHref(reservation) {
  const canal = reservation?.canal_contacto;
  const contacto = (reservation?.contacto || '').trim();

  if (!canal || !contacto) {
    return '';
  }

  if (canal === 'telegram') {
    return `https://t.me/${contacto.replace(/^@/, '')}`;
  }

  const phone = contacto.replace(/[^\d]/g, '');
  if (!phone) {
    return '';
  }

  return `https://wa.me/${phone}`;
}