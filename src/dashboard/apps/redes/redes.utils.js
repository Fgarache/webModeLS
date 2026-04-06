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
    const url = String(item?.url || '').trim();

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