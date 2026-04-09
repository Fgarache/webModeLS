import { useEffect, useState } from 'react';
import { FaCheckCircle, FaImages, FaPen } from 'react-icons/fa';
import mediaConfig from '../media.config.js';

function ModalSubirFoto({ open, saving, maxPhotosReached, acceptedTypes, onClose, onUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl('');
      return undefined;
    }

    const nextPreviewUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(nextPreviewUrl);

    return () => {
      URL.revokeObjectURL(nextPreviewUrl);
    };
  }, [selectedFile]);

  useEffect(() => {
    if (!open) {
      setSelectedFile(null);
      setTitle('');
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const handleSubmit = async () => {
    if (!selectedFile) {
      return;
    }

    const success = await onUpload({ file: selectedFile, title });
    if (success) {
      setSelectedFile(null);
      setTitle('');
    }
  };

  return (
    <div className="media-modal-overlay" role="dialog" aria-modal="true">
      <div className="media-modal-card media-upload-modal-card">
        <div className="media-modal-header">
          <div>
            <h4>{mediaConfig.labels.uploadPhoto}</h4>
            <p>Prepara la foto en una ventana aparte antes de publicarla.</p>
          </div>
        </div>

        <div className="media-upload-card">
          <div className="media-upload-form">
            <div className="form-group media-upload-title">
              <label htmlFor="media_title">{mediaConfig.labels.title}</label>
              <input id="media_title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} disabled={saving || maxPhotosReached} placeholder="Escribe un titulo para tu foto" />
            </div>

            <div className="media-upload-toolbar">
              <input
                id="media_file"
                type="file"
                accept={acceptedTypes.join(',')}
                onChange={(event) => setSelectedFile(event.target.files?.[0] || null)}
                disabled={saving || maxPhotosReached}
              />
              <div className="media-upload-actions-row">
                {!selectedFile ? (
                  <label htmlFor="media_file" className="primary-button media-file-trigger media-upload-action-button">
                    {mediaConfig.labels.selectPhoto}
                  </label>
                ) : (
                  <button type="button" className="primary-button media-upload-action-button" onClick={handleSubmit} disabled={saving || maxPhotosReached}>
                    {saving ? mediaConfig.labels.uploading : mediaConfig.labels.uploadPhoto}
                  </button>
                )}
                <button type="button" className="secondary-button media-upload-action-button" onClick={onClose} disabled={saving}>
                  {mediaConfig.labels.cancel}
                </button>
              </div>
              <span className="media-upload-helper">{selectedFile ? selectedFile.name : 'Selecciona una imagen para ver la vista previa completa.'}</span>
            </div>
          </div>

          <div className="media-upload-preview-shell">
            <div className="media-upload-preview-card">
              {previewUrl ? (
                <div className="media-upload-preview-image-wrap">
                  <img src={previewUrl} alt={title || 'Vista previa de la foto'} className="media-upload-preview-image" />
                  <div className="media-upload-preview-top">
                    <strong>{title.trim() || 'Sin titulo'}</strong>
                  </div>
                  <div className="media-upload-preview-bottom">
                    <span className="media-preview-chip"><FaImages /> Foto</span>
                    <span className="media-preview-chip"><FaPen /> Titulo</span>
                    <span className="media-preview-chip"><FaCheckCircle /> Lista</span>
                  </div>
                </div>
              ) : (
                <div className="media-upload-empty-state">
                  <FaImages />
                  <strong>Vista previa de la publicacion</strong>
                  <span>La imagen se mostrara completa con el titulo e iconos encima de la foto.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSubirFoto;