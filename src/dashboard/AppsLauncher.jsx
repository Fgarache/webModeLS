import { FaAddressBook, FaCalendarAlt, FaCog, FaImages, FaTicketAlt } from 'react-icons/fa';
import appsConfig from '../config/appsConfig.js';
import './appsLauncher.css';

const iconMap = {
  FaCog,
  FaCalendarAlt,
  FaAddressBook,
  FaImages,
  FaTicketAlt,
};

function AppsLauncher({ role, onSelectApp }) {
  const availableApps = appsConfig.apps.filter(app =>
    app.rolesPermitidos.includes(role)
  );

  return (
    <div className="apps-launcher">
      <div className="apps-grid">
        {availableApps.map(app => {
          const IconComponent = iconMap[app.icon];
          return (
            <button
              key={app.id}
              className="app-icon"
              onClick={() => onSelectApp(app.id)}
              title={app.titulo}
            >
              <div className="app-icon-bg">
                {IconComponent && <IconComponent size={32} />}
              </div>
              <span className="app-title">{app.titulo}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default AppsLauncher;
