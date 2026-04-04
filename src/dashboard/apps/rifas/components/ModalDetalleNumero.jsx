import rifasConfig from '../rifas.config.js';

function ModalDetalleNumero({ open, data, saving, onClose }) {
  if (!open || !data) {
    return null;
  }

  const { occupiedView } = rifasConfig;

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
        </div>
      </div>
    </div>
  );
}

export default ModalDetalleNumero;
