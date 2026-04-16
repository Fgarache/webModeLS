import { useMemo, useState } from 'react';
import { useAuth } from '../../../auth/AuthContext.jsx';
import agendaConfig from './agenda.config.js';
import './agenda.css';
import useAgenda from './hooks/useAgenda.js';
import ModalCrearAgenda from './components/ModalCrearAgenda.jsx';
import AgendaCard from './components/AgendaCard.jsx';
import ModalConfirmarAgenda from './components/ModalConfirmarAgenda.jsx';
import { createEmptyAgendaForm, splitAgendaByTime, splitAgendaDateTime } from './agenda.utils.js';
import AppSectionHeader from '../../components/AppSectionHeader.jsx';

function AgendaApp() {
  const { user } = useAuth();
  const { header } = agendaConfig;
  const { agendaItems, loading, saving, error, saveAgenda, deleteAgenda } = useAgenda(user);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingAgendaId, setEditingAgendaId] = useState(null);
  const [agendaForm, setAgendaForm] = useState(() => createEmptyAgendaForm());
  const [deletingItem, setDeletingItem] = useState(null);
  const [expandedAgendaId, setExpandedAgendaId] = useState(null);
  const { upcoming, past } = useMemo(() => splitAgendaByTime(agendaItems), [agendaItems]);

  const openCreateModal = () => {
    setEditingAgendaId(null);
    setAgendaForm(createEmptyAgendaForm());
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setEditingAgendaId(item.id);
    const { fecha_dia, fecha_hora, fecha_minutos, fecha_periodo, fecha_activa } = splitAgendaDateTime(item.fecha);
    setAgendaForm({
      contacto: item.contacto || '',
      tipo_contacto: item.tipo_contacto || 'whatsapp',
      deposito: item.deposito || '',
      fecha_dia,
      fecha_hora,
      fecha_minutos,
      fecha_periodo,
      fecha_activa: item.fecha ? true : false,
      detalles: item.detalles || '',
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    if (saving) {
      return;
    }

    setModalOpen(false);
    setEditingAgendaId(null);
    setAgendaForm(createEmptyAgendaForm());
  };

  const handleFieldChange = (field, value) => {
    setAgendaForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    const success = await saveAgenda({ editingAgendaId, form: agendaForm });
    if (success) {
      closeModal();
    }
  };

  const handleDeleteFromEdit = () => {
    if (!editingAgendaId || saving) {
      return;
    }

    const currentItem = agendaItems.find((item) => item.id === editingAgendaId);
    if (!currentItem) {
      return;
    }

    setModalOpen(false);
    setDeletingItem(currentItem);
  };

  const toggleExpanded = (agendaId) => {
    setExpandedAgendaId((current) => (current === agendaId ? null : agendaId));
  };

  const closeDeleteModal = () => {
    if (saving) {
      return;
    }

    setDeletingItem(null);
  };

  const confirmDelete = async () => {
    if (!deletingItem) {
      return;
    }

    const success = await deleteAgenda(deletingItem.id);
    if (success) {
      closeDeleteModal();
    }
  };

  return (
    <section className="agenda-app">
      <AppSectionHeader title={header.title} addLabel={header.addButton} helpTitle={header.helpTitle} helpText={header.helpText} onAdd={openCreateModal} addDisabled={saving || !user?.uid} />

      {loading && <div className="agenda-status">{header.loadingText}</div>}
      {!loading && error && <div className="agenda-error">{error}</div>}
      {!loading && !agendaItems.length && !error && <div className="agenda-status">{header.emptyText}</div>}

      {!!upcoming.length && (
        <section className="agenda-section">
          <h4 className="agenda-section-title">{header.upcomingSection}</h4>
          <div className="agenda-list">
            {upcoming.map((item) => (
              <AgendaCard key={item.id} item={item} expanded={expandedAgendaId === item.id} saving={saving} onEdit={openEditModal} onToggleView={toggleExpanded} />
            ))}
          </div>
        </section>
      )}

      {!!past.length && (
        <section className="agenda-section agenda-section-past">
          <h4 className="agenda-section-title">{header.pastSection}</h4>
          <div className="agenda-list">
            {past.map((item) => (
              <AgendaCard key={item.id} item={item} expanded={expandedAgendaId === item.id} subdued saving={saving} onEdit={openEditModal} onToggleView={toggleExpanded} />
            ))}
          </div>
        </section>
      )}

      <ModalCrearAgenda
        open={modalOpen}
        editing={Boolean(editingAgendaId)}
        form={agendaForm}
        saving={saving}
        error={error}
        onChange={handleFieldChange}
        onDelete={handleDeleteFromEdit}
        onClose={closeModal}
        onSubmit={handleSave}
      />

      <ModalConfirmarAgenda open={Boolean(deletingItem)} item={deletingItem} saving={saving} onClose={closeDeleteModal} onConfirm={confirmDelete} />
    </section>
  );
}

export default AgendaApp;