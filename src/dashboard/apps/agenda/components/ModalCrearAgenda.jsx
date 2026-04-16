import { FaTelegramPlane, FaTrash, FaWhatsapp } from 'react-icons/fa';
import ToggleSwitch from '../../agenda-tours/components/ToggleSwitch.jsx';
import agendaConfig from '../agenda.config.js';
import { createHourOptions, createMinuteOptions, sanitizeAgendaContact } from '../agenda.utils.js';

const contactTypeIcons = {
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane,
};

function ModalCrearAgenda({ open, editing, form, saving, error, onChange, onClose, onDelete, onSubmit }) {
  if (!open) {
    return null;
  }

  const { modal } = agendaConfig;
  const hourOptions = createHourOptions();
  const minuteOptions = createMinuteOptions();

  // Nuevo: control de fecha activa
  const fechaActiva = form.fecha_activa !== undefined ? form.fecha_activa : true;
  const handleToggleFecha = (checked) => {
    onChange('fecha_activa', checked);
    if (!checked) {
      // Limpiar campos de fecha y hora si se desactiva
      onChange('fecha_dia', '');
      onChange('fecha_hora', '');
      onChange('fecha_minutos', '');
      onChange('fecha_periodo', 'AM');
    } else {
      // Si se activa y no hay fecha, poner fecha y hora actual
      if (!form.fecha_dia) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hour24 = now.getHours();
        const period = hour24 >= 12 ? 'PM' : 'AM';
        const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
        onChange('fecha_dia', `${year}-${month}-${day}`);
        onChange('fecha_hora', String(hour12).padStart(2, '0'));
        onChange('fecha_minutos', '00');
        onChange('fecha_periodo', period);
      }
    }
  };

  return (
    <div className="agenda-modal-overlay" role="dialog" aria-modal="true">
      <div className="agenda-modal">
        <div className="agenda-modal-header">
          <div>
            <h4>{editing ? modal.editTitle : modal.title}</h4>
          </div>
          {/* Removed close (X) button for add agenda modal */}
        </div>

        {error && <div className="agenda-error">{error}</div>}

        <div className="agenda-form-grid">
          <div className="agenda-inline-row agenda-form-full">
            <div className="form-group agenda-contact-group">
              <label htmlFor="agenda_contacto">{modal.fields.contact}</label>
              <input id="agenda_contacto" type="text" value={form.contacto} onChange={(event) => onChange('contacto', sanitizeAgendaContact(event.target.value))} disabled={saving} />
            </div>

            <div className="form-group agenda-type-group">
              <label>{modal.fields.type}</label>
              <div className="agenda-contact-type-row" role="group" aria-label={modal.fields.type}>
                {modal.contactTypes.map((option) => {
                  const Icon = contactTypeIcons[option.value];

                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`agenda-contact-type-button ${form.tipo_contacto === option.value ? 'active' : ''}`}
                      onClick={() => onChange('tipo_contacto', option.value)}
                      disabled={saving}
                      title={option.label}
                      aria-label={option.label}
                    >
                      <Icon />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="agenda-deposit-fecha-toggle-row agenda-form-full">
            <div className="form-group agenda-deposit-group agenda-deposit-inline">
              <label htmlFor="agenda_deposito">{modal.fields.deposit}</label>
              <input
                id="agenda_deposito"
                type="number"
                inputMode="numeric"
                min="0"
                step="1"
                value={form.deposito}
                onChange={(event) => onChange('deposito', event.target.value.replace(/\D/g, ''))}
                disabled={saving}
              />
            </div>
            <div className="form-group agenda-date-group agenda-date-inline">
              <label htmlFor="agenda_fecha_dia">{modal.fields.date}</label>
              <input
                id="agenda_fecha_dia"
                type="date"
                value={form.fecha_dia}
                onChange={(event) => onChange('fecha_dia', event.target.value)}
                disabled={saving || !fechaActiva}
              />
            </div>
            <div className="form-group agenda-toggle-group agenda-toggle-inline">
              <label className="agenda-toggle-label-inline">Fecha</label>
              <ToggleSwitch
                id="agenda_fecha_toggle"
                checked={fechaActiva}
                onChange={handleToggleFecha}
                disabled={saving}
                label={undefined}
              />
            </div>
          </div>

          <div className="form-group agenda-form-full">
            <label>{modal.fields.hour}</label>
            <div className="agenda-time-row">
              <div className="agenda-time-field">
                <span className="agenda-time-field-label">Hora</span>
                <select className="agenda-dark-select" id="agenda_fecha_hora" value={form.fecha_hora} onChange={(event) => onChange('fecha_hora', event.target.value)} disabled={saving || !fechaActiva}>
                  {hourOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="agenda-time-field">
                <span className="agenda-time-field-label">Minutos</span>
                <select className="agenda-dark-select" id="agenda_fecha_minutos" value={form.fecha_minutos} onChange={(event) => onChange('fecha_minutos', event.target.value)} disabled={saving || !fechaActiva}>
                  {minuteOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="agenda-period-toggle" role="group" aria-label={modal.fields.period}>
                {modal.periods.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`agenda-period-button ${form.fecha_periodo === option.value ? 'active' : ''}`}
                    onClick={() => onChange('fecha_periodo', option.value)}
                    disabled={saving || !fechaActiva}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="form-group agenda-form-full">
            <label htmlFor="agenda_detalles">{modal.fields.details}</label>
            <textarea id="agenda_detalles" rows="4" value={form.detalles} onChange={(event) => onChange('detalles', event.target.value)} disabled={saving} />
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