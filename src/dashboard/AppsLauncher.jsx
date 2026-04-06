import { useMemo, useState } from 'react';
import { FaAddressBook, FaCalendarAlt, FaCog, FaImages, FaLock, FaShareAlt, FaSuitcaseRolling, FaTelegramPlane, FaTicketAlt, FaTimes, FaWhatsapp } from 'react-icons/fa';
import appsConfig from '../config/appsConfig.js';
import {
  canUseApp,
  getRestrictedTelegramLink,
  getRestrictedWhatsappLink,
  restrictedAccessConfig,
} from './apps/apps.roles.config.js';
import './appsLauncher.css';

const iconMap = {
  FaCog,
  FaCalendarAlt,
  FaSuitcaseRolling,
  FaAddressBook,
  FaImages,
  FaShareAlt,
  FaTicketAlt,
};

function AppsLauncher({ role, onSelectApp }) {
  const [restrictedApp, setRestrictedApp] = useState(null);
  const whatsappLink = useMemo(() => getRestrictedWhatsappLink(), []);
  const telegramLink = useMemo(() => getRestrictedTelegramLink(), []);

  const handleOpenApp = (app) => {
    if (canUseApp(app.id, role)) {
      onSelectApp(app.id);
      return;
    }

    setRestrictedApp(app);
  };

  return (
    <>
      <div className="apps-launcher">
        <div className="apps-grid">
          {appsConfig.apps.map((app) => {
            const IconComponent = iconMap[app.icon];
            const isAllowed = canUseApp(app.id, role);

            return (
              <button
                key={app.id}
                type="button"
                className={`app-icon ${isAllowed ? '' : 'restricted'}`.trim()}
                data-app-id={app.id}
                onClick={() => handleOpenApp(app)}
                title={app.titulo}
              >
                <div className="app-icon-bg">
                  {IconComponent && <IconComponent size={32} />}
                  {!isAllowed && (
                    <span className="app-lock-badge" aria-hidden="true">
                      <FaLock size={12} />
                    </span>
                  )}
                </div>
                <span className="app-title">{app.titulo}</span>
              </button>
            );
          })}
        </div>
      </div>

      {restrictedApp && (
        <div className="restricted-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="restricted_modal_title">
          <div className="restricted-modal-card">
            <button
              type="button"
              className="restricted-modal-close"
              onClick={() => setRestrictedApp(null)}
              aria-label="Cerrar modal"
            >
              <FaTimes />
            </button>

            <div className="restricted-modal-icon">
              <FaLock />
            </div>
            <h3 id="restricted_modal_title">{restrictedAccessConfig.title}</h3>
            <p>
              {restrictedAccessConfig.message}. <strong>{restrictedApp.titulo}</strong>
            </p>
            <span className="restricted-modal-contact">
              Contacto: {restrictedAccessConfig.whatsappNumber}
            </span>

            <div className="restricted-modal-actions">
              <a
                className={`restricted-contact-button ${!whatsappLink ? 'disabled' : ''}`.trim()}
                href={whatsappLink || undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!whatsappLink}
                onClick={(event) => {
                  if (!whatsappLink) {
                    event.preventDefault();
                  }
                }}
              >
                <FaWhatsapp />
                <span>{restrictedAccessConfig.whatsappLabel}</span>
              </a>

              <a
                className={`restricted-contact-button telegram ${!telegramLink ? 'disabled' : ''}`.trim()}
                href={telegramLink || undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!telegramLink}
                onClick={(event) => {
                  if (!telegramLink) {
                    event.preventDefault();
                  }
                }}
              >
                <FaTelegramPlane />
                <span>{restrictedAccessConfig.telegramLabel}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AppsLauncher;
