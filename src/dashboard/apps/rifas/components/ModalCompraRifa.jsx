import rifasConfig from '../rifas.config.js';
import { formatDateLabel, formatHour12 } from '../rifas.utils.js';

function ModalCompraRifa({ open, editing, rifa, selectedNumber, form, saving, onChange, onClose, onDelete, onSubmit }) {
  if (!open || !rifa || !selectedNumber) {
    return null;
  }

  const { purchaseModal } = rifasConfig;

  return (
    <div className="rifa-modal-overlay" role="dialog" aria-modal="true">
      <div className="rifa-modal rifa-modal-compact">
        <div className="rifa-modal-header">
          <div>
            <h4>{editing ? purchaseModal.editTitle : purchaseModal.title}</h4>
            <p>{rifa.titulo} | #{selectedNumber.numberLabel} | {formatDateLabel(rifa.fecha_sorteo)} | {formatHour12(rifa.hora_sorteo)}</p>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {purchaseModal.close}
          </button>
        </div>

        <div className="rifa-form-grid">
          <div className="form-group">
            <label htmlFor="compra_lugar">{purchaseModal.fields.place}</label>
            <input id="compra_lugar" type="text" value={form.lugar} onChange={(event) => onChange('lugar', event.target.value)} placeholder={purchaseModal.fields.placePlaceholder} disabled={saving} />
          </div>

          <div className="form-group">
            <label htmlFor="compra_contacto">{purchaseModal.fields.contact}</label>
            <input id="compra_contacto" type="text" value={form.contacto} onChange={(event) => onChange('contacto', event.target.value)} placeholder={purchaseModal.fields.contactPlaceholder} disabled={saving} />
          </div>

          <div className="form-group">
            <label htmlFor="compra_canal">{purchaseModal.fields.channel}</label>
            <select id="compra_canal" value={form.canal} onChange={(event) => onChange('canal', event.target.value)} disabled={saving}>
              <option value="whatsapp">WhatsApp</option>
              <option value="telegram">Telegram</option>
            </select>
          </div>

          <div className="form-group rifa-form-full">
            <label htmlFor="compra_detalles">{purchaseModal.fields.detail}</label>
            <textarea id="compra_detalles" rows="4" value={form.detalles} onChange={(event) => onChange('detalles', event.target.value)} placeholder={purchaseModal.fields.detailPlaceholder} disabled={saving} />
          </div>
        </div>

        <div className="rifa-modal-actions">
          <button type="button" className="primary-button" onClick={onSubmit} disabled={saving}>
            {saving ? purchaseModal.saving : editing ? purchaseModal.saveEdit : purchaseModal.save}
          </button>
          {editing && (
            <button type="button" className="danger-button" onClick={onDelete} disabled={saving}>
              {purchaseModal.delete}
            </button>
          )}
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {purchaseModal.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCompraRifa;