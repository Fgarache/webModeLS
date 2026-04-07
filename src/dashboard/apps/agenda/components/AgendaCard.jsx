import { FaEye, FaPen, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import agendaConfig from '../agenda.config.js';
import { buildAgendaContactLink, formatAgendaDate } from '../agenda.utils.js';

function AgendaCard({ item, expanded, saving, subdued = false, onEdit, onToggleView }) {
  const { card } = agendaConfig;
  const contactLink = buildAgendaContactLink(item);
  const canContact = Boolean(contactLink);
  const contactIcon = item.tipo_contacto === 'telegram' ? <FaTelegramPlane /> : <FaWhatsapp />;
  const detailsPreview = String(item.detalles || '').trim();

  return (
    <article className={`agenda-card ${subdued ? 'agenda-card-subdued' : ''}`}>
      <div className="agenda-card-header">
        <div className="agenda-card-summary">
          <div className="agenda-card-title-row">
            <h4>{item.contacto || card.untitledContact}</h4>
            <span className="agenda-card-date-badge">{formatAgendaDate(item.fecha)}</span>
          </div>
          {!!detailsPreview && !expanded && <span className="agenda-details-preview">{detailsPreview}</span>}
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
          <button type="button" className="icon-button" onClick={() => onEdit(item)} disabled={saving} title={card.actions.edit} aria-label={card.actions.edit}>
            <FaPen />
          </button>
        </div>
      </div>

      {expanded && (
        <>
          <div className="agenda-card-expanded">
            <div className="agenda-card-panel compact agenda-card-panel-row">
              <strong>Tipo</strong>
              <p>{item.tipo_contacto || '-'}</p>
            </div>
            <div className="agenda-card-panel compact agenda-card-panel-row">
              <strong>Deposito</strong>
              <p>{item.deposito || '-'}</p>
            </div>
            <div className="agenda-card-panel compact agenda-card-panel-row">
              <strong>{card.labels.date}</strong>
              <p>{formatAgendaDate(item.fecha)}</p>
            </div>
            <div className="agenda-card-panel compact agenda-card-panel-row">
              <strong>{card.labels.details}</strong>
              <p>{item.detalles || 'Sin detalles.'}</p>
            </div>
          </div>
        </>
      )}
    </article>
  );
}

export default AgendaCard;