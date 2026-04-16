import TextInfoModal from './TextInfoModal.jsx';
import './appSectionHeader.css';

function AppSectionHeader({ title, addLabel, helpTitle, helpText, onAdd, addDisabled = false, addButtonClassName = '' }) {
  return (
    <div className="app-section-header">
      <h3 className="app-section-header-title">{title}</h3>
      
      {/* El botón solo se renderiza si existe onAdd */}
      {onAdd && (
        <button
          type="button"
          className={`primary-button app-section-header-add ${addButtonClassName}`.trim()}
          onClick={onAdd}
          disabled={addDisabled}
        >
          {addLabel}
        </button>
      )}

      <TextInfoModal
        title={helpTitle}
        paragraphs={helpText}
        buttonLabel={onAdd ? `Explicación de ${addLabel}` : "Información"}
        triggerClassName="compact"
      />
    </div>
  );
}

export default AppSectionHeader;