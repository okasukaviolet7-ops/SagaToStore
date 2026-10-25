"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import StatusFilter from "./StatusFilter";
import ClaimRow from "./ClaimRow";
import { searchClaims } from "@/lib/search";

export default function ClaimExplorer({ claims }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("semua");

  // 1) cari berdasarkan kata kunci
  const matched = useMemo(() => searchClaims(claims, query), [claims, query]);

  // 2) hitung jumlah per status (dari hasil pencarian) untuk label filter
  const counts = useMemo(() => {
    const c = { semua: matched.length };
    for (const item of matched) c[item.status] = (c[item.status] ?? 0) + 1;
    return c;
  }, [matched]);

  // 3) terapkan filter status
  const results = status === "semua" ? matched : matched.filter((c) => c.status === status);

  const q = query.trim();

  return (
    <section className="mt-10" aria-labelledby="judul-hasil">
      <SearchBar value={query} onChange={setQuery} />

      <div className="mt-6">
        <StatusFilter value={status} onChange={setStatus} counts={counts} />
      </div>

      <h2
        id="judul-hasil"
        aria-live="polite"
        className="mt-10 border-b-2 border-ink pb-2 font-display text-xl font-bold"
      >
        {q ? `${results.length} hasil untuk “${q}”` : "Klarifikasi terbaru"}
      </h2>

      {results.length > 0 ? (
        <ul>
          {results.map((claim) => (
            <ClaimRow key={claim.id} claim={claim} />
          ))}
        </ul>
      ) : (
        <div className="py-12">
          <p className="font-display text-lg font-semibold">
            {q ? "Belum ada klaim yang cocok." : "Belum ada klaim di kategori ini."}
          </p>
          <p className="mt-1 max-w-md text-ink-soft">
            Coba kata kunci yang lebih pendek. Kalau kabarnya memang belum kami periksa,
            kirim ke kami supaya diperiksa.
          </p>
          <Link
            href={q ? `/lapor?judul=${encodeURIComponent(q)}` : "/lapor"}
            className="mt-4 inline-block rounded-md bg-ink px-4 py-2.5 font-medium text-white hover:bg-check"
          >
            Laporkan berita ini
          </Link>
        </div>
      )}
    </section>
  );
}
