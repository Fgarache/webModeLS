import agendaConfig from '../agenda.config.js';
import { formatAgendaDate } from '../agenda.utils.js';

function ModalDetalleAgenda({ open, item, onClose }) {
  if (!open || !item) {
    return null;
  }

  const { detail, card } = agendaConfig;

  return (
    <div className="agenda-modal-overlay" role="dialog" aria-modal="true">
      <div className="agenda-modal agenda-modal-compact">
        <div className="agenda-modal-header">
          <div>
            <h4>{detail.title}</h4>
            <p>{item.contacto || card.untitledContact}</p>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose}>
            {detail.close}
          </button>
        </div>

        <div className="agenda-detail-grid">
          <div className="agenda-card-panel compact">
            <strong>{card.labels.date}</strong>
            <p>{formatAgendaDate(item.fecha)}</p>
          </div>
          <div className="agenda-card-panel compact">
            <strong>Tipo</strong>
            <p>{item.tipo_contacto || '-'}</p>
          </div>
          <div className="agenda-card-panel compact">
            <strong>Deposito</strong>
            <p>{item.deposito || '-'}</p>
          </div>
          <div className="agenda-card-panel">
            <strong>Detalles</strong>
            <p>{item.detalles || 'Sin detalles.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalDetalleAgenda;