'use client';

import { useRef, useState } from 'react';
import { Camera, ImagePlus, X } from 'lucide-react';

interface Props {
  preview: string | null;
  busy?: boolean;
  onFile: (file: File) => void;
  onClear: () => void;
}

export default function UploadDropzone({ preview, busy = false, onFile, onClear }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (file) onFile(file);
  }

  if (preview) {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-leaf-200 bg-white shadow-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={preview} alt="Foto barang bekas yang diunggah" className="mx-auto max-h-[420px] w-full object-contain" />
        <button
          type="button"
          onClick={() => {
            onClear();
            if (inputRef.current) inputRef.current.value = '';
          }}
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-leaf-800 shadow hover:bg-white"
          aria-label="Hapus foto"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
    );
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      className={`rounded-3xl border-2 border-dashed p-8 text-center transition sm:p-12 ${
        dragging ? 'border-leaf-500 bg-leaf-100' : 'border-leaf-300 bg-white hover:border-leaf-400'
      }`}
    >
      <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-leaf-100 text-leaf-700">
        <ImagePlus className="h-8 w-8" aria-hidden />
      </div>
      <p className="font-display text-xl font-bold text-leaf-900">Unggah foto barang bekasmu</p>
      <p className="mx-auto mt-1 max-w-sm text-sm text-leaf-700">
        Seret & lepas foto di sini, atau pilih dari galeri. Format JPG, PNG, atau WebP.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button type="button" disabled={busy} onClick={() => inputRef.current?.click()} className="btn-primary">
          <ImagePlus className="h-4 w-4" aria-hidden /> Pilih dari galeri
        </button>
        <label className="btn-ghost cursor-pointer">
          <Camera className="h-4 w-4" aria-hidden /> Ambil foto
          <input
            type="file"
            accept="image/*"
            capture="environment"
            className="sr-only"
            disabled={busy}
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        className="sr-only"
        onChange={(e) => handleFiles(e.target.files)}
        aria-label="Pilih file foto"
      />
    </div>
  );
}
