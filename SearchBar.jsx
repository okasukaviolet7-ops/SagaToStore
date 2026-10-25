export default function SearchBar({ value, onChange }) {
  return (
    <form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
      <label htmlFor="cari" className="sr-only">
        Cari judul berita atau klaim
      </label>

      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-soft"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>

      <input
        id="cari"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Tempel judul berita yang kamu terima"
        autoComplete="off"
        className="w-full rounded-lg border-2 border-ink bg-white py-4 pl-12 pr-12 text-lg shadow-[5px_5px_0_0_var(--color-ink)] outline-none transition-shadow placeholder:text-ink-soft/70 focus:border-check focus:shadow-[5px_5px_0_0_var(--color-check)] [&::-webkit-search-cancel-button]:appearance-none"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Hapus pencarian"
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-ink-soft hover:bg-paper hover:text-ink"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      )}
    </form>
  );
}
