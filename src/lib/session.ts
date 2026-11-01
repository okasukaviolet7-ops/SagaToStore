import type { StoredResult } from '@/types';

const KEY = 'upcyclo:result:v1';

/** Menyimpan hasil agar halaman /result tetap tampil setelah di-refresh. */
export function saveResult(result: StoredResult): void {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(result));
  } catch {
    // Kuota penuh (gambar AI besar): simpan tanpa gambar AI, mockup simulasi tetap tampil.
    try {
      sessionStorage.setItem(KEY, JSON.stringify({ ...result, imageUrl: null, mode: 'mock' }));
    } catch {
      /* abaikan */
    }
  }
}

export function loadResult(): StoredResult | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as StoredResult) : null;
  } catch {
    return null;
  }
}

export function clearResult(): void {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    /* abaikan */
  }
}
