# SagaToEdu — QA Report

Tanggal pemeriksaan: 5 November 2026

## Ringkasan

**Hasil: pemeriksaan statis dan alur interaktif utama lulus.** Website terdiri dari 10 halaman HTML, 3 stylesheet, 9 file JavaScript, 1 file data JavaScript, dan aset SVG lokal.

## Hasil pemeriksaan

| Area | Hasil | Catatan |
|---|---|---|
| Sintaks JavaScript | Lulus | Semua file `js/*.js` dan `data/*.js` lolos `node --check`. |
| Halaman HTML | Lulus | 10 halaman berhasil diparse; title dan meta description tersedia. |
| ID HTML | Lulus | Tidak ditemukan ID duplikat pada dokumen HTML awal. |
| Aset dan path lokal | Lulus | Seluruh referensi aset/stylesheet/script lokal yang diperiksa tersedia. |
| HTTP statis | Lulus | 10 halaman, stylesheet, script, data, dan SVG utama merespons HTTP 200 melalui server statis lokal. |
| Pencarian/filter/sorting materi | Lulus | Pencarian, filter, sorting, bookmark, dan filter favorit aktif. |
| Detail materi | Lulus | Konten, daftar isi, contoh soal, ringkasan, progres selesai, bookmark, dan navigasi tersedia. |
| Latihan soal | Lulus | Navigasi, pemilihan jawaban, nilai otomatis, riwayat, dan pembahasan diuji; sesi simulasi memperoleh 100/100 saat semua jawaban benar. |
| Tryout | Lulus | Timer berbasis timestamp, jawaban tersimpan, pemulihan sesi setelah refresh, konfirmasi submit, skor, dan pembahasan diuji; simulasi uji memperoleh 100/100. |
| Login/register demo | Lulus | Validasi, penolakan kredensial salah, login benar, register, dan logout diuji. Password tidak disimpan sebagai teks biasa. |
| Dashboard/profil | Lulus | Data aktivitas dibaca dari penyimpanan lokal; edit profil berhasil. |
| Tema/menu mobile | Lulus | Tema terang/gelap dan hamburger menu diuji. |
| JavaScript runtime | Lulus | Tidak ada page error atau console error dalam pengujian alur yang dijalankan. |
| Responsive overflow | Lulus | Tidak ditemukan horizontal overflow pada 10 halaman saat diperiksa pada lebar 360, 390, 768, 1024, dan 1440 px. |

## Metode pengujian dan batas lingkungan

Logika dan DOM diuji menggunakan Chromium headless dengan file HTML, CSS, dan JavaScript proyek dimuat sebagai dokumen uji. Navigasi browser langsung ke URL `localhost` maupun `file://` dibatasi oleh lingkungan sandbox ini (`ERR_BLOCKED_BY_ADMINISTRATOR`), sehingga pemeriksaan HTTP dilakukan terpisah dengan permintaan ke server statis lokal; seluruh rute yang diperiksa mengembalikan HTTP 200. Pemeriksaan responsif dilakukan pada layout yang dirender Chromium.

Hasil ini bukan pengganti QA lintas perangkat nyata. Sebelum rilis produksi, lakukan uji manual pada Android/iOS dan beberapa browser desktop, terutama untuk ukuran font, perilaku keyboard virtual, penyimpanan `file://`, serta aksesibilitas.

## Batasan yang diketahui

- Akun dan progres hanya disimpan di LocalStorage browser/perangkat yang sama; tidak tersinkron lintas perangkat.
- Akun demo bukan autentikasi produksi. Hash fallback untuk konteks `file://` bersifat non-kriptografis. Gunakan backend autentikasi dan database sebelum dipakai dengan akun sungguhan.
- Materi dan soal adalah konten contoh lokal, bukan kisi-kisi resmi atau bank soal bersertifikat.
- Statistik landing page untuk materi/soal/kategori adalah hitungan konten demo. Angka akun demo lokal hanya menghitung akun pada browser yang sedang digunakan, bukan pengguna platform secara global.
- Tidak ada ranking nasional, pembayaran, API, sinkronisasi cloud, atau panel admin.
- Email kontak dan beberapa tautan sosial adalah placeholder yang perlu diganti dengan kontak resmi pemilik proyek.
- Google Fonts dimuat opsional dari CDN; font sistem menjadi fallback bila CDN tidak tersedia.
