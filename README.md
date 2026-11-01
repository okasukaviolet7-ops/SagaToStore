# Upcyclo — Platform Upcycling Berbasis AI

Unggah foto barang bekas → pilih hasil akhir (pot tanaman, fashion, tas) → lihat mockup AI → ikuti panduan langkah demi langkah.

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · lucide-react

## Struktur folder

```
upcyclo/
├─ package.json · tsconfig.json · next.config.mjs · tailwind.config.ts · postcss.config.mjs
├─ .env.example                  # contoh konfigurasi (salin ke .env.local)
├─ scripts/prepare-standalone.mjs   # menyiapkan build untuk hosting Node.js
├─ public/                       # aset statis
└─ src/
   ├─ app/
   │  ├─ layout.tsx · globals.css       # shell, font, tema eco-green
   │  ├─ page.tsx                       # Halaman Utama (landing)
   │  ├─ studio/page.tsx                # Studio: upload + bahan + kategori
   │  ├─ result/page.tsx                # Hasil: sebelum/sesudah + tutorial
   │  └─ api/generate/route.ts          # POST /api/generate
   ├─ components/
   │  ├─ Navbar · Footer
   │  ├─ UploadDropzone · MaterialPicker · CategoryPicker · GeneratingOverlay
   │  ├─ MockupArt.tsx                  # 12 ilustrasi vektor (mode simulasi)
   │  └─ TutorialSteps.tsx              # checklist langkah + progress bar
   ├─ lib/
   │  ├─ catalog.ts                     # kategori, bahan, palet warna
   │  ├─ tutorials.ts                   # 12 ide + panduan (3 kategori x 4 bahan)
   │  ├─ image.ts                       # perkecil foto di browser sebelum dikirim
   │  ├─ session.ts · rateLimit.ts
   │  └─ providers/                     # generator visual (mock / openai / tambah sendiri)
   └─ types/index.ts
```

## Menjalankan di komputer sendiri

Butuh Node.js 18.18 atau lebih baru.

```bash
npm install
cp .env.example .env.local
npm run dev          # http://localhost:3000
```

Tanpa API key, aplikasi berjalan dalam **mode simulasi**: hasil ditampilkan sebagai ilustrasi vektor sesuai bahan & kategori, lengkap dengan panduan.

## Mengaktifkan AI gambar (opsional)

Isi `.env.local` (atau variabel lingkungan di hosting):

```
AI_PROVIDER=openai
OPENAI_API_KEY=sk-...
OPENAI_IMAGE_MODEL=gpt-image-1
```

Foto dikirim ke endpoint *image edits* OpenAI dengan prompt yang dibuat dari bahan + kategori. Jika panggilan gagal (kuota, jaringan, model belum aktif di akun), aplikasi otomatis kembali ke mode simulasi dan menampilkan pemberitahuan. Beberapa model gambar OpenAI memerlukan verifikasi organisasi di akun OpenAI.

Untuk penyedia lain (Hugging Face, Replicate, dll.): buat `src/lib/providers/namaanda.ts` yang mengekspor fungsi bertipe `ImageProvider`, lalu daftarkan di `providers/index.ts`.

**Penting:** API key hanya dibaca di server (`route.ts`), jangan pernah memakai awalan `NEXT_PUBLIC_` untuk key.

## Deploy ke hosting yang sudah kamu miliki

Aplikasi ini punya API route sehingga butuh **hosting yang bisa menjalankan Node.js**. Pilih sesuai jenis hosting:

### A. Hosting dengan "Setup Node.js App" (cPanel, Niagahoster, Hostinger, Rumahweb, dll.)

1. Di komputermu: `npm install` lalu `npm run build:standalone`.
2. Hasilnya ada di folder `.next/standalone`. Upload **isi folder itu** (termasuk `.next` dan `public` di dalamnya) ke folder aplikasi di hosting, mis. `~/upcyclo`.
3. Di cPanel → **Setup Node.js App** → Create Application:
   - Node.js version: 18 atau lebih baru (disarankan 20)
   - Application root: `upcyclo`
   - Application URL: domain/subdomain pilihanmu
   - Startup file: `server.js`
4. Tambahkan Environment Variables (`AI_PROVIDER`, `OPENAI_API_KEY`, dst.), lalu **Restart**.

### B. VPS / server sendiri (Ubuntu)

```bash
git clone <repo-kamu> && cd upcyclo
npm ci && npm run build:standalone
npm i -g pm2
AI_PROVIDER=mock PORT=3000 pm2 start .next/standalone/server.js --name upcyclo
pm2 save && pm2 startup
```

Arahkan domain dengan Nginx:

```nginx
server {
  server_name contoh.com;
  client_max_body_size 8m;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

Lalu pasang HTTPS dengan `certbot --nginx`.

### D. GitHub Pages (paling simpel, tanpa server)

Mode ini otomatis dipakai oleh workflow `.github/workflows/pages.yml`. Mockup yang tampil adalah ilustrasi simulasi (AI gambar tidak aktif karena tidak ada server untuk menyimpan API key).

1. Buat repositori **baru** (bukan repositori situs lain), lalu unggah semua isi project, termasuk folder `.github`.
2. Buka **Settings → Pages → Source: GitHub Actions**.
3. Tab **Actions** akan membangun situs; setelah hijau, alamatnya `https://USERNAME.github.io/NAMA-REPO/`.

### C. Hosting hanya PHP/statis (tanpa Node.js)

Aplikasi tidak bisa berjalan langsung di sana. Cara termudah: deploy gratis ke **Vercel** (impor repo GitHub, tambahkan environment variables), lalu arahkan domainmu ke Vercel lewat DNS (CNAME ke `cname.vercel-dns.com` atau sesuai petunjuk Vercel). Domain tetap milikmu, hanya aplikasinya yang berjalan di Vercel.

## Kustomisasi cepat

| Ingin mengubah… | Edit file |
| --- | --- |
| Warna tema | `tailwind.config.ts` (palet `leaf`, `sand`, `clay`) |
| Menambah bahan / kategori | `src/lib/catalog.ts`, `src/types/index.ts`, `src/lib/tutorials.ts`, dan `MockupArt.tsx` |
| Isi panduan | `src/lib/tutorials.ts` |
| Prompt AI | `buildPrompt()` di `src/lib/providers/openai.ts` |
| Batas permintaan per menit | `src/lib/rateLimit.ts` |

## Catatan teknis

- Foto diperkecil (maks 1024 px, JPEG) di browser sebelum dikirim, agar cepat di jaringan seluler.
- Hasil disimpan di `sessionStorage`, jadi halaman `/result` tetap tampil setelah di-refresh, dan tidak ada foto yang disimpan permanen di server.
- Pembatas permintaan bersifat in-memory (cukup untuk satu server). Untuk trafik besar gunakan Redis/Upstash.
