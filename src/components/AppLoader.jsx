function AppLoader({ message = 'Cargando', detail = 'Preparando la experiencia...', compact = false }) {
  return (
    <div className={`app-loader ${compact ? 'compact' : ''}`.trim()} role="status" aria-live="polite">
      <div className="app-loader-visual" aria-hidden="true">
        <span className="app-loader-ring ring-one" />
        <span className="app-loader-ring ring-two" />
        <span className="app-loader-core" />
      </div>
      <div className="app-loader-copy">
        <strong>{message}</strong>
        <span>{detail}</span>
      </div>
    </div>
  );
}

export default AppLoader;