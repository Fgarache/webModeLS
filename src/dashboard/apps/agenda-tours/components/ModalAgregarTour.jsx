
import {
  AVAILABLE_TIME_OPTIONS,
  formatHour12,
} from '../agendaTours.utils.js';
import agendaToursConfig from '../agendaTours.config.js';
import ToggleSwitch from './ToggleSwitch.jsx';

function ModalAgregarTour({
  open,
  editing,
  form,
  saving,
  error,
  onChange,
  onClose,
  onSubmit,
  onToggleSlot,
}) {
  if (!open) {
    return null;
  }

  const { tourModal } = agendaToursConfig;

  return (
    <div className="tour-modal-overlay tour-modern-overlay" role="dialog" aria-modal="true">
      <div className="tour-modal tour-modern-card">
        <div className="tour-modal-header modern-card-header">
          <h4>{editing ? tourModal.editTitle : tourModal.addTitle}</h4>
        </div>

        <p className="tour-modern-description">{tourModal.description}</p>

        {error && <div className="agenda-tours-error tour-modern-error">{error}</div>}

        <div className="modern-stack tour-modern-stack">
          <div className="modern-group">
            <label className="modern-label" htmlFor="titulo">{tourModal.fields.title}</label>
            <input
              id="titulo"
              type="text"
              value={form.titulo}
              onChange={(event) => onChange('titulo', event.target.value)}
              disabled={saving}
            />
          </div>

          <div className="tour-modern-inline-row">
            <div className="modern-group">
              <label className="modern-label" htmlFor="fecha">{tourModal.fields.date}</label>
              <input
                id="fecha"
                type="date"
                value={form.fecha}
                onChange={(event) => onChange('fecha', event.target.value)}
                disabled={saving}
              />
            </div>

            <div className="modern-unit switch">
              <label className="modern-label" htmlFor="activo">{form.activo ? 'Activa' : 'Off'}</label>
              <ToggleSwitch
                id="activo"
                checked={!!form.activo}
                onChange={(checked) => onChange('activo', Boolean(checked))}
                disabled={saving}
              />
            </div>
          </div>

          <div className="modern-group">
            <label className="modern-label" htmlFor="detalles">{tourModal.fields.details}</label>
            <textarea
              id="detalles"
              rows="3"
              value={form.detalles}
              onChange={(event) => onChange('detalles', event.target.value)}
              disabled={saving}
            />
          </div>

          <div className="modern-group">
            <label className="modern-label" htmlFor="ubicacion_maps">{tourModal.fields.mapsLocation}</label>
            <textarea
              id="ubicacion_maps"
              rows="3"
              value={form.ubicacion_maps}
              onChange={(event) => onChange('ubicacion_maps', event.target.value)}
              placeholder={tourModal.fields.mapsPlaceholder}
              disabled={saving}
            />
          </div>

          <div className="modern-time-box tour-modern-slots-box">
            <div className="tour-slots-header">
              <h5>{tourModal.schedulesTitle}</h5>
              <span className="tour-slots-caption">{tourModal.schedulesCaption}</span>
            </div>

            <div className="slot-picker-grid">
              {AVAILABLE_TIME_OPTIONS.map((hourValue) => {
                const isSelected = Boolean(form.disponibles?.[`h${hourValue.replace(':', '')}`]);

                return (
                  <button
                    key={hourValue}
                    type="button"
                    className={`slot-picker-button ${isSelected ? 'selected' : ''}`}
                    onClick={() => onToggleSlot(hourValue)}
                    disabled={saving}
                  >
                    {formatHour12(hourValue)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="reservation-form-actions modern-actions">
          <button type="button" className="secondary-button modern-btn-off" onClick={onClose} disabled={saving}>
            {tourModal.cancel}
          </button>
          <button type="button" className="primary-button modern-btn-on" onClick={onSubmit} disabled={saving}>
            {saving ? tourModal.saving : editing ? tourModal.saveEdit : tourModal.saveCreate}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAgregarTour;