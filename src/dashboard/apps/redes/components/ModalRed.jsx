import { useEffect, useState } from 'react';
import redesConfig from '../redes.config.js';
import {
  buildCanonicalUrl,
  getRedTypeConfig,
  getRedValueMeta,
  needsCustomTitle,
  parseStoredValue,
  RED_TYPE_OPTIONS,
} from '../redes.utils.js';

function ModalRed({ open, saving, mode, initialValue, onClose, onDelete, onSave }) {
  const [draft, setDraft] = useState({ tipo: 'whatsapp', titulo: 'WhatsApp', value: '' });

  useEffect(() => {
    if (!open) {
      return;
    }

    if (initialValue) {
      setDraft({
        tipo: initialValue.tipo || 'otro',
        titulo: initialValue.titulo || getRedTypeConfig(initialValue.tipo).defaultTitle,
        value: parseStoredValue(initialValue.tipo || 'otro', initialValue.url || ''),
      });
      return;
    }

    setDraft({ tipo: 'whatsapp', titulo: 'WhatsApp', value: '' });
  }, [initialValue, open]);

  if (!open) {
    return null;
  }

  const handleTypeChange = (value) => {
    const nextConfig = getRedTypeConfig(value);
    setDraft((current) => ({
      ...current,
      tipo: value,
      value: '',
      titulo: current.titulo === getRedTypeConfig(current.tipo).defaultTitle || !String(current.titulo || '').trim()
        ? nextConfig.defaultTitle
        : current.titulo,
    }));
  };

  const typeConfig = getRedTypeConfig(draft.tipo);
  const valueMeta = getRedValueMeta(draft.tipo);
  const showTitleField = needsCustomTitle(draft.tipo);

  const handleSubmit = async () => {
    await onSave({
      tipo: draft.tipo,
      titulo: showTitleField
        ? String(draft.titulo || '').trim() || typeConfig.defaultTitle
        : typeConfig.defaultTitle,
      url: buildCanonicalUrl(draft.tipo, draft.value),
    });
  };

  return (
    <div className="tour-modal-overlay" role="dialog" aria-modal="true">
      <div className="tour-modal redes-modal-card">
        <div className="tour-modal-header">
          <div>
            <h4>{mode === 'edit' ? redesConfig.labels.editTitle : redesConfig.labels.addTitle}</h4>
            <p>Configura la red que quieres mostrar en tu pagina publica.</p>
          </div>
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

          {showTitleField && (
          <div className="form-group">
            <label htmlFor="red_titulo">Titulo</label>
            <input id="red_titulo" type="text" value={draft.titulo} onChange={(event) => setDraft((current) => ({ ...current, titulo: event.target.value }))} disabled={saving} />
          </div>
          )}

          <div className="form-group redes-modal-full">
            <label htmlFor="red_value">{valueMeta.label}</label>
            <input id="red_value" type="text" placeholder={valueMeta.placeholder} value={draft.value} onChange={(event) => setDraft((current) => ({ ...current, value: event.target.value }))} disabled={saving} />
          </div>
        </div>

        <div className="confirm-modal-actions redes-modal-actions">
          {mode === 'edit' && (
            <button type="button" className="danger-button redes-delete-button" onClick={onDelete} disabled={saving}>
              {redesConfig.labels.deleteConfirm}
            </button>
          )}
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