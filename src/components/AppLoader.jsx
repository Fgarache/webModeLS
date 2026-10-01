function AppLoader({ message = 'Cargando', detail = 'Preparando la experiencia...', compact = false }) {
  return (
    <div style={{ width: '100%', height: '100%', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', animation: 'skeleton-pulse 1.5s infinite' }}></div>
        <div style={{ flex: 1 }}>
          <div style={{ width: '60%', height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '8px', animation: 'skeleton-pulse 1.5s infinite' }}></div>
          <div style={{ width: '40%', height: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', animation: 'skeleton-pulse 1.5s infinite' }}></div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ height: '140px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', animation: 'skeleton-pulse 1.5s infinite', animationDelay: `${i * 0.1}s` }}></div>
        ))}
      </div>
    </div>
  );
}

export default AppLoader;
