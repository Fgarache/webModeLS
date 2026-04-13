import { FaCalendarAlt, FaSuitcaseRolling, FaTicketAlt, FaUserCircle } from 'react-icons/fa';
import './BottomNavBar.css';

const NAV_ITEMS = [
  { id: 'agenda', label: 'Agenda', Icon: FaCalendarAlt },
  { id: 'agenda-tours', label: 'Tours', Icon: FaSuitcaseRolling },
  { id: 'rifas', label: 'Rifas', Icon: FaTicketAlt },
  { id: 'perfil', label: 'Perfil', Icon: FaUserCircle },
];

export default function BottomNavBar({ active, onTab, canUseApp }) {
  return (
    <nav className="bottom-app-nav" aria-label="Navegacion principal">
      {NAV_ITEMS.map((item) => {
        const isActive = item.id === active;
        const isAllowed = canUseApp ? canUseApp(item.id) : true;
        return (
          <button
            key={item.id}
            type="button"
            className={`bottom-app-tab${isActive ? ' active' : ''}`}
            onClick={() => onTab(item.id)}
            disabled={!isAllowed}
            aria-pressed={isActive}
          >
            <item.Icon />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
