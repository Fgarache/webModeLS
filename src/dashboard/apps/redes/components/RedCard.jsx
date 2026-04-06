import { getRedTypeConfig } from '../redes.utils.js';

function RedCard({ red, saving, onEdit }) {
  const { Icon, label } = getRedTypeConfig(red.tipo);

  return (
    <article className="redes-card">
      <button type="button" className="redes-card-main" onClick={() => onEdit(red)} aria-label={red.titulo || label} disabled={saving}>
        <span className={`redes-card-icon type-${red.tipo}`}>
          <Icon />
        </span>
        <div className="redes-card-copy">
          <strong>{red.titulo || label}</strong>
        </div>
      </button>
    </article>
  );
}

export default RedCard;