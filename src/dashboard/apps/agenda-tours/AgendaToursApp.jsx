import { useMemo, useState } from 'react';
import './agenda-tours.css';
import { useAuth } from '../../../auth/AuthContext.jsx';
import ModalAgenda from './components/ModalAgenda.jsx';
import ModalAgregarTour from './components/ModalAgregarTour.jsx';
import ModalEliminar from './components/ModalEliminar.jsx';
import TourCard from './components/TourCard.jsx';
import agendaToursConfig from './agendaTours.config.js';
import useAgendaTours from './hooks/useAgendaTours.js';
import {
  createEmptyReservationForm,
  createEmptyTourForm,
  splitToursByStatus,
} from './agendaTours.utils.js';
import TextInfoModal from '../../components/TextInfoModal.jsx';

function AgendaToursApp() {
  const { user } = useAuth();
  const { confirmModal, header, messages } = agendaToursConfig;
  const {
    tours,
    loading,
    saving,
    error,
    saveTour,
    createReservation,
    updateReservation,
    deleteReservation,
    deleteTour,
  } = useAgendaTours(user);

  const [tourForm, setTourForm] = useState(() => createEmptyTourForm());
  const [reservationForm, setReservationForm] = useState(() => createEmptyReservationForm());
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [agendaModalOpen, setAgendaModalOpen] = useState(false);
  const [editingTourId, setEditingTourId] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [agendaMode, setAgendaMode] = useState('create');
  const [expandedAgenda, setExpandedAgenda] = useState(null);
  const [expandedTourId, setExpandedTourId] = useState(null);
  const [confirmState, setConfirmState] = useState(null);

  const selectedTour = useMemo(() => {
    if (!selectedSlot?.tourId) {
      return null;
    }

    return tours.find((tour) => tour.id === selectedSlot.tourId) || null;
  }, [selectedSlot, tours]);

  const { current: currentTours, archived: archivedTours } = useMemo(
    () => splitToursByStatus(tours),
    [tours]
  );

  const openCreateTourModal = () => {
    setEditingTourId(null);
    setTourForm(createEmptyTourForm());
    setTourModalOpen(true);
  };

  const openEditTourModal = (tour) => {
    setEditingTourId(tour.id);
    setTourForm({
      titulo: tour.publico?.titulo || '',
      detalles: tour.publico?.detalles || '',
      fecha: tour.publico?.fecha || createEmptyTourForm().fecha,
      activo: tour.publico?.activo !== false,
      disponibles: tour.publico?.disponibles || {},
      ubicacion_maps: tour.publico?.ubicacion_maps || '',
    });
    setTourModalOpen(true);
  };

  const closeTourModal = () => {
    if (saving) {
      return;
    }

    setTourModalOpen(false);
    setEditingTourId(null);
    setTourForm(createEmptyTourForm());
  };

  const handleTourFieldChange = (field, value) => {
    setTourForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleToggleSlot = (hourValue) => {
    const slotKey = `h${hourValue.replace(':', '')}`;

    setTourForm((current) => {
      const nextSlots = { ...(current.disponibles || {}) };

      if (nextSlots[slotKey]) {
        delete nextSlots[slotKey];
      } else {
        nextSlots[slotKey] = hourValue;
      }

      return {
        ...current,
        disponibles: nextSlots,
      };
    });
  };

  const handleRemoveSlot = (slotKey) => {
    setTourForm((current) => {
      const nextSlots = { ...(current.disponibles || {}) };
      delete nextSlots[slotKey];

      return {
        ...current,
        disponibles: nextSlots,
      };
    });
  };

  const handleSaveTour = async () => {
    const success = await saveTour({
      editingTourId,
      form: tourForm,
    });

    if (success) {
      closeTourModal();
    }
  };

  const openAgendaModal = (tourId, slotKey, hour) => {
    setAgendaMode('create');
    setSelectedSlot({ tourId, slotKey, hour });
    setReservationForm(createEmptyReservationForm());
    setAgendaModalOpen(true);
  };

  const toggleViewAgenda = (tourId, slotKey) => {
    setExpandedAgenda((current) => {
      if (current?.tourId === tourId && current?.slotKey === slotKey) {
        return null;
      }

      return { tourId, slotKey };
    });
  };

  const toggleViewTour = (tourId) => {
    setExpandedTourId((current) => (current === tourId ? null : tourId));
  };

  const openEditAgendaModal = (tourId, slotKey, reservation) => {
    setAgendaMode('edit');
    setSelectedSlot({
      tourId,
      slotKey,
      hour: reservation?.hora || '',
      reservation,
    });
    setReservationForm({
      lugar: reservation?.lugar || '',
      contacto: reservation?.contacto || '',
      canal_contacto: reservation?.canal_contacto || 'whatsapp',
      detalle: reservation?.detalle || '',
    });
    setAgendaModalOpen(true);
  };

  const closeAgendaModal = () => {
    if (saving) {
      return;
    }

    setAgendaModalOpen(false);
    setAgendaMode('create');
    setSelectedSlot(null);
    setReservationForm(createEmptyReservationForm());
  };

  const handleReservationFieldChange = (field, value) => {
    setReservationForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSaveReservation = async () => {
    if (!selectedSlot) {
      return;
    }

    const success = agendaMode === 'edit'
      ? await updateReservation({
          tourId: selectedSlot.tourId,
          slotKey: selectedSlot.slotKey,
          form: reservationForm,
          originalReservation: selectedSlot.reservation,
        })
      : await createReservation({
          tourId: selectedSlot.tourId,
          slotKey: selectedSlot.slotKey,
          hour: selectedSlot.hour,
          form: reservationForm,
        });

    if (success) {
      closeAgendaModal();
    }
  };

  const requestDeleteTour = (tour) => {
    const tourTitle = tour.publico?.titulo || agendaToursConfig.tourCard.untitledTour;
    setConfirmState({
      type: 'tour',
      title: confirmModal.deleteTourTitle,
      message: messages.deleteTourMessage(tourTitle),
      confirmLabel: confirmModal.deleteTourLabel,
      onConfirm: async () => {
        const success = await deleteTour(tour.id);
        if (success) {
          setConfirmState(null);
        }
      },
    });
  };

  const requestDeleteReservation = (tour, slotKey, reservation) => {
    const placeName = reservation?.lugar || reservation?.cliente_nombre || 'este horario';
    setConfirmState({
      type: 'agenda',
      title: confirmModal.deleteAgendaTitle,
      message: messages.deleteAgendaMessage(placeName),
      confirmLabel: confirmModal.deleteAgendaLabel,
      onConfirm: async () => {
        const success = await deleteReservation({
          tourId: tour.id,
          slotKey,
          reservation,
        });
        if (success) {
          setConfirmState(null);
        }
      },
    });
  };

  const closeConfirmModal = () => {
    if (saving) {
      return;
    }

    setConfirmState(null);
  };

  return (
    <section className="agenda-tours">
      <div className="agenda-tours-header-row">
        <div className="agenda-tours-header">
          <h3>{header.title}</h3>
        </div>
        <div className="info-trigger-group">
          <button type="button" className="primary-button" onClick={openCreateTourModal} disabled={saving || !user?.uid}>
            {header.addTourButton}
          </button>
          <TextInfoModal
            title={header.helpTitle}
            paragraphs={header.helpText}
            buttonLabel={`Explicacion de ${header.addTourButton}`}
            triggerClassName="compact"
          />
        </div>
      </div>

      {loading && <div className="agenda-tours-status">{header.loadingText}</div>}
      {!loading && error && <div className="agenda-tours-error">{error}</div>}

      {!loading && !tours.length && !error && (
        <div className="agenda-tours-status tour-empty">
          {header.emptyText}
        </div>
      )}

      {!!currentTours.length && (
        <div className="agenda-tours-list">
          {currentTours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              saving={saving}
              expandedTourId={expandedTourId}
              isArchived={false}
              onAddReservation={openAgendaModal}
              onDeleteReservation={requestDeleteReservation}
              expandedAgenda={expandedAgenda}
              onEditReservation={openEditAgendaModal}
              onDeleteTour={requestDeleteTour}
              onEditTour={openEditTourModal}
              onViewReservation={toggleViewAgenda}
              onViewTour={toggleViewTour}
            />
          ))}
        </div>
      )}

      {!!archivedTours.length && (
        <div className="agenda-tours-archived">
          <div className="agenda-tours-subheader">
            <h4>{header.archivedTitle}</h4>
            <p>{header.archivedDescription}</p>
          </div>

          <div className="agenda-tours-list agenda-tours-list-archived">
            {archivedTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                saving={saving}
                expandedTourId={expandedTourId}
                isArchived={true}
                onAddReservation={openAgendaModal}
                onDeleteReservation={requestDeleteReservation}
                expandedAgenda={expandedAgenda}
                onEditReservation={openEditAgendaModal}
                onDeleteTour={requestDeleteTour}
                onEditTour={openEditTourModal}
                onViewReservation={toggleViewAgenda}
                onViewTour={toggleViewTour}
              />
            ))}
          </div>
        </div>
      )}

      <ModalAgregarTour
        open={tourModalOpen}
        editing={Boolean(editingTourId)}
        form={tourForm}
        saving={saving}
        error={error}
        onChange={handleTourFieldChange}
        onClose={closeTourModal}
        onRemoveSlot={handleRemoveSlot}
        onSubmit={handleSaveTour}
        onToggleSlot={handleToggleSlot}
      />

      <ModalAgenda
        open={agendaModalOpen}
        tour={selectedTour}
        slot={selectedSlot}
        form={reservationForm}
        saving={saving}
        onChange={handleReservationFieldChange}
        onClose={closeAgendaModal}
        onSubmit={handleSaveReservation}
      />

      <ModalEliminar
        open={Boolean(confirmState)}
        title={confirmState?.title}
        message={confirmState?.message}
        confirmLabel={confirmState?.confirmLabel}
        saving={saving}
        onClose={closeConfirmModal}
        onConfirm={confirmState?.onConfirm}
      />
    </section>
  );
}

export default AgendaToursApp;