import { FaCameraRetro, FaMapMarkedAlt, FaSignInAlt, FaStar, FaTicketAlt, FaUserCircle } from 'react-icons/fa';
import './home.css';

function Home({ config, onNavigate }) {
  return (
    <section className="home-screen">
      <div className="home-hero-card">
        <div className="home-hero-copy">
          <div className="home-brand-watermark" aria-hidden="true">
            <img src="/icons/logo.png" alt="" className="home-brand-watermark-image" />
          </div>
          <span className="home-kicker">Lindas GT</span>
          <h2>{config.title}</h2>
          <p className="home-lead">{config.subtitle}</p>

          <div className="home-badges">
            <span><FaUserCircle /> Perfil profesional</span>
            <span><FaMapMarkedAlt /> Tours y agenda</span>
            <span><FaTicketAlt /> Rifas y ventas</span>
            <span><FaCameraRetro /> Fotos y portada</span>
          </div>

          <div className="home-actions">
            <button className="primary-button" type="button" onClick={() => onNavigate('login')}>
              {config.loginButtonText}
            </button>
          </div>
        </div>

        <div className="home-hero-panel">
          <div className="home-hero-highlight">
            <span className="home-highlight-icon"><FaStar /></span>
            <div>
              <strong>{config.highlightTitle}</strong>
              <p>{config.highlightText}</p>
            </div>
          </div>

          <div className="home-feature-grid">
            {config.features.map((feature) => (
              <article key={feature.title} className="home-feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <footer className="home-footer">
        <div>
          <strong>{config.footerTitle}</strong>
          <p>{config.footerText}</p>
        </div>
        <span>{config.footerTagline}</span>
      </footer>
    </section>
  );
}

export default Home;
