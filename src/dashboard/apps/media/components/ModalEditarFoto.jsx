import mediaConfig from '../media.config.js';

function ModalEditarFoto({ open, photo, saving, title, onChangeTitle, onClose, onDelete, onSave }) {
  if (!open || !photo) {
    return null;
  }

  return (
    <div className="media-modal-overlay" role="dialog" aria-modal="true">
      <div className="media-modal-card">
        <div className="media-modal-header">
          <div>
            <h4>{mediaConfig.labels.editTitle}</h4>
            <p>{photo.titulo || 'Foto sin titulo'}</p>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {mediaConfig.labels.close}
          </button>
        </div>

        <div className="form-group">
          <label htmlFor="media_edit_title">{mediaConfig.labels.title}</label>
          <input id="media_edit_title" type="text" value={title} onChange={(event) => onChangeTitle(event.target.value)} disabled={saving} />
        </div>

        <div className="media-modal-actions">
          <button type="button" className="danger-button" onClick={onDelete} disabled={saving}>
            {mediaConfig.labels.confirmDeleteLabel}
          </button>
          <button type="button" className="primary-button" onClick={onSave} disabled={saving}>
            {mediaConfig.labels.save}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {mediaConfig.labels.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalEditarFoto;