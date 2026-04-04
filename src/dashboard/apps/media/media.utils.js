function getPhotoSortValue(photo) {
  const uploadedAt = Date.parse(photo?.fecha_subida || '');
  if (!Number.isNaN(uploadedAt)) {
    return uploadedAt;
  }

  const legacyDateTime = Date.parse(`${photo?.fecha || ''}T${photo?.hora || '00:00:00'}`);
  if (!Number.isNaN(legacyDateTime)) {
    return legacyDateTime;
  }

  const legacyDate = Date.parse(photo?.fecha || '');
  if (!Number.isNaN(legacyDate)) {
    return legacyDate;
  }

  const numericId = Number(String(photo?.id || '').replace(/\D/g, ''));
  if (!Number.isNaN(numericId)) {
    return numericId;
  }

  return 0;
}

export function getPhotoTimestamp(photo) {
  const directTimestamp = getPhotoSortValue(photo);
  return directTimestamp > 0 ? directTimestamp : Date.now();
}

export function getRelativeUploadLabel(photo) {
  const timestamp = getPhotoTimestamp(photo);
  const diffMs = Math.max(0, Date.now() - timestamp);
  const diffHours = Math.floor(diffMs / (60 * 60 * 1000));

  if (diffHours < 1) {
    return 'Subida ahora mismo';
  }

  if (diffHours < 24) {
    return `Hace ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
  }

  const diffDays = Math.floor(diffMs / (24 * 60 * 60 * 1000));
  return `Subida hace ${diffDays} ${diffDays === 1 ? 'dia' : 'dias'}`;
}

export function normalizeMediaPhotos(photosMap = {}) {
  return Object.entries(photosMap)
    .map(([id, photo]) => ({
      id,
      ...photo,
    }))
    .sort((left, right) => getPhotoSortValue(right) - getPhotoSortValue(left));
}

export function generatePhotoKey() {
  return `f${Date.now()}`;
}

export function getFileExtension(outputType) {
  if (outputType === 'image/gif') {
    return 'gif';
  }

  if (outputType === 'image/png') {
    return 'png';
  }

  if (outputType === 'image/webp') {
    return 'webp';
  }

  return 'jpg';
}

export function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('No se pudo leer la imagen.'));
    reader.readAsDataURL(file);
  });
}

export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('No se pudo cargar la imagen para comprimirla.'));
    image.src = src;
  });
}

export async function compressImage(file, compressionConfig) {
  const src = await fileToDataUrl(file);
  const image = await loadImage(src);

  const scale = Math.min(
    1,
    compressionConfig.maxWidth / image.width,
    compressionConfig.maxHeight / image.height
  );

  const targetWidth = Math.max(1, Math.round(image.width * scale));
  const targetHeight = Math.max(1, Math.round(image.height * scale));

  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('No se pudo preparar la compresion de la imagen.');
  }

  context.drawImage(image, 0, 0, targetWidth, targetHeight);

  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob(
      (result) => {
        if (result) {
          resolve(result);
          return;
        }

        reject(new Error('No se pudo generar la imagen comprimida.'));
      },
      compressionConfig.outputType,
      compressionConfig.quality
    );
  });

  return blob;
}

export async function prepareImageUpload(file, compressionConfig) {
  if (file?.type === 'image/gif') {
    return {
      blob: file,
      contentType: 'image/gif',
      extension: 'gif',
      compressed: false,
    };
  }

  const blob = await compressImage(file, compressionConfig);
  return {
    blob,
    contentType: compressionConfig.outputType,
    extension: getFileExtension(compressionConfig.outputType),
    compressed: true,
  };
}