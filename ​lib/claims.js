import claims from "@/data/claims.json";

// Semua akses data lewat file ini.
// Saat pindah ke Supabase/MongoDB, cukup ganti isi fungsi-fungsi ini;
// komponen dan halaman tidak perlu diubah.

// Versi ringan untuk daftar & pencarian (tanpa analisis/bukti yang panjang)
export async function getClaimList() {
  return claims.map(({ id, slug, title, status, publishedAt, summary, tags }) => ({
    id,
    slug,
    title,
    status,
    publishedAt,
    summary,
    tags,
  }));
}

// Versi lengkap untuk halaman detail
export async function getClaimBySlug(slug) {
  return claims.find((c) => c.slug === slug) ?? null;
}
