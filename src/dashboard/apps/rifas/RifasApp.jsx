import { useMemo, useState } from 'react';
import { useAuth } from '../../../auth/AuthContext.jsx';
import ModalConfirmarRifa from './components/ModalConfirmarRifa.jsx';
import ModalCompraRifa from './components/ModalCompraRifa.jsx';
import ModalCrearRifa from './components/ModalCrearRifa.jsx';
import ModalDetalleNumero from './components/ModalDetalleNumero.jsx';
import ModalNumeroOcupado from './components/ModalNumeroOcupado.jsx';
import RifaCard from './components/RifaCard.jsx';
import rifasConfig from './rifas.config.js';
import './rifas.css';
import useRifas from './hooks/useRifas.js';
import { buildContactLink, createEmptyCompraForm, createEmptyRifaForm, mapToMultilineText, splitRifasByVisibility } from './rifas.utils.js';

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
  const [occupiedActionData, setOccupiedActionData] = useState(null);
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

  const openCompraModal = (rifaId, numberKey, numberLabel, purchase = null) => {
    setOccupiedActionData(null);
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

  const openOccupiedActions = (rifa, numberKey, numberLabel, purchase) => {
    setOccupiedViewData(null);
    setOccupiedActionData({
      rifaId: rifa.id,
      rifaTitle: rifa.titulo || 'Sin titulo',
      numberKey,
      numberLabel,
      purchase,
    });
  };

  const closeOccupiedActions = () => {
    if (saving) {
      return;
    }

    setOccupiedActionData(null);
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

  const handleContactOccupied = () => {
    const link = buildContactLink(occupiedActionData?.purchase?.canal, occupiedActionData?.purchase?.contacto);

    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleEditOccupied = () => {
    if (!occupiedActionData) {
      return;
    }

    openCompraModal(
      occupiedActionData.rifaId,
      occupiedActionData.numberKey,
      occupiedActionData.numberLabel,
      occupiedActionData.purchase
    );
  };

  const handleViewOccupied = () => {
    if (!occupiedActionData) {
      return;
    }

    setOccupiedViewData(occupiedActionData);
  };

  const handleDeleteOccupied = () => {
    if (!occupiedActionData) {
      return;
    }

    setConfirmState({
      title: confirm.deleteCompraTitle,
      message: `Se eliminara la compra del numero #${occupiedActionData.numberLabel}.`,
      confirmLabel: confirm.deleteCompraLabel,
      onConfirm: async () => {
        const success = await deleteCompra({
          rifaId: occupiedActionData.rifaId,
          numberKey: occupiedActionData.numberKey,
        });

        if (success) {
          setConfirmState(null);
          setOccupiedActionData(null);
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
      <div className="rifas-header-row">
        <div className="rifas-header">
          <h3>{header.title}</h3>
          <p>{header.description}</p>
        </div>
        <button type="button" className="primary-button" onClick={openRifaModal} disabled={saving || !user?.uid}>
          {header.addButton}
        </button>
      </div>

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
                onOpenOccupiedActions={openOccupiedActions}
                onToggleViewRifa={toggleViewRifa}
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
                onOpenOccupiedActions={openOccupiedActions}
                onToggleViewRifa={toggleViewRifa}
              />
            ))}
          </div>
        </section>
      )}

      {!loading && !archivedRifas.length && !!activeRifas.length && <div className="rifas-status">{header.archivedEmptyText}</div>}

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

      <ModalCompraRifa
        open={compraModalOpen}
        editing={editingCompra}
        rifa={selectedRifa}
        selectedNumber={selectedNumber}
        form={compraForm}
        saving={saving}
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

      <ModalNumeroOcupado
        open={Boolean(occupiedActionData)}
        data={occupiedActionData}
        saving={saving}
        onClose={closeOccupiedActions}
        onContact={handleContactOccupied}
        onView={handleViewOccupied}
        onEdit={handleEditOccupied}
        onDelete={handleDeleteOccupied}
      />

      <ModalDetalleNumero
        open={Boolean(occupiedViewData)}
        data={occupiedViewData}
        saving={saving}
        onClose={closeOccupiedView}
      />
    </section>
  );
}

export default RifasApp;