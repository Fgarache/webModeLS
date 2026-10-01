import { useEffect, useState } from 'react';
import { ref, get, update } from 'firebase/database';
import { db } from '../../../auth/firebaseConfig.js';

export function useAdmin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const snapshot = await get(ref(db, 'perfil'));
      if (snapshot.exists()) {
        const raw = snapshot.val();
        const usersArray = Object.entries(raw).map(([uid, data]) => ({
          uid,
          ...data,
        }));
        setUsers(usersArray);
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error fetching users: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleVerifyAndRole = async (uid, isCurrentlyVerified) => {
    try {
      const newStatus = !isCurrentlyVerified;
      const newRole = newStatus ? 'model' : 'user';
      await update(ref(db, `perfil/${uid}`), { verificado: newStatus, rol: newRole });
      setUsers((prev) => prev.map(u => u.uid === uid ? { ...u, verificado: newStatus, rol: newRole } : u));
    } catch (error) {
      console.error('Error toggling verify and role:', error);
      alert('Error: ' + error.message);
    }
  };

  const updateUser = async (uid, updates) => {
    try {
      await update(ref(db, `perfil/${uid}`), updates);
      setUsers((prev) => prev.map(u => u.uid === uid ? { ...u, ...updates } : u));
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user: ' + error.message);
      throw error;
    }
  };

  const getVistas = async (uid) => {
    try {
      const snap = await get(ref(db, `estadisticas_perfil/${uid}/vistas`));
      return snap.exists() ? snap.val() : 0;
    } catch (e) {
      return 0;
    }
  };

  const updateVistas = async (uid, vistas) => {
    try {
      await update(ref(db, `estadisticas_perfil/${uid}`), { vistas: Number(vistas) });
    } catch (e) {
      console.error('Error updating vistas:', e);
      throw e;
    }
  };

  return { users, loading, toggleVerifyAndRole, updateUser, fetchUsers, getVistas, updateVistas };
}
