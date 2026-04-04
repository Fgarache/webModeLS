import { FaCheckCircle, FaPen, FaTrash } from 'react-icons/fa';
import { getRelativeUploadLabel } from '../media.utils.js';

function PhotoCard({ isProfilePhoto, photo, saving, onDelete, onEdit, onOpen, onSetProfile }) {
  const uploadLabel = getRelativeUploadLabel(photo);

  return (
    <article className="media-photo-card">
      <button type="button" className="media-photo-image-wrap" onClick={() => onOpen(photo)} aria-label={photo.titulo || 'Abrir foto'}>
        <img src={photo.url} alt={photo.titulo || 'Foto'} className="media-photo-image" />
        {isProfilePhoto && <span className="media-profile-badge">Perfil</span>}
        <div className="media-photo-overlay media-photo-overlay-top">
          <strong>{photo.titulo || 'Sin titulo'}</strong>
          <span>{uploadLabel}</span>
        </div>
      </button>

      <div className="media-photo-actions media-photo-overlay-actions">
        <button type="button" className="icon-button" onClick={() => onEdit(photo)} disabled={saving} title="Editar titulo" aria-label="Editar titulo">
          <FaPen />
        </button>
        <button type="button" className="icon-button" onClick={() => onSetProfile(photo)} disabled={saving || isProfilePhoto} title="Poner de perfil" aria-label="Poner de perfil">
          <FaCheckCircle />
        </button>
        <button type="button" className="icon-button danger" onClick={() => onDelete(photo)} disabled={saving} title="Eliminar foto" aria-label="Eliminar foto">
          <FaTrash />
        </button>
      </div>
    </article>
  );
}

export default PhotoCard;