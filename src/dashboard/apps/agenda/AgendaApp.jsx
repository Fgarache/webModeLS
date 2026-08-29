import { useMemo, useState, useEffect, useRef } from 'react';
import { useAuth } from '../../../auth/AuthContext.jsx';
import agendaConfig from './agenda.config.js';
import './agenda.css';
import useAgenda from './hooks/useAgenda.js';
import ModalCrearAgenda from './components/ModalCrearAgenda.jsx';
import AgendaCard from './components/AgendaCard.jsx';
import ModalConfirmarAgenda from './components/ModalConfirmarAgenda.jsx';
import AgendaSkeleton from './components/AgendaSkeleton.jsx';
import { createEmptyAgendaForm, splitAgendaByTime, splitAgendaDateTime } from './agenda.utils.js';
import AppSectionHeader from '../../components/AppSectionHeader.jsx';
import FloatingActionButton from '../../components/FloatingActionButton.jsx';

function AgendaApp() {
  const { user } = useAuth();
  const { header } = agendaConfig;
  const { agendaItems, loading, saving, error, saveAgenda, deleteAgenda } = useAgenda(user);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingAgendaId, setEditingAgendaId] = useState(null);
  const [agendaForm, setAgendaForm] = useState(() => createEmptyAgendaForm());
  const [deletingItem, setDeletingItem] = useState(null);
  const [expandedAgendaId, setExpandedAgendaId] = useState(null);
  const [pastLimit, setPastLimit] = useState(10);
  const [showPast, setShowPast] = useState(false);
  const loaderRef = useRef(null);

  const { upcoming, past } = useMemo(() => {
    const split = splitAgendaByTime(agendaItems);
    return {
      upcoming: [...split.today, ...split.tomorrow, ...split.upcoming],
      past: split.past
    };
  }, [agendaItems]);

  const pastToDisplay = past.slice(0, pastLimit);
  const hasMorePast = pastLimit < past.length;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMorePast) {
        setPastLimit((prev) => prev + 10);
      }
    }, { rootMargin: '200px' });
    
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
    
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMorePast, showPast]);

  const openCreateModal = () => {
    setEditingAgendaId(null);
    setAgendaForm(createEmptyAgendaForm());
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingAgendaId(item.id);
    const { fecha_dia, fecha_hora, fecha_minutos, fecha_periodo } = splitAgendaDateTime(item.fecha);
    setAgendaForm({
      contacto: item.contacto || '',
      tipo_contacto: item.tipo_contacto || 'whatsapp',
      deposito: item.deposito || '',
      fecha_dia,
      fecha_hora,
      fecha_minutos,
      fecha_periodo,
      fecha_activa: !!item.fecha,
      detalles: item.detalles || '',
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    if (saving) return;
    setModalOpen(false);
    setEditingAgendaId(null);
    setAgendaForm(createEmptyAgendaForm());
  };

  const handleFieldChange = (field, value) => {
    setAgendaForm((current) => ({ ...current, [field]: value }));
  };

  const handleSave = async () => {
    const success = await saveAgenda({ editingAgendaId, form: agendaForm });
    if (success) closeModal();
  };

  const handleDeleteFromEdit = () => {
    if (!editingAgendaId || saving) return;
    const currentItem = agendaItems.find((item) => item.id === editingAgendaId);
    if (!currentItem) return;
    setModalOpen(false);
    setDeletingItem(currentItem);
  };

  const toggleExpanded = (agendaId) => {
    setExpandedAgendaId((current) => (current === agendaId ? null : agendaId));
  };

  const closeDeleteModal = () => {
    if (saving) return;
    setDeletingItem(null);
  };

  const confirmDelete = async () => {
    if (!deletingItem) return;
    const success = await deleteAgenda(deletingItem.id);
    if (success) closeDeleteModal();
  };

  const renderSkeletons = (count) => (
    <div className="agenda-list">
      {Array.from({ length: count }).map((_, i) => (
        <AgendaSkeleton key={`skel-${i}`} />
      ))}
    </div>
  );

  return (
    <section className="agenda-app">
      <AppSectionHeader 
        title={header.title} 
        addLabel={header.addButton}
        helpTitle={header.helpTitle} 
        helpText={header.helpText} 
        onAdd={openCreateModal}
        addDisabled={saving || !user?.uid} 
      />

      {!loading && error && <div className="agenda-error">{error}</div>}
      {!loading && !agendaItems.length && !error && <div className="agenda-status">{header.emptyText}</div>}

      {(loading || upcoming.length > 0) && (
        <section className="agenda-section">
          <h4 className="agenda-section-title">{header.upcomingSection}</h4>
          {loading ? (
            renderSkeletons(3)
          ) : (
            <div className="agenda-list">
              {upcoming.map((item) => (
                <AgendaCard key={item.id} item={item} expanded={expandedAgendaId === item.id} saving={saving} onEdit={openEditModal} onToggleView={toggleExpanded} />
              ))}
            </div>
          )}
        </section>
      )}

      {(loading || past.length > 0) && (
        <section className="agenda-section agenda-section-past">
          <h4 className="agenda-section-title">{header.pastSection}</h4>
          {loading ? (
            renderSkeletons(2)
          ) : !showPast ? (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '12px', paddingBottom: '20px' }}>
              <button 
                onClick={() => setShowPast(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgba(255, 255, 255, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  width: '100%'
                }}
              >
                Ver agendas pasadas
              </button>
            </div>
          ) : (
            <div className="agenda-list">
              {pastToDisplay.map((item) => (
                <AgendaCard key={item.id} item={item} expanded={expandedAgendaId === item.id} subdued saving={saving} onEdit={openEditModal} onToggleView={toggleExpanded} />
              ))}
              {hasMorePast && <div ref={loaderRef} style={{ height: '20px', width: '100%' }}></div>}
            </div>
          )}
        </section>
      )}

      <FloatingActionButton ariaLabel={header.addButton} title={header.addButton} onClick={openCreateModal} disabled={saving || !user?.uid} />

      <ModalCrearAgenda open={modalOpen} editing={Boolean(editingAgendaId)} form={agendaForm} saving={saving} error={error} onChange={handleFieldChange} onDelete={handleDeleteFromEdit} onClose={closeModal} onSubmit={handleSave} />
      <ModalConfirmarAgenda open={Boolean(deletingItem)} item={deletingItem} saving={saving} onClose={closeDeleteModal} onConfirm={confirmDelete} />
    </section>
  );
}

export default AgendaApp;