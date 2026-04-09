import { getRelativeUploadLabel } from '../media.utils.js';

function PhotoCard({ isProfilePhoto, photo, onOpen }) {
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
      <div className="media-photo-caption">
        <strong>{photo.titulo || 'Sin titulo'}</strong>
        <span>{uploadLabel}</span>
      </div>
    </article>
  );
}

export default PhotoCard;