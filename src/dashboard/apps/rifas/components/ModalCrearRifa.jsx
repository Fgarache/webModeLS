import rifasConfig from '../rifas.config.js';
import ToggleSwitch from '../../agenda-tours/components/ToggleSwitch.jsx';

function ModalCrearRifa({ open, editing, form, saving, error, onChange, onClose, onSubmit }) {
  if (!open) {
    return null;
  }

  const { createModal } = rifasConfig;

  return (
    <div className="rifa-modal-overlay rifa-modern-overlay" role="dialog" aria-modal="true">
      <div className="rifa-modal rifa-modern-card">
        <div className="rifa-modal-header modern-card-header">
          <h4>{editing ? createModal.editTitle : createModal.title}</h4>
        </div>

        {error && <div className="rifas-error rifa-modern-error">{error}</div>}

        <div className="modern-stack rifa-modern-stack">
          <div className="modern-group">
            <label className="modern-label" htmlFor="rifa_titulo">{createModal.fields.title}</label>
            <input id="rifa_titulo" type="text" value={form.titulo} onChange={(event) => onChange('titulo', event.target.value)} disabled={saving} />
          </div>

          <div className="rifa-modern-triple-grid">
            <div className="modern-group">
              <label className="modern-label" htmlFor="rifa_fecha">{createModal.fields.drawDate}</label>
              <input id="rifa_fecha" type="date" value={form.fecha_sorteo} onChange={(event) => onChange('fecha_sorteo', event.target.value)} disabled={saving} />
            </div>

            <div className="modern-group">
              <label className="modern-label" htmlFor="rifa_hora">{createModal.fields.drawTime}</label>
              <input id="rifa_hora" type="time" value={form.hora_sorteo} onChange={(event) => onChange('hora_sorteo', event.target.value)} disabled={saving} />
            </div>

            <div className="modern-unit switch">
              <label className="modern-label" htmlFor="rifa_activa">{form.activa !== false ? 'Activa' : 'Off'}</label>
              <ToggleSwitch
                id="rifa_activa"
                checked={form.activa !== false}
                onChange={(checked) => onChange('activa', Boolean(checked))}
                disabled={saving}
              />
            </div>
          </div>

          <div className="rifa-modern-inline-row">
            <div className="modern-group">
              <label className="modern-label" htmlFor="rifa_precio">{createModal.fields.price}</label>
              <input id="rifa_precio" type="number" inputMode="numeric" min="0" step="1" value={form.precio} onChange={(event) => onChange('precio', event.target.value.replace(/\D/g, ''))} disabled={saving} />
            </div>

            <div className="modern-group">
              <label className="modern-label" htmlFor="rifa_total">{createModal.fields.totalNumbers}</label>
              <input id="rifa_total" type="number" inputMode="numeric" min="1" step="1" value={form.total_numeros} onChange={(event) => onChange('total_numeros', event.target.value.replace(/\D/g, ''))} disabled={saving} />
            </div>
          </div>

          <div className="modern-group">
            <label className="modern-label" htmlFor="rifa_detalles">{createModal.fields.details}</label>
            <textarea id="rifa_detalles" rows="3" value={form.detalles} onChange={(event) => onChange('detalles', event.target.value)} disabled={saving} />
          </div>

          <div className="modern-group">
            <label className="modern-label" htmlFor="rifa_terminos">{createModal.fields.terms}</label>
            <textarea id="rifa_terminos" rows="3" value={form.terminos_condiciones} onChange={(event) => onChange('terminos_condiciones', event.target.value)} disabled={saving} />
          </div>

          <div className="modern-group">
            <label className="modern-label" htmlFor="rifa_premios">{createModal.fields.prizes}</label>
            <textarea id="rifa_premios" rows="4" value={form.premios_texto} onChange={(event) => onChange('premios_texto', event.target.value)} disabled={saving} />
            <span className="rifa-field-help">{createModal.fields.multilineHelp}</span>
          </div>
        </div>

        <div className="rifa-modal-actions modern-actions">
          <button type="button" className="secondary-button modern-btn-off" onClick={onClose} disabled={saving}>
            {createModal.cancel}
          </button>
          <button type="button" className="primary-button modern-btn-on" onClick={onSubmit} disabled={saving}>
            {saving ? createModal.saving : editing ? createModal.saveEdit : createModal.save}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCrearRifa;