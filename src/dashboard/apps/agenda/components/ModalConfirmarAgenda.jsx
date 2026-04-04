import agendaConfig from '../agenda.config.js';

function ModalConfirmarAgenda({ open, item, saving, onClose, onConfirm }) {
  if (!open || !item) {
    return null;
  }

  const { confirm } = agendaConfig;

  return (
    <div className="agenda-modal-overlay" role="dialog" aria-modal="true">
      <div className="agenda-modal agenda-modal-compact">
        <div className="agenda-modal-header">
          <div>
            <h4>{confirm.title}</h4>
            <p>Se eliminara el registro de {item.contacto || 'esta agenda'}.</p>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {confirm.cancel}
          </button>
        </div>

        <div className="agenda-modal-actions">
          <button type="button" className="primary-button" onClick={onConfirm} disabled={saving}>
            {saving ? confirm.processing : confirm.label}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {confirm.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirmarAgenda;