# SagaToEdu

**Explore Knowledge, Unlock Your Potential.**

SagaToEdu adalah platform belajar statis berbasis HTML5, CSS3, dan Vanilla JavaScript. Website dapat dijalankan tanpa Node.js dan disiapkan untuk GitHub Pages.

## Menjalankan

- Buka `index.html` langsung di browser untuk menjelajah konten dasar dan interaksi yang menggunakan data inline JavaScript.
- Untuk pengalaman yang lebih konsisten, jalankan server statis lokal (misalnya ekstensi VS Code Live Server atau `python -m http.server 8000`), lalu buka `http://localhost:8000`.
- Tidak ada proses build atau instalasi dependency yang diperlukan.

## Fitur

- Landing page, katalog materi, detail materi, latihan soal, simulasi tryout, dashboard, login/register demo, profil, dan tentang kami.
- Katalog dengan pencarian, filter mata pelajaran/tingkat, sorting, bookmark, dan filter daftar favorit.
- Materi dengan daftar isi, contoh soal, ringkasan, progres selesai, serta navigasi materi sebelumnya/berikutnya.
- Latihan pilihan ganda dengan navigasi soal, penilaian otomatis, dan pembahasan.
- Tryout dengan timer absolut berbasis `endsAt`, penyimpanan jawaban otomatis, pemulihan sesi setelah refresh, serta hasil dan pembahasan.
- Dashboard berbasis data aktivitas nyata yang disimpan browser, grafik nilai sederhana, rekomendasi materi, dan streak.
- Tema terang/gelap dan profil/avatar.
- Layout responsif, aksesibilitas dasar, metadata SEO, favicon SVG, dan ringkasan QA pada `QA-REPORT.md`.

## Catatan data dan keamanan

Seluruh materi dan soal adalah **data demo** di `data/content.js`. Statistik materi/soal/kategori landing page adalah hitungan konten demo. Angka akun demo lokal hanya menghitung akun yang tersimpan pada browser ini, bukan pengguna platform secara global.

Akun demo hanya berlaku di browser/perangkat yang sama. Password disimpan sebagai hash lokal (SHA-256 melalui Web Crypto pada secure context, dengan fallback hash non-kriptografis untuk `file://`), bukan teks biasa. Ini **bukan autentikasi produksi**: LocalStorage dapat dibaca/dimodifikasi oleh pengguna perangkat dan tidak menyediakan sinkronisasi atau pemulihan akun. Untuk produksi, hubungkan autentikasi, database, penyimpanan progres, rate limiting, dan otorisasi ke backend aman. Jangan gunakan password penting pada akun demo.

Tidak ada pembayaran, ranking nasional, sinkronisasi lintas perangkat, atau layanan server aktif. Email kontak dan sosial adalah placeholder/demo.

## Struktur

```text
SagaToEdu/
├── index.html
├── materi.html
├── detail-materi.html
├── latihan.html
├── tryout.html
├── dashboard.html
├── login.html
├── register.html
├── tentang.html
├── profil.html
├── css/
│   ├── style.css
│   ├── components.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── navigation.js
│   ├── storage.js
│   ├── auth.js
│   ├── materi.js
│   ├── latihan.js
│   ├── tryout.js
│   ├── dashboard.js
│   └── profile.js
├── data/
│   └── content.js
└── assets/
    ├── images/owl-mascot.svg
    └── logo/saga-mark.svg
```

## Deploy ke GitHub Pages

1. Buat repository GitHub bernama `SagaToEdu` (atau nama lain).
2. Upload seluruh isi folder ini ke root repository, sehingga `index.html` berada di root.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu deployment GitHub Pages selesai, lalu buka URL yang ditampilkan di halaman Pages.

Semua link internal menggunakan path relatif agar kompatibel dengan project pages GitHub.

## Catatan pengembangan

- Tambahkan konten pada array `materials`, `questions`, dan `tryouts` di `data/content.js`.
- Kunci LocalStorage menggunakan prefix `sagatoedu:` pada `js/storage.js`.
- Setiap halaman memuat script bersama secara berurutan; pertahankan urutan `defer` ketika mengubah HTML.
- Data tidak menggunakan file JSON eksternal agar halaman tetap dapat dibuka melalui `file://`.
