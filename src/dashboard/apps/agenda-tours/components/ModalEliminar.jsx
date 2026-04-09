import agendaToursConfig from '../agendaTours.config.js';

function ModalEliminar({ open, title, message, confirmLabel, hideCloseButton = false, saving, onClose, onConfirm }) {
  if (!open) {
    return null;
  }

  const { confirmModal } = agendaToursConfig;

  return (
    <div className="tour-modal-overlay" role="dialog" aria-modal="true">
      <div className="tour-modal confirm-modal">
        <div className="tour-modal-header">
          <div>
            <h4>{title}</h4>
            <p>{message}</p>
          </div>
          {!hideCloseButton && (
            <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
              {confirmModal.closeButton}
            </button>
          )}
        </div>

        <div className="confirm-modal-actions">
          <button type="button" className="danger-button" onClick={onConfirm} disabled={saving}>
            {saving ? confirmModal.processing : confirmLabel}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {confirmModal.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalEliminar;