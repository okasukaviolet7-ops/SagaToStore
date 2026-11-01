'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, Clock, Download, Leaf, Lightbulb, Printer, RotateCcw, Sparkles, Wrench } from 'lucide-react';
import MockupArt from '@/components/MockupArt';
import TutorialSteps from '@/components/TutorialSteps';
import { getCategory, getMaterial } from '@/lib/catalog';
import { loadResult } from '@/lib/session';
import type { StoredResult } from '@/types';

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} menit`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m ? `${h} jam ${m} menit` : `${h} jam`;
}

export default function ResultPage() {
  const [result, setResult] = useState<StoredResult | null>(null);
  const [state, setState] = useState<'loading' | 'empty' | 'ready'>('loading');
  const [view, setView] = useState<'after' | 'before'>('after');
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = loadResult();
    setResult(stored);
    setState(stored ? 'ready' : 'empty');
  }, []);

  if (state === 'loading') {
    return <div className="container-page py-24 text-center text-leaf-700">Memuat hasil…</div>;
  }

  if (state === 'empty' || !result) {
    return (
      <div className="container-page max-w-xl py-24 text-center">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-leaf-100 text-leaf-700">
          <Leaf className="h-8 w-8" aria-hidden />
        </div>
        <h1 className="text-3xl font-bold text-leaf-900">Belum ada hasil</h1>
        <p className="mt-2 text-leaf-700">Buat mockup pertamamu di Studio, lalu hasilnya akan muncul di sini.</p>
        <Link href="/studio" className="btn-primary mt-6">
          Ke Studio
        </Link>
      </div>
    );
  }

  const { idea, category, material, mode, imageUrl, original, notice } = result;
  const cat = getCategory(category);
  const mat = getMaterial(material);

  function downloadMockup() {
    const a = document.createElement('a');
    if (imageUrl) {
      a.href = imageUrl;
      a.download = 'upcyclo-mockup.jpg';
    } else {
      const svg = artRef.current?.querySelector('svg');
      if (!svg) return;
      const blob = new Blob([new XMLSerializer().serializeToString(svg)], { type: 'image/svg+xml' });
      a.href = URL.createObjectURL(blob);
      a.download = 'upcyclo-mockup.svg';
    }
    a.click();
    if (!imageUrl) setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  }

  return (
    <div className="container-page max-w-5xl py-10 sm:py-14">
      {/* Header */}
      <div className="animate-fade-up">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">{cat.label}</span>
          <span className="chip">Dari {mat.label}</span>
          <span className="chip bg-sand-200 text-leaf-800">
            <Sparkles className="h-3 w-3" aria-hidden /> {mode === 'ai' ? 'Dibuat AI' : 'Mockup simulasi'}
          </span>
        </div>
        <h1 className="mt-3 text-3xl font-bold leading-tight text-leaf-900 sm:text-5xl">{idea.title}</h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-leaf-800">{idea.summary}</p>
      </div>

      {notice && (
        <div role="status" className="mt-5 flex items-start gap-3 rounded-2xl border border-sand-300 bg-sand-100 p-4 text-sm text-leaf-800">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-clay-500" aria-hidden />
          <p>{notice}</p>
        </div>
      )}

      {/* Sebelum / Sesudah */}
      <section className="mt-8" aria-label="Perbandingan sebelum dan sesudah">
        <div className="no-print mb-3 flex gap-2 md:hidden" role="tablist">
          {(['after', 'before'] as const).map((v) => (
            <button
              key={v}
              role="tab"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
                view === v ? 'bg-leaf-700 text-white' : 'bg-leaf-100 text-leaf-800'
              }`}
            >
              {v === 'after' ? 'Hasil akhir' : 'Foto asli'}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <figure className={`${view === 'before' ? 'block' : 'hidden'} print-card overflow-hidden rounded-3xl border border-leaf-100 bg-white md:block`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={original} alt="Foto barang bekas asli" className="aspect-square w-full object-contain bg-sand-100" />
            <figcaption className="px-4 py-3 text-sm font-semibold text-leaf-700">Sebelum: {mat.label}</figcaption>
          </figure>

          <figure className={`${view === 'after' ? 'block' : 'hidden'} print-card overflow-hidden rounded-3xl border border-leaf-100 bg-white shadow-soft md:block`}>
            <div ref={artRef}>
              {imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageUrl} alt={`Mockup ${idea.title}`} className="aspect-square w-full object-cover" />
              ) : (
                <MockupArt category={category} material={material} className="aspect-square w-full" />
              )}
            </div>
            <figcaption className="px-4 py-3 text-sm font-semibold text-leaf-700">Sesudah: {idea.title}</figcaption>
          </figure>
        </div>

        <div className="no-print mt-4 flex flex-wrap gap-3">
          <button type="button" onClick={downloadMockup} className="btn-ghost !px-5 !py-2.5 text-sm">
            <Download className="h-4 w-4" aria-hidden /> Unduh mockup
          </button>
          <button type="button" onClick={() => window.print()} className="btn-ghost !px-5 !py-2.5 text-sm">
            <Printer className="h-4 w-4" aria-hidden /> Cetak panduan
          </button>
          <Link href="/studio" className="btn-ghost !px-5 !py-2.5 text-sm">
            <RotateCcw className="h-4 w-4" aria-hidden /> Coba ide lain
          </Link>
        </div>
      </section>

      {/* Ringkasan */}
      <section className="mt-10 grid gap-5 md:grid-cols-3">
        <div className="print-card rounded-3xl border border-leaf-100 bg-white p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-leaf-900">
            <Clock className="h-5 w-5 text-leaf-600" aria-hidden /> Ringkasan
          </h2>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-leaf-600">Tingkat</dt>
              <dd className="font-bold text-leaf-900">{idea.difficulty}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-leaf-600">Waktu</dt>
              <dd className="font-bold text-leaf-900">±{formatDuration(idea.minutes)}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-leaf-600">Langkah</dt>
              <dd className="font-bold text-leaf-900">{idea.steps.length}</dd>
            </div>
          </dl>
        </div>

        <div className="print-card rounded-3xl border border-leaf-100 bg-white p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-leaf-900">
            <Leaf className="h-5 w-5 text-leaf-600" aria-hidden /> Bahan
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-leaf-800 marker:text-leaf-400">
            {idea.materials.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <div className="print-card rounded-3xl border border-leaf-100 bg-white p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-leaf-900">
            <Wrench className="h-5 w-5 text-leaf-600" aria-hidden /> Alat
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-leaf-800 marker:text-leaf-400">
            {idea.tools.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {idea.safety && (
        <div className="print-card mt-5 flex items-start gap-3 rounded-2xl border border-clay-400 bg-clay-400/10 p-4 text-sm text-clay-600">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <p>
            <strong>Keselamatan:</strong> {idea.safety}
          </p>
        </div>
      )}

      {/* Tutorial */}
      <section className="mt-12">
        <h2 className="section-title mb-6">Panduan langkah demi langkah</h2>
        <TutorialSteps steps={idea.steps} />
      </section>

      {/* Tips & dampak */}
      <section className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="print-card rounded-3xl bg-leaf-50 p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-leaf-900">
            <Lightbulb className="h-5 w-5 text-leaf-600" aria-hidden /> Tips
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-leaf-800 marker:text-leaf-400">
            {idea.tips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="print-card rounded-3xl bg-leaf-900 p-6 text-white">
          <h2 className="flex items-center gap-2 text-lg font-bold">
            <Leaf className="h-5 w-5 text-leaf-300" aria-hidden /> Dampak hijau
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-leaf-100">{idea.impact}</p>
        </div>
      </section>
    </div>
  );
}
