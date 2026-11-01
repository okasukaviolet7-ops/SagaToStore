import type { Metadata, Viewport } from 'next';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Upcyclo — Ubah Barang Bekas Jadi Karya Baru',
  description:
    'Unggah foto barang bekas, pilih hasil akhir (pot tanaman, fashion, atau tas), lihat mockup dari AI, dan ikuti panduan langkah demi langkah.',
};

export const viewport: Viewport = {
  themeColor: '#2e5b25',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
