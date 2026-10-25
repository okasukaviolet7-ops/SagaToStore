import { STATUS } from "@/lib/status";

// Ikon berbeda per status supaya makna tidak bergantung pada warna saja
// (penting untuk pengguna buta warna).
const ICONS = {
  hoax: <path d="M6 6l12 12M18 6L6 18" />,
  fakta: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  disinformasi: <path d="M12 6.5v7m0 4h.01" />,
};

export default function StatusBadge({ status, size = "sm" }) {
  const s = STATUS[status];
  if (!s) return null;

  const sizing = size === "lg" ? "px-3 py-1.5 text-sm" : "px-2 py-1 text-xs";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm border font-display font-bold tracking-wider ${s.badge} ${sizing}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ICONS[status]}
      </svg>
      {s.label}
    </span>
  );
}
