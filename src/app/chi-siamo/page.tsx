import type { Metadata } from "next";
import Image from "next/image";
import {
  Beef,
  Flame,
  Wheat,
  HandPlatter,
  Leaf,
  ShieldCheck,
  Sparkles,
  Quote,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "La storia di Puro Burger: come siamo diventati N°1 dello Smash Burger. Filiera corta, scottona italiana, tecnica SmashAlto, zero additivi. Il manifesto di un brand che non scende a compromessi.",
  alternates: { canonical: `${SITE.url}/chi-siamo` },
};

const VALUES = [
  {
    icon: Beef,
    title: "100% Scottona Italiana",
    text: "Solo scottona da allevamenti selezionati. Frollata 48h, macinata ogni mattina in cucina.",
  },
  {
    icon: Flame,
    title: "Tecnica SmashAlto",
    text: "Pallina da 80g, piastra a 260°C, 30 secondi di pressione. La firma della casa.",
  },
  {
    icon: Wheat,
    title: "Pane e salse di casa",
    text: "Brioche a lievitazione naturale, salse preparate in cucina ogni giorno. Niente buste.",
  },
  {
    icon: HandPlatter,
    title: "Artigianalità al centro",
    text: "Ogni dettaglio fatto a mano: dalla pallina al taglio della cipolla. Nessuna industria.",
  },
  {
    icon: Leaf,
    title: "Filiera corta calabrese",
    text: "Verdure di stagione locali, rapporto diretto con agricoltori e macellai della regione.",
  },
  {
    icon: ShieldCheck,
    title: "Zero additivi · Zero compromessi",
    text: "Niente conservanti, niente coloranti, niente scorciatoie. Ingredienti che sappiamo riconoscere.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "La scelta della carne",
    text: "Scottona italiana da allevamenti selezionati. Taglio dedicato, frollatura minima di 48h, macinatura in cucina ogni mattina.",
  },
  {
    n: "02",
    title: "La pallina",
    text: "80 grammi, modellati a mano, leggeri e ariosi. Mai compressi: la carne deve respirare per restare succosa.",
  },
  {
    n: "03",
    title: "Lo smash",
    text: "Piastra a 260°C. Pressione decisa per 30 secondi. La carne si apre, i succhi caramellizzano, nasce la crosta firma Puro.",
  },
  {
    n: "04",
    title: "L'assemblaggio",
    text: "Brioche tostata, cheddar fuso, salse di casa, verdure di stagione. Montiamo in 30 secondi: in tavola ancora caldo.",
  },
];

const GALLERY = [
  "photo-1550547660-d9450f859349",
  "photo-1594212699903-ec8a3eca50f5",
  "photo-1606131731446-5568d87113aa",
  "photo-1572802419224-296b0aeee0d9",
  "photo-1552566626-52f8b828add9",
  "photo-1568901346375-23c9450c58cd",
  "photo-1585238342024-78d387f4a707",
  "photo-1555396273-367ea4eb4db5",
];

