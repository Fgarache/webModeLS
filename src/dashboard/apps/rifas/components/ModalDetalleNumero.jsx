import { FaCommentDots, FaPen, FaTrash } from 'react-icons/fa';
import rifasConfig from '../rifas.config.js';

function ModalDetalleNumero({ open, data, saving, onClose, onContact, onEdit, onDelete }) {
  if (!open || !data) {
    return null;
  }

  const { occupiedView, occupiedActions } = rifasConfig;

  return (
    <div className="rifa-modal-overlay" role="dialog" aria-modal="true">
      <div className="rifa-modal rifa-modal-compact">
        <div className="rifa-modal-header">
          <div>
            <h4>{occupiedView.title}</h4>
            <p>{data.rifaTitle}</p>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {occupiedView.close}
          </button>
        </div>

        <div className="rifa-expanded-info">
          <div className="rifa-expanded-grid">
            <div className="rifa-expanded-section compact">
              <strong>{occupiedView.labels.number}</strong>
              <p>#{data.numberLabel}</p>
            </div>
            <div className="rifa-expanded-section compact">
              <strong>{occupiedView.labels.place}</strong>
              <p>{data.purchase?.lugar || 'Sin lugar'}</p>
            </div>
            <div className="rifa-expanded-section compact">
              <strong>{occupiedView.labels.contact}</strong>
              <p>{data.purchase?.contacto || 'Sin contacto'}</p>
            </div>
            <div className="rifa-expanded-section compact">
              <strong>{occupiedView.labels.channel}</strong>
              <p>{data.purchase?.canal || 'Sin canal'}</p>
            </div>
          </div>

          <div className="rifa-expanded-section compact-block">
            <strong>{occupiedView.labels.detail}</strong>
            <p>{data.purchase?.detalles || 'Sin detalles'}</p>
          </div>

          <div className="rifa-icon-actions">
            <button type="button" className="icon-tile-button" onClick={() => onContact?.(data)} disabled={saving} title={occupiedActions.contact} aria-label={occupiedActions.contact}>
              <span className="icon-button large"><FaCommentDots /></span>
              <span className="icon-tile-label">{occupiedActions.contact}</span>
            </button>
            <button type="button" className="icon-tile-button" onClick={() => onEdit?.(data)} disabled={saving} title={occupiedActions.edit} aria-label={occupiedActions.edit}>
              <span className="icon-button large"><FaPen /></span>
              <span className="icon-tile-label">{occupiedActions.edit}</span>
            </button>
            <button type="button" className="icon-tile-button" onClick={() => onDelete?.(data)} disabled={saving} title={occupiedActions.delete} aria-label={occupiedActions.delete}>
              <span className="icon-button large danger"><FaTrash /></span>
              <span className="icon-tile-label">{occupiedActions.delete}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDetalleNumero;
