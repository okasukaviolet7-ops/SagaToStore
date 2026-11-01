import type { CategoryId, MaterialId } from '@/types';

export interface ProviderInput {
  /** Data URL foto asli (data:image/...;base64,...) */
  image: string;
  material: MaterialId;
  category: CategoryId;
}

export interface ProviderOutput {
  mode: 'ai' | 'mock';
  /** Data URL / URL gambar hasil. null = frontend menampilkan ilustrasi simulasi (MockupArt). */
  imageUrl: string | null;
  notice?: string;
}

/**
 * Kontrak penyedia generator visual. Untuk menambah penyedia lain
 * (Hugging Face, Replicate, Stability, dll.), buat file baru di folder ini
 * yang mengekspor fungsi bertipe `ImageProvider`, lalu daftarkan di `index.ts`.
 */
export type ImageProvider = (input: ProviderInput) => Promise<ProviderOutput>;
