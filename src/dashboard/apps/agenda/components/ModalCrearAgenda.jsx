import { FaTelegramPlane, FaTrash, FaWhatsapp } from 'react-icons/fa';
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

  return (
    <div className="agenda-modal-overlay" role="dialog" aria-modal="true">
      <div className="agenda-modal">
        <div className="agenda-modal-header">
          <div>
            <h4>{editing ? modal.editTitle : modal.title}</h4>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {modal.close}
          </button>
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
                    >
                      <Icon />
                      <span>{option.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="agenda_deposito">{modal.fields.deposit}</label>
            <input id="agenda_deposito" type="text" value={form.deposito} onChange={(event) => onChange('deposito', event.target.value)} disabled={saving} />
          </div>

          <div className="form-group">
            <label htmlFor="agenda_fecha_dia">{modal.fields.date}</label>
            <input id="agenda_fecha_dia" type="date" value={form.fecha_dia} onChange={(event) => onChange('fecha_dia', event.target.value)} disabled={saving} />
          </div>

          <div className="form-group agenda-form-full">
            <label>{modal.fields.hour}</label>
            <div className="agenda-time-row">
              <div className="agenda-time-field">
                <span className="agenda-time-field-label">Hora</span>
                <select className="agenda-dark-select" id="agenda_fecha_hora" value={form.fecha_hora} onChange={(event) => onChange('fecha_hora', event.target.value)} disabled={saving}>
                  {hourOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="agenda-time-field">
                <span className="agenda-time-field-label">Minutos</span>
                <select className="agenda-dark-select" id="agenda_fecha_minutos" value={form.fecha_minutos} onChange={(event) => onChange('fecha_minutos', event.target.value)} disabled={saving}>
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
                    disabled={saving}
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