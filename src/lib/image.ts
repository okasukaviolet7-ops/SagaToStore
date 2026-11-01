const MAX_FILE_BYTES = 12 * 1024 * 1024; // 12 MB sebelum diperkecil
const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp'];

export class ImageError extends Error {}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new ImageError('Gambar tidak bisa dibaca. Coba file lain.'));
    img.src = url;
  });
}

/**
 * Memperkecil foto (sisi terpanjang maks 1024px) dan mengubahnya menjadi data URL JPEG.
 * Ini menjaga ukuran request kecil & cepat, terutama di jaringan seluler.
 */
export async function fileToResizedDataUrl(file: File, maxSide = 1024, quality = 0.85): Promise<string> {
  if (!ACCEPTED.includes(file.type)) {
    throw new ImageError('Format belum didukung. Gunakan JPG, PNG, atau WebP.');
  }
  if (file.size > MAX_FILE_BYTES) {
    throw new ImageError('Ukuran foto terlalu besar (maks 12 MB).');
  }

  const objectUrl = URL.createObjectURL(file);
  try {
    const img = await loadImage(objectUrl);
    const scale = Math.min(1, maxSide / Math.max(img.naturalWidth, img.naturalHeight));
    const width = Math.max(1, Math.round(img.naturalWidth * scale));
    const height = Math.max(1, Math.round(img.naturalHeight * scale));

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new ImageError('Browser tidak mendukung pemrosesan gambar.');

    // Latar putih agar PNG transparan tidak berubah menjadi hitam di JPEG
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);

    return canvas.toDataURL('image/jpeg', quality);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}
