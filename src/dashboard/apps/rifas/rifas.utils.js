export function getTodayDate() {
  return new Date().toISOString().split('T')[0];
}

export function createEmptyRifaForm() {
  return {
    titulo: '',
    detalles: '',
    fecha_sorteo: getTodayDate(),
    hora_sorteo: '20:00',
    activa: true,
    terminos_condiciones: '',
    premios_texto: '',
    ganadores_texto: '',
    precio: '0',
    total_numeros: '100',
  };
}

export function createEmptyCompraForm() {
  return {
    lugar: '',
    contacto: '',
    canal: 'whatsapp',
    detalles: '',
  };
}

export function mapToMultilineText(value) {
  return Object.values(value || {}).join('\n');
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

export function normalizeRifa(rifaId, rifaData, compraData) {
  return {
    id: rifaId,
    ...rifaData,
    activa: rifaData?.activa !== false,
    creado_en: rifaData?.creado_en || '',
    numeros_ocupados: rifaData?.numeros_ocupados || {},
    compras: compraData || {},
  };
}

export function sortRifas(list) {
  return [...list].sort((left, right) => {
    const leftDate = left.fecha_sorteo || '';
    const rightDate = right.fecha_sorteo || '';

    if (leftDate !== rightDate) {
      return leftDate.localeCompare(rightDate);
    }

    return (left.titulo || '').localeCompare(right.titulo || '');
  });
}

export function buildNumberKey(numberValue) {
  return `n${String(numberValue).padStart(2, '0')}`;
}

export function buildNumberLabel(numberValue) {
  return String(numberValue).padStart(2, '0');
}

export function buildNumbers(totalNumbers, occupiedMap) {
  const total = Math.max(0, Number(totalNumbers) || 0);
  const occupied = occupiedMap || {};

  return Array.from({ length: total }, (_, index) => {
    const numberValue = index + 1;
    const key = buildNumberKey(numberValue);

    return {
      key,
      label: buildNumberLabel(numberValue),
      occupied: Boolean(occupied[key]),
    };
  });
}

export function getRifaStatus(rifa) {
  if (rifa?.activa === false) {
    return 'inactive';
  }

  if (rifa?.fecha_sorteo && rifa.fecha_sorteo < getTodayDate()) {
    return 'expired';
  }

  const occupiedCount = Object.keys(rifa?.numeros_ocupados || {}).length;
  const totalNumbers = Number(rifa?.total_numeros || 0);

  return occupiedCount >= totalNumbers && totalNumbers > 0 ? 'soldout' : 'active';
}

export function splitRifasByVisibility(rifas) {
  return rifas.reduce(
    (accumulator, rifa) => {
      const status = getRifaStatus(rifa);

      if (status === 'inactive' || status === 'expired') {
        accumulator.archived.push(rifa);
      } else {
        accumulator.active.push(rifa);
      }

      return accumulator;
    },
    { active: [], archived: [] }
  );
}

export function buildContactLink(canal, contacto) {
  const contactValue = String(contacto || '').trim();

  if (!contactValue) {
    return '';
  }

  if (canal === 'telegram') {
    return `https://t.me/${contactValue.replace(/^@/, '')}`;
  }

  const phone = contactValue.replace(/\D/g, '');
  return phone ? `https://wa.me/${phone}` : '';
}

export function parseListToMap(input, prefix) {
  return input
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean)
    .reduce((accumulator, item, index) => {
      accumulator[`${prefix}${index + 1}`] = item;
      return accumulator;
    }, {});
}