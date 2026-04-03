import './home.css';

function Home({ config, onNavigate }) {
  return (
    <section className="home-screen">
      <h2>{config.title}</h2>
      <p>{config.subtitle}</p>
      <button className="primary-button" onClick={() => onNavigate('login')}>
        {config.loginButtonText}
      </button>
    </section>
  );
}

export default Home;
