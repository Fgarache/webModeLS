const appRolesConfig = {
  perfil: ['user', 'model'],
  'agenda-tours': ['model', 'user'],
  agenda: ['model', 'prestador', 'user', 'admin'],
  media: ['model', 'prestador', 'user', 'admin'],
  rifas: ['model', 'prestador', 'admin'],
};

const publicApps = ['perfil'];

export const restrictedAccessConfig = {
  title: 'Verifica tu cuenta',
  message: 'Necesitas verificar tu cuenta para usar esta funcion',
  whatsappNumber: '5024803-7777',
  telegramUsername: 'verifica_tu_cuenta',
  whatsappLabel: 'Ir a WhatsApp',
  telegramLabel: 'Ir a Telegram',
};

const normalizeRole = (value) => String(value || '').trim().toLowerCase();

export const getAppRoles = (appId) => appRolesConfig[appId] || [];

export const isPublicApp = (appId) => publicApps.includes(appId);

export const canUseApp = (appId, role) => {
  if (isPublicApp(appId)) {
    return true;
  }

  return getAppRoles(appId).map(normalizeRole).includes(normalizeRole(role));
};

export const getRestrictedWhatsappLink = () => {
  const phone = restrictedAccessConfig.whatsappNumber.replace(/\D/g, '');
  return phone ? `https://wa.me/${phone}` : '';
};

export const getRestrictedTelegramLink = () => {
  const username = restrictedAccessConfig.telegramUsername.replace(/^@/, '').trim();
  return username ? `https://t.me/${username}` : '';
};

export default appRolesConfig;