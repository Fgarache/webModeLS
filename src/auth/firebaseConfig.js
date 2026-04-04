import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBzZMqTeeg_5w8eukAy88H6VDgjE4R1kiM',
  authDomain: 'sitemodelgt.firebaseapp.com',
  projectId: 'sitemodelgt',
  storageBucket: 'sitemodelgt.firebasestorage.app',
  messagingSenderId: '732253881964',
  appId: '1:732253881964:web:ae719d06c896d8136afa49',
  measurementId: 'G-XSV2F8C19J',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
