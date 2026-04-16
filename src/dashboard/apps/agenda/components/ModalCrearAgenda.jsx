import { FaTelegramPlane, FaTrash, FaWhatsapp } from 'react-icons/fa';
import ToggleSwitch from '../../agenda-tours/components/ToggleSwitch.jsx';
import agendaConfig from '../agenda.config.js';
import { createHourOptions, createMinuteOptions, sanitizeAgendaContact } from '../agenda.utils.js';
// Importamos el nuevo CSS modular
import './ModalCrearAgenda.css';

function ModalCrearAgenda({ open, editing, form, saving, error, onChange, onClose, onDelete, onSubmit }) {
  if (!open) return null;

  const { modal } = agendaConfig;
  const hourOptions = createHourOptions();
  const minuteOptions = createMinuteOptions();

  const fechaActiva = form.fecha_activa !== undefined ? form.fecha_activa : true;
  
  const handleToggleFecha = (checked) => {
    onChange('fecha_activa', checked);
    if (!checked) {
      onChange('fecha_dia', '');
      onChange('fecha_hora', '');
      onChange('fecha_minutos', '');
      onChange('fecha_periodo', 'AM');
    }
  };

  return (
    <div className="agenda-modal-overlay" role="dialog" aria-modal="true">
      <div className="agenda-modal">
        <div className="agenda-modal-header">
          <h4>{editing ? modal.editTitle : modal.title}</h4>
        </div>

        {error && <div className="agenda-error">{error}</div>}

        <div className="agenda-form-grid">
          <div className="agenda-inline-row agenda-form-full">
            <div className="form-group">
              <label htmlFor="agenda_contacto">{modal.fields.contact}</label>
              <input 
                id="agenda_contacto" 
                type="text" 
                value={form.contacto} 
                onChange={(e) => onChange('contacto', sanitizeAgendaContact(e.target.value))} 
                disabled={saving} 
              />
            </div>

            <div className="form-group">
              <label>{modal.fields.type}</label>
              <div className="agenda-contact-type-row">
                {modal.contactTypes.map((option) => {
                  const Icon = option.value === 'telegram' ? FaTelegramPlane : FaWhatsapp;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`agenda-contact-type-button ${form.tipo_contacto === option.value ? 'active' : ''}`}
                      onClick={() => onChange('tipo_contacto', option.value)}
                      disabled={saving}
                    >
                      <Icon />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Fila compacta de Depósito, Fecha y Toggle */}
          <div className="agenda-deposit-fecha-toggle-row agenda-form-full">
            <div className="form-group agenda-deposit-inline">
              <label htmlFor="agenda_deposito">{modal.fields.deposit}</label>
              <input
                id="agenda_deposito"
                type="number"
                value={form.deposito}
                onChange={(e) => onChange('deposito', e.target.value.replace(/\D/g, ''))}
                disabled={saving}
              />
            </div>
            
            <div className="form-group agenda-date-inline">
              <label htmlFor="agenda_fecha_dia">{modal.fields.date}</label>
              <input
                id="agenda_fecha_dia"
                type="date"
                value={form.fecha_dia}
                onChange={(e) => onChange('fecha_dia', e.target.value)}
                disabled={saving || !fechaActiva}
              />
            </div>

            <div className="agenda-toggle-inline">
              <span className="agenda-toggle-label-inline">Activa</span>
              <ToggleSwitch
                id="agenda_fecha_toggle"
                checked={fechaActiva}
                onChange={handleToggleFecha}
                disabled={saving}
              />
            </div>
          </div>

          <div className="form-group agenda-form-full">
            <label>{modal.fields.hour}</label>
            <div className="agenda-time-row">
              <div className="agenda-time-field">
                <span className="agenda-time-field-label">Hora</span>
                <select className="agenda-dark-select" value={form.fecha_hora} onChange={(e) => onChange('fecha_hora', e.target.value)} disabled={saving || !fechaActiva}>
                  {hourOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
              </div>

              <div className="agenda-time-field">
                <span className="agenda-time-field-label">Minutos</span>
                <select className="agenda-dark-select" value={form.fecha_minutos} onChange={(e) => onChange('fecha_minutos', e.target.value)} disabled={saving || !fechaActiva}>
                  {minuteOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
              </div>

              <div className="agenda-period-toggle">
                {modal.periods.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={`agenda-period-button ${form.fecha_periodo === opt.value ? 'active' : ''}`}
                    onClick={() => onChange('fecha_periodo', opt.value)}
                    disabled={saving || !fechaActiva}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="form-group agenda-form-full">
            <label htmlFor="agenda_detalles">{modal.fields.details}</label>
            <textarea 
              id="agenda_detalles" 
              rows="3" 
              value={form.detalles} 
              onChange={(e) => onChange('detalles', e.target.value)} 
              disabled={saving} 
            />
          </div>
        </div>

        <div className="agenda-modal-actions">
          {editing && (
            <button type="button" className="secondary-button agenda-delete-button" onClick={onDelete} disabled={saving}>
              <FaTrash /> {modal.delete}
            </button>
          )}
          <button type="button" className="primary-button" onClick={onSubmit} disabled={saving}>
            {saving ? modal.saving : editing ? modal.saveEdit : modal.save}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {modal.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCrearAgenda;