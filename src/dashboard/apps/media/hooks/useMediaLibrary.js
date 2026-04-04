import { useMemo, useState } from 'react';
import { ref as dbRef, update } from 'firebase/database';
import { deleteObject, getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../../../auth/firebaseConfig.js';
import mediaConfig from '../media.config.js';
import { generatePhotoKey, normalizeMediaPhotos, prepareImageUpload } from '../media.utils.js';

function getMediaErrorMessage(error, fallbackMessage) {
  if (error?.code === 'storage/unauthorized') {
    return 'Firebase Storage rechazo la operacion. Publica reglas para permitir acceso a media/{uid}/... del usuario autenticado.';
  }

  if (error?.code === 'storage/unauthenticated') {
    return 'Debes iniciar sesion antes de subir o administrar fotos.';
  }

  if (error?.code === 'storage/quota-exceeded') {
    return 'El bucket de Firebase Storage excedio su cuota disponible.';
  }

  return error?.message || fallbackMessage;
}

function useMediaLibrary(user, profile, onUpdateProfile) {
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const photos = useMemo(() => normalizeMediaPhotos(profile?.fotos || {}), [profile?.fotos]);
  const maxPhotosReached = photos.length >= mediaConfig.upload.maxPhotos;

  const persistProfile = async (nextProfile) => {
    await update(dbRef(db, `perfil/${user.uid}`), nextProfile);
    onUpdateProfile({
      ...profile,
      ...nextProfile,
    });
  };

  const uploadPhoto = async ({ file, title }) => {
    if (!user?.uid || !file) {
      return false;
    }

    if (maxPhotosReached) {
      setError(mediaConfig.labels.limitReached);
      return false;
    }

    if (!mediaConfig.upload.acceptedTypes.includes(file.type)) {
      setError('Formato de imagen no permitido.');
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const photoId = generatePhotoKey();
      const uploadedAt = new Date().toISOString();
      const [uploadedDate, uploadedTimeWithMs] = uploadedAt.split('T');
      const uploadedTime = String(uploadedTimeWithMs || '').split('.')[0];
      const { blob, contentType, extension } = await prepareImageUpload(file, mediaConfig.compression);
      const path = `media/${user.uid}/${photoId}.${extension}`;
      const photoStorageRef = storageRef(storage, path);

      await uploadBytes(photoStorageRef, blob, { contentType });
      const downloadUrl = await getDownloadURL(photoStorageRef);

      const nextPhoto = {
        titulo: String(title || '').trim(),
        url: downloadUrl,
        fecha: uploadedDate,
        hora: uploadedTime,
        fecha_subida: uploadedAt,
        storage_path: path,
      };

      await persistProfile({
        fotos: {
          ...(profile?.fotos || {}),
          [photoId]: nextPhoto,
        },
      });

      return true;
    } catch (uploadError) {
      setError(getMediaErrorMessage(uploadError, 'No se pudo subir la foto.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const updatePhotoTitle = async ({ photoId, title }) => {
    if (!user?.uid || !photoId) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      await persistProfile({
        fotos: {
          ...(profile?.fotos || {}),
          [photoId]: {
            ...(profile?.fotos?.[photoId] || {}),
            titulo: String(title || '').trim(),
          },
        },
      });

      return true;
    } catch (saveError) {
      setError(getMediaErrorMessage(saveError, 'No se pudo actualizar el titulo.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const deletePhoto = async (photoId) => {
    if (!user?.uid || !photoId) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      const currentPhoto = profile?.fotos?.[photoId];
      if (currentPhoto?.storage_path) {
        await deleteObject(storageRef(storage, currentPhoto.storage_path)).catch(() => null);
      }

      const nextPhotos = { ...(profile?.fotos || {}) };
      delete nextPhotos[photoId];

      await persistProfile({
        fotos: nextPhotos,
        ...(profile?.foto_perfil === currentPhoto?.url ? { foto_perfil: '' } : {}),
      });

      return true;
    } catch (deleteError) {
      setError(getMediaErrorMessage(deleteError, 'No se pudo eliminar la foto.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  const setProfilePhoto = async (photoId) => {
    if (!user?.uid || !photoId) {
      return false;
    }

    const selectedPhoto = profile?.fotos?.[photoId];
    if (!selectedPhoto?.url) {
      return false;
    }

    setSaving(true);
    setError('');

    try {
      await persistProfile({ foto_perfil: selectedPhoto.url });
      return true;
    } catch (saveError) {
      setError(getMediaErrorMessage(saveError, 'No se pudo definir la foto de perfil.'));
      return false;
    } finally {
      setSaving(false);
    }
  };

  return {
    error,
    maxPhotosReached,
    photos,
    saving,
    uploadPhoto,
    updatePhotoTitle,
    deletePhoto,
    setProfilePhoto,
  };
}

export default useMediaLibrary;