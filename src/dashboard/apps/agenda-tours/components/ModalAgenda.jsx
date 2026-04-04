import { formatDateLabel, formatHour12 } from '../agendaTours.utils.js';
import agendaToursConfig from '../agendaTours.config.js';

function ModalAgenda({ open, tour, slot, form, saving, onChange, onClose, onSubmit }) {
  if (!open || !tour || !slot) {
    return null;
  }

  const isEditMode = Boolean(slot.reservation);
  const { reservationModal } = agendaToursConfig;
  const title = isEditMode ? reservationModal.editTitle : reservationModal.addTitle;
  const actionLabel = isEditMode ? reservationModal.saveEdit : reservationModal.saveCreate;

  return (
    <div className="tour-modal-overlay" role="dialog" aria-modal="true">
      <div className="tour-modal reservation-modal">
        <div className="tour-modal-header">
          <div>
            <h4>{title}</h4>
            <p>
              {tour.publico?.titulo || 'Sin titulo'} | {formatDateLabel(tour.publico?.fecha)} | {formatHour12(slot.hour)}
            </p>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {reservationModal.closeButton}
          </button>
        </div>

        <div className="reservation-grid">
          <div className="form-group">
            <label htmlFor="lugar">{reservationModal.fields.place}</label>
            <input
              id="lugar"
              type="text"
              value={form.lugar}
              onChange={(event) => onChange('lugar', event.target.value)}
              placeholder={reservationModal.fields.placePlaceholder}
              disabled={saving}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contacto">{reservationModal.fields.contact}</label>
            <input
              id="contacto"
              type="text"
              value={form.contacto}
              onChange={(event) => onChange('contacto', event.target.value)}
              placeholder={reservationModal.fields.contactPlaceholder}
              disabled={saving}
            />
          </div>

          <div className="form-group">
            <label htmlFor="canal_contacto">{reservationModal.fields.channel}</label>
            <select
              id="canal_contacto"
              value={form.canal_contacto}
              onChange={(event) => onChange('canal_contacto', event.target.value)}
              disabled={saving}
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="telegram">Telegram</option>
            </select>
          </div>

          <div className="form-group reservation-full-width">
            <label htmlFor="detalle">{reservationModal.fields.detail}</label>
            <textarea
              id="detalle"
              rows="4"
              value={form.detalle}
              onChange={(event) => onChange('detalle', event.target.value)}
              placeholder={reservationModal.fields.detailPlaceholder}
              disabled={saving}
            />
          </div>
        </div>

        <div className="reservation-form-actions">
          <button type="button" className="primary-button" onClick={onSubmit} disabled={saving}>
            {saving ? reservationModal.saving : actionLabel}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {reservationModal.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAgenda;