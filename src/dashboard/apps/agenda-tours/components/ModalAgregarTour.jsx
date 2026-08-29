import { useState, useRef, useEffect } from 'react';
import {
  AVAILABLE_TIME_OPTIONS,
  formatHour12,
} from '../agendaTours.utils.js';
import agendaToursConfig from '../agendaTours.config.js';
import ToggleSwitch from './ToggleSwitch.jsx';

function MultiSelectDropdown({ options, selected, onChange, disabled, placeholder = 'Selecciona opciones...' }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      onChange(selected.filter(item => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative', width: '100%' }}>
      <div 
        onClick={() => !disabled && setIsOpen(!isOpen)}
        style={{
          padding: '0.75rem',
          borderRadius: '8px',
          border: '1px solid var(--border-color, #444)',
          backgroundColor: disabled ? 'var(--background-color)' : 'var(--surface-color)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          color: 'var(--text-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '44px',
          fontSize: '0.95rem'
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {selected.length > 0 ? selected.join(', ') : placeholder}
        </span>
        <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', marginLeft: '8px' }}>▼</span>
      </div>
      
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: '4px',
          backgroundColor: 'var(--surface-color, #1a1a1a)',
          border: '1px solid var(--border-color, #444)',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
          zIndex: 10,
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          {options.length === 0 && (
            <div style={{ padding: '0.75rem', color: '#888' }}>No hay opciones</div>
          )}
          {options.map((opt, i) => (
            <label key={i} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.75rem',
              cursor: 'pointer',
              borderBottom: i < options.length - 1 ? '1px solid var(--border-color, #444)' : 'none',
              margin: 0
            }}>
              <input 
                type="checkbox" 
                checked={selected.includes(opt)} 
                onChange={() => toggleOption(opt)} 
                style={{ marginRight: '10px', width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <span style={{ color: 'var(--text-color)' }}>{opt}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function ModalAgregarTour({
  open,
  editing,
  form,
  saving,
  error,
  ubicacionesOptions = [],
  onChange,
  onClose,
  onSubmit,
  onToggleSlot,
}) {
  if (!open) {
    return null;
  }

  const { tourModal } = agendaToursConfig;

  return (
    <div className="tour-modal-overlay tour-modern-overlay" role="dialog" aria-modal="true">
      <div className="tour-modal tour-modern-card">
        <div className="tour-modal-header modern-card-header">
          <h4>{editing ? tourModal.editTitle : tourModal.addTitle}</h4>
        </div>

        <p className="tour-modern-description">{tourModal.description}</p>

        {error && <div className="agenda-tours-error tour-modern-error">{error}</div>}

        <div className="modern-stack tour-modern-stack">
          <div className="modern-group">
            <label className="modern-label" htmlFor="titulo">{tourModal.fields.title}</label>
            <input
              id="titulo"
              type="text"
              value={form.titulo}
              onChange={(event) => onChange('titulo', event.target.value)}
              disabled={saving}
            />
          </div>

          <div className="tour-modern-inline-row">
            <div className="modern-group">
              <label className="modern-label" htmlFor="fecha">{tourModal.fields.date}</label>
              <input
                id="fecha"
                type="date"
                value={form.fecha}
                onChange={(event) => onChange('fecha', event.target.value)}
                disabled={saving}
              />
            </div>

            <div className="modern-unit switch">
              <label className="modern-label" htmlFor="activo">{form.activo ? 'Activa' : 'Off'}</label>
              <ToggleSwitch
                id="activo"
                checked={!!form.activo}
                onChange={(checked) => onChange('activo', Boolean(checked))}
                disabled={saving}
              />
            </div>
          </div>

          <div className="modern-group">
            <label className="modern-label" htmlFor="lugar">{tourModal.fields.location}</label>
            <MultiSelectDropdown 
              options={ubicacionesOptions}
              selected={form.lugar || []}
              onChange={(newSelection) => onChange('lugar', newSelection)}
              disabled={saving}
              placeholder={tourModal.fields.locationPlaceholder}
            />
          </div>

          <div className="modern-group">
            <label className="modern-label" htmlFor="detalles">{tourModal.fields.details}</label>
            <textarea
              id="detalles"
              rows="3"
              value={form.detalles}
              onChange={(event) => onChange('detalles', event.target.value)}
              disabled={saving}
            />
          </div>

          <div className="modern-group">
            <label className="modern-label" htmlFor="ubicacion_maps">{tourModal.fields.mapsLocation}</label>
            <textarea
              id="ubicacion_maps"
              rows="3"
              value={form.ubicacion_maps}
              onChange={(event) => onChange('ubicacion_maps', event.target.value)}
              placeholder={tourModal.fields.mapsPlaceholder}
              disabled={saving}
            />
          </div>

          <div className="modern-time-box tour-modern-slots-box">
            <div className="tour-slots-header">
              <h5>{tourModal.schedulesTitle}</h5>
              <span className="tour-slots-caption">{tourModal.schedulesCaption}</span>
            </div>

            <div className="slot-picker-grid">
              {AVAILABLE_TIME_OPTIONS.map((hourValue) => {
                const isSelected = Boolean(form.disponibles?.[`h${hourValue.replace(':', '')}`]);

                return (
                  <button
                    key={hourValue}
                    type="button"
                    className={`slot-picker-button ${isSelected ? 'selected' : ''}`}
                    onClick={() => onToggleSlot(hourValue)}
                    disabled={saving}
                  >
                    {formatHour12(hourValue)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="reservation-form-actions modern-actions">
          <button type="button" className="secondary-button modern-btn-off" onClick={onClose} disabled={saving}>
            {tourModal.cancel}
          </button>
          <button type="button" className="primary-button modern-btn-on" onClick={onSubmit} disabled={saving}>
            {saving ? tourModal.saving : editing ? tourModal.saveEdit : tourModal.saveCreate}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAgregarTour;