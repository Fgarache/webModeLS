import rifasConfig from '../rifas.config.js';

function ModalConfirmarRifa({ open, title, message, confirmLabel, saving, onClose, onConfirm }) {
  if (!open) {
    return null;
  }

  const { confirm } = rifasConfig;

  return (
    <div className="rifa-modal-overlay" role="dialog" aria-modal="true">
      <div className="rifa-modal rifa-modal-compact">
        <div className="rifa-modal-header">
          <div>
            <h4>{title}</h4>
            <p>{message}</p>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {confirm.close}
          </button>
        </div>

        <div className="rifa-modal-actions">
          <button type="button" className="danger-button" onClick={onConfirm} disabled={saving}>
            {saving ? confirm.processing : confirmLabel}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {confirm.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmarRifa;
