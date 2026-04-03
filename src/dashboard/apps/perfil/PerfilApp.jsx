import { useState } from 'react';
import { FaUser, FaCamera, FaTools, FaMapMarkerAlt, FaSave } from 'react-icons/fa';
import { update, ref } from 'firebase/database';
import { db } from '../../../auth/firebaseConfig.js';
import './perfil.css';

function PerfilApp({ user, profile, onUpdate }) {
  const [activeSection, setActiveSection] = useState('datos');
  const [editedProfile, setEditedProfile] = useState(profile);
  const [saving, setSaving] = useState(false);

  const handleInputChange = (field, value) => {
    setEditedProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedChange = (parent, key, value) => {
    setEditedProfile(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [key]: value
      }
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const profileRef = ref(db, `perfil/${user.uid}`);
      // Filtrar fotos vacías y asegurar estructura correcta
      const fotosLimpias = {};
      Object.entries(editedProfile.fotos || {}).forEach(([key, foto]) => {
        if (foto.url && foto.url.trim()) {
          fotosLimpias[key] = {
            titulo: foto.titulo || '',
            url: foto.url,
            fecha: foto.fecha || new Date().toISOString().split('T')[0]
          };
        }
      });
      
      const dataToSave = {
        ...editedProfile,
        fotos: fotosLimpias
      };
      
      await update(profileRef, dataToSave);
      onUpdate(dataToSave);
      alert('Perfil guardado exitosamente');
    } catch (error) {
      console.error('Error guardando:', error);
      alert('Error al guardar el perfil: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const renderDatos = () => (
    <div className="app-section">
      <h3>Datos del Perfil</h3>
      <div className="form-group">
        <label>Nombre Completo</label>
        <input
          type="text"
          value={editedProfile.nombre_completo || ''}
          onChange={(e) => handleInputChange('nombre_completo', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Nombre de Usuario</label>
        <input
          type="text"
          value={editedProfile.nombre_usuario || ''}
          onChange={(e) => handleInputChange('nombre_usuario', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={editedProfile.email || ''}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Rol</label>
        <div className="role-display">{editedProfile.rol || 'usuario'}</div>
      </div>
      <div className="form-group">
        <label>
          <input
            type="checkbox"
            checked={editedProfile.disponible || false}
            onChange={(e) => handleInputChange('disponible', e.target.checked)}
          />
          Disponible
        </label>
      </div>
    </div>
  );

  const renderFotos = () => (
    <div className="app-section">
      <h3>Fotos</h3>
      <div className="fotos-grid">
        {Object.entries(editedProfile.fotos || {}).map(([key, foto]) => (
          <div key={key} className="foto-item-edit">
            {foto.url ? (
              <img src={foto.url} alt={foto.titulo || `Foto ${key}`} />
            ) : (
              <div className="foto-placeholder">Sin imagen</div>
            )}
            <input
              type="text"
              placeholder="Título de la foto"
              value={foto.titulo || ''}
              onChange={(e) => handleNestedChange('fotos', key, { ...foto, titulo: e.target.value })}
            />
            <input
              type="text"
              placeholder="URL de la foto"
              value={foto.url || ''}
              onChange={(e) => handleNestedChange('fotos', key, { ...foto, url: e.target.value })}
            />
            <div className="fecha-display">
              Fecha: {foto.fecha || 'No especificada'}
            </div>
          </div>
        ))}
      </div>
      <button className="secondary-button" onClick={() => {
        const newKey = `f${Object.keys(editedProfile.fotos || {}).length + 1}`;
        const today = new Date().toISOString().split('T')[0];
        handleNestedChange('fotos', newKey, { titulo: '', url: '', fecha: today });
      }}>
        Agregar Foto
      </button>
    </div>
  );

  const renderServicios = () => (
    <div className="app-section">
      <h3>Servicios</h3>
      <div className="servicios-list">
        {Object.entries(editedProfile.servicios || {}).map(([key, servicio]) => (
          <div key={key} className="form-group">
            <input
              type="text"
              placeholder={`Servicio ${key}`}
              value={servicio || ''}
              onChange={(e) => handleNestedChange('servicios', key, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button className="secondary-button" onClick={() => {
        const newKey = `s${Object.keys(editedProfile.servicios || {}).length + 1}`;
        handleNestedChange('servicios', newKey, '');
      }}>
        Agregar Servicio
      </button>
    </div>
  );

  const renderUbicaciones = () => (
    <div className="app-section">
      <h3>Ubicaciones</h3>
      <div className="ubicaciones-list">
        {Object.entries(editedProfile.ubicaciones || {}).map(([key, ubicacion]) => (
          <div key={key} className="form-group">
            <input
              type="text"
              placeholder={`Ubicación ${key}`}
              value={ubicacion || ''}
              onChange={(e) => handleNestedChange('ubicaciones', key, e.target.value)}
            />
          </div>
        ))}
      </div>
      <button className="secondary-button" onClick={() => {
        const newKey = `u${Object.keys(editedProfile.ubicaciones || {}).length + 1}`;
        handleNestedChange('ubicaciones', newKey, '');
      }}>
        Agregar Ubicación
      </button>
    </div>
  );

  return (
    <div className="perfil-app">
      <div className="apps-menu">
        <button
          className={`app-btn ${activeSection === 'datos' ? 'active' : ''}`}
          onClick={() => setActiveSection('datos')}
          title="Datos"
        >
          <FaUser />
        </button>
        <button
          className={`app-btn ${activeSection === 'fotos' ? 'active' : ''}`}
          onClick={() => setActiveSection('fotos')}
          title="Fotos"
        >
          <FaCamera />
        </button>
        <button
          className={`app-btn ${activeSection === 'servicios' ? 'active' : ''}`}
          onClick={() => setActiveSection('servicios')}
          title="Servicios"
        >
          <FaTools />
        </button>
        <button
          className={`app-btn ${activeSection === 'ubicaciones' ? 'active' : ''}`}
          onClick={() => setActiveSection('ubicaciones')}
          title="Ubicaciones"
        >
          <FaMapMarkerAlt />
        </button>
      </div>

      <div className="app-content">
        {activeSection === 'datos' && renderDatos()}
        {activeSection === 'fotos' && renderFotos()}
        {activeSection === 'servicios' && renderServicios()}
        {activeSection === 'ubicaciones' && renderUbicaciones()}
      </div>

      <div className="app-actions">
        <button className="primary-button" onClick={handleSave} disabled={saving}>
          <FaSave /> {saving ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
    </div>
  );
}

export default PerfilApp;
