import Link from "next/link";
import StatusBadge from "./StatusBadge";
import { STATUS } from "@/lib/status";
import { formatDate } from "@/lib/format";

// Bar warna di kiri = status klaim, terlihat sekilas saat menggulir daftar.
export default function ClaimRow({ claim }) {
  const s = STATUS[claim.status];

  return (
    <li>
      <Link
        href={`/klaim/${claim.slug}`}
        className="group relative flex border-b border-line py-5 pl-5 pr-2 transition-colors hover:bg-white"
      >
        <span
          aria-hidden="true"
          className={`absolute bottom-5 left-0 top-5 w-1 rounded-full ${s.bar}`}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <StatusBadge status={claim.status} />
            <time dateTime={claim.publishedAt} className="text-sm text-ink-soft">
              {formatDate(claim.publishedAt)}
            </time>
          </div>
          <h3 className="mt-2 font-display text-lg font-semibold leading-snug group-hover:text-check sm:text-xl">
            {claim.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-ink-soft">{claim.summary}</p>
        </div>
      </Link>
    </li>
  );
}
