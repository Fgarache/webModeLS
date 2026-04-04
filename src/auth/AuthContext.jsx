import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { ref, get, set } from 'firebase/database';
import { auth, db, googleProvider } from './firebaseConfig.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        // Obtener perfil desde Realtime Database
        const profileRef = ref(db, `perfil/${firebaseUser.uid}`);
        try {
          const snapshot = await get(profileRef);
          if (snapshot.exists()) {
            setProfile(snapshot.val());
          } else {
            // Crear perfil básico si no existe
            const newProfile = {
              descripcion: '',
              disponible: true,
              disponible_hoy_en: '',
              email: firebaseUser.email,
              estado_texto: '',
              foto_perfil: firebaseUser.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${firebaseUser.uid}`,
              fotos: {},
              mis_tours: {},
              nombre_completo: firebaseUser.displayName || firebaseUser.email.split('@')[0],
              nombre_usuario: firebaseUser.email.split('@')[0],
              perfil_activo: true,
              redes: {},
              rol: 'usuario',
              servicios: {},
              ubicaciones: {},
              verificado: false,
            };
            await set(profileRef, newProfile);
            setProfile(newProfile);
          }
        } catch (error) {
          console.error('Error obteniendo/creando perfil:', error);
          setProfile(null);
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, profile, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
