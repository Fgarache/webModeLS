import {
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaTelegramPlane,
  FaUsers,
  FaWhatsapp,
} from 'react-icons/fa';

export const RED_TYPE_OPTIONS = [
  { value: 'whatsapp', label: 'WhatsApp', Icon: FaWhatsapp, defaultTitle: 'WhatsApp' },
  { value: 'telegram', label: 'Telegram', Icon: FaTelegramPlane, defaultTitle: 'Telegram' },
  { value: 'facebook', label: 'Facebook', Icon: FaFacebookF, defaultTitle: 'Facebook' },
  { value: 'instagram', label: 'Instagram', Icon: FaInstagram, defaultTitle: 'Instagram' },
  { value: 'telegram-canal', label: 'Canal de Telegram', Icon: FaTelegramPlane, defaultTitle: 'Canal de Telegram' },
  { value: 'telegram-grupo', label: 'Grupo de Telegram', Icon: FaUsers, defaultTitle: 'Grupo de Telegram' },
  { value: 'whatsapp-grupo', label: 'Grupo de WhatsApp', Icon: FaUsers, defaultTitle: 'Grupo de WhatsApp' },
  { value: 'otro', label: 'Otro', Icon: FaGlobe, defaultTitle: 'Otro' },
];

export function getRedTypeConfig(type) {
  return RED_TYPE_OPTIONS.find((item) => item.value === type) || RED_TYPE_OPTIONS[RED_TYPE_OPTIONS.length - 1];
}

export function needsCustomTitle(type) {
  return ['telegram-canal', 'telegram-grupo', 'whatsapp-grupo', 'otro'].includes(type);
}

export function getRedValueMeta(type) {
  if (type === 'whatsapp') {
    return {
      label: 'Numero de WhatsApp',
      placeholder: '50248037777',
    };
  }

  if (type === 'telegram') {
    return {
      label: 'Usuario de Telegram',
      placeholder: 'tu_usuario',
    };
  }

  return {
    label: 'Enlace',
    placeholder: 'https://... o enlace de invitacion',
  };
}

export function parseStoredValue(type, url) {
  const normalizedUrl = String(url || '').trim();

  if (type === 'whatsapp') {
    return normalizedUrl.replace(/^https?:\/\/wa\.me\//i, '').replace(/\D/g, '');
  }

  if (type === 'telegram') {
    return normalizedUrl.replace(/^https?:\/\/t\.me\//i, '').replace(/^@/, '').trim();
  }

  return normalizedUrl;
}

export function buildCanonicalUrl(type, rawValue) {
  const value = String(rawValue || '').trim();

  if (!value) {
    return '';
  }

  if (type === 'whatsapp') {
    const digits = value.replace(/\D/g, '');
    return digits ? `https://wa.me/${digits}` : '';
  }

  if (type === 'telegram') {
    const username = value.replace(/^@/, '').replace(/\s+/g, '');
    return username ? `https://t.me/${username}` : '';
  }

  return value;
}

export function generateRedKey() {
  return `r${Date.now()}`;
}

function normalizeLegacyRed(key, value) {
  if (value && typeof value === 'object') {
    const type = String(value.tipo || 'otro').trim() || 'otro';
    const title = String(value.titulo || value.nombre || getRedTypeConfig(type).defaultTitle).trim();
    const url = String(value.url || value.enlace || '').trim();
    return {
      id: key,
      tipo: type,
      titulo: title,
      url,
    };
  }

  return {
    id: key,
    tipo: 'otro',
    titulo: 'Otro',
    url: String(value || '').trim(),
  };
}

export function normalizeRedes(redes = {}) {
  return Object.entries(redes)
    .map(([key, value]) => normalizeLegacyRed(key, value))
    .filter((item) => item.titulo || item.url);
}

export function buildRedPayload(redes = []) {
  return redes.reduce((accumulator, item) => {
    const tipo = String(item?.tipo || 'otro').trim() || 'otro';
    const titulo = String(item?.titulo || getRedTypeConfig(tipo).defaultTitle).trim();
    const url = buildCanonicalUrl(tipo, item?.url || '');

    if (!titulo && !url) {
      return accumulator;
    }

    accumulator[item.id || generateRedKey()] = {
      tipo,
      titulo,
      url,
    };

    return accumulator;
  }, {});
}