import { useState } from 'react';
import mediaConfig from './media.config.js';
import './media.css';
import useMediaLibrary from './hooks/useMediaLibrary.js';
import ModalEditarFoto from './components/ModalEditarFoto.jsx';
import ModalSubirFoto from './components/ModalSubirFoto.jsx';
import PhotoCard from './components/PhotoCard.jsx';
import ModalVistaFoto from './components/ModalVistaFoto.jsx';
import AppSectionHeader from '../../components/AppSectionHeader.jsx';

function MediaApp({ user, profile, onUpdateProfile }) {
  const { error, maxPhotosReached, photos, saving, uploadPhoto, updatePhotoTitle, deletePhoto, setProfilePhoto } = useMediaLibrary(user, profile, onUpdateProfile);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [viewingPhoto, setViewingPhoto] = useState(null);

  const openUploadModal = () => {
    setUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    if (saving) {
      return;
    }

    setUploadModalOpen(false);
  };

  const handleUpload = async ({ file, title }) => {
    const success = await uploadPhoto({ file, title });
    if (success) {
      closeUploadModal();
    }
    return success;
  };

  const openEditModal = (photo) => {
    setEditingPhoto(photo);
    setEditingTitle(photo.titulo || '');
  };

  const closeEditModal = () => {
    if (saving) {
      return;
    }

    setEditingPhoto(null);
    setEditingTitle('');
  };

  const handleSaveTitle = async () => {
    if (!editingPhoto) {
      return;
    }

    const success = await updatePhotoTitle({ photoId: editingPhoto.id, title: editingTitle });
    if (success) {
      closeEditModal();
    }
  };

  const handleSetProfile = async (photo) => {
    await setProfilePhoto(photo.id);
  };

  const openPhotoViewer = (photo) => {
    setViewingPhoto(photo);
  };

  const closePhotoViewer = () => {
    setViewingPhoto(null);
  };

  const handleEditFromViewer = (photo) => {
    setViewingPhoto(null);
    openEditModal(photo);
  };

  const handleDeleteFromEdit = async () => {
    if (!editingPhoto) {
      return;
    }

    const success = await deletePhoto(editingPhoto.id);
    if (success) {
      closeEditModal();
    }
  };

  return (
    <section className="media-app">
      <AppSectionHeader
        title={mediaConfig.title}
        addLabel={mediaConfig.labels.uploadPhoto}
        helpTitle={mediaConfig.help.title}
        helpText={mediaConfig.help.text}
        onAdd={openUploadModal}
        addDisabled={saving || maxPhotosReached}
        addButtonClassName="media-header-upload-button"
      />

      {maxPhotosReached && <div className="media-error">{mediaConfig.labels.limitReached}</div>}
      {error && <div className="media-error">{error}</div>}

      {!photos.length && !error && <div className="media-empty">{mediaConfig.labels.empty}</div>}

      {!!photos.length && (
        <div className="media-grid">
          {photos.map((photo) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isProfilePhoto={profile?.foto_perfil === photo.url}
              onOpen={openPhotoViewer}
            />
          ))}
        </div>
      )}

      <ModalEditarFoto
        open={Boolean(editingPhoto)}
        photo={editingPhoto}
        saving={saving}
        title={editingTitle}
        onChangeTitle={setEditingTitle}
        onClose={closeEditModal}
        onDelete={handleDeleteFromEdit}
        onSave={handleSaveTitle}
      />

      <ModalSubirFoto
        open={uploadModalOpen}
        saving={saving}
        maxPhotosReached={maxPhotosReached}
        acceptedTypes={mediaConfig.upload.acceptedTypes}
        onClose={closeUploadModal}
        onUpload={handleUpload}
      />

      <ModalVistaFoto
        open={Boolean(viewingPhoto)}
        photo={viewingPhoto}
        saving={saving}
        isProfilePhoto={profile?.foto_perfil === viewingPhoto?.url}
        onEdit={handleEditFromViewer}
        onSetProfile={handleSetProfile}
        onClose={closePhotoViewer}
      />
    </section>
  );
}

export default MediaApp;