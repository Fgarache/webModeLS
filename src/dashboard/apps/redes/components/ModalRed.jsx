import { useEffect, useState } from 'react';
import redesConfig from '../redes.config.js';
import { getRedTypeConfig, RED_TYPE_OPTIONS } from '../redes.utils.js';

function ModalRed({ open, saving, mode, initialValue, onClose, onSave }) {
  const [draft, setDraft] = useState({ tipo: 'whatsapp', titulo: 'WhatsApp', url: '' });

  useEffect(() => {
    if (!open) {
      return;
    }

    if (initialValue) {
      setDraft({
        tipo: initialValue.tipo || 'otro',
        titulo: initialValue.titulo || getRedTypeConfig(initialValue.tipo).defaultTitle,
        url: initialValue.url || '',
      });
      return;
    }

    setDraft({ tipo: 'whatsapp', titulo: 'WhatsApp', url: '' });
  }, [initialValue, open]);

  if (!open) {
    return null;
  }

  const handleTypeChange = (value) => {
    const nextConfig = getRedTypeConfig(value);
    setDraft((current) => ({
      ...current,
      tipo: value,
      titulo: current.titulo === getRedTypeConfig(current.tipo).defaultTitle || !String(current.titulo || '').trim()
        ? nextConfig.defaultTitle
        : current.titulo,
    }));
  };

  const handleSubmit = async () => {
    await onSave({
      tipo: draft.tipo,
      titulo: String(draft.titulo || '').trim() || getRedTypeConfig(draft.tipo).defaultTitle,
      url: String(draft.url || '').trim(),
    });
  };

  return (
    <div className="tour-modal-overlay" role="dialog" aria-modal="true">
      <div className="tour-modal redes-modal-card">
        <div className="tour-modal-header">
          <div>
            <h4>{mode === 'edit' ? redesConfig.labels.editTitle : redesConfig.labels.addTitle}</h4>
            <p>Selecciona el tipo de red y agrega el enlace que quieres mostrar en tu perfil.</p>
          </div>
          <button type="button" className="modal-close-button" onClick={onClose} disabled={saving}>
            {redesConfig.labels.cancel}
          </button>
        </div>

        <div className="redes-modal-form">
          <div className="form-group">
            <label htmlFor="red_tipo">Tipo</label>
            <select id="red_tipo" value={draft.tipo} onChange={(event) => handleTypeChange(event.target.value)} disabled={saving}>
              {RED_TYPE_OPTIONS.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="red_titulo">Titulo</label>
            <input id="red_titulo" type="text" value={draft.titulo} onChange={(event) => setDraft((current) => ({ ...current, titulo: event.target.value }))} disabled={saving} />
          </div>

          <div className="form-group redes-modal-full">
            <label htmlFor="red_url">Enlace</label>
            <input id="red_url" type="text" placeholder="https://... o enlace de invitacion" value={draft.url} onChange={(event) => setDraft((current) => ({ ...current, url: event.target.value }))} disabled={saving} />
          </div>
        </div>

        <div className="confirm-modal-actions redes-modal-actions">
          <button type="button" className="primary-button" onClick={handleSubmit} disabled={saving}>
            {saving ? 'Guardando...' : redesConfig.labels.save}
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            {redesConfig.labels.cancel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalRed;