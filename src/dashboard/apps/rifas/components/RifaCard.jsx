import { useMemo } from 'react';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import rifasConfig from '../rifas.config.js';
import { buildNumbers, formatDateLabel, formatHour12, getRifaStatus } from '../rifas.utils.js';

function RifaCard({ rifa, saving, expanded, onDeleteRifa, onEditRifa, onOpenCompra, onOpenOccupiedActions, onToggleViewRifa, onEditGanador }) {
  const { card } = rifasConfig;
  const status = getRifaStatus(rifa);
  const statusLabel =
    status === 'inactive'
      ? card.inactiveStatus
      : status === 'expired'
        ? card.expiredStatus
        : status === 'soldout'
          ? card.soldOutStatus
          : card.activeStatus;

  const numbers = useMemo(
    () => buildNumbers(rifa.total_numeros, rifa.numeros_ocupados),
    [rifa.numeros_ocupados, rifa.total_numeros]
  );

  const prizes = Object.values(rifa.premios || {});
  const winners = Object.values(rifa.ganadores || {});

  return (
    <article className="rifa-card">
      <div className="rifa-card-header">
        <div className="rifa-date-only">
          <span>{card.drawDate}: {formatDateLabel(rifa.fecha_sorteo)}</span>
        </div>

        <div className="rifa-meta">
          <div className="rifa-card-actions">
            <button
              type="button"
              className="icon-button"
              onClick={() => onToggleViewRifa(rifa.id)}
              disabled={saving}
              aria-label={card.actions.view}
              title={card.actions.view}
            >
              <FaEye />
            </button>
            <button
              type="button"
              className="icon-button"
              onClick={() => onEditRifa(rifa)}
              disabled={saving}
              aria-label={card.actions.edit}
              title={card.actions.edit}
            >
              <FaPen />
            </button>
            <button
              type="button"
              className="icon-button danger"
              onClick={() => onDeleteRifa(rifa)}
              disabled={saving}
              aria-label={card.actions.delete}
              title={card.actions.delete}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>

      <section className="rifa-panel">
        {expanded && (
          <div className="rifa-purchased-block">
            <div className="rifa-expanded-info">
              <div className="rifa-expanded-section rifa-expanded-hero">
                <strong>{rifa.titulo || card.untitled}</strong>
                <p>{rifa.detalles || card.emptyDetails}</p>
              </div>
              <div className="rifa-expanded-grid">
                <div className="rifa-expanded-section compact">
                  <strong>{card.drawTime}</strong>
                  <p>{formatHour12(rifa.hora_sorteo) || card.detailFallback}</p>
                </div>
                <div className="rifa-expanded-section compact">
                  <strong>{card.createdDate}</strong>
                  <p>{rifa.creado_en ? formatDateLabel(rifa.creado_en.split('T')[0]) : 'Sin fecha'}</p>
                </div>
                <div className="rifa-expanded-section compact">
                  <strong>{card.status}</strong>
                  <p>{statusLabel}</p>
                </div>
                <div className="rifa-expanded-section compact">
                  <strong>{card.price}</strong>
                  <p>Q{Number(rifa.precio || 0).toFixed(2)}</p>
                </div>
                <div className="rifa-expanded-section compact">
                  <strong>{card.totalNumbers}</strong>
                  <p>{rifa.total_numeros}</p>
                </div>
              </div>
              <div className="rifa-expanded-section compact-block">
                <strong>{card.labels.terms}</strong>
                <p>{rifa.terminos_condiciones || card.detailFallback}</p>
              </div>
              <div className="rifa-expanded-section compact-block">
                <strong>{card.labels.prizes}</strong>
                {prizes.length ? (
                  <ul className="rifa-inline-list">
                    {prizes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{card.detailFallback}</p>
                )}
              </div>
              <div className="rifa-expanded-section compact-block">
                <strong>{card.labels.winners}</strong>
                {winners.length ? (
                  <ul className="rifa-inline-list">
                    {winners.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{card.detailFallback}</p>
                )}
                <button
                  type="button"
                  className="primary-button"
                  style={{marginTop: 8}}
                  onClick={() => onEditGanador(rifa)}
                  disabled={saving}
                >
                  {winners.length ? 'Editar ganador' : 'Agregar ganador'}
                </button>
              </div>
            </div>

          </div>
        )}

        <div className="rifa-panel-header">
          <h5>{card.availableTitle}</h5>
        </div>
        <p className="rifa-number-legend">{card.numberLegend}</p>

        <div className="rifa-numbers-grid">
          {numbers.map((numberItem) => (
            <button
              key={numberItem.key}
              type="button"
              className={`rifa-number-chip ${numberItem.occupied ? 'occupied' : ''}`}
              onClick={() =>
                numberItem.occupied
                  ? onOpenOccupiedActions(rifa, numberItem.key, numberItem.label, rifa.compras?.[numberItem.key] || null)
                  : onOpenCompra(rifa.id, numberItem.key, numberItem.label, null)
              }
              disabled={saving}
            >
              {numberItem.occupied ? 'X' : numberItem.label}
            </button>
          ))}
        </div>
      </section>
    </article>
  );
}

export default RifaCard;