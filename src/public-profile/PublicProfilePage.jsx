import { useEffect, useMemo, useState } from 'react';
import { equalTo, get, orderByChild, query, ref } from 'firebase/database';
import { FaCameraRetro, FaMapMarkerAlt, FaSignInAlt, FaTicketAlt, FaUserCircle } from 'react-icons/fa';
import { db } from '../auth/firebaseConfig.js';
import AppLoader from '../components/AppLoader.jsx';
import { normalizeMediaPhotos } from '../dashboard/apps/media/media.utils.js';
import './public-profile.css';

function PublicProfilePage({ username, onNavigate }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const normalizedUsername = String(username || '').trim().replace(/^@+/, '');

  useEffect(() => {
    let active = true;

    const loadProfile = async () => {
      setLoading(true);

      try {
        const perfilesRef = ref(db, 'perfil');
        const profileQuery = query(perfilesRef, orderByChild('nombre_usuario'), equalTo(normalizedUsername));
        const snapshot = await get(profileQuery);

        if (!active) {
          return;
        }

        if (!snapshot.exists()) {
          setProfile(null);
          return;
        }

        const firstMatch = Object.values(snapshot.val() || {})[0] || null;
        setProfile(firstMatch?.perfil_activo === false ? null : firstMatch);
      } catch (error) {
        console.error('Error cargando perfil publico:', error);
        if (active) {
          setProfile(null);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadProfile();

    return () => {
      active = false;
    };
  }, [normalizedUsername]);

  const photos = useMemo(() => normalizeMediaPhotos(profile?.fotos || {}).slice(0, 15), [profile?.fotos]);
  const servicios = useMemo(() => {
    return Object.values(profile?.servicios || {})
      .map((item) => {
        if (typeof item === 'string') {
          return { nombre: item.trim(), link: '', precio: '', detalles: '' };
        }

        return {
          nombre: String(item?.nombre || '').trim(),
          link: String(item?.link || '').trim(),
          precio: String(item?.precio || '').trim(),
          detalles: String(item?.detalles || '').trim(),
        };
      })
      .filter((item) => item.nombre);
  }, [profile?.servicios]);
  const ubicaciones = useMemo(() => Object.values(profile?.ubicaciones || {}).filter(Boolean), [profile?.ubicaciones]);

  if (loading) {
    return (
      <section className="public-profile-screen">
        <div className="public-profile-card public-profile-loading">
          <AppLoader message="Cargando perfil" detail="Buscando la informacion publica..." compact />
        </div>
      </section>
    );
  }

  if (!profile) {
    return (
      <section className="public-profile-screen">
        <div className="public-profile-card public-profile-empty">
          <h2>Perfil no encontrado</h2>
          <p>Ese nombre de usuario no esta disponible o el perfil no esta activo.</p>
          <button type="button" className="primary-button" onClick={() => onNavigate('login')}>
            <FaSignInAlt /> Iniciar seccion
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="public-profile-screen">
      <div className="public-profile-card">
        <div className="public-profile-topbar">
          <span className="public-profile-brand">LindasGt.com</span>
          <button type="button" className="secondary-button public-profile-login" onClick={() => onNavigate('login')}>
            <FaSignInAlt /> Iniciar seccion
          </button>
        </div>

        <div className="public-profile-hero">
          <div className="public-profile-avatar-wrap">
            {profile.foto_perfil ? (
              <img src={profile.foto_perfil} alt={profile.nombre_completo || username} className="public-profile-avatar" />
            ) : (
              <div className="public-profile-avatar placeholder"><FaUserCircle /></div>
            )}
          </div>

          <div className="public-profile-copy">
            <h2>{profile.nombre_completo || username}</h2>
            <p className="public-profile-username">@{profile.nombre_usuario || normalizedUsername}</p>
            <p className="public-profile-description">{profile.descripcion || 'Perfil de LindasGt.com.'}</p>

            <div className="public-profile-pills">
              <span className={`public-status-pill ${profile.disponible ? 'available' : 'offline'}`}>
                {profile.disponible ? 'Disponible' : 'No disponible'}
              </span>
              {!!profile.disponible_hoy_en && <span className="public-status-pill"><FaMapMarkerAlt /> {profile.disponible_hoy_en}</span>}
            </div>
          </div>
        </div>

        <div className="public-profile-sections">
          <article className="public-profile-section">
            <h3><FaTicketAlt /> Servicios</h3>
            {!servicios.length && <p>Sin servicios publicados.</p>}
            {!!servicios.length && (
              <div className="public-service-list">
                {servicios.map((servicio, index) => {
                  const hasProtocol = /^https?:\/\//i.test(servicio.link);
                  const href = servicio.link ? (hasProtocol ? servicio.link : `https://${servicio.link}`) : '';
                  return (
                    <article key={`${servicio.nombre}-${index}`} className="public-service-card">
                      <div className="public-service-copy">
                        <strong>{servicio.nombre}</strong>
                        {servicio.precio && <span>{servicio.precio}</span>}
                        {servicio.detalles && <p>{servicio.detalles}</p>}
                      </div>
                      {href && (
                        <a className="public-chip public-chip-link" href={href} target="_blank" rel="noreferrer">
                          Ir
                        </a>
                      )}
                    </article>
                  );
                })}
              </div>
            )}
          </article>

          <article className="public-profile-section">
            <h3><FaMapMarkerAlt /> Ubicaciones</h3>
            {!ubicaciones.length && <p>Sin ubicaciones publicadas.</p>}
            {!!ubicaciones.length && (
              <div className="public-chip-list">
                {ubicaciones.map((ubicacion) => (
                  <span key={ubicacion} className="public-chip">{ubicacion}</span>
                ))}
              </div>
            )}
          </article>
        </div>

        {!!photos.length && (
          <section className="public-profile-gallery">
            <div className="public-profile-gallery-head">
              <h3><FaCameraRetro /> Fotos</h3>
              <span>{photos.length} publicadas</span>
            </div>
            <div className="public-profile-grid">
              {photos.map((photo) => (
                <article key={photo.id} className="public-photo-card">
                  <img src={photo.url} alt={photo.titulo || 'Foto'} className="public-photo-image" />
                  <strong>{photo.titulo || 'Sin titulo'}</strong>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export default PublicProfilePage;