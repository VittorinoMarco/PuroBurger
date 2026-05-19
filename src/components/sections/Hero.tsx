import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Star, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";
import { Spark } from "@/components/ui/Spark";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-t border-puro-border bg-puro-black">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <div
        className="absolute -top-40 -left-40 h-[540px] w-[540px] rounded-full bg-puro-green/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -right-20 h-[620px] w-[620px] rounded-full bg-puro-green/10 blur-3xl"
        aria-hidden
      />

      <Spark className="absolute top-[14%] right-[6%] hidden h-7 w-7 text-white/80 lg:block" />
      <Spark className="absolute top-[42%] right-[48%] hidden h-4 w-4 text-puro-green lg:block" />
      <Spark className="absolute bottom-[18%] right-[2%] hidden h-5 w-5 text-white/60 lg:block" />

      <div className="container relative mx-auto">
        <div className="max-w-4xl animate-fade-in-up space-y-7 pb-14 pt-10 sm:space-y-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16">
          <h1 className="font-display text-[44px] font-black uppercase leading-[0.86] sm:text-[64px] lg:text-[76px] xl:text-[92px]">
            <span className="block">N°1 dello</span>
            <span className="block whitespace-nowrap italic text-puro-green">
              SmashAlto.
            </span>
          </h1>

          <div className="inline-flex items-center gap-2.5 rounded-full bg-puro-green px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-black shadow-[0_8px_24px_rgba(141,198,63,0.35)] sm:text-xs">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
            100% carne di scottona · Zero additivi
          </div>

          <p className="max-w-xl text-base leading-relaxed text-white/70 text-pretty sm:text-lg">
            Smash di sola carne di scottona italiana, schiacciati al momento sulla piastra
            rovente. Ingredienti puri, zero conservanti, nessun compromesso. Il
            burger come dovrebbe essere sempre.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button href={SITE.orderUrl} size="lg" withArrow>
              Ordina ora
            </Button>
            <Button href="/menu" variant="ghost" size="lg">
              Scopri il menu
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
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
            <div className="space-y-0.5">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-puro-green text-puro-green"
                  />
                ))}
                <span className="ml-1 text-sm font-semibold">4,8</span>
              </div>
              <p className="text-xs text-white/55">
                +220 recensioni · Google
              </p>
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-3 pb-12 sm:gap-4 sm:pb-14 lg:grid-cols-4 lg:gap-5 lg:pb-16">
          {[
            { k: "100%", v: "Carne di scottona italiana" },
            { k: "0", v: "Additivi · Conservanti" },
            { k: "48h", v: "Frollatura minima" },
            { k: "N°1", v: "Dello SmashAlto" },
          ].map((i) => (
            <div
              key={i.v}
              className="card-dark flex min-h-[6.5rem] flex-col items-center justify-center gap-2 px-5 py-7 text-center sm:min-h-[7rem] sm:px-6 sm:py-8 lg:flex-row lg:gap-4 lg:px-7 lg:text-left"
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
