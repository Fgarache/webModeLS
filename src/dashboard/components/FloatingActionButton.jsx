import { FaPlus } from 'react-icons/fa';
import './floatingActionButton.css';

function FloatingActionButton({ ariaLabel, title, onClick, disabled = false, className = '' }) {
  return (
    <button
      type="button"
      className={`floating-action-button ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || title || 'Agregar'}
      title={title || ariaLabel || 'Agregar'}
    >
      <FaPlus />
    </button>
  );
}

export default FloatingActionButton;