import { FaCommentDots, FaEye, FaPen, FaTrash } from 'react-icons/fa';
import rifasConfig from '../rifas.config.js';

function ModalNumeroOcupado({ open, data, saving, onClose, onContact, onDelete, onEdit, onView }) {
  if (!open || !data) {
    return null;
  }

  const { occupiedActions } = rifasConfig;

  return (
    <div className="rifa-modal-overlay" role="dialog" aria-modal="true">
      <div className="rifa-modal rifa-modal-compact">
        <div className="rifa-modal-header">
          <div>
            <h4>{occupiedActions.title}</h4>
            <p>{data.rifaTitle} | #{data.numberLabel}</p>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {occupiedActions.close}
          </button>
        </div>

        <div className="rifa-icon-actions">
          <button type="button" className="icon-tile-button" onClick={onView} disabled={saving} title={occupiedActions.view} aria-label={occupiedActions.view}>
            <span className="icon-button large"><FaEye /></span>
            <span className="icon-tile-label">{occupiedActions.view}</span>
          </button>
          <button type="button" className="icon-tile-button" onClick={onContact} disabled={saving} title={occupiedActions.contact} aria-label={occupiedActions.contact}>
            <span className="icon-button large"><FaCommentDots /></span>
            <span className="icon-tile-label">{occupiedActions.contact}</span>
          </button>
          <button type="button" className="icon-tile-button" onClick={onEdit} disabled={saving} title={occupiedActions.edit} aria-label={occupiedActions.edit}>
            <span className="icon-button large"><FaPen /></span>
            <span className="icon-tile-label">{occupiedActions.edit}</span>
          </button>
          <button type="button" className="icon-tile-button" onClick={onDelete} disabled={saving} title={occupiedActions.delete} aria-label={occupiedActions.delete}>
            <span className="icon-button large danger"><FaTrash /></span>
            <span className="icon-tile-label">{occupiedActions.delete}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalNumeroOcupado;
