import Image from "next/image";
import { SMASHALTO_COPY, PURO_PERCHE_COPY } from "@/lib/speciali";

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
        <div className="overflow-hidden rounded-food-lg border border-white/15 bg-puro-ink/90 shadow-card">
          <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
            <h3 className="font-display text-xl font-black uppercase leading-tight sm:text-2xl lg:text-3xl">
              {SMASHALTO_COPY.title}
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/65 text-pretty sm:text-base lg:text-lg">
              {SMASHALTO_COPY.body}
            </p>
          </div>

          <div className="border-y border-white/10 bg-black/40">
            <SmashAltoBadge />
          </div>

          <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
            <h3 className="font-display text-xl font-black uppercase leading-tight sm:text-2xl lg:text-3xl">
              {PURO_PERCHE_COPY.title}
            </h3>
            <p className="mt-4 max-w-4xl text-sm leading-relaxed text-white/65 text-pretty sm:text-base lg:text-lg">
              {PURO_PERCHE_COPY.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
