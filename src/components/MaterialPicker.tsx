'use client';

import { MATERIALS } from '@/lib/catalog';
import type { MaterialId } from '@/types';

interface Props {
  value: MaterialId | null;
  onChange: (id: MaterialId) => void;
}

export default function MaterialPicker({ value, onChange }: Props) {
  return (
    <div role="radiogroup" aria-label="Jenis bahan" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {MATERIALS.map((m) => {
        const selected = value === m.id;
        return (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(m.id)}
            className={`rounded-2xl border-2 px-4 py-3 text-left transition ${
              selected
                ? 'border-leaf-600 bg-leaf-600 text-white shadow-soft'
                : 'border-leaf-100 bg-white text-leaf-900 hover:border-leaf-300'
            }`}
          >
            <span className="block text-sm font-bold">{m.label}</span>
            <span className={`block text-xs ${selected ? 'text-leaf-100' : 'text-leaf-600'}`}>{m.hint}</span>
          </button>
        );
      })}
    </div>
  );
}
