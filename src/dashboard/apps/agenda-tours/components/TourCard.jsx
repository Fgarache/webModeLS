import { FaEdit, FaEye, FaPlus, FaTelegramPlane, FaTrashAlt, FaWhatsapp } from 'react-icons/fa';
import {
  buildContactHref,
  formatDateLabel,
  formatHour12,
  getTourLocations,
  getSortedReservations,
  getSortedSlots,
} from '../agendaTours.utils.js';
import agendaToursConfig from '../agendaTours.config.js';
import TextInfoModal from '../../../components/TextInfoModal.jsx';

function TourCard({
  tour,
  saving,
  expandedTourId,
  isArchived,
  onAddReservation,
  onDeleteReservation,
  onDeleteTour,
  expandedAgenda,
  onEditReservation,
  onEditTour,
  onViewReservation,
  onViewTour,
}) {
  const { tourCard } = agendaToursConfig;
  const availableSlots = getSortedSlots(tour.publico?.disponibles);
  const reservations = getSortedReservations(tour.privado?.reservados);
  const locations = getTourLocations(tour.publico?.ubicacion_maps);
  const isTourExpanded = expandedTourId === tour.id;
  const timeline = [
    ...availableSlots.map(([slotKey, hourValue]) => ({
      type: 'available',
      slotKey,
      hour: hourValue,
    })),
    ...reservations.map(([slotKey, reservation]) => ({
      type: 'reserved',
      slotKey,
      hour: reservation?.hora || '',
      reservation,
    })),
  ].sort((left, right) => left.hour.localeCompare(right.hour));

  return (
    <article className={`tour-card ${isArchived ? 'tour-card-inactive' : ''}`}>
      <div className="tour-card-header">
        <div>
          <h4>{tour.publico?.titulo || tourCard.untitledTour}</h4>
        </div>

        <div className="tour-meta">
          <span>{formatDateLabel(tour.publico?.fecha)}</span>
          <div className="tour-actions-row">
            <button type="button" className="icon-button tour-action-icon" onClick={() => onViewTour(tour.id)} disabled={saving} title={tourCard.viewTour}>
              <FaEye />
            </button>
            <button type="button" className="icon-button tour-action-icon" onClick={() => onEditTour(tour)} disabled={saving} title={tourCard.editTour}>
              <FaEdit />
            </button>
            <button type="button" className="icon-button icon-button-danger tour-action-icon" onClick={() => onDeleteTour(tour)} disabled={saving} title={tourCard.deleteTour}>
              <FaTrashAlt />
            </button>
          </div>
        </div>
      </div>

      {isTourExpanded && (
        <section className="tour-panel tour-details-panel">
          <div className="agenda-inline-grid">
            <div className="agenda-inline-full">
              <span className="agenda-inline-label">{tourCard.labels.details}</span>
              <strong>{tour.publico?.detalles || tourCard.emptyDetails}</strong>
            </div>
            <div className="agenda-inline-full">
              <span className="agenda-inline-label">{tourCard.labels.locations}</span>
              {!!locations.length ? (
                <div className="tour-location-list">
                  {locations.map((location, index) => {
                    const isUrl = /^https?:\/\//i.test(location);

                    return isUrl ? (
                      <a key={`${tour.id}-location-${index}`} href={location} target="_blank" rel="noreferrer" className="tour-location-item">
                        {location}
                      </a>
                    ) : (
                      <span key={`${tour.id}-location-${index}`} className="tour-location-item">
                        {location}
                      </span>
                    );
                  })}
                </div>
              ) : (
                <strong>{tourCard.noLocations}</strong>
              )}
            </div>
          </div>
        </section>
      )}

      {isArchived ? (
        <section className="tour-panel tour-panel-archived">
          <p className="tour-empty">{tourCard.archivedScheduleText}</p>
        </section>
      ) : (
        <section className="tour-panel">
          <h5>{tourCard.scheduleTitle}</h5>
          {!timeline.length && <p className="tour-empty">{tourCard.emptySchedule}</p>}
          {!!timeline.length && (
            <div className="slot-board">
            {timeline.map((entry) => {
              if (entry.type === 'available') {
                return (
                  <div key={entry.slotKey} className="slot-card slot-card-available slot-row">
                    <div className="slot-row-main">
                      <strong>{formatHour12(entry.hour)}</strong>
                    </div>
                    <div className="slot-card-actions">
                      <button
                        type="button"
                        className="icon-button"
                        title={tourCard.actions.addReservation}
                        onClick={() => onAddReservation(tour.id, entry.slotKey, entry.hour)}
                        disabled={saving}
                      >
                        <FaPlus />
                      </button>
                      <TextInfoModal
                        title={tourCard.actions.addReservationHelpTitle}
                        paragraphs={tourCard.actions.addReservationHelpText}
                        buttonLabel={tourCard.actions.addReservationHelpTitle}
                        triggerClassName="compact"
                      />
                    </div>
                  </div>
                );
              }

              const contactHref = buildContactHref(entry.reservation);

              return (
                <div key={entry.slotKey} className="slot-stack">
                  <div className="slot-card slot-card-reserved slot-row">
                    <div className="slot-row-main">
                      <strong>{formatHour12(entry.hour)}</strong>
                    </div>
                    <div className="slot-card-actions">
                      <button
                        type="button"
                        className="icon-button"
                        title={tourCard.actions.viewReservation}
                        onClick={() => onViewReservation(tour.id, entry.slotKey, entry.reservation)}
                        disabled={saving}
                      >
                        <FaEye />
                      </button>
                      {contactHref && (
                        <a
                          className="icon-button"
                          title={tourCard.actions.openContact}
                          href={contactHref}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {entry.reservation?.canal_contacto === 'telegram' ? <FaTelegramPlane /> : <FaWhatsapp />}
                        </a>
                      )}
                    </div>
                  </div>

                  {expandedAgenda?.tourId === tour.id && expandedAgenda?.slotKey === entry.slotKey && (
                    <div className="agenda-inline-panel">
                      <div className="agenda-inline-grid">
                        <div>
                          <span className="agenda-inline-label">{tourCard.labels.place}</span>
                          <strong>{entry.reservation?.lugar || entry.reservation?.cliente_nombre || tourCard.noPlace}</strong>
                        </div>
                        <div>
                          <span className="agenda-inline-label">{tourCard.labels.contact}</span>
                          <strong>{entry.reservation?.contacto || tourCard.noContact}</strong>
                        </div>
                        <div>
                          <span className="agenda-inline-label">{tourCard.labels.channel}</span>
                          <strong>{entry.reservation?.canal_contacto || 'whatsapp'}</strong>
                        </div>
                        <div>
                          <span className="agenda-inline-label">{tourCard.labels.time}</span>
                          <strong>{formatHour12(entry.reservation?.hora)}</strong>
                        </div>
                        <div className="agenda-inline-full">
                          <span className="agenda-inline-label">{tourCard.labels.detail}</span>
                          <strong>{entry.reservation?.detalle || tourCard.noDetail}</strong>
                        </div>
                      </div>

                      <div className="agenda-inline-actions">
                        <button
                          type="button"
                          className="icon-button"
                          title={tourCard.actions.editReservation}
                          onClick={() => onEditReservation(tour.id, entry.slotKey, entry.reservation)}
                          disabled={saving}
                        >
                          <FaEdit />
                        </button>
                        <button
                          type="button"
                          className="icon-button icon-button-danger"
                          title={tourCard.actions.deleteReservation}
                          onClick={() => onDeleteReservation(tour, entry.slotKey, entry.reservation)}
                          disabled={saving}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            </div>
          )}
        </section>
      )}
    </article>
  );
}

export default TourCard;