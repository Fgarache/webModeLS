export function normalizeUbicacionesMap(map) {
  return Object.entries(map || {}).reduce((accumulator, [key, value]) => {
    const nextValue = String(value || '').trim();
    if (nextValue) {
      accumulator[key] = nextValue;
    }
    return accumulator;
  }, {});
}

export function cleanUbicacionesMap(map) {
  return Object.entries(map || {}).reduce((accumulator, [key, value]) => {
    const nextValue = String(value || '').trim();
    if (nextValue) {
      accumulator[key] = nextValue;
    }
    return accumulator;
  }, {});
}

export function createNextUbicacionKey(items, prefix = 'u') {
  const currentKeys = new Set(Object.keys(items || {}));
  let index = currentKeys.size + 1;
  while (currentKeys.has(`${prefix}${index}`)) {
    index += 1;
  }
  return `${prefix}${index}`;
}
