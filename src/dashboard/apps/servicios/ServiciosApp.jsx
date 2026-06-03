import { FaExternalLinkAlt, FaPen, FaTools, FaTrash } from 'react-icons/fa';
import FloatingActionButton from '../../components/FloatingActionButton.jsx';
import AppSectionHeader from '../../components/AppSectionHeader.jsx';
import ServicioModal from './components/ServicioModal.jsx';
import { useServicios } from './hooks/useServicios.js';
import { buildServiceHref } from './servicios.utils.js';
import serviciosCatalog from './servicios.catalog.json';
import './servicios.css';

function ServiciosApp({ user, profile, onUpdate }) {
  const serviceOptions = Array.isArray(serviciosCatalog?.opciones) ? serviciosCatalog.opciones : [];

  const {
    entries,
    saving,
    serviceModalOpen,
    editingKey,
    draft,
    setDraft,
    openAddModal,
    openEditModal,
    closeModal,
    saveDraft,
    deleteServicio,
  } = useServicios({ user, profile, onUpdate });

  return (
    <section className="servicios-app">
      <AppSectionHeader
        title="Servicios"
        addLabel="Agregar servicio"
        helpTitle="Como funcionan tus servicios"
        helpText={[
          'Cada servicio se guarda automaticamente al agregar, editar o eliminar.',
          'Puedes agregar un link opcional para que el boton Ir abra esa pagina.',
        ]}
        onAdd={openAddModal}
        addDisabled={saving || !user?.uid}
      />

      <article className="servicios-summary-card">
        <div className="servicios-hero">
          <span className="servicios-hero-icon">
            <FaTools />
          </span>
          <div>
            <h4>Servicios</h4>
            <p>{entries.length ? `${entries.length} elementos guardados` : 'Todavia no has agregado servicios.'}</p>
          </div>
        </div>

        <div className="servicios-list">
          {entries.length === 0 && <p className="servicios-status">Usa el boton + para agregar tu primer servicio.</p>}

          {entries.map(([key, value]) => {
            const href = buildServiceHref(value?.link);
            const precio = String(value?.precio || '').trim();
            const detalles = String(value?.detalles || '').trim();

            return (
              <article key={key} className="servicios-card">
                <div className="servicios-copy">
                  <strong>{value?.nombre || 'Servicio'}</strong>
                  <span>{precio || value?.link || 'Sin precio o link'}</span>
                  {detalles && <small className="servicios-detalles">{detalles}</small>}
                </div>

                <div className="servicios-actions">
                  <button
                    type="button"
                    className="secondary-button servicios-icon-button"
                    onClick={() => openEditModal(key, value)}
                    disabled={saving}
                    aria-label="Editar servicio"
                    title="Editar"
                  >
                    <FaPen />
                  </button>

                  {href && (
                    <a className="primary-button servicios-link-button" href={href} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt /> Ir
                    </a>
                  )}

                  <button
                    type="button"
                    className="secondary-button servicios-icon-button"
                    onClick={() => deleteServicio(key)}
                    disabled={saving}
                    aria-label="Eliminar servicio"
                    title="Eliminar"
                  >
                    <FaTrash />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="servicios-status">{saving ? 'Guardando cambios...' : 'Guardado automatico activado.'}</p>
      </article>

      <FloatingActionButton
        ariaLabel="Agregar servicio"
        title="Agregar servicio"
        onClick={openAddModal}
        disabled={saving || !user?.uid}
        className="servicios-fab"
      />

      <ServicioModal
        open={serviceModalOpen}
        saving={saving}
        itemLabel="Servicio"
        options={serviceOptions}
        editing={Boolean(editingKey)}
        draft={draft}
        setDraft={setDraft}
        onSave={saveDraft}
        onClose={closeModal}
      />
    </section>
  );
}

export default ServiciosApp;