export default function ChiSiamoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-puro-black">
        <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
        <div
          className="absolute -top-40 -right-20 h-[560px] w-[560px] rounded-full bg-puro-green/10 blur-3xl"
          aria-hidden
        />

        <div className="container relative mx-auto pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
          <div className="max-w-3xl space-y-7">
            <SectionLabel>La nostra storia</SectionLabel>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-[96px] leading-[0.92] uppercase text-balance">
              Nati per <br />
              <span className="italic text-puro-green">smashare.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl text-pretty">
              Puro Burger nasce a Scalea da un&apos;ossessione precisa: 100%
              carne di scottona italiana, zero additivi, una tecnica che non
              ammette scorciatoie. Ogni morso è una dichiarazione di intenti.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-12 gap-3 sm:gap-4">
            <div className="col-span-12 sm:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] rounded-food-lg overflow-hidden ring-1 ring-white/5">
              <Image
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=85"
                alt="Puro Burger — il locale"
                fill
                priority
                sizes="(max-width:768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-6 sm:col-span-5 relative aspect-[4/5] sm:aspect-[16/9] rounded-food-lg overflow-hidden ring-1 ring-white/5">
              <Image
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85"
                alt="Smash burger"
                fill
                sizes="(max-width:768px) 50vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-6 sm:col-span-5 relative aspect-[4/5] sm:aspect-[16/9] rounded-food-lg overflow-hidden ring-1 ring-white/5">
              <Image
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85"
                alt="Detail"
                fill
                sizes="(max-width:768px) 50vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-12 sm:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] rounded-food-lg overflow-hidden ring-1 ring-white/5">
              <Image
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=1600&q=85"
                alt="Kitchen"
                fill
                sizes="(max-width:768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-y-lg border-y border-puro-border bg-puro-ink">
        <div className="container mx-auto max-w-3xl text-center space-y-8">
          <SectionLabel className="justify-center">Il manifesto</SectionLabel>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1] text-balance">
            Schiacciati in <span className="italic">due minuti.</span> <br />
            <span className="text-puro-green">Studiati per una vita.</span>
          </h2>
          <div className="h-px w-24 bg-puro-green/40 mx-auto" />
          <p className="font-display text-lg leading-relaxed text-white/70 text-pretty">
            Abbiamo iniziato in un piccolo laboratorio, lavorando chili di
            scottona, testando pani, salse e temperature. Oggi siamo N°1 dello
            Smash Burger perché non abbiamo mai smesso di chiederci come fare
            meglio: una pallina più rotonda, una crosta più scura, un morso
            più preciso.
          </p>
          <p className="font-display text-lg leading-relaxed text-white/70 text-pretty">
            Non serviamo panini. Serviamo un&apos;idea di purezza e rispetto
            — per la materia prima, per chi la produce, per chi la mangia.
            Scegliamo solo fornitori italiani, paghiamo il giusto e non
            cediamo sulla qualità nemmeno quando la fila alla porta
            richiederebbe di farlo.
          </p>
          <p className="font-display text-sm leading-relaxed text-white/50 text-pretty">
            Dal 2019 l&apos;idea, dal 2021 il primo store a Scalea, nel 2023 la
            tecnica SmashAlto codificata. Oggi: filiera rafforzata, Panino del
            Mese, stessa promessa — 100% scottona, zero additivi.
          </p>
        </div>
      </section>

      <section
        id="processo"
        className="section-y scroll-mt-24 border-t border-puro-border bg-puro-black lg:scroll-mt-28"
      >
        <div className="container mx-auto">
          <div className="mb-12 max-w-2xl space-y-5 sm:mb-16 lg:mb-20">
            <SectionLabel>Il processo</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1] text-balance">
              Quattro gesti. <br />
              <span className="italic text-puro-green">Zero scorciatoie.</span>
            </h2>
            <p className="font-display text-base text-white/60 text-pretty sm:text-lg">
              La nostra tecnica non è un segreto: è un&apos;abitudine. Stessi
              gesti, stessa materia prima, ogni singolo giorno.
            </p>
          </div>

          <ol className="flex flex-col gap-12 sm:gap-14 lg:flex-row lg:items-start lg:gap-6 xl:gap-10">
            {PROCESS.map((p) => (
              <li
                key={p.n}
                className="font-display flex-1 px-5 sm:px-7 lg:px-5 xl:px-7"
              >
                <span className="block text-3xl font-black tracking-wide text-puro-green sm:text-4xl">
                  {p.n}
                </span>
                <h3 className="mt-5 text-lg font-bold uppercase leading-tight tracking-wide text-white sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-[15px]">
                  {p.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y bg-puro-black">
        <div className="container mx-auto">
          <div className="mb-12 max-w-2xl space-y-5 sm:mb-14">
            <SectionLabel>I nostri valori</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase leading-[1] text-balance">
              Cosa ci guida <span className="italic text-puro-green">ogni giorno.</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="card-dark space-y-3 p-6 transition-colors hover:border-puro-green/40 sm:p-7"
              >
                <div className="h-12 w-12 rounded-full bg-puro-green/10 grid place-items-center text-puro-green">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold uppercase text-sm tracking-wide">
                  {title}
                </h3>
                <p className="text-sm text-white/60 text-pretty">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-y border-puro-border bg-puro-ink">
        <div className="container mx-auto grid gap-6 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {[
            { n: "+120k", l: "Burger schiacciati" },
            { n: "4,9/5", l: "Recensioni Google" },
            { n: "48h", l: "Frollatura minima" },
            { n: "100%", l: "Carne italiana" },
          ].map((s) => (
            <div key={s.l} className="text-center lg:text-left">
              <p className="font-display text-5xl sm:text-6xl font-black text-puro-green leading-none">
                {s.n}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/55 font-semibold">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y-sm bg-puro-black">
        <div className="container mx-auto">
          <div className="mb-12 max-w-2xl space-y-5">
            <SectionLabel>Dietro le quinte</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase leading-[1] text-balance">
              Cucina vera. <span className="italic text-puro-green">Niente filtri.</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {GALLERY.map((q, i) => (
              <div
                key={q}
                className={`relative rounded-food overflow-hidden ring-1 ring-white/5 ${
                  i % 5 === 0 ? "aspect-[4/5]" : "aspect-square"
                }`}
              >
                <Image
                  src={`https://images.unsplash.com/${q}?auto=format&fit=crop&w=600&q=78`}
                  alt=""
                  fill
                  sizes="(max-width:640px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y-sm bg-puro-black">
        <div className="container mx-auto">
          <figure className="card-dark relative mx-auto max-w-4xl space-y-6 p-8 text-center sm:p-10 sm:space-y-7 lg:p-14">
            <Quote
              className="h-10 w-10 text-puro-green mx-auto"
              strokeWidth={1.5}
            />
            <blockquote className="font-display text-2xl sm:text-4xl leading-[1.15] italic text-balance">
              &laquo;Non è solo un burger. È una promessa mantenuta: carne
              vera, gesto preciso, zero scorciatoie.&raquo;
            </blockquote>
            <figcaption className="text-[11px] uppercase tracking-[0.22em] text-white/50 font-bold flex items-center justify-center gap-2">
              <Sparkles className="h-3 w-3 text-puro-green" />
              Il manifesto Puro
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section-y-sm bg-puro-black">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-food-lg bg-green-gradient p-8 text-black sm:p-10 lg:p-14 xl:p-16">
            <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] [background-size:24px_24px]" aria-hidden />
            <div className="relative max-w-xl space-y-5">
              <p className="text-[11px] uppercase tracking-[0.3em] font-bold">
                Pronto ad assaggiare la differenza?
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[0.98] text-balance">
                Vieni a provare <span className="italic">Puro.</span>
              </h2>
              <p className="text-black/75 text-pretty">
                Prenota un tavolo, passa in store o ordina direttamente su
                WhatsApp. 100% scottona, zero additivi. Ti aspettiamo.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  href={SITE.orderUrl}
                  className="!bg-black !text-puro-green hover:!bg-neutral-900"
                  withArrow
                >
                  Ordina su WhatsApp
                </Button>
                <Button
                  href="/contatti"
                  className="!bg-white/15 !text-black hover:!bg-white/25 backdrop-blur"
                >
                  Prenota un tavolo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
