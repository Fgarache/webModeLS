import { useEffect, useMemo, useState } from 'react';
import { FaMapMarkerAlt, FaTrash } from 'react-icons/fa';
import FloatingActionButton from '../../components/FloatingActionButton.jsx';
import AppSectionHeader from '../../components/AppSectionHeader.jsx';
import { useUbicaciones } from './hooks/useUbicaciones.js';
import ubicacionesCatalog from './ubicaciones.catalog.json';
import './ubicaciones.css';

function UbicacionesApp({ user, profile, onUpdate }) {
  const departmentOptions = useMemo(() => {
    return Array.isArray(ubicacionesCatalog?.departamentos)
      ? ubicacionesCatalog.departamentos.map((option) => String(option || '').trim()).filter(Boolean)
      : [];
  }, []);

  const [rowSelectionMap, setRowSelectionMap] = useState({});

  const {
    entries,
    itemOptions,
    currentSelection,
    saving,
    addItem,
    updateItem,
    saveItem,
    removeItem,
    changeCurrentSelection,
  } = useUbicaciones({ user, profile, onUpdate });

  useEffect(() => {
    setRowSelectionMap((current) => {
      const next = {};

      entries.forEach(([key, value]) => {
        const currentValue = String(value || '').trim();

        if (current[key]) {
          next[key] = current[key];
          return;
        }

        next[key] = currentValue && departmentOptions.includes(currentValue) ? currentValue : (currentValue ? '__otro__' : '');
      });

      return next;
    });
  }, [entries, departmentOptions]);

  const handleOptionChange = async (key, selected) => {
    setRowSelectionMap((current) => ({
      ...current,
      [key]: selected,
    }));

    if (selected === '__otro__') {
      await updateItem(key, '');
      return;
    }

    await updateItem(key, selected, true);
  };

  return (
    <section className="ubicaciones-app">
      <AppSectionHeader
        title="Ubicaciones"
        addLabel="Agregar ubicacion"
        helpTitle="Como funcionan tus ubicaciones"
        helpText={[
          'Cada ubicacion se guarda automaticamente al editar o eliminar.',
          'Desde aqui eliges la ubicacion donde estas disponible hoy.',
        ]}
        onAdd={addItem}
        addDisabled={saving || !user?.uid}
      />

      <article className="ubicaciones-summary-card">
        <div className="ubicaciones-hero">
          <span className="ubicaciones-hero-icon">
            <FaMapMarkerAlt />
          </span>
          <div>
            <h4>Ubicaciones</h4>
            <p>{entries.length ? `${entries.length} elementos guardados` : 'Todavia no has agregado ubicaciones.'}</p>
          </div>
        </div>

        <div className="form-group ubicaciones-form">
          <label htmlFor="ubicaciones_disponible_hoy_en">Disponible hoy en</label>
          <select
            id="ubicaciones_disponible_hoy_en"
            value={currentSelection}
            onChange={(event) => changeCurrentSelection(event.target.value)}
            disabled={saving}
          >
            <option value="">Sin ubicacion</option>
            {itemOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="ubicaciones-list">
          {entries.length === 0 && <p className="ubicaciones-status">Usa el boton + para agregar tu primera ubicacion.</p>}
          {entries.map(([key, value]) => {
            const selected = rowSelectionMap[key] || '';
            const isOther = selected === '__otro__';

            return (
              <div key={key} className="ubicaciones-row-stack">
                <div className="ubicaciones-row">
                  <select
                    value={selected}
                    onChange={(event) => handleOptionChange(key, event.target.value)}
                    disabled={saving}
                  >
                    <option value="">Selecciona departamento</option>
                    {departmentOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                    <option value="__otro__">Otro</option>
                  </select>

                  <button
                    type="button"
                    className="secondary-button ubicaciones-delete"
                    onClick={() => removeItem(key)}
                    aria-label="Eliminar ubicacion"
                    title="Eliminar"
                    disabled={saving}
                  >
                    <FaTrash />
                  </button>
                </div>

                {isOther && (
                  <input
                    type="text"
                    placeholder="Municipio u otra ubicacion"
                    value={value || ''}
                    onChange={(event) => updateItem(key, event.target.value)}
                    onBlur={saveItem}
                    disabled={saving}
                  />
                )}
              </div>
            );
          })}
        </div>

        <p className="ubicaciones-status">{saving ? 'Guardando cambios...' : 'Guardado automatico activado.'}</p>
      </article>

      <FloatingActionButton
        ariaLabel="Agregar ubicacion"
        title="Agregar ubicacion"
        onClick={addItem}
        disabled={saving || !user?.uid}
        className="ubicaciones-fab"
      />
    </section>
  );
}

export default UbicacionesApp;
