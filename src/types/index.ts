export type CategoryId = 'plant' | 'clothes' | 'bags';
export type MaterialId = 'plastic_bottle' | 'cardboard' | 'old_clothes' | 'tin_can';
export type Difficulty = 'Mudah' | 'Sedang' | 'Menantang';

export interface TutorialStep {
  title: string;
  detail: string;
}

export interface Idea {
  title: string;
  summary: string;
  difficulty: Difficulty;
  /** Perkiraan waktu pengerjaan (menit) */
  minutes: number;
  materials: string[];
  tools: string[];
  steps: TutorialStep[];
  tips: string[];
  safety?: string;
  impact: string;
}

export interface GenerateRequest {
  /** Data URL gambar (jpeg/png/webp) yang sudah diperkecil di sisi klien */
  image: string;
  material: MaterialId;
  category: CategoryId;
}

export interface GenerateResponse {
  /** "ai" = gambar dibuat model AI, "mock" = ilustrasi simulasi */
  mode: 'ai' | 'mock';
  imageUrl: string | null;
  notice?: string;
  category: CategoryId;
  material: MaterialId;
  idea: Idea;
  createdAt: string;
}

export interface StoredResult extends GenerateResponse {
  /** Foto asli pengguna (untuk perbandingan sebelum/sesudah) */
  original: string;
}
