import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  SCELTE_PURE,
  SMASHALTO_COPY,
  PURO_PERCHE_COPY,
} from "@/lib/speciali";

const SMASH_TOKEN = "#SmashAlto";

/** Sigillo compatto inline al posto del testo #SmashAlto (allineato al centro della riga). */
function SmashAltoSeal() {
  return (
    <span
      role="img"
      aria-label="SmashAlto"
      className="relative mx-0.5 inline-flex h-[1.35rem] min-w-[4rem] shrink-0 items-center justify-center align-middle sm:h-[1.45rem] sm:min-w-[4.35rem]"
    >
      <span
        className="absolute inset-0 rounded-full bg-puro-green opacity-[0.22] blur-[3px]"
        aria-hidden
      />
      <span
        className="relative inline-flex items-center justify-center rounded-full border border-black/35 bg-puro-green px-2 py-0.5 text-[7px] font-black uppercase leading-none tracking-wide text-black shadow-[0_0_0_1px_rgba(141,198,63,0.5)] ring-[2.5px] ring-puro-green/35 sm:text-[8px]"
      >
        SmashAlto
      </span>
    </span>
  );
}

function DescriptionWithSmashAlto({ text }: { text: string }) {
  const parts = text.split(SMASH_TOKEN);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 ? <SmashAltoSeal /> : null}
        </Fragment>
      ))}
    </>
  );
}

function SmashAltoBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 px-4 py-5 sm:gap-10 sm:py-6">
      <Image
        src="/TimbroSmashAlto.png"
        alt="SmashAlto numero uno — sigillo PuroBurger"
        width={200}
        height={200}
        className="h-[4.75rem] w-auto object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.5)] sm:h-28"
      />
      <Image
        src="/TimbroZero.png"
        alt="Zero coloranti, additivi e conservanti"
        width={200}
        height={200}
        className="h-[4.75rem] w-auto object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.5)] sm:h-28"
      />
    </div>
  );
}

export function Speciali() {
  return (
    <section className="section-y-lg border-t border-puro-border bg-puro-black">
      <div className="container mx-auto">
        <header className="mb-10 text-center sm:mb-12">
          <SectionLabel className="justify-center">Pure</SectionLabel>
          <h2 className="font-display mt-3 text-4xl font-black uppercase leading-none text-balance sm:text-5xl">
            Scelte Pure
          </h2>
        </header>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="space-y-6 lg:col-span-5">
            {SCELTE_PURE.map((b) => (
              <article
                key={b.id}
                className="card-dark border border-puro-border p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 gap-y-1">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide sm:text-2xl">
                    {b.name}
                  </h3>
                  <span className="font-display text-lg font-black text-puro-green tabular-nums sm:text-xl">
                    €{b.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60 text-pretty">
                  <DescriptionWithSmashAlto text={b.description} />
                </p>
              </article>
            ))}
            <Link
              href="/menu#smash"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-puro-green transition hover:gap-3"
            >
              Vedi tutti gli smash nel menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-food-lg border border-white/15 bg-puro-ink/90 shadow-card">
              <div className="p-6 sm:p-8 lg:p-9">
                <h3 className="font-display text-xl font-black uppercase leading-tight sm:text-2xl">
                  {SMASHALTO_COPY.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65 text-pretty sm:text-base">
                  {SMASHALTO_COPY.body}
                </p>
              </div>

              <div className="border-y border-white/10 bg-black/40">
                <SmashAltoBadge />
              </div>

              <div className="p-6 sm:p-8 lg:p-9">
                <h3 className="font-display text-xl font-black uppercase leading-tight sm:text-2xl">
                  {PURO_PERCHE_COPY.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65 text-pretty sm:text-base">
                  {PURO_PERCHE_COPY.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
