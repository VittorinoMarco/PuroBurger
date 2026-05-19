import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { MONTHLY_SPECIAL } from "@/lib/monthly-special";
import { Spark } from "@/components/ui/Spark";

export function PaninoDelMese() {
  const s = MONTHLY_SPECIAL;

  return (
    <section className="relative overflow-hidden border-t border-puro-border bg-puro-black">
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <div
        className="absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-puro-green/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute bottom-0 -left-24 h-[380px] w-[380px] rounded-full bg-puro-green/10 blur-3xl"
        aria-hidden
      />

      <Spark className="absolute top-[18%] right-[8%] hidden h-6 w-6 text-white/60 lg:block" />
      <Spark className="absolute bottom-[22%] left-[6%] hidden h-4 w-4 text-puro-green lg:block" />

      <div className="container relative mx-auto py-12 sm:py-14 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <div className="animate-fade-in-up space-y-6 sm:space-y-7 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-puro-green/30 bg-puro-green/10 py-1.5 pl-2 pr-3.5 text-[11px] font-bold uppercase tracking-[0.28em] text-puro-green">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-puro-green text-black">
                <CalendarDays className="h-3 w-3" strokeWidth={2.5} />
              </span>
              Panino del mese · {s.month}
            </div>

            <div className="relative max-w-xl overflow-hidden rounded-food-lg card-dark p-6 sm:p-7 lg:p-8">
              <div
                className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-puro-green/15 blur-2xl"
                aria-hidden
              />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex-1 space-y-2.5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-puro-green">
                    In edizione limitata
                  </p>
                  <h2 className="font-display text-2xl font-black uppercase leading-none sm:text-3xl">
                    {s.name}
                  </h2>
                  <p className="text-sm text-white/60 text-pretty">{s.description}</p>
                </div>
                <div className="flex flex-row items-start gap-3 border-puro-border sm:flex-col sm:items-end sm:border-l sm:pl-5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Solo
                  </span>
                  <span className="font-display text-3xl font-black leading-none text-puro-green sm:text-4xl">
                    €{s.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>
              <ul className="relative mt-4 flex flex-wrap gap-1.5">
                {s.ingredients.map((ing) => (
                  <li
                    key={ing}
                    className="rounded-full border border-puro-border bg-puro-ink px-2.5 py-1 text-[11px] uppercase tracking-wider text-white/70"
                  >
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
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
                alt={`${s.name} — Panino del Mese PuroBurger, 100% carne di scottona italiana, zero additivi`}
                fill
                sizes="(max-width: 1024px) 90vw, 520px"
                priority
                className="relative object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
