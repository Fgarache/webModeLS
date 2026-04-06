import { FaPen, FaTrash } from 'react-icons/fa';
import { getRedTypeConfig } from '../redes.utils.js';

function RedCard({ red, saving, onEdit, onDelete }) {
  const { Icon, label } = getRedTypeConfig(red.tipo);

  return (
    <article className="redes-card">
      <button type="button" className="redes-card-main" onClick={() => onEdit(red)} aria-label={red.titulo || label}>
        <span className={`redes-card-icon type-${red.tipo}`}>
          <Icon />
        </span>
        <div className="redes-card-copy">
          <strong>{red.titulo || label}</strong>
          <span>{red.url || 'Sin enlace configurado'}</span>
        </div>
      </button>

      <div className="redes-card-actions">
        <button type="button" className="icon-button" onClick={() => onEdit(red)} disabled={saving} title="Editar red" aria-label="Editar red">
          <FaPen />
        </button>
        <button type="button" className="icon-button danger" onClick={() => onDelete(red)} disabled={saving} title="Eliminar red" aria-label="Eliminar red">
          <FaTrash />
        </button>
      </div>
    </article>
  );
}

export default RedCard;