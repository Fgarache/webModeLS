import { getRelativeUploadLabel } from '../media.utils.js';

function ModalVistaFoto({ open, photo, onClose }) {
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
      </div>
    </div>
  );
}

export default ModalVistaFoto;