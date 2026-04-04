import { FaEye, FaPen, FaTelegramPlane, FaTrash, FaWhatsapp } from 'react-icons/fa';
import agendaConfig from '../agenda.config.js';
import { buildAgendaContactLink, formatAgendaDate } from '../agenda.utils.js';

function AgendaCard({ item, expanded, saving, subdued = false, onDelete, onEdit, onToggleView }) {
  const { card } = agendaConfig;
  const contactLink = buildAgendaContactLink(item);
  const canContact = Boolean(contactLink);
  const contactIcon = item.tipo_contacto === 'telegram' ? <FaTelegramPlane /> : <FaWhatsapp />;

  return (
    <article className={`agenda-card ${subdued ? 'agenda-card-subdued' : ''}`}>
      <div className="agenda-card-header">
        <div>
          <h4>{item.contacto || card.untitledContact}</h4>
          <p>{formatAgendaDate(item.fecha)}</p>
        </div>
        <div className="agenda-card-actions">
          <button type="button" className="icon-button" onClick={() => onToggleView(item.id)} disabled={saving} title={card.actions.view} aria-label={card.actions.view}>
            <FaEye />
          </button>
          <button
            type="button"
            className="icon-button"
            onClick={() => canContact && window.open(contactLink, '_blank', 'noopener,noreferrer')}
            disabled={saving || !canContact}
            title={card.actions.contact}
            aria-label={card.actions.contact}
          >
            {contactIcon}
          </button>
        </div>
      </div>

      {expanded && (
        <>
          <div className="agenda-card-expanded-actions">
            <button type="button" className="icon-button" onClick={() => onEdit(item)} disabled={saving} title={card.actions.edit} aria-label={card.actions.edit}>
              <FaPen />
            </button>
            <button type="button" className="icon-button danger" onClick={() => onDelete(item)} disabled={saving} title={card.actions.delete} aria-label={card.actions.delete}>
              <FaTrash />
            </button>
          </div>

          <div className="agenda-card-expanded">
            <div className="agenda-card-panel compact">
              <strong>Tipo</strong>
              <p>{item.tipo_contacto || '-'}</p>
            </div>
            <div className="agenda-card-panel compact">
              <strong>Deposito</strong>
              <p>{item.deposito || '-'}</p>
            </div>
            <div className="agenda-card-panel compact">
              <strong>{card.labels.date}</strong>
              <p>{formatAgendaDate(item.fecha)}</p>
            </div>
            <div className="agenda-card-panel compact agenda-card-expanded-full">
              <strong>Detalles</strong>
              <p>{item.detalles || 'Sin detalles.'}</p>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

export default AgendaCard;