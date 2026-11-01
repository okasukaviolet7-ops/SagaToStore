// Pembatas request sederhana (in-memory) agar API key AI tidak disalahgunakan.
// Catatan: pada hosting serverless setiap instance punya memori sendiri. Untuk
// produksi skala besar gunakan Redis/Upstash.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 8;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);

  // Bersihkan entri lama agar memori tidak membengkak
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}
