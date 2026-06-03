export function normalizeServiciosMap(map) {
  return Object.entries(map || {}).reduce((accumulator, [key, value]) => {
    if (typeof value === 'string') {
      const nombre = String(value || '').trim();
      if (nombre) {
        accumulator[key] = { nombre };
      }
      return accumulator;
    }

    const nombre = String(value?.nombre || '').trim();
    const link = String(value?.link || '').trim();
    const precio = String(value?.precio || '').trim();
    const detalles = String(value?.detalles || '').trim();

    if (nombre) {
      accumulator[key] = {
        nombre,
        ...(link ? { link } : {}),
        ...(precio ? { precio } : {}),
        ...(detalles ? { detalles } : {}),
      };
    }

    return accumulator;
  }, {});
}

export function cleanServiciosMap(map) {
  return Object.entries(map || {}).reduce((accumulator, [key, value]) => {
    const nombre = String(value?.nombre || '').trim();
    const link = String(value?.link || '').trim();
    const precio = String(value?.precio || '').trim();
    const detalles = String(value?.detalles || '').trim();

    if (nombre) {
      accumulator[key] = {
        nombre,
        ...(link ? { link } : {}),
        ...(precio ? { precio } : {}),
        ...(detalles ? { detalles } : {}),
      };
    }

    return accumulator;
  }, {});
}

export function buildServiceHref(link) {
  const value = String(link || '').trim();
  if (!value) {
    return '';
  }

  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

export function createNextServicioKey(items, prefix = 's') {
  const currentKeys = new Set(Object.keys(items || {}));
  let index = currentKeys.size + 1;
  while (currentKeys.has(`${prefix}${index}`)) {
    index += 1;
  }
  return `${prefix}${index}`;
}
