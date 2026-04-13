import rifasConfig from '../rifas.config.js';

function ModalEditarGanador({ open, value, saving, error, onChange, onClose, onSubmit }) {
  if (!open) return null;
  const { createModal } = rifasConfig;
  return (
    <div className="rifa-modal-overlay" role="dialog" aria-modal="true">
      <div className="rifa-modal">
        <div className="rifa-modal-header">
          <h4>{value ? 'Editar ganador' : 'Agregar ganador'}</h4>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {createModal.close}
          </button>
        </div>
        {error && <div className="rifas-error">{error}</div>}
        <div className="form-group rifa-form-full">
          <label htmlFor="rifa_ganadores">{createModal.fields.winners}</label>
          <textarea id="rifa_ganadores" rows="4" value={value} onChange={e => onChange(e.target.value)} disabled={saving} />
          <span className="rifa-field-help">{createModal.fields.multilineHelp}</span>
        </div>
        <div className="rifa-modal-actions">
          <button type="button" className="primary-button" onClick={onSubmit} disabled={saving}>
            {saving ? createModal.saving : value ? 'Guardar cambios' : 'Guardar ganador'}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {createModal.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalEditarGanador;
