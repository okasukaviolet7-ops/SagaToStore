'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import type { TutorialStep } from '@/types';

export default function TutorialSteps({ steps }: { steps: TutorialStep[] }) {
  const [done, setDone] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const pct = Math.round((done.size / steps.length) * 100);

  return (
    <div>
      <div className="no-print mb-5">
        <div className="mb-1 flex items-center justify-between text-sm font-semibold text-leaf-800">
          <span>
            Progres: {done.size} dari {steps.length} langkah
          </span>
          <span>{pct}%</span>
        </div>
        <div className="h-2.5 overflow-hidden rounded-full bg-leaf-100">
          <div className="h-full rounded-full bg-leaf-600 transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <ol className="space-y-3">
        {steps.map((s, i) => {
          const isDone = done.has(i);
          return (
            <li key={i} className={`rounded-2xl border p-4 transition sm:p-5 ${isDone ? 'border-leaf-300 bg-leaf-50' : 'border-leaf-100 bg-white'}`}>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-pressed={isDone}
                  aria-label={`Tandai langkah ${i + 1} ${isDone ? 'belum selesai' : 'selesai'}`}
                  className={`no-print grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 font-bold transition ${
                    isDone ? 'border-leaf-600 bg-leaf-600 text-white' : 'border-leaf-300 text-leaf-700 hover:bg-leaf-100'
                  }`}
                >
                  {isDone ? <Check className="h-5 w-5" aria-hidden /> : i + 1}
                </button>
                <div className="min-w-0">
                  <h3 className={`font-display text-lg font-bold ${isDone ? 'text-leaf-600 line-through decoration-leaf-300' : 'text-leaf-900'}`}>
                    <span className="hidden print:inline">{i + 1}. </span>
                    {s.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-leaf-800">{s.detail}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
