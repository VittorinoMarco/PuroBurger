import { Star } from "lucide-react";

const BADGES = [
  { k: "4,9 / 5", l: "Google · +1.200 recensioni" },
  { k: "Top 10", l: "Smash Burger Calabria 2025" },
  { k: "N°1", l: "Dello Smash Burger · Scalea" },
  { k: "+120k", l: "Smash serviti · 100% scottona" },
];

export function PressStrip() {
  return (
    <section className="bg-puro-black pt-12 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-12">
      <div className="container mx-auto">
        <div className="card-dark grid grid-cols-2 divide-y divide-puro-border overflow-hidden lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {BADGES.map((b, i) => (
            <div
              key={b.l}
              className="flex min-h-[7.5rem] flex-col items-center justify-center gap-3 px-5 py-8 text-center sm:min-h-[8rem] sm:px-7 sm:py-9 lg:min-h-[9rem] lg:flex-row lg:gap-5 lg:px-8 lg:py-10 lg:text-left"
            >
              {i === 0 && (
                <div className="flex shrink-0 items-center gap-0.5 lg:mr-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-3.5 w-3.5 fill-puro-green text-puro-green sm:h-4 sm:w-4"
                    />
                  ))}
                </div>
              )}
              <div className="min-w-0 w-full max-w-[14rem] lg:max-w-none">
                <p className="font-display text-xl font-black leading-none sm:text-2xl">
                  {b.k}
                </p>
                <p className="mt-2.5 text-[11px] font-semibold uppercase leading-relaxed tracking-widest text-white/60 sm:text-xs">
                  {b.l}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
