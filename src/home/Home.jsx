import { FaCameraRetro, FaMapMarkedAlt, FaSignInAlt, FaStar, FaTicketAlt, FaUserCircle } from 'react-icons/fa';
import defaultHomeConfig from './home.config.js';
import './home.css';

const badgeIcons = {
  user: FaUserCircle,
  map: FaMapMarkedAlt,
  ticket: FaTicketAlt,
  camera: FaCameraRetro,
};

function Home({ config, onNavigate }) {
  const resolvedConfig = {
    ...defaultHomeConfig,
    ...config,
    badges: config?.badges ?? defaultHomeConfig.badges,
    features: config?.features ?? defaultHomeConfig.features,
    visual: {
      ...defaultHomeConfig.visual,
      ...(config?.visual ?? {}),
    },
  };

  const homeStyle = {
    '--home-bg-image': `url('${resolvedConfig.visual.backgroundImage}')`,
    '--home-bg-opacity': resolvedConfig.visual.backgroundImageOpacity,
    '--home-bg-size': resolvedConfig.visual.backgroundImageSize,
    '--home-bg-position': resolvedConfig.visual.backgroundImagePosition,
    '--home-bg-filter': resolvedConfig.visual.backgroundImageFilter,
    '--home-text-muted': `rgba(248, 250, 252, ${resolvedConfig.visual.mutedTextOpacity})`,
    '--home-glass': `rgba(255, 255, 255, ${resolvedConfig.visual.glassOpacity})`,
    '--home-glass-card': `rgba(255, 255, 255, ${resolvedConfig.visual.glassCardOpacity})`,
    '--home-glass-border': `rgba(255, 255, 255, ${resolvedConfig.visual.borderOpacity})`,
    '--home-hero-accent': `rgba(255, 45, 85, ${resolvedConfig.visual.heroAccentOpacity})`,
    '--home-hero-surface-start': `rgba(18, 18, 20, ${resolvedConfig.visual.heroSurfaceStartOpacity})`,
    '--home-hero-surface-end': `rgba(10, 10, 12, ${resolvedConfig.visual.heroSurfaceEndOpacity})`,
  };

  return (
    <section className="home-screen" style={homeStyle}>
      <div className="home-hero-card">
        <div className="home-hero-copy">
          <span className="home-kicker">{resolvedConfig.brandLabel}</span>
          <h2 className="hero-title">{resolvedConfig.title}</h2>
          <p className="home-lead">{resolvedConfig.subtitle}</p>

          <div className="home-badges">
            {resolvedConfig.badges.map((badge) => {
              const Icon = badgeIcons[badge.icon] || FaStar;

              return (
                <span key={`${badge.icon}-${badge.label}`}>
                  <Icon /> {badge.label}
                </span>
              );
            })}
          </div>

          <div className="home-actions">
            <button className="primary-button" type="button" onClick={() => onNavigate('login')}>
              {resolvedConfig.loginButtonText} <FaSignInAlt />
            </button>
          </div>
        </div>

        <div className="home-hero-panel">
          <div className="home-hero-highlight glass-card">
            <span className="home-highlight-icon"><FaStar /></span>
            <div>
              <strong>{resolvedConfig.highlightTitle}</strong>
              <p>{resolvedConfig.highlightText}</p>
            </div>
          </div>

          <div className="home-feature-grid">
            {resolvedConfig.features.map((feature) => (
              <article key={feature.title} className="home-feature-card glass-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <footer className="home-footer">
        <div className="footer-info">
          <strong>{resolvedConfig.footerTitle}</strong>
          <p>{resolvedConfig.footerText}</p>
        </div>
        <span className="footer-tag">{resolvedConfig.footerTagline}</span>
      </footer>
    </section>
  );
}

export default Home;