'use client';

import { Check } from 'lucide-react';
import { CATEGORIES } from '@/lib/catalog';
import type { CategoryId, MaterialId } from '@/types';
import MockupArt from './MockupArt';

interface Props {
  value: CategoryId | null;
  /** Bahan terpilih: dipakai untuk menampilkan pratinjau yang sesuai */
  material: MaterialId | null;
  onChange: (id: CategoryId) => void;
}

export default function CategoryPicker({ value, material, onChange }: Props) {
  return (
    <div role="radiogroup" aria-label="Pilih hasil akhir" className="grid gap-4 sm:grid-cols-3">
      {CATEGORIES.map((c) => {
        const selected = value === c.id;
        return (
          <button
            key={c.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(c.id)}
            className={`group relative overflow-hidden rounded-3xl border-2 bg-white p-3 text-left transition ${
              selected ? 'border-leaf-600 shadow-soft' : 'border-leaf-100 hover:border-leaf-300'
            }`}
          >
            <MockupArt category={c.id} material={material ?? 'plastic_bottle'} className="w-full rounded-2xl" />
            <div className="px-1 pb-1 pt-3">
              <p className="font-display text-lg font-bold text-leaf-900">{c.label}</p>
              <p className="text-sm text-leaf-700">{c.tagline}</p>
            </div>
            {selected && (
              <span className="absolute right-5 top-5 grid h-7 w-7 place-items-center rounded-full bg-leaf-600 text-white">
                <Check className="h-4 w-4" aria-hidden />
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
