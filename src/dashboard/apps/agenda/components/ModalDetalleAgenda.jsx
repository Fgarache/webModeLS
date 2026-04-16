import agendaConfig from '../agenda.config.js';
import { formatAgendaDate } from '../agenda.utils.js';

function ModalDetalleAgenda({ open, item, onClose }) {
  if (!open || !item) {
    return null;
  }

  const { detail, card } = agendaConfig;

  return (
    <>
      <style>
        {`
          .agenda-modal-overlay {
            position: fixed;
            inset: 0;
            z-index: 110;
            display: grid;
            place-items: center;
            padding: 1.25rem;
            background: rgba(5, 10, 16, 0.75);
            backdrop-filter: blur(10px);
          }

          .agenda-modal-compact {
            width: min(500px, 100%);
            background: #15202a;
            border-radius: 1.2rem;
            padding: 1.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          }

          .agenda-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1.5rem;
          }

          .agenda-modal-header h4 {
            margin: 0;
            font-size: 1.2rem;
            color: #fff;
          }

          .agenda-modal-header p {
            margin: 0.2rem 0 0;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.6);
          }

          .modal-close-button {
            background: rgba(255, 255, 255, 0.05);
            border: none;
            color: #fff;
            padding: 0.4rem 0.8rem;
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 0.85rem;
            transition: background 0.2s;
          }

          .modal-close-button:hover {
            background: rgba(255, 255, 255, 0.15);
          }

          .agenda-detail-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.8rem;
          }

          .agenda-detail-panel {
            background: rgba(0, 0, 0, 0.2);
            padding: 0.8rem;
            border-radius: 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.03);
          }

          .agenda-detail-panel-full {
            grid-column: span 2;
          }

          .agenda-detail-panel strong {
            display: block;
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.4);
            text-transform: uppercase;
            margin-bottom: 0.3rem;
            letter-spacing: 0.05em;
          }

          .agenda-detail-panel p {
            margin: 0;
            font-size: 0.95rem;
            color: #e9fff5;
            line-height: 1.4;
          }

          @media (max-width: 480px) {
            .agenda-detail-grid {
              grid-template-columns: 1fr;
            }
            .agenda-detail-panel-full {
              grid-column: span 1;
            }
          }
        `}
      </style>

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
            <div className="agenda-detail-panel">
              <strong>{card.labels.date}</strong>
              <p>{formatAgendaDate(item.fecha)}</p>
            </div>
            
            <div className="agenda-detail-panel">
              <strong>Tipo</strong>
              <p>{item.tipo_contacto || '-'}</p>
            </div>

            <div className="agenda-detail-panel">
              <strong>Depósito</strong>
              <p>{item.deposito ? `Q${item.deposito}` : '-'}</p>
            </div>

            <div className="agenda-detail-panel agenda-detail-panel-full">
              <strong>{card.labels.details}</strong>
              <p>{item.detalles || 'Sin detalles.'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalDetalleAgenda;