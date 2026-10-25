import Link from "next/link";
import { Bricolage_Grotesque, Public_Sans } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});
const sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
  display: "swap",
});

export const metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "Cari judul berita atau pesan berantai, lalu lihat apakah klaimnya hoax, fakta, atau disinformasi beserta buktinya.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <SiteHeader />
        <main>{children}</main>
        <footer className="border-t border-line py-8 text-center text-sm text-ink-soft">
          Menemukan kabar mencurigakan?{" "}
          <Link href="/lapor" className="font-medium text-check underline underline-offset-2">
            Laporkan ke kami
          </Link>
        </footer>
      </body>
    </html>
  );
}
