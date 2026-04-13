
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
    <div className="tour-modal-overlay" role="dialog" aria-modal="true">
      <div className="tour-modal">
        <div className="tour-modal-header">
          <div>
            <h4>{editing ? tourModal.editTitle : tourModal.addTitle}</h4>
            <p>{tourModal.description}</p>
          </div>
        </div>

        {error && <div className="agenda-tours-error">{error}</div>}

        <div className="tour-editor-grid">
          <div className="tour-editor-inline-row tour-editor-full-width">
            <div className="form-group">
              <label htmlFor="titulo">{tourModal.fields.title}</label>
              <input
                id="titulo"
                type="text"
                value={form.titulo}
                onChange={(event) => onChange('titulo', event.target.value)}
                disabled={saving}
              />
            </div>

            <div className="form-group">
              <label htmlFor="fecha">{tourModal.fields.date}</label>
              <input
                id="fecha"
                type="date"
                value={form.fecha}
                onChange={(event) => onChange('fecha', event.target.value)}
                disabled={saving}
              />
            </div>

            <div className="form-group tour-editor-toggle">
              <label htmlFor="activo" style={{marginBottom: 4, display: 'block'}}>{tourModal.fields.active}</label>
              <ToggleSwitch
                id="activo"
                checked={!!form.activo}
                onChange={checked => onChange('activo', Boolean(checked))}
                disabled={saving}
              />
            </div>
          </div>

          <div className="form-group tour-editor-full-width">
            <label htmlFor="detalles">{tourModal.fields.details}</label>
            <textarea
              id="detalles"
              rows="4"
              value={form.detalles}
              onChange={(event) => onChange('detalles', event.target.value)}
              disabled={saving}
            />
          </div>

          <div className="form-group tour-editor-full-width">
            <label htmlFor="ubicacion_maps">{tourModal.fields.mapsLocation}</label>
            <textarea
              id="ubicacion_maps"
              rows="3"
              value={form.ubicacion_maps}
              onChange={(event) => onChange('ubicacion_maps', event.target.value)}
              placeholder={tourModal.fields.mapsPlaceholder}
              disabled={saving}
            />
          </div>
        </div>

        <div className="tour-slots-editor">
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

        <div className="reservation-form-actions">
          <button type="button" className="primary-button" onClick={onSubmit} disabled={saving}>
            {saving ? tourModal.saving : editing ? tourModal.saveEdit : tourModal.saveCreate}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {tourModal.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAgregarTour;