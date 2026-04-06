import { useState } from 'react';
import ModalEliminar from '../agenda-tours/components/ModalEliminar.jsx';
import TextInfoModal from '../../components/TextInfoModal.jsx';
import redesConfig from './redes.config.js';
import './redes.css';
import useRedes from './hooks/useRedes.js';
import ModalRed from './components/ModalRed.jsx';
import RedCard from './components/RedCard.jsx';

function RedesApp({ user, profile, onUpdateProfile }) {
  const { error, redes, saving, addRed, updateRed, deleteRed } = useRedes(user, profile, onUpdateProfile);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editingRed, setEditingRed] = useState(null);
  const [deletingRed, setDeletingRed] = useState(null);

  const closeAddModal = () => {
    if (saving) {
      return;
    }

    setAddModalOpen(false);
  };

  const closeEditModal = () => {
    if (saving) {
      return;
    }

    setEditingRed(null);
  };

  const closeDeleteModal = () => {
    if (saving) {
      return;
    }

    setDeletingRed(null);
  };

  const handleAddRed = async (draft) => {
    const success = await addRed(draft);
    if (success) {
      closeAddModal();
    }
    return success;
  };

  const handleUpdateRed = async (draft) => {
    if (!editingRed) {
      return false;
    }

    const success = await updateRed(editingRed.id, draft);
    if (success) {
      closeEditModal();
    }
    return success;
  };

  const handleDeleteRed = async () => {
    if (!deletingRed) {
      return;
    }

    const success = await deleteRed(deletingRed.id);
    if (success) {
      closeDeleteModal();
    }
  };

  return (
    <section className="redes-app">
      <div className="redes-header">
        <div className="redes-header-copy">
          <h3>{redesConfig.title}</h3>
          <p>{redesConfig.description}</p>
        </div>
        <div className="info-trigger-group">
          <button type="button" className="primary-button" onClick={() => setAddModalOpen(true)} disabled={saving}>
            {redesConfig.labels.add}
          </button>
          <TextInfoModal
            title={redesConfig.help.title}
            paragraphs={redesConfig.help.text}
            buttonLabel={`Explicacion de ${redesConfig.title}`}
          />
        </div>
      </div>

      {error && <div className="redes-error">{error}</div>}

      {!redes.length && !error && <div className="redes-empty">{redesConfig.labels.empty}</div>}

      {!!redes.length && (
        <div className="redes-grid">
          {redes.map((red) => (
            <RedCard
              key={red.id}
              red={red}
              saving={saving}
              onEdit={setEditingRed}
              onDelete={setDeletingRed}
            />
          ))}
        </div>
      )}

      <ModalRed
        open={addModalOpen}
        saving={saving}
        mode="add"
        initialValue={null}
        onClose={closeAddModal}
        onSave={handleAddRed}
      />

      <ModalRed
        open={Boolean(editingRed)}
        saving={saving}
        mode="edit"
        initialValue={editingRed}
        onClose={closeEditModal}
        onSave={handleUpdateRed}
      />

      <ModalEliminar
        open={Boolean(deletingRed)}
        title={redesConfig.labels.deleteTitle}
        message={redesConfig.labels.deleteMessage}
        confirmLabel={redesConfig.labels.deleteConfirm}
        saving={saving}
        onClose={closeDeleteModal}
        onConfirm={handleDeleteRed}
      />
    </section>
  );
}

export default RedesApp;