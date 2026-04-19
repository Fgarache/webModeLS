import { FaTelegramPlane, FaTrash, FaWhatsapp } from 'react-icons/fa';
import ToggleSwitch from '../../agenda-tours/components/ToggleSwitch.jsx';
import agendaConfig from '../agenda.config.js';
import { createHourOptions, createMinuteOptions, sanitizeAgendaContact } from '../agenda.utils.js';
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
    <div className="modern-center-overlay">
      <div className="modern-card-modal">
        <div className="modern-card-header">
          <h4>{editing ? 'Editar Registro' : 'Nueva Agenda'}</h4>
        </div>

        {error && <div className="modern-error-msg">{error}</div>}

        <div className="modern-stack">
          {/* CAMPO: NÚMERO O USUARIO */}
          <div className="modern-group">
            <label className="modern-label">Número o usuario</label>
            <div className="modern-input-with-actions">
              <input 
                type="text" 
                placeholder="Ej. 5555-1234 o @nick"
                value={form.contacto} 
                onChange={(e) => onChange('contacto', sanitizeAgendaContact(e.target.value))} 
                disabled={saving} 
              />
              <div className="modern-social-box">
                {modal.contactTypes.map((option) => {
                  const Icon = option.value === 'telegram' ? FaTelegramPlane : FaWhatsapp;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`social-circle ${form.tipo_contacto === option.value ? 'is-active' : ''}`}
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

          {/* FILA TRIPLE: DEPÓSITO | FECHA | TOGGLE */}
          <div className="modern-triple-grid">
            <div className="modern-unit deposit">
              <label className="modern-label">Depósito</label>
              <div className="modern-currency-wrapper">
                <span>Q</span>
                <input
                  type="number"
                  placeholder="0"
                  value={form.deposito}
                  onChange={(e) => onChange('deposito', e.target.value.replace(/\D/g, ''))}
                  disabled={saving}
                />
              </div>
            </div>
            
            <div className="modern-unit date">
              <label className="modern-label">Fecha</label>
              <input
                type="date"
                value={form.fecha_dia}
                onChange={(e) => onChange('fecha_dia', e.target.value)}
                disabled={saving || !fechaActiva}
              />
            </div>

            <div className="modern-unit switch">
              <label className="modern-label">{fechaActiva ? 'Activa' : 'Off'}</label>
              <ToggleSwitch
                checked={fechaActiva}
                onChange={handleToggleFecha}
                disabled={saving}
              />
            </div>
          </div>

          {/* SECCIÓN HORA */}
          <div className={`modern-time-box ${!fechaActiva ? 'is-off' : ''}`}>
            <label className="modern-label">Hora del servicio</label>
            <div className="modern-time-grid">
              <select value={form.fecha_hora} onChange={(e) => onChange('fecha_hora', e.target.value)} disabled={saving || !fechaActiva}>
                {hourOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label} h</option>)}
              </select>
              <select value={form.fecha_minutos} onChange={(e) => onChange('fecha_minutos', e.target.value)} disabled={saving || !fechaActiva}>
                {minuteOptions.map((opt) => <option key={opt.value} value={opt.value}>{opt.label} m</option>)}
              </select>
              <div className="modern-period-toggle">
                {modal.periods.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={form.fecha_periodo === opt.value ? 'is-active' : ''}
                    onClick={() => onChange('fecha_periodo', opt.value)}
                    disabled={saving || !fechaActiva}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* NOTAS */}
          <div className="modern-group">
            <label className="modern-label">Notas</label>
            <textarea 
              rows="2" 
              placeholder="Detalles extra..."
              value={form.detalles} 
              onChange={(e) => onChange('detalles', e.target.value)} 
              disabled={saving} 
            />
          </div>
        </div>

        {/* ACCIONES */}
        <div className="modern-actions">
          {editing && (
            <button type="button" className="modern-btn-trash" onClick={onDelete} disabled={saving}>
              <FaTrash />
            </button>
          )}
          <button type="button" className="modern-btn-off" onClick={onClose} disabled={saving}>
            Cancelar
          </button>
          <button type="button" className="modern-btn-on" onClick={onSubmit} disabled={saving}>
            {saving ? '...' : editing ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCrearAgenda;