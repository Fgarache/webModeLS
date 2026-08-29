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
            gap: 4px !important;
            padding: 12px 14px !important;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(82, 224, 160, 0.34);
            box-shadow: 0 0 0 1px rgba(82, 224, 160, 0.12), 0 10px 24px rgba(0, 0, 0, 0.16);
            position: relative;
            transition: all 0.2s ease;
          }

          .agenda-card-subdued {
            opacity: 0.72;
            filter: grayscale(0.08) saturate(0.82);
            border-color: rgba(255, 255, 255, 0.08) !important;
            background: rgba(255, 255, 255, 0.055) !important;
          }

          .agenda-card-subdued .agenda-card-deposit-badge,
          .agenda-card-subdued .agenda-card-date-badge,
          .agenda-card-subdued .agenda-details-preview,
          .agenda-card-subdued .agenda-card-panel p,
          .agenda-card-subdued .agenda-card-panel strong,
          .agenda-card-subdued .agenda-card-actions .icon-button {
            opacity: 0.9;
          }

          .agenda-card-subdued .agenda-card-actions .icon-button {
            background: rgba(255, 255, 255, 0.07);
            border-color: rgba(255, 255, 255, 0.08);
          }

          .agenda-card h4, 
          .agenda-card p, 
          .agenda-card span {
            margin: 0 !important;
            padding: 0 !important;
            line-height: 1.4 !important;
          }

          .agenda-card-header {
            display: grid;
            grid-template-columns: minmax(0, 1fr) auto;
            align-items: center;
            gap: 10px;
          }

          .agenda-card-summary {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;
          }

          .agenda-card-title-row {
            display: flex;
            align-items: center;
            gap: 4px 8px;
            flex-wrap: wrap;
            min-width: 0;
          }

          .agenda-card-header h4 {
            font-size: 1rem;
            font-weight: 700;
            color: #fff;
            word-break: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          /* ESTILO DEL DEPÓSITO EN LA TARJETA */
          .agenda-card-deposit-badge {
            font-size: 0.7rem;
            font-weight: 800;
            color: #52e0a0;
            background: rgba(82, 224, 160, 0.12);
            padding: 2px 6px;
            border-radius: 6px;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .agenda-card-date-badge {
            font-size: 0.75rem;
            color: rgba(255, 255, 255, 0.4);
            white-space: nowrap;
            flex-shrink: 0;
          }

          .agenda-card-date-pendiente {
            color: #6366f1 !important;
            font-weight: 700;
          }

          .agenda-details-preview {
            display: block;
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.35);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .agenda-card-actions {
            display: flex;
            gap: 6px;
          }

          .agenda-card-actions .icon-button {
            padding: 0;
            width: 2.2rem;
            height: 2.2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            color: #fff;
            cursor: pointer;
            font-size: 0.95rem;
          }

          /* Panel Expandido */
          .agenda-card-expanded {
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .agenda-card-panel {
            background: rgba(0, 0, 0, 0.15);
            padding: 10px;
            border-radius: 10px;
          }

          .agenda-card-panel.full-width {
            grid-column: span 2;
          }

          .agenda-card-panel strong {
            display: block;
            font-size: 0.65rem;
            color: rgba(255, 255, 255, 0.4);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 4px !important;
          }

          .agenda-card-panel p {
            font-size: 0.9rem;
            color: #f1f5f9;
            font-weight: 500;
          }

          .deposit-text {
            color: #52e0a0 !important;
            font-weight: 700 !important;
          }
        `}
      </style>

      <article className={`agenda-card ${subdued ? 'agenda-card-subdued' : ''}`}>
        <div className="agenda-card-header">
          <div className="agenda-card-summary">
            <div className="agenda-card-title-row">
              <h4>{item.contacto || card.untitledContact}</h4>
              
              {/* MUESTRA EL DEPÓSITO SI ES MAYOR A 0 */}
              {Number(item.deposito) > 0 && (
                <span className="agenda-card-deposit-badge">
                  Q{item.deposito}
                </span>
              )}

              {!isPendiente && (
                <span className="agenda-card-date-badge">
                  {formatAgendaDate(item.fecha)}
                </span>
              )}
            </div>
            {!!detailsPreview && !expanded && <span className="agenda-details-preview">{detailsPreview}</span>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
            {isPendiente && (
              <span style={{ fontSize: '0.65rem', color: '#6366f1', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Pendiente
              </span>
            )}
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
        </div>

        {/* DETALLES EXPANDIDOS */}
        {expanded && (
          <div className="agenda-card-expanded">
            <div className="agenda-card-panel">
              <strong>Depósito</strong>
              <p className="deposit-text">Q{Number(item.deposito || 0).toFixed(2)}</p>
            </div>
            <div className="agenda-card-panel">
              <strong>Fecha y Hora</strong>
              <p>{formatAgendaDate(item.fecha)}</p>
            </div>
            <div className="agenda-card-panel full-width">
              <strong>Detalles</strong>
              <p>{item.detalles || 'Sin notas adicionales.'}</p>
            </div>
            {item.creado_en && (
              <div className="agenda-card-panel full-width">
                <strong>Registro creado el</strong>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.55)', fontWeight: 'normal' }}>
                  {new Date(item.creado_en).toLocaleString('es-GT', { dateStyle: 'medium', timeStyle: 'short' })}
                </p>
              </div>
            )}
          </div>
        )}
      </article>
    </>
  );
}

export default AgendaCard;