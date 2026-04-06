import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { ref, get, set, update } from 'firebase/database';
import { auth, db, googleProvider } from './firebaseConfig.js';

const AuthContext = createContext(null);
const DEFAULT_ROLE = 'user';

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
            const existingProfile = snapshot.val();

            if (!String(existingProfile?.rol || '').trim()) {
              const nextProfile = {
                ...existingProfile,
                rol: DEFAULT_ROLE,
              };

              await update(profileRef, { rol: DEFAULT_ROLE });
              setProfile(nextProfile);
            } else {
              setProfile(existingProfile);
            }
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
              rol: DEFAULT_ROLE,
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
