import { useEffect, useState } from 'react';

function ServicioModal({
  open,
  saving,
  itemLabel = 'Servicio',
  options = [],
  editing,
  draft,
  setDraft,
  onSave,
  onClose,
}) {
  if (!open) {
    return null;
  }

  const normalizedOptions = Array.isArray(options)
    ? options
      .map((option) => String(option || '').trim())
      .filter(Boolean)
    : [];

  const currentNombre = String(draft.nombre || '').trim();
  const getInitialSelectedOption = () => {
    if (currentNombre && normalizedOptions.includes(currentNombre)) {
      return currentNombre;
    }

    if (currentNombre) {
      return '__otro__';
    }

    return '';
  };

  const [selectedOption, setSelectedOption] = useState(getInitialSelectedOption);

  useEffect(() => {
    setSelectedOption(getInitialSelectedOption());
  }, [open, currentNombre]);

  const isCustomOption = selectedOption === '__otro__';

  const handleServiceOptionChange = (value) => {
    setSelectedOption(value);

    if (value === '__otro__') {
      setDraft((current) => ({ ...current, nombre: '' }));
      return;
    }

    setDraft((current) => ({ ...current, nombre: value }));
  };

  return (
    <div className="servicios-modal-overlay" role="dialog" aria-modal="true">
      <div className="servicios-modal-card">
        <div className="servicios-modal-header">
          <div>
            <h4>{editing ? `Editar ${itemLabel.toLowerCase()}` : `Agregar ${itemLabel.toLowerCase()}`}</h4>
            <p>Selecciona un servicio o elige Otro para escribir un titulo personalizado.</p>
          </div>
        </div>

        <div className="servicios-modal-form">
          <div className="form-group servicios-modal-full">
            <label htmlFor="servicio_selector">Servicio sugerido</label>
            <select
              id="servicio_selector"
              value={selectedOption}
              onChange={(event) => handleServiceOptionChange(event.target.value)}
              disabled={saving}
            >
              <option value="">Selecciona un servicio</option>
              {normalizedOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
              <option value="__otro__">Otro</option>
            </select>
          </div>

          {isCustomOption && (
            <div className="form-group servicios-modal-full">
              <label htmlFor="servicio_nombre">Titulo del servicio</label>
              <input
                id="servicio_nombre"
                type="text"
                placeholder="Nombre personalizado"
                value={draft.nombre}
                onChange={(event) => setDraft((current) => ({ ...current, nombre: event.target.value }))}
                disabled={saving}
              />
            </div>
          )}

          <div className="form-group servicios-modal-full">
            <label htmlFor="servicio_link">Link (opcional)</label>
            <input
              id="servicio_link"
              type="url"
              placeholder="https://..."
              value={draft.link}
              onChange={(event) => setDraft((current) => ({ ...current, link: event.target.value }))}
              disabled={saving}
            />
          </div>

          <div className="form-group servicios-modal-full">
            <label htmlFor="servicio_precio">Precio (opcional)</label>
            <input
              id="servicio_precio"
              type="text"
              placeholder="Q 250"
              value={draft.precio || ''}
              onChange={(event) => setDraft((current) => ({ ...current, precio: event.target.value }))}
              disabled={saving}
            />
          </div>

          <div className="form-group servicios-modal-full">
            <label htmlFor="servicio_detalles">Detalles (opcional)</label>
            <textarea
              id="servicio_detalles"
              rows="3"
              placeholder="Descripcion corta del servicio"
              value={draft.detalles || ''}
              onChange={(event) => setDraft((current) => ({ ...current, detalles: event.target.value }))}
              disabled={saving}
            />
          </div>
        </div>

        <div className="servicios-modal-actions">
          <button type="button" className="primary-button" onClick={onSave} disabled={saving || !String(draft.nombre || '').trim()}>
            Guardar
          </button>
          <button type="button" className="secondary-button" onClick={onClose} disabled={saving}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServicioModal;
