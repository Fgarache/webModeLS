import { useState } from 'react';
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

  const handleDeleteRed = async (redId) => {
    if (!redId) {
      return false;
    }

    const success = await deleteRed(redId);
    if (success) {
      closeEditModal();
    }
    return success;
  };

  return (
    <section className="redes-app">
      <div className="redes-header">
        <div className="redes-header-copy">
          <h3>{redesConfig.title}</h3>
        </div>
        <div className="info-trigger-group">
          <button type="button" className="primary-button" onClick={() => setAddModalOpen(true)} disabled={saving}>
            {redesConfig.labels.add}
          </button>
          <TextInfoModal
            title={redesConfig.help.title}
            paragraphs={redesConfig.help.text}
            buttonLabel={`Explicacion de ${redesConfig.title}`}
            triggerClassName="compact"
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
        onDelete={() => handleDeleteRed(editingRed?.id)}
        onSave={handleUpdateRed}
      />
    </section>
  );
}

export default RedesApp;