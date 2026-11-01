import type { CategoryId, MaterialId } from '@/types';

export interface CategoryInfo {
  id: CategoryId;
  label: string;
  tagline: string;
}

export interface MaterialInfo {
  id: MaterialId;
  label: string;
  hint: string;
  /** Kata kunci pada nama file untuk menebak jenis bahan */
  keywords: string[];
}

export const CATEGORIES: CategoryInfo[] = [
  { id: 'plant', label: 'Pot Tanaman', tagline: 'Hijaukan sudut rumah dengan wadah unik' },
  { id: 'clothes', label: 'Fashion Upcycled', tagline: 'Baju & aksesori dengan cerita baru' },
  { id: 'bags', label: 'Tas Eco-Friendly', tagline: 'Tas kuat, ramah bumi, dan stylish' },
];

export const MATERIALS: MaterialInfo[] = [
  {
    id: 'plastic_bottle',
    label: 'Botol Plastik',
    hint: 'Botol air mineral, soda, sampo',
    keywords: ['botol', 'bottle', 'plastik', 'plastic', 'pet'],
  },
  {
    id: 'cardboard',
    label: 'Kardus',
    hint: 'Dus kemasan, kotak sepatu',
    keywords: ['kardus', 'dus', 'box', 'carton', 'cardboard', 'karton'],
  },
  {
    id: 'old_clothes',
    label: 'Pakaian Bekas',
    hint: 'Kaos, jeans, kain perca',
    keywords: ['baju', 'kaos', 'shirt', 'clothes', 'kain', 'jeans', 'fabric', 'tshirt'],
  },
  {
    id: 'tin_can',
    label: 'Kaleng',
    hint: 'Kaleng susu, sarden, minuman',
    keywords: ['kaleng', 'can', 'tin', 'aluminium', 'aluminum'],
  },
];

/** Warna ilustrasi per bahan (dipakai MockupArt) */
export const MATERIAL_PALETTE: Record<
  MaterialId,
  { main: string; light: string; dark: string; accent: string }
> = {
  plastic_bottle: { main: '#4fb0c6', light: '#d6f1f7', dark: '#2a7a8e', accent: '#f2c94c' },
  cardboard: { main: '#c8955a', light: '#efd9b6', dark: '#8c5e2f', accent: '#e6c27a' },
  old_clothes: { main: '#5b86b3', light: '#cfe0f1', dark: '#2f5580', accent: '#f0a37a' },
  tin_can: { main: '#9aa3b2', light: '#e8ebf1', dark: '#667184', accent: '#e0674d' },
};

export function getCategory(id: CategoryId): CategoryInfo {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[0];
}

export function getMaterial(id: MaterialId): MaterialInfo {
  return MATERIALS.find((m) => m.id === id) ?? MATERIALS[0];
}

export function isCategoryId(value: unknown): value is CategoryId {
  return CATEGORIES.some((c) => c.id === value);
}

export function isMaterialId(value: unknown): value is MaterialId {
  return MATERIALS.some((m) => m.id === value);
}

export function guessMaterial(filename: string): MaterialId | null {
  const name = filename.toLowerCase();
  const found = MATERIALS.find((m) => m.keywords.some((k) => name.includes(k)));
  return found ? found.id : null;
}
