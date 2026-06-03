import rifasConfig from '../rifas.config.js';

function ModalGanadoresRifa({ open, title, form, saving, onChange, onClose, onSubmit }) {
  if (!open) {
    return null;
  }

  const { winnerModal } = rifasConfig;

  return (
    <div className="rifa-modal-overlay" role="dialog" aria-modal="true">
      <div className="rifa-modal rifa-modal-compact">
        <div className="rifa-modal-header">
          <div>
            <h4>{winnerModal.title}</h4>
            <p>{title || winnerModal.subtitle}</p>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {winnerModal.close}
          </button>
        </div>

        <div className="rifa-form-grid">
          <div className="form-group rifa-form-full">
            <label htmlFor="rifa_ganadores">{winnerModal.field}</label>
            <textarea
              id="rifa_ganadores"
              rows="6"
              value={form}
              onChange={(event) => onChange(event.target.value)}
              disabled={saving}
            />
            <span className="rifa-field-help">{winnerModal.helpText}</span>
          </div>
        </div>

        <div className="rifa-modal-actions">
          <button type="button" className="primary-button" onClick={onSubmit} disabled={saving}>
            {saving ? winnerModal.saving : winnerModal.save}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {winnerModal.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalGanadoresRifa;
