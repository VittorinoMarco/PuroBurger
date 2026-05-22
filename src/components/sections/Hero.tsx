import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Star, Sparkles } from "lucide-react";
import { SITE, SHOW_MENU_PAGE_PUBLIC } from "@/lib/site";

export function Hero() {
  return (
    <section className="section-y-lg border-b border-puro-border bg-puro-black">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl space-y-7 px-1 text-center sm:space-y-8 sm:px-0">
          <SectionLabel className="justify-center">SmashAlto</SectionLabel>

          <h2 className="font-display text-4xl font-black uppercase leading-[0.9] sm:text-5xl lg:text-6xl">
            <span className="block">N°1 dello</span>
            <span className="block whitespace-nowrap italic text-puro-green">
              SmashAlto.
            </span>
          </h2>

          <div className="inline-flex items-center gap-2.5 rounded-full bg-puro-green px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-black shadow-[0_8px_24px_rgba(141,198,63,0.35)] sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
            100% carne di scottona · Zero additivi
          </div>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
            Smash di sola carne di scottona italiana, schiacciati al momento sulla
            piastra rovente. Ingredienti puri, zero conservanti, nessun compromesso.
            Il burger come dovrebbe essere sempre.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href={SITE.orderUrl} size="lg" withArrow>
              Ordina ora
            </Button>
            {SHOW_MENU_PAGE_PUBLIC ? (
              <Button href="/menu" variant="ghost" size="lg">
                Scopri il menu
              </Button>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <div className="flex -space-x-2">
              {[
                "photo-1500648767791-00dcc994a43e",
                "photo-1494790108377-be9c29b29330",
                "photo-1472099645785-5658abf4ff4e",
                "photo-1487412720507-e7ab37603c6f",
              ].map((q) => (
                <Image
                  key={q}
                  src={`https://images.unsplash.com/${q}?auto=format&fit=crop&w=80&q=80`}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-black"
                />
              ))}
            </div>
            <div className="space-y-0.5 text-left">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-puro-green text-puro-green"
                  />
                ))}
                <span className="ml-1 text-sm font-semibold">4,8</span>
              </div>
              <p className="text-xs text-white/55">+220 recensioni · Google</p>
            </div>
          </div>
        </div>

        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 border-t border-puro-border/60 pt-12 sm:mt-16 sm:gap-4 sm:pt-14 lg:grid-cols-4 lg:gap-5">
          {[
            { k: "100%", v: "Carne di scottona italiana" },
            { k: "0", v: "Additivi · Conservanti" },
            { k: "48h", v: "Frollatura minima della carne" },
            { k: "N°1", v: "Dello SmashAlto" },
          ].map((i) => (
            <div
              key={i.v}
              className="card-dark flex min-h-[6.5rem] flex-col items-center justify-center gap-2 px-5 py-7 text-center sm:min-h-[7rem] sm:px-6 sm:py-8"
            >
              <dt className="font-display shrink-0 text-3xl font-black leading-none text-puro-green sm:text-4xl">
                {i.k}
              </dt>
              <dd className="max-w-[11rem] text-[11px] font-semibold uppercase leading-snug tracking-wider text-white/65 sm:max-w-none sm:text-xs">
                {i.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
