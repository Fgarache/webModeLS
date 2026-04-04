import rifasConfig from '../rifas.config.js';

function ModalCrearRifa({ open, editing, form, saving, error, onChange, onClose, onSubmit }) {
  if (!open) {
    return null;
  }

  const { createModal } = rifasConfig;

  return (
    <div className="rifa-modal-overlay" role="dialog" aria-modal="true">
      <div className="rifa-modal">
        <div className="rifa-modal-header">
          <div>
            <h4>{editing ? createModal.editTitle : createModal.title}</h4>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {createModal.close}
          </button>
        </div>

        {error && <div className="rifas-error">{error}</div>}

        <div className="rifa-form-grid">
          <div className="form-group">
            <label htmlFor="rifa_titulo">{createModal.fields.title}</label>
            <input id="rifa_titulo" type="text" value={form.titulo} onChange={(event) => onChange('titulo', event.target.value)} disabled={saving} />
          </div>

          <div className="form-group">
            <label htmlFor="rifa_fecha">{createModal.fields.drawDate}</label>
            <input id="rifa_fecha" type="date" value={form.fecha_sorteo} onChange={(event) => onChange('fecha_sorteo', event.target.value)} disabled={saving} />
          </div>

          <div className="form-group">
            <label htmlFor="rifa_hora">{createModal.fields.drawTime}</label>
            <input id="rifa_hora" type="time" value={form.hora_sorteo} onChange={(event) => onChange('hora_sorteo', event.target.value)} disabled={saving} />
          </div>

          <div className="form-group">
            <label htmlFor="rifa_precio">{createModal.fields.price}</label>
            <input id="rifa_precio" type="number" min="0" value={form.precio} onChange={(event) => onChange('precio', event.target.value)} disabled={saving} />
          </div>

          <div className="form-group">
            <label htmlFor="rifa_total">{createModal.fields.totalNumbers}</label>
            <input id="rifa_total" type="number" min="1" value={form.total_numeros} onChange={(event) => onChange('total_numeros', event.target.value)} disabled={saving} />
          </div>

          <div className="form-group form-group-checkbox">
            <label htmlFor="rifa_activa">{createModal.fields.enabled}</label>
            <input id="rifa_activa" type="checkbox" checked={form.activa !== false} onChange={(event) => onChange('activa', event.target.checked)} disabled={saving} />
          </div>

          <div className="form-group rifa-form-full">
            <label htmlFor="rifa_detalles">{createModal.fields.details}</label>
            <textarea id="rifa_detalles" rows="3" value={form.detalles} onChange={(event) => onChange('detalles', event.target.value)} disabled={saving} />
          </div>

          <div className="form-group rifa-form-full">
            <label htmlFor="rifa_terminos">{createModal.fields.terms}</label>
            <textarea id="rifa_terminos" rows="3" value={form.terminos_condiciones} onChange={(event) => onChange('terminos_condiciones', event.target.value)} disabled={saving} />
          </div>

          <div className="form-group">
            <label htmlFor="rifa_premios">{createModal.fields.prizes}</label>
            <textarea id="rifa_premios" rows="4" value={form.premios_texto} onChange={(event) => onChange('premios_texto', event.target.value)} disabled={saving} />
            <span className="rifa-field-help">{createModal.fields.multilineHelp}</span>
          </div>

          <div className="form-group">
            <label htmlFor="rifa_ganadores">{createModal.fields.winners}</label>
            <textarea id="rifa_ganadores" rows="4" value={form.ganadores_texto} onChange={(event) => onChange('ganadores_texto', event.target.value)} disabled={saving} />
            <span className="rifa-field-help">{createModal.fields.multilineHelp}</span>
          </div>
        </div>

        <div className="rifa-modal-actions">
          <button type="button" className="primary-button" onClick={onSubmit} disabled={saving}>
            {saving ? createModal.saving : editing ? createModal.saveEdit : createModal.save}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {createModal.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCrearRifa;