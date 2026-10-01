import { useState, useEffect } from 'react';
import { useAdmin } from './useAdmin.js';
import { FaEdit, FaEye, FaWhatsapp } from 'react-icons/fa';
import './admin.css';

export default function AdminApp() {
  const { users, loading, toggleVerifyAndRole, updateUser, getVistas, updateVistas } = useAdmin();
  const [activeTab, setActiveTab] = useState('verificados');
  const [editingUser, setEditingUser] = useState(null);
  const [viewingUser, setViewingUser] = useState(null);

  const verificados = users.filter((u) => u.verificado === true);
  const pendientes = users.filter((u) => !u.verificado);
  const displayedUsers = activeTab === 'verificados' ? verificados : pendientes;

  // Debugging auth
  useEffect(() => {
    import('../../../auth/firebaseConfig.js').then(({ auth }) => {
      const uid = auth.currentUser?.uid || 'no-autenticado';
      console.log('Mi UID actual es:', uid);
      const el = document.getElementById('current-uid-display');
      if (el) el.innerText = uid;
    });
  }, []);

  const openEditModal = async (u) => {
    setEditingUser({...u});
    const vistas = await getVistas(u.uid);
    setEditingUser((prev) => ({ ...prev, vistas: vistas }));
  };

  const handleEditChange = (field, value) => {
    setEditingUser((prev) => ({ ...prev, [field]: value }));
  };

  const saveEdit = async () => {
    if (!editingUser) return;
    try {
      await updateUser(editingUser.uid, {
        nombre_usuario: editingUser.nombre_usuario || '',
        rol: editingUser.rol || 'user',
      });
      if (editingUser.vistas !== undefined) {
        await updateVistas(editingUser.uid, editingUser.vistas);
      }
      setEditingUser(null);
    } catch (e) {}
  };

  if (loading) return <div className="admin-loading">Cargando usuarios...</div>;

  return (
    <div className="admin-app-container">
      <header className="admin-header">
        <h2>Gestión de Usuarios</h2>
        <div className="admin-tabs">
          <button className={`admin-tab ${activeTab === 'verificados' ? 'active' : ''}`} onClick={() => setActiveTab('verificados')}>
            Verificados ({verificados.length})
          </button>
          <button className={`admin-tab ${activeTab === 'pendientes' ? 'active' : ''}`} onClick={() => setActiveTab('pendientes')}>
            Pendientes ({pendientes.length})
          </button>
        </div>
      </header>

      <div className="admin-user-list">
        {displayedUsers.length === 0 ? (
          <p className="admin-empty">No hay usuarios en esta lista.</p>
        ) : (
          displayedUsers.map((u) => {
            const telefono = u.telefono || u.whatsapp || u.celular;
            return (
            <div key={u.uid} className="admin-user-card">
              <img src={u.foto_perfil || 'https://via.placeholder.com/50'} alt="Perfil" className="admin-user-avatar" />
              <div className="admin-user-info">
                <strong>{u.nombre_completo || 'Sin Nombre'}</strong>
                <span className="admin-user-meta">@{u.nombre_usuario || 'usuario'}</span>
              </div>
              
              <div className="admin-actions-grid">
                <div className="admin-toggle-wrapper">
                  <label className="admin-switch">
                    <input type="checkbox" checked={!!u.verificado} onChange={() => toggleVerifyAndRole(u.uid, !!u.verificado)} />
                    <span className="admin-slider"></span>
                  </label>
                  <span className="admin-toggle-label">{u.verificado ? 'Model' : 'User'}</span>
                </div>
                
                <button className="admin-action-btn icon-btn" onClick={() => openEditModal(u)} title="Editar">
                  <FaEdit />
                </button>
                <button className="admin-action-btn icon-btn" onClick={() => setViewingUser(u)} title="Ver Perfil">
                  <FaEye />
                </button>
                {telefono && (
                  <a className="admin-action-btn whatsapp-btn icon-btn" href={`https://wa.me/${telefono.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" title="WhatsApp">
                    <FaWhatsapp />
                  </a>
                )}
              </div>
            </div>
          )})
        )}
      </div>

      {editingUser && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <h3>Editar Usuario</h3>
            <div className="form-group">
              <label>Alias (Username)</label>
              <input type="text" value={editingUser.nombre_usuario || ''} onChange={(e) => handleEditChange('nombre_usuario', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Vistas del Perfil</label>
              <input type="number" value={editingUser.vistas ?? ''} onChange={(e) => handleEditChange('vistas', e.target.value)} />
            </div>
            <div className="form-group">
              <label>Rol</label>
              <select value={editingUser.rol || 'user'} onChange={(e) => handleEditChange('rol', e.target.value)}>
                <option value="user">User</option>
                <option value="model">Model</option>
                <option value="prestador">Prestador</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="admin-modal-actions">
              <button className="primary-button" onClick={saveEdit}>Guardar</button>
              <button className="secondary-button" onClick={() => setEditingUser(null)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {viewingUser && (
        <div className="admin-modal-overlay" onClick={() => setViewingUser(null)}>
          <div className="admin-modal profile-view-modal" onClick={e => e.stopPropagation()}>
            <h3>Perfil de @{viewingUser.nombre_usuario || viewingUser.uid}</h3>
            
            <div className="profile-pretty-view">
              <div className="profile-pretty-header">
                <img src={viewingUser.foto_perfil || 'https://via.placeholder.com/100'} alt="Perfil" className="profile-pretty-avatar" />
                <div className="profile-pretty-title">
                  <h2>{viewingUser.nombre_completo || 'Sin nombre'}</h2>
                  <span className="badge">{viewingUser.rol}</span>
                  {viewingUser.verificado && <span className="badge success">Verificado</span>}
                </div>
              </div>

              <div className="profile-pretty-grid" style={{ overflowY: 'auto', maxHeight: '50vh', paddingRight: '0.5rem' }}>
                {Object.entries(viewingUser).map(([key, value]) => {
                  if (typeof value === 'object' || key === 'foto_perfil' || key === 'uid' || key === 'nombre_completo' || key === 'rol') return null;
                  return (
                    <div className="profile-info-card" key={key}>
                      <strong style={{textTransform: 'capitalize'}}>{key.replace(/_/g, ' ')}</strong>
                      <p style={{ wordBreak: 'break-word', margin: '0.2rem 0', fontSize: '0.9rem', color: '#cbd5e1' }}>{String(value) || 'N/A'}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="admin-modal-actions" style={{ marginTop: '1.5rem' }}>
              <button className="secondary-button" onClick={() => setViewingUser(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

