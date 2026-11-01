'use client';

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const MESSAGES = [
  'Mengenali bentuk & tekstur barangmu…',
  'Mencari ide upcycling terbaik…',
  'Merancang mockup hasil akhir…',
  'Menyusun panduan langkah demi langkah…',
];

export default function GeneratingOverlay() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % MESSAGES.length), 1400);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 grid place-items-center bg-leaf-950/70 px-6 backdrop-blur-sm"
    >
      <div className="w-full max-w-sm rounded-3xl bg-sand-50 p-8 text-center shadow-soft">
        <div className="relative mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-leaf-100 text-leaf-700">
          <span className="absolute inset-0 animate-ping rounded-full bg-leaf-200 opacity-60" />
          <Sparkles className="relative h-9 w-9 animate-float" aria-hidden />
        </div>
        <p className="font-display text-xl font-bold text-leaf-900">Sedang meracik ide…</p>
        <p className="mt-2 min-h-[2.5rem] text-sm text-leaf-700">{MESSAGES[index]}</p>
        <div className="relative mt-4 h-2 overflow-hidden rounded-full bg-leaf-100">
          <div className="absolute inset-y-0 w-1/2 animate-shimmer rounded-full bg-leaf-500" />
        </div>
      </div>
    </div>
  );
}
