import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { formatDateLabel, formatHour12 } from '../agendaTours.utils.js';
import agendaToursConfig from '../agendaTours.config.js';

const channelIcons = {
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane,
};

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
          <div className="reservation-modal-heading">
            <h4>{title}</h4>
            <div className="reservation-modal-meta">
              <span className="reservation-modal-meta-title">{tour.publico?.titulo || 'Sin titulo'}</span>
              <span className="reservation-modal-meta-date">{formatDateLabel(tour.publico?.fecha)}</span>
              <span className="reservation-modal-meta-hour">{formatHour12(slot.hour)}</span>
            </div>
          </div>
        </div>

        <div className="reservation-grid">
          <div className="form-group reservation-contact-group">
            <label htmlFor="contacto">{reservationModal.fields.contact}</label>
            <div className="reservation-inline-row">
              <input
                id="contacto"
                type="text"
                value={form.contacto}
                onChange={(event) => onChange('contacto', event.target.value)}
                placeholder={reservationModal.fields.contactPlaceholder}
                disabled={saving}
              />

              <div className="reservation-channel-row" role="group" aria-label={reservationModal.fields.channel}>
                {reservationModal.channelOptions.map((option) => {
                  const Icon = channelIcons[option.value];

                  return (
                    <button
                      key={option.value}
                      type="button"
                      className={`reservation-channel-button ${form.canal_contacto === option.value ? 'active' : ''}`}
                      onClick={() => onChange('canal_contacto', option.value)}
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

          <div className="form-group">
            <label htmlFor="lugar">{reservationModal.fields.place}</label>
            <input
              id="lugar"
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              min="0"
              step="1"
              value={form.lugar}
              onChange={(event) => onChange('lugar', event.target.value.replace(/\D/g, ''))}
              placeholder={reservationModal.fields.placePlaceholder}
              disabled={saving}
            />
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