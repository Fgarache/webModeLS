import { FaCheckCircle, FaPen } from 'react-icons/fa';
import mediaConfig from '../media.config.js';
import { getRelativeUploadLabel } from '../media.utils.js';

function ModalVistaFoto({ open, photo, saving, isProfilePhoto, onClose, onEdit, onSetProfile }) {
  if (!open || !photo) {
    return null;
  }

  const uploadLabel = getRelativeUploadLabel(photo);

  return (
    <div className="media-modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="media-viewer-card" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="modal-close-button media-viewer-close" onClick={onClose}>
          Cerrar
        </button>
        <div className="media-viewer-image-wrap">
          <img src={photo.url} alt={photo.titulo || 'Foto completa'} className="media-viewer-image" />
          <div className="media-viewer-title-wrap">
            <strong>{photo.titulo || 'Sin titulo'}</strong>
            <span>{uploadLabel}</span>
          </div>
        </div>
        <div className="media-viewer-actions">
          <button type="button" className="icon-button media-viewer-action-button" onClick={() => onEdit(photo)} disabled={saving}>
            <FaPen />
            <span>{mediaConfig.labels.editTitle}</span>
          </button>
          <button type="button" className="icon-button media-viewer-action-button" onClick={() => onSetProfile(photo)} disabled={saving || isProfilePhoto}>
            <FaCheckCircle />
            <span>{isProfilePhoto ? mediaConfig.labels.profile : mediaConfig.labels.makeProfile}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalVistaFoto;