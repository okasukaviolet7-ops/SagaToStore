'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Recycle } from 'lucide-react';

const LINKS = [
  { href: '/', label: 'Beranda' },
  { href: '/studio', label: 'Studio' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="no-print sticky top-0 z-40 border-b border-leaf-100 bg-sand-50/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-leaf-800">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-leaf-700 text-leaf-100">
            <Recycle className="h-5 w-5" aria-hidden />
          </span>
          Upcyclo
        </Link>

        <nav aria-label="Navigasi utama" className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={`hidden rounded-full px-4 py-2 text-sm font-semibold transition sm:inline-block ${
                  active ? 'bg-leaf-100 text-leaf-800' : 'text-leaf-700 hover:bg-leaf-50'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link href="/studio" className="btn-primary !px-4 !py-2 text-sm">
            Mulai Berkarya
          </Link>
        </nav>
      </div>
    </header>
  );
}
