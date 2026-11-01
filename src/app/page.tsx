import Link from 'next/link';
import { ArrowRight, Camera, Recycle, Sparkles, BookOpenCheck } from 'lucide-react';
import MockupArt from '@/components/MockupArt';
import { CATEGORIES } from '@/lib/catalog';

const STEPS = [
  {
    icon: Camera,
    title: 'Foto barang bekasmu',
    text: 'Botol plastik, kardus, pakaian lama, atau kaleng — cukup satu foto dari ponsel.',
  },
  {
    icon: Recycle,
    title: 'Pilih hasil akhir',
    text: 'Mau jadi pot tanaman, fashion upcycled, atau tas eco-friendly? Kamu yang menentukan.',
  },
  {
    icon: Sparkles,
    title: 'Lihat mockup-nya',
    text: 'AI menampilkan gambaran hasil akhirnya sehingga kamu bisa membayangkan sebelum mulai.',
  },
  {
    icon: BookOpenCheck,
    title: 'Ikuti panduannya',
    text: 'Daftar bahan, alat, dan langkah praktis dengan penanda progres supaya tidak tersesat.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-leaf-200/60 blur-3xl" />
        <div aria-hidden className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-sand-200/80 blur-3xl" />

        <div className="container-page relative grid items-center gap-12 py-14 md:grid-cols-2 md:py-24">
          <div className="animate-fade-up">
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5" aria-hidden /> Platform upcycling berbasis AI
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] text-leaf-900 sm:text-5xl lg:text-6xl">
              Sampah rumahmu, <span className="text-leaf-600">karya barumu.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-leaf-800">
              Unggah foto barang bekas, pilih ingin jadi apa, lalu lihat gambaran hasil akhirnya
              beserta panduan membuatnya langkah demi langkah.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/studio" className="btn-primary text-base">
                Coba di Studio <ArrowRight className="h-5 w-5" aria-hidden />
              </Link>
              <a href="#cara-kerja" className="btn-ghost text-base">
                Lihat cara kerjanya
              </a>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4">
            <div className="animate-float">
              <MockupArt category="plant" material="plastic_bottle" className="w-full rounded-3xl shadow-soft" />
            </div>
            <div className="mt-10 animate-float [animation-delay:1.5s]">
              <MockupArt category="bags" material="old_clothes" className="w-full rounded-3xl shadow-soft" />
            </div>
            <div className="-mt-4 animate-float [animation-delay:3s]">
              <MockupArt category="clothes" material="cardboard" className="w-full rounded-3xl shadow-soft" />
            </div>
            <div className="mt-6 animate-float [animation-delay:4.5s]">
              <MockupArt category="plant" material="tin_can" className="w-full rounded-3xl shadow-soft" />
            </div>
          </div>
        </div>
      </section>

      {/* CARA KERJA */}
      <section id="cara-kerja" className="container-page scroll-mt-20 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Empat langkah menuju karya hijau</h2>
          <p className="mt-3 text-leaf-700">Tanpa keahlian khusus. Cukup niat dan sedikit waktu luang.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.title} className="rounded-3xl border border-leaf-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf-100 text-leaf-700">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <span className="font-display text-3xl font-bold text-leaf-200">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-leaf-900">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-leaf-700">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KATEGORI */}
      <section className="bg-leaf-900 py-16 text-white">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Mau jadi apa barang bekasmu?</h2>
            <p className="mt-3 text-leaf-200">Tiga arah kreasi untuk setiap bahan.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CATEGORIES.map((c, i) => (
              <Link
                key={c.id}
                href="/studio"
                className="group rounded-3xl bg-leaf-800/70 p-4 transition hover:-translate-y-1 hover:bg-leaf-800"
              >
                <MockupArt
                  category={c.id}
                  material={(['plastic_bottle', 'old_clothes', 'tin_can'] as const)[i]}
                  className="w-full rounded-2xl"
                />
                <h3 className="mt-4 text-xl font-bold">{c.label}</h3>
                <p className="mt-1 text-sm text-leaf-200">{c.tagline}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-leaf-300 group-hover:text-white">
                  Buat sekarang <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-16">
        <div className="rounded-[2rem] bg-gradient-to-br from-leaf-100 to-sand-100 p-8 text-center sm:p-14">
          <h2 className="section-title">Siap memberi kehidupan kedua pada barang bekas?</h2>
          <p className="mx-auto mt-3 max-w-xl text-leaf-800">
            Gratis dicoba, langsung dari browser — di ponsel maupun komputer.
          </p>
          <Link href="/studio" className="btn-primary mt-8 text-base">
            Mulai di Studio <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
