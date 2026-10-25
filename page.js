import ClaimExplorer from "@/components/ClaimExplorer";
import { getClaimList } from "@/lib/claims";

export default async function HomePage() {
  // Server Component: data diambil di server, lalu dikirim ke komponen client.
  const claims = await getClaimList();

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-10 sm:pt-16">
      <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
        Kabar ini dari grup WhatsApp? Periksa dulu sebelum dibagikan.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-ink-soft">
        Tempel judul beritanya. Kami tunjukkan apakah klaimnya hoax, fakta, atau
        disinformasi, lengkap dengan bukti dan sumbernya.
      </p>

      <ClaimExplorer claims={claims} />
    </div>
  );
}
