import { FaEye, FaPen, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import agendaConfig from '../agenda.config.js';
import { buildAgendaContactLink, formatAgendaDate } from '../agenda.utils.js';

function AgendaCard({ item, expanded, saving, subdued = false, onEdit, onToggleView }) {
  const { card } = agendaConfig;
  const contactLink = buildAgendaContactLink(item);
  const canContact = Boolean(contactLink);
  const contactIcon = item.tipo_contacto === 'telegram' ? <FaTelegramPlane /> : <FaWhatsapp />;
  const detailsPreview = String(item.detalles || '').trim();

  // Se marca como pendiente si no existe una fecha definida
  const isPendiente = !item.fecha;

  return (
    <>
      <style>
        {`
          .agenda-card {
            display: flex;
            flex-direction: column;
            gap: 4px !important; /* Aumentado ligeramente para legibilidad */
            padding: 10px 12px !important; /* Más aire interno */
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.08);
            position: relative;
            transition: background 0.2s ease;
          }

          /* Reset controlado de márgenes */
          .agenda-card h4, 
          .agenda-card p, 
          .agenda-card span {
            margin: 0 !important;
            padding: 0 !important;
            line-height: 1.6 !important; /* Espaciado de línea más natural */
          }

          .agenda-card-subdued {
            background: rgba(255, 255, 255, 0.035);
            border-color: rgba(255, 255, 255, 0.05);
          }

          .agenda-card-header {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            align-items: center;
            gap: 8px;
          }

          .agenda-card-title-row {
            display: flex;
            align-items: baseline;
            gap: 8px;
            flex-wrap: nowrap;
            min-width: 0;
          }

          .agenda-card-header h4 {
            font-size: 1 rem; /* Letra más grande y legible */
            font-weight: 600;
            color: #fff;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .agenda-card-date-badge {
            font-size: 0.75rem; /* Aumentado */
            color: rgba(255, 255, 255, 0.5);
            white-space: nowrap;
            flex-shrink: 0;
          }

          .agenda-card-date-pendiente {
            color: #52e0a0 !important;
            font-weight: 700;
            opacity: 1 !important;
          }

          .agenda-details-preview {
            display: block;
            font-size: 1 rem; /* Más grande para lectura fácil */
            color: rgba(255, 255, 255, 0.4);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .agenda-card-actions {
            display: flex;
            gap: 6px;
            flex-shrink: 0;
          }

          .agenda-card-actions .icon-button {
            padding: 6px;
            font-size: 0.9rem;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.07);
            border: none;
            border-radius: 8px;
            color: #fff;
            cursor: pointer;
          }

          /* Panel Expandido */
          .agenda-card-expanded {
            margin-top: 8px;
            padding-top: 8px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .agenda-card-panel {
            background: rgba(0, 0, 0, 0.2);
            padding: 8px 10px;
            border-radius: 8px;
          }

          .agenda-card-panel strong {
            display: block;
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.4);
            text-transform: uppercase;
            margin-bottom: 2px !important;
          }

          .agenda-card-panel p {
            font-size: 0.85rem;
            color: #f8fafc;
          }
        `}
      </style>

      <article className={`agenda-card ${subdued ? 'agenda-card-subdued' : ''}`}>
        <div className="agenda-card-header">
          <div className="agenda-card-summary">
            <div className="agenda-card-title-row">
              <h4>{item.contacto || card.untitledContact}</h4>
              <span className={`agenda-card-date-badge ${isPendiente ? 'agenda-card-date-pendiente' : ''}`}>
                {formatAgendaDate(item.fecha)}
              </span>
            </div>
            {!!detailsPreview && !expanded && <span className="agenda-details-preview">{detailsPreview}</span>}
          </div>
          <div className="agenda-card-actions">
            <button
              type="button"
              className="icon-button"
              onClick={() => onToggleView(item.id)}
              disabled={saving}
              title={card.actions.view}
            >
              <FaEye />
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={() => canContact && window.open(contactLink, '_blank', 'noopener,noreferrer')}
              disabled={saving || !canContact}
              title={card.actions.contact}
            >
              {contactIcon}
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={() => onEdit(item)}
              disabled={saving}
              title={card.actions.edit}
            >
              <FaPen />
            </button>
          </div>
        </div>

        {expanded && (
          <div className="agenda-card-expanded">
            <div className="agenda-card-panel">
              <strong>{card.labels.date}</strong>
              <p>{formatAgendaDate(item.fecha)}</p>
            </div>
            <div className="agenda-card-panel">
              <strong>{card.labels.details}</strong>
              <p>{item.detalles || 'Sin detalles.'}</p>
            </div>
          </div>
        )}
      </article>
    </>
  );
}

export default AgendaCard;