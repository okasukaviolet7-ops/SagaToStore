import { Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="no-print mt-24 border-t border-leaf-100 bg-sand-100/60">
      <div className="container-page flex flex-col items-center justify-between gap-3 py-8 text-sm text-leaf-700 sm:flex-row">
        <p className="flex items-center gap-2 font-semibold">
          <Leaf className="h-4 w-4" aria-hidden /> Upcyclo — ubah barang bekas jadi karya baru.
        </p>
        <p className="text-leaf-600">Kurangi sampah, mulai dari rumahmu sendiri.</p>
      </div>
    </footer>
  );
}
