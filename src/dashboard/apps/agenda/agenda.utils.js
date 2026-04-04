export function getNowLocalDateTime() {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const localDate = new Date(now.getTime() - offset * 60000);
  return localDate.toISOString().slice(0, 16);
}

export function createHourOptions() {
  return Array.from({ length: 12 }, (_, index) => {
    const hour = index + 1;
    return {
      value: String(hour).padStart(2, '0'),
      label: String(hour).padStart(2, '0'),
    };
  });
}

export function createMinuteOptions() {
  return ['00', '15', '30', '45'].map((minute) => ({
    value: minute,
    label: minute,
  }));
}

function normalizeQuarterMinute(value) {
  const minute = Number(value);

  if (Number.isNaN(minute) || minute < 15) {
    return '00';
  }

  if (minute < 30) {
    return '15';
  }

  if (minute < 45) {
    return '30';
  }

  return '45';
}

function getDefaultAgendaTimeParts() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour24 = now.getHours();
  const period = hour24 >= 12 ? 'PM' : 'AM';
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;

  return {
    fecha_dia: `${year}-${month}-${day}`,
    fecha_hora: `${String(hour12).padStart(2, '0')}:00`,
    fecha_minutos: normalizeQuarterMinute(now.getMinutes()),
    fecha_periodo: period,
  };
}

export function splitAgendaDateTime(value) {
  const fallback = getDefaultAgendaTimeParts();

  if (!value) {
    return fallback;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return fallback;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hour24 = date.getHours();
  const minutes = normalizeQuarterMinute(date.getMinutes());
  const period = hour24 >= 12 ? 'PM' : 'AM';
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;

  return {
    fecha_dia: `${year}-${month}-${day}`,
    fecha_hora: String(hour12).padStart(2, '0'),
    fecha_minutos: minutes,
    fecha_periodo: period,
  };
}

export function buildAgendaDateTime({ fecha_dia, fecha_hora, fecha_minutos, fecha_periodo }) {
  const safeDate = String(fecha_dia || '').trim();
  const safeHour = String(fecha_hora || '12').trim();
  const safeMinutes = String(fecha_minutos || '15').trim();
  const safePeriod = String(fecha_periodo || 'AM').trim().toUpperCase();

  if (!safeDate) {
    return '';
  }

  const hour12 = Math.max(1, Math.min(12, Number(safeHour) || 12));
  const minuteText = safeMinutes === '30' || safeMinutes === '45' ? safeMinutes : '15';
  let hour24 = hour12 % 12;

  if (safePeriod === 'PM') {
    hour24 += 12;
  }

  return `${safeDate}T${String(hour24).padStart(2, '0')}:${minuteText}`;
}

export function createEmptyAgendaForm() {
  const { fecha_dia, fecha_hora, fecha_minutos, fecha_periodo } = getDefaultAgendaTimeParts();

  return {
    contacto: '',
    tipo_contacto: 'whatsapp',
    deposito: '',
    fecha_dia,
    fecha_hora,
    fecha_minutos,
    fecha_periodo,
    detalles: '',
  };
}

export function formatAgendaDate(value) {
  if (!value) {
    return 'Sin fecha';
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('es-GT', {
    day: '2-digit',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

export function sanitizeAgendaContact(value) {
  return String(value || '').replace(/\s+/g, '').trim();
}

export function normalizeAgenda(agendaId, agendaData) {
  return {
    id: agendaId,
    contacto: agendaData?.contacto || '',
    tipo_contacto: agendaData?.tipo_contacto || 'whatsapp',
    deposito: agendaData?.deposito || '',
    fecha: agendaData?.fecha || '',
    detalles: agendaData?.detalles || '',
    creado_en: agendaData?.creado_en || '',
    creado_por_uid: agendaData?.creado_por_uid || '',
    actualizado_en: agendaData?.actualizado_en || '',
  };
}

export function getAgendaTimestamp(item) {
  const timestamp = Date.parse(item?.fecha || '');
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

export function sortAgenda(list) {
  const now = Date.now();

  return [...list].sort((left, right) => {
    const leftTime = Date.parse(left.fecha || '');
    const rightTime = Date.parse(right.fecha || '');
    const leftFuture = !Number.isNaN(leftTime) && leftTime >= now;
    const rightFuture = !Number.isNaN(rightTime) && rightTime >= now;

    if (leftFuture !== rightFuture) {
      return leftFuture ? -1 : 1;
    }

    if (!Number.isNaN(leftTime) && !Number.isNaN(rightTime) && leftTime !== rightTime) {
      return leftFuture ? leftTime - rightTime : rightTime - leftTime;
    }

    return (left.contacto || '').localeCompare(right.contacto || '');
  });
}

export function splitAgendaByTime(list) {
  const now = Date.now();

  return list.reduce(
    (accumulator, item) => {
      if (getAgendaTimestamp(item) >= now) {
        accumulator.upcoming.push(item);
      } else {
        accumulator.past.push(item);
      }

      return accumulator;
    },
    { upcoming: [], past: [] }
  );
}

export function buildAgendaContactLink(item) {
  const tipo = String(item?.tipo_contacto || '').trim().toLowerCase();
  const contacto = sanitizeAgendaContact(item?.contacto || '');

  if (!contacto) {
    return '';
  }

  if (tipo === 'telegram') {
    return `https://t.me/${contacto.replace(/^@/, '')}`;
  }

  if (tipo === 'whatsapp') {
    const phone = contacto.replace(/\D/g, '');
    return phone ? `https://wa.me/${phone}` : '';
  }

  return '';
}