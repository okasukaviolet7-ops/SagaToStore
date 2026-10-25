# Periksa — starter frontend (Next.js + Tailwind)

Isi paket ini adalah **file tambahan** untuk proyek Next.js baru.

## Cara pakai

1. Buat proyek baru:

   npx create-next-app@latest periksa

   Pilih: JavaScript, Tailwind CSS, App Router, import alias `@/*`.

2. Salin semua folder di paket ini (`app`, `components`, `lib`, `data`)
   ke dalam proyek tadi. Timpa `app/layout.js`, `app/page.js`, `app/globals.css`.

3. Jalankan:

   npm run dev

Buka http://localhost:3000

> `app/globals.css` memakai sintaks Tailwind v4 (`@import "tailwindcss"` dan `@theme`),
> yang menjadi default di create-next-app terbaru.

## Catatan

- `data/claims.json` hanya **data contoh**. Ganti dengan klarifikasi asli sebelum dipublikasikan.
- Link ke `/klaim/[slug]` dan `/lapor` sudah dipasang, tetapi halamannya dibuat di tahap berikutnya.
- Semua akses data lewat `lib/claims.js`. Pindah ke Supabase/MongoDB cukup mengganti isi file itu.
- Nama situs diatur di `lib/site.js`. Label status diatur di `lib/status.js`.

## Struktur

    app/
      layout.js         font, header, footer
      page.js           beranda
      globals.css       token warna & font
      klaim/[slug]/     (berikutnya) halaman detail klarifikasi
      lapor/            (berikutnya) form lapor berita
    components/
      SiteHeader.jsx
      ClaimExplorer.jsx   state pencarian + filter (client)
      SearchBar.jsx
      StatusFilter.jsx
      StatusBadge.jsx
      ClaimRow.jsx
    lib/
      claims.js         akses data (JSON sekarang, DB nanti)
      search.js         logika pencarian
      status.js         definisi status & warna
      format.js         format tanggal
      site.js           nama situs
    data/
      claims.json
