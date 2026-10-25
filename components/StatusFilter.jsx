import { STATUS, STATUS_ORDER } from "@/lib/status";

export default function StatusFilter({ value, onChange, counts }) {
  const options = [
    { key: "semua", name: "Semua", count: counts.semua ?? 0 },
    ...STATUS_ORDER.map((key) => ({
      key,
      name: STATUS[key].name,
      count: counts[key] ?? 0,
    })),
  ];

  return (
    <div role="group" aria-label="Filter berdasarkan status" className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = value === o.key;
        return (
          <button
            key={o.key}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.key)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              active
                ? "border-ink bg-ink text-white"
                : "border-line bg-white text-ink-soft hover:border-ink hover:text-ink"
            }`}
          >
            {o.name} <span className="tabular-nums opacity-70">{o.count}</span>
          </button>
        );
      })}
    </div>
  );
}
