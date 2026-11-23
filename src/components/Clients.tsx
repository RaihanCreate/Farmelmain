import { branches } from '../data/content'

export function Clients() {
  return (
    <section id="klien" className="section-pad">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-8 bg-brand-500" /> Klien Kami
          </span>
          <h2 className="h-display mt-4 text-3xl sm:text-4xl">
            Dipercaya oleh pemimpin industri
          </h2>
          <p className="mt-4 text-slate-600">
            Dari BUMN konstruksi hingga produsen makanan dan minuman terkemuka —
            mereka memilih Farmel sebagai mitra air dan konstruksi.
          </p>
        </div>

        {/* Gambar Klien Utama */}
        <div className="reveal mt-12 flex justify-center" id="klien-image-container">
          <div className="w-full max-w-2xl overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-100 bg-white p-3 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
            <img
              id="klien-kumpulan-img"
              src="/kumpulan.jpeg"
              alt="Daftar Klien Farmel"
              className="mx-auto block h-auto w-full max-w-full rounded-xl object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Branches */}
        <div className="reveal mt-16 grid gap-6 rounded-3xl bg-brand-800 p-8 text-white sm:grid-cols-2 sm:p-10">
          <div>
            <h3 className="font-display text-2xl font-bold">Jangkauan nasional</h3>
            <p className="mt-2 text-sm text-white/80">
              Kantor pusat di Bintaro dengan jaringan cabang di kota-kota besar Indonesia.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {branches.map((b) => (
              <li
                key={b}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
