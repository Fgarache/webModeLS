import { useMemo, useState } from 'react';
import { useAuth } from '../../../auth/AuthContext.jsx';
import ModalConfirmarRifa from './components/ModalConfirmarRifa.jsx';
import ModalCompraRifa from './components/ModalCompraRifa.jsx';
import ModalCrearRifa from './components/ModalCrearRifa.jsx';
import ModalDetalleNumero from './components/ModalDetalleNumero.jsx';
import ModalGanadoresRifa from './components/ModalGanadoresRifa.jsx';
import RifaCard from './components/RifaCard.jsx';
import rifasConfig from './rifas.config.js';
import './rifas.css';
import useRifas from './hooks/useRifas.js';
import { buildContactLink, createEmptyCompraForm, createEmptyRifaForm, mapToMultilineText, splitRifasByVisibility } from './rifas.utils.js';
import AppSectionHeader from '../../components/AppSectionHeader.jsx';
import FloatingActionButton from '../../components/FloatingActionButton.jsx';

function RifasApp() {
  const { user } = useAuth();
  const { header, confirm } = rifasConfig;
  const { rifas, loading, saving, error, saveRifa, createCompra, updateCompra, deleteCompra, deleteRifa } = useRifas(user);

  const [rifaModalOpen, setRifaModalOpen] = useState(false);
  const [compraModalOpen, setCompraModalOpen] = useState(false);
  const [editingRifaId, setEditingRifaId] = useState(null);
  const [editingCompra, setEditingCompra] = useState(false);
  const [rifaForm, setRifaForm] = useState(() => createEmptyRifaForm());
  const [compraForm, setCompraForm] = useState(() => createEmptyCompraForm());
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [winnerModalOpen, setWinnerModalOpen] = useState(false);
  const [winnerModalData, setWinnerModalData] = useState(null);
  const [winnerText, setWinnerText] = useState('');
  const [occupiedViewData, setOccupiedViewData] = useState(null);
  const [expandedRifaId, setExpandedRifaId] = useState(null);
  const [confirmState, setConfirmState] = useState(null);

  const selectedRifa = useMemo(() => {
    if (!selectedNumber?.rifaId) {
      return null;
    }

    return rifas.find((rifa) => rifa.id === selectedNumber.rifaId) || null;
  }, [rifas, selectedNumber]);

  const { active: activeRifas, archived: archivedRifas } = useMemo(() => splitRifasByVisibility(rifas), [rifas]);

  const openRifaModal = () => {
    setEditingRifaId(null);
    setRifaForm(createEmptyRifaForm());
    setRifaModalOpen(true);
  };

  const openEditRifaModal = (rifa) => {
    setEditingRifaId(rifa.id);
    setRifaForm({
      titulo: rifa.titulo || '',
      detalles: rifa.detalles || '',
      fecha_sorteo: rifa.fecha_sorteo || createEmptyRifaForm().fecha_sorteo,
      hora_sorteo: rifa.hora_sorteo || '20:00',
      activa: rifa.activa !== false,
      terminos_condiciones: rifa.terminos_condiciones || '',
      premios_texto: mapToMultilineText(rifa.premios),
      ganadores_texto: mapToMultilineText(rifa.ganadores),
      precio: String(rifa.precio ?? '0'),
      total_numeros: String(rifa.total_numeros ?? '100'),
    });
    setRifaModalOpen(true);
  };

  const closeRifaModal = () => {
    if (saving) {
      return;
    }

    setRifaModalOpen(false);
    setEditingRifaId(null);
    setRifaForm(createEmptyRifaForm());
  };

  const handleRifaFieldChange = (field, value) => {
    setRifaForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSaveRifa = async () => {
    const success = await saveRifa({ editingRifaId, form: rifaForm });
    if (success) {
      closeRifaModal();
    }
  };

  const openWinnerModal = (rifa) => {
    setWinnerModalData({
      rifaId: rifa.id,
      title: rifa.titulo || 'Sin titulo',
    });
    setWinnerText(mapToMultilineText(rifa.ganadores));
    setWinnerModalOpen(true);
  };

  const closeWinnerModal = () => {
    if (saving) {
      return;
    }

    setWinnerModalOpen(false);
    setWinnerModalData(null);
    setWinnerText('');
  };

  const handleWinnerTextChange = (value) => {
    setWinnerText(value);
  };

  const handleSaveWinners = async () => {
    if (!winnerModalData?.rifaId) {
      return;
    }

    const currentRifa = rifas.find((rifa) => rifa.id === winnerModalData.rifaId);
    if (!currentRifa) {
      return;
    }

    const success = await saveRifa({
      editingRifaId: winnerModalData.rifaId,
      form: {
        titulo: currentRifa.titulo || '',
        detalles: currentRifa.detalles || '',
        fecha_sorteo: currentRifa.fecha_sorteo || createEmptyRifaForm().fecha_sorteo,
        hora_sorteo: currentRifa.hora_sorteo || '20:00',
        activa: currentRifa.activa !== false,
        terminos_condiciones: currentRifa.terminos_condiciones || '',
        premios_texto: mapToMultilineText(currentRifa.premios),
        ganadores_texto: winnerText,
        precio: String(currentRifa.precio ?? '0'),
        total_numeros: String(currentRifa.total_numeros ?? '100'),
      },
    });

    if (success) {
      closeWinnerModal();
    }
  };

  const openCompraModal = (rifaId, numberKey, numberLabel, purchase = null) => {
    setSelectedNumber({ rifaId, numberKey, numberLabel });
    setEditingCompra(Boolean(purchase));
    setCompraForm(
      purchase
        ? {
            lugar: purchase.lugar || '',
            contacto: purchase.contacto || '',
            canal: purchase.canal || 'whatsapp',
            detalles: purchase.detalles || '',
          }
        : createEmptyCompraForm()
    );
    setCompraModalOpen(true);
  };

  const closeCompraModal = () => {
    if (saving) {
      return;
    }

    setCompraModalOpen(false);
    setEditingCompra(false);
    setSelectedNumber(null);
    setCompraForm(createEmptyCompraForm());
  };

  const openOccupiedView = (rifa, numberKey, numberLabel, purchase) => {
    setOccupiedViewData({
      rifaId: rifa.id,
      rifaTitle: rifa.titulo || 'Sin titulo',
      numberKey,
      numberLabel,
      purchase,
    });
  };

  const closeOccupiedView = () => {
    if (saving) {
      return;
    }

    setOccupiedViewData(null);
  };

  const handleCompraFieldChange = (field, value) => {
    setCompraForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSaveCompra = async () => {
    if (!selectedNumber) {
      if (typeof window !== 'undefined') {
        console.error('No se pudo guardar la compra: no hay numero seleccionado.');
      }
      return;
    }

    const success = editingCompra
      ? await updateCompra({
          rifaId: selectedNumber.rifaId,
          numberKey: selectedNumber.numberKey,
          form: compraForm,
        })
      : await createCompra({
          rifaId: selectedNumber.rifaId,
          numberKey: selectedNumber.numberKey,
          numberLabel: selectedNumber.numberLabel,
          form: compraForm,
        });

    if (success) {
      closeCompraModal();
    }
  };

  const handleDeleteCompra = async () => {
    if (!selectedNumber) {
      return;
    }

    const success = await deleteCompra({
      rifaId: selectedNumber.rifaId,
      numberKey: selectedNumber.numberKey,
    });

    if (success) {
      closeCompraModal();
    }
  };

  const handleContactOccupied = (data) => {
    const link = buildContactLink(data?.purchase?.canal, data?.purchase?.contacto);

    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleEditOccupied = (data) => {
    if (!data) {
      return;
    }

    setOccupiedViewData(null);
    openCompraModal(data.rifaId, data.numberKey, data.numberLabel, data.purchase);
  };

  const handleDeleteOccupied = (data) => {
    if (!data) {
      return;
    }

    setOccupiedViewData(null);
    setConfirmState({
      title: confirm.deleteCompraTitle,
      message: `Se eliminara la compra del numero #${data.numberLabel}.`,
      confirmLabel: confirm.deleteCompraLabel,
      onConfirm: async () => {
        const success = await deleteCompra({
          rifaId: data.rifaId,
          numberKey: data.numberKey,
        });

        if (success) {
          setConfirmState(null);
          setOccupiedViewData(null);
        }
      },
    });
  };

  const toggleViewRifa = (rifaId) => {
    setExpandedRifaId((current) => (current === rifaId ? null : rifaId));
  };

  const requestDeleteRifa = (rifa) => {
    setConfirmState({
      title: confirm.deleteRifaTitle,
      message: `Se eliminara la rifa "${rifa.titulo || 'Sin titulo'}" con todos sus numeros ocupados.`,
      confirmLabel: confirm.deleteRifaLabel,
      onConfirm: async () => {
        const success = await deleteRifa(rifa.id);
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
    <section className="rifas-app">
      <AppSectionHeader title={header.title} addLabel={header.addButton} helpTitle={header.helpTitle} helpText={header.helpText} onAdd={openRifaModal} addDisabled={saving || !user?.uid} />

      {loading && <div className="rifas-status">{header.loadingText}</div>}
      {!loading && error && <div className="rifas-error">{error}</div>}
      {!loading && !rifas.length && !error && <div className="rifas-status">{header.emptyText}</div>}

      {!!activeRifas.length && (
        <section className="rifas-section">
          <h4 className="rifas-section-title">{header.activeSection}</h4>
          <div className="rifas-list">
            {activeRifas.map((rifa) => (
              <RifaCard
                key={rifa.id}
                rifa={rifa}
                saving={saving}
                expanded={expandedRifaId === rifa.id}
                onDeleteRifa={requestDeleteRifa}
                onEditRifa={openEditRifaModal}
                onOpenCompra={openCompraModal}
                onOpenOccupiedDetail={openOccupiedView}
                onToggleViewRifa={toggleViewRifa}
                onEditGanador={openWinnerModal}
              />
            ))}
          </div>
        </section>
      )}

      {!loading && !!archivedRifas.length && (
        <section className="rifas-section">
          <h4 className="rifas-section-title">{header.archivedSection}</h4>
          <div className="rifas-list rifas-list-archived">
            {archivedRifas.map((rifa) => (
              <RifaCard
                key={rifa.id}
                rifa={rifa}
                saving={saving}
                expanded={expandedRifaId === rifa.id}
                onDeleteRifa={requestDeleteRifa}
                onEditRifa={openEditRifaModal}
                onOpenCompra={openCompraModal}
                onOpenOccupiedDetail={openOccupiedView}
                onToggleViewRifa={toggleViewRifa}
                onEditGanador={openWinnerModal}
              />
            ))}
          </div>
        </section>
      )}

      {!loading && !archivedRifas.length && !!activeRifas.length && <div className="rifas-status">{header.archivedEmptyText}</div>}

      <FloatingActionButton ariaLabel={header.addButton} title={header.addButton} onClick={openRifaModal} disabled={saving || !user?.uid} />

      <ModalCrearRifa
        open={rifaModalOpen}
        editing={Boolean(editingRifaId)}
        form={rifaForm}
        saving={saving}
        error={error}
        onChange={handleRifaFieldChange}
        onClose={closeRifaModal}
        onSubmit={handleSaveRifa}
      />

      <ModalGanadoresRifa
        open={winnerModalOpen}
        title={winnerModalData?.title}
        form={winnerText}
        saving={saving}
        onChange={handleWinnerTextChange}
        onClose={closeWinnerModal}
        onSubmit={handleSaveWinners}
      />

      <ModalCompraRifa
        open={compraModalOpen}
        editing={editingCompra}
        rifa={selectedRifa}
        selectedNumber={selectedNumber}
        form={compraForm}
        saving={saving}
        error={error}
        onChange={handleCompraFieldChange}
        onClose={closeCompraModal}
        onDelete={handleDeleteCompra}
        onSubmit={handleSaveCompra}
      />

      <ModalConfirmarRifa
        open={Boolean(confirmState)}
        title={confirmState?.title}
        message={confirmState?.message}
        confirmLabel={confirmState?.confirmLabel}
        saving={saving}
        onClose={closeConfirmModal}
        onConfirm={confirmState?.onConfirm}
      />

      <ModalDetalleNumero
        open={Boolean(occupiedViewData)}
        data={occupiedViewData}
        saving={saving}
        onClose={closeOccupiedView}
        onContact={handleContactOccupied}
        onEdit={handleEditOccupied}
        onDelete={handleDeleteOccupied}
      />
    </section>
  );
}

export default RifasApp;