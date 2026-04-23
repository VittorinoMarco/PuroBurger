import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const COMBO_IMAGE = "/combo-weekend-hero.png";

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

function Swoosh({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="M4 28c18-22 48-28 76-18s36 8 40-6" />
    </svg>
  );
}

/** Accento sul pannello verde: curva morbida a gradiente, niente tratto “doodle” */
function GreenPanelAccent({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <defs>
        <linearGradient
          id="comboBannerGreenAccent"
          x1="0"
          y1="50"
          x2="360"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity="0" />
          <stop offset="0.22" stopColor="#fff" stopOpacity="0.07" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="0.78" stopColor="#fff" stopOpacity="0.06" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <ellipse cx="300" cy="46" rx="56" ry="30" fill="#fff" fillOpacity="0.035" />
      <path
        d="M 12 78 C 68 32, 132 22, 196 46 C 242 64, 288 58, 332 42"
        stroke="url(#comboBannerGreenAccent)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 24 84 C 78 44, 138 34, 200 54 C 246 70 292 66 338 50"
        stroke="#fff"
        strokeOpacity="0.06"
        strokeWidth="0.85"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function ComboBanner() {
  return (
    <section id="combo" className="section-y bg-puro-black">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-food-lg bg-green-gradient shadow-[0_20px_50px_-15px_rgba(141,198,63,0.45)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            aria-hidden
            style={{
              backgroundImage: `repeating-linear-gradient(
                -12deg,
                transparent,
                transparent 8px,
                rgba(0,0,0,0.06) 8px,
                rgba(0,0,0,0.06) 9px
              )`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            aria-hidden
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 50% at 50% 0%, #fff 0%, transparent 55%)",
            }}
          />

          <Spark className="pointer-events-none absolute left-[44%] top-[14%] z-[1] hidden h-5 w-5 text-white/90 lg:block" />
          <Spark className="pointer-events-none absolute left-[48%] top-[8%] z-[1] h-3 w-3 text-white/80" />
          <Spark className="pointer-events-none absolute right-[28%] top-[20%] z-[1] h-4 w-4 text-white/85" />
          <Spark className="pointer-events-none absolute bottom-[35%] right-[12%] z-[1] h-5 w-5 text-white/75" />

          <div className="relative z-[2] flex min-h-[280px] flex-col lg:min-h-[360px] lg:flex-row">
            <div className="relative flex w-full shrink-0 items-center justify-center rounded-t-food-lg bg-black px-5 pb-10 pt-14 sm:px-7 sm:pb-12 sm:pt-16 lg:w-[42%] lg:rounded-l-food-lg lg:rounded-tr-none lg:py-12 lg:pl-8 lg:pr-6">
              <div
                className="pointer-events-none absolute inset-4 rounded-2xl border border-white/[0.08] sm:inset-5 lg:inset-y-5 lg:left-5 lg:right-2 lg:rounded-l-2xl lg:rounded-r-none"
                aria-hidden
              />
              <Spark className="absolute left-[10%] top-[20%] h-4 w-4 text-white/70" />
              <Spark className="absolute right-[14%] top-[30%] h-3 w-3 text-puro-green" />
              <Swoosh className="absolute bottom-[20%] left-[10%] h-6 w-20 text-white/40" />

              <div className="absolute left-4 top-4 z-10 max-w-[14.5rem] rounded-lg bg-black/95 px-3.5 py-2.5 shadow-md ring-1 ring-puro-green/40 sm:left-5 sm:top-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-puro-green sm:text-[11px]">
                  Menu selezionato
                </p>
                <p className="mt-1 text-[11px] font-semibold leading-snug text-white/95 sm:text-xs">
                  Da lunedì al giovedì
                </p>
              </div>

              <div className="relative mt-8 h-[220px] w-full max-w-[420px] sm:mt-10 sm:h-[260px] lg:mt-6 lg:h-[min(300px,30vw)] lg:max-h-[320px]">
                <Image
                  src={COMBO_IMAGE}
                  alt="Combo Puro Burger: classico, patatine e Löwenbräu o bibita"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-contain object-center drop-shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
                  priority={false}
                />
              </div>
            </div>

            <div className="relative min-h-0 min-w-0 flex-1 lg:min-h-[360px]">
              <GreenPanelAccent className="pointer-events-none absolute -right-2 top-[10%] z-[1] hidden h-[5.25rem] w-[min(100%,19rem)] opacity-90 sm:block sm:top-[12%] sm:h-[5.75rem] sm:w-[min(100%,21rem)] lg:-right-1 lg:top-[14%] lg:h-[6.5rem] lg:w-[min(100%,24rem)]" />

              <div className="flex min-h-full flex-col justify-center px-7 pb-12 pt-12 sm:px-9 sm:pb-14 sm:pt-14 lg:px-12 lg:pb-16 lg:pl-12 lg:pr-14 lg:pt-14 xl:px-16 xl:pr-16">
                <div className="max-w-2xl space-y-6 lg:max-w-none">
                  <h2 className="font-display text-[1.45rem] font-semibold leading-[1.22] tracking-tight text-black sm:text-[1.7rem] lg:text-[1.9rem] xl:text-[2.05rem]">
                    Dal lunedì al giovedì,{" "}
                    <span className="text-white">mangiare bene</span> non deve
                    essere complicato.
                  </h2>

                  <div className="space-y-4 text-base leading-relaxed text-black/95 sm:text-[1.0625rem] lg:text-lg">
                    <p>
                      Scegli uno dei nostri classici, aggiungi le patatine
                      crunchy e una Löwenbräu o una bibita analcolica.{" "}
                      <span className="font-black text-white">
                        Tutto a 15€.
                      </span>
                    </p>
                    <p>
                      Vieni a mangiare il tuo SmashAlto con carne di scottona
                      100%, senza additivi o aggiunta di amidi.
                    </p>
                  </div>

                  <p className="font-display text-[1.05rem] font-medium italic leading-snug text-black/90 sm:text-lg lg:text-xl">
                    Non pensarci troppo. Passa a trovarci.
                  </p>

                  <Link
                    href="/contatti"
                    className="mt-2 inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-xs font-bold uppercase tracking-wide text-puro-green shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition hover:bg-neutral-900 active:scale-[0.98] sm:py-4 sm:text-sm"
                  >
                    Passa a trovarci
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-white sm:h-5 sm:w-5"
                      strokeWidth={2.5}
                    />
                  </Link>
                </div>
              </div>

              <Spark className="pointer-events-none absolute bottom-8 right-8 h-4 w-4 text-white/80 lg:hidden" />
              <Spark className="pointer-events-none absolute bottom-28 left-8 h-3 w-3 text-white/70 lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
