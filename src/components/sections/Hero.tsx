import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Star, CalendarDays, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";
import { MONTHLY_SPECIAL } from "@/lib/monthly-special";

function Spark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 0l1.6 9 9 1.6-9 1.6L12 21.2 10.4 12.2 1.4 10.6l9-1.6L12 0z" />
    </svg>
  );
}

export function Hero() {
  const s = MONTHLY_SPECIAL;

  return (
    <section className="relative overflow-hidden bg-puro-black">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <div
        className="absolute -top-40 -left-40 h-[540px] w-[540px] rounded-full bg-puro-green/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -right-20 h-[620px] w-[620px] rounded-full bg-puro-green/10 blur-3xl"
        aria-hidden
      />

      <Spark
        className="absolute top-[14%] right-[6%] h-7 w-7 text-white/80 hidden lg:block"
      />
      <Spark
        className="absolute top-[42%] right-[48%] h-4 w-4 text-puro-green hidden lg:block"
      />
      <Spark
        className="absolute bottom-[18%] right-[2%] h-5 w-5 text-white/60 hidden lg:block"
      />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center pt-12 sm:pt-14 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
          <div className="lg:col-span-7 space-y-7 sm:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-puro-green font-bold bg-puro-green/10 border border-puro-green/30 rounded-full pl-2 pr-3.5 py-1.5">
              <span className="h-5 w-5 rounded-full bg-puro-green text-black grid place-items-center">
                <CalendarDays className="h-3 w-3" strokeWidth={2.5} />
              </span>
              Panino del mese · {s.month}
            </div>

            <h1 className="font-display font-black uppercase leading-[0.86] text-[44px] sm:text-[64px] lg:text-[76px] xl:text-[92px]">
              <span className="block">N°1 dello</span>
              <span className="block italic text-puro-green whitespace-nowrap">
                Smash&nbsp;Burger.
              </span>
            </h1>

            <div className="inline-flex items-center gap-2.5 bg-puro-green text-black font-bold uppercase tracking-[0.14em] text-[11px] sm:text-xs px-4 py-2 rounded-full shadow-[0_8px_24px_rgba(141,198,63,0.35)]">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.5} />
              100% carne di scottona · Zero additivi
            </div>

            <p className="text-base sm:text-lg text-white/70 max-w-xl text-pretty leading-relaxed">
              Smash di sola scottona italiana, schiacciati al momento sulla
              piastra rovente. Ingredienti puri, zero conservanti, nessun
              compromesso. Il burger come dovrebbe essere sempre.
            </p>

            <div className="relative overflow-hidden card-dark p-6 sm:p-7 lg:p-8 max-w-xl">
              <div
                className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-puro-green/15 blur-2xl"
                aria-hidden
              />
              <div className="relative flex flex-col sm:flex-row gap-5 sm:items-center">
                <div className="flex-1 space-y-2.5">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-puro-green font-bold">
                    In edizione limitata
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-black uppercase leading-none">
                    {s.name}
                  </h2>
                  <p className="text-sm text-white/60 text-pretty">
                    {s.description}
                  </p>
                </div>
                <div className="flex flex-row sm:flex-col items-start sm:items-end gap-3 sm:gap-2 sm:border-l sm:border-puro-border sm:pl-5">
                  <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    Solo
                  </span>
                  <span className="font-display text-3xl sm:text-4xl font-black text-puro-green leading-none">
                    €{s.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>
              <ul className="relative mt-4 flex flex-wrap gap-1.5">
                {s.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="text-[11px] uppercase tracking-wider bg-puro-ink border border-puro-border text-white/70 px-2.5 py-1 rounded-full"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

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
                    className="h-8 w-8 rounded-full ring-2 ring-black object-cover"
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
                  <span className="ml-1 text-sm font-semibold">4,9</span>
                </div>
                <p className="text-xs text-white/55">
                  +1.200 recensioni · Google &amp; TripAdvisor
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-[520px] aspect-square">
              <Spark className="absolute -top-2 left-[8%] h-6 w-6 text-puro-green" />
              <Spark className="absolute top-[22%] -right-2 h-5 w-5 text-white/80" />
              <Spark className="absolute bottom-[12%] -left-3 h-4 w-4 text-white/70" />
              <Spark className="absolute bottom-0 right-[14%] h-7 w-7 text-puro-green" />

              <div
                className="absolute inset-[6%] rounded-full bg-puro-green/25 blur-3xl"
                aria-hidden
              />

              <Image
                src={s.poster}
                alt={`${s.name} — Panino del Mese Puro Burger, 100% carne di scottona italiana, zero additivi`}
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                priority
                className="relative object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5 pb-12 sm:pb-14 lg:pb-16">
          {[
            { k: "100%", v: "Scottona italiana" },
            { k: "0", v: "Additivi · Conservanti" },
            { k: "48h", v: "Frollatura minima" },
            { k: "N°1", v: "Dello Smash Burger" },
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
