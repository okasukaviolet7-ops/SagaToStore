'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AlertTriangle, Sparkles } from 'lucide-react';
import CategoryPicker from '@/components/CategoryPicker';
import GeneratingOverlay from '@/components/GeneratingOverlay';
import MaterialPicker from '@/components/MaterialPicker';
import UploadDropzone from '@/components/UploadDropzone';
import { guessMaterial } from '@/lib/catalog';
import { fileToResizedDataUrl, ImageError } from '@/lib/image';
import { saveResult } from '@/lib/session';
import type { CategoryId, GenerateResponse, MaterialId } from '@/types';

const MIN_LOADING_MS = 2600; // supaya animasi "AI bekerja" terasa mulus walau respons cepat
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[2rem] border border-leaf-100 bg-white/70 p-5 sm:p-8">
      <h2 className="mb-5 flex items-center gap-3 text-xl font-bold text-leaf-900 sm:text-2xl">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-700 font-sans text-base text-white">{n}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function StudioPage() {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const [material, setMaterial] = useState<MaterialId | null>(null);
  const [category, setCategory] = useState<CategoryId | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ready = Boolean(image && material && category);

  async function handleFile(file: File) {
    setError(null);
    try {
      const dataUrl = await fileToResizedDataUrl(file);
      setImage(dataUrl);
      const guess = guessMaterial(file.name);
      if (guess && !material) setMaterial(guess);
    } catch (e) {
      setError(e instanceof ImageError ? e.message : 'Foto gagal diproses. Coba foto lain.');
    }
  }

  async function handleGenerate() {
    if (!image || !material || !category) return;
    setError(null);
    setLoading(true);
    const started = Date.now();

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image, material, category }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error((data as { error?: string }).error ?? 'Terjadi kesalahan pada server.');

      const wait = MIN_LOADING_MS - (Date.now() - started);
      if (wait > 0) await sleep(wait);

      saveResult({ ...(data as GenerateResponse), original: image });
      router.push('/result');
    } catch (e) {
      setLoading(false);
      setError(e instanceof Error ? e.message : 'Terjadi kesalahan. Coba lagi.');
    }
  }

  return (
    <div className="container-page max-w-4xl py-10 sm:py-14">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-leaf-900 sm:text-4xl">Studio Upcycling</h1>
        <p className="mt-2 text-leaf-700">Tiga langkah singkat, lalu AI meracik ide untukmu.</p>
      </div>

      <div className="space-y-6">
        <Step n={1} title="Unggah foto barang bekas">
          <UploadDropzone preview={image} busy={loading} onFile={handleFile} onClear={() => setImage(null)} />
        </Step>

        <Step n={2} title="Jenis bahannya apa?">
          <MaterialPicker value={material} onChange={setMaterial} />
        </Step>

        <Step n={3} title="Mau jadi apa?">
          <CategoryPicker value={category} material={material} onChange={setCategory} />
        </Step>

        {error && (
          <div role="alert" className="flex items-start gap-3 rounded-2xl border border-clay-400 bg-clay-400/10 p-4 text-sm text-clay-600">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <p>{error}</p>
          </div>
        )}

        <div className="sticky bottom-4 z-30">
          <button type="button" onClick={handleGenerate} disabled={!ready || loading} className="btn-primary w-full py-4 text-base">
            <Sparkles className="h-5 w-5" aria-hidden />
            {ready ? 'Buat Mockup & Panduan' : 'Lengkapi 3 langkah di atas'}
          </button>
        </div>
      </div>

      {loading && <GeneratingOverlay />}
    </div>
  );
}
