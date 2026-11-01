import type { ImageProvider } from './types';

/**
 * Provider simulasi: tidak memanggil API apa pun. Frontend akan menampilkan
 * ilustrasi vektor (MockupArt) yang disesuaikan dengan bahan & kategori.
 */
export const mockProvider: ImageProvider = async () => ({
  mode: 'mock',
  imageUrl: null,
});
