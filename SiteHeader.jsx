import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-bold">
          {/* Tiga batang = tiga kemungkinan hasil: hoax, disinformasi, fakta */}
          <span aria-hidden className="flex h-5 items-end gap-0.5">
            <i className="h-3 w-1.5 rounded-full bg-hoax" />
            <i className="h-5 w-1.5 rounded-full bg-disinfo-bar" />
            <i className="h-4 w-1.5 rounded-full bg-fakta" />
          </span>
          {SITE_NAME}
        </Link>

        <nav aria-label="Menu utama" className="flex items-center gap-5 text-sm font-medium">
          <Link href="/" className="text-ink-soft hover:text-ink">
            Beranda
          </Link>
          <Link
            href="/lapor"
            className="rounded-md bg-ink px-3.5 py-2 text-white hover:bg-check"
          >
            Lapor berita
          </Link>
        </nav>
      </div>
    </header>
  );
}
