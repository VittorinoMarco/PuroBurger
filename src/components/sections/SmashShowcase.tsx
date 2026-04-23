import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BurgerCard } from "@/components/ui/BurgerCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SMASH_BURGERS } from "@/lib/menu";

export function SmashShowcase() {
  const featured = SMASH_BURGERS.slice(0, 3);

  return (
    <section
      id="smash"
      className="relative bg-puro-black pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14"
    >
      <div className="container mx-auto">
        <header className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-12 lg:gap-16">
          <div className="max-w-2xl space-y-6">
            <SectionLabel>Le icone della casa</SectionLabel>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1] uppercase text-balance">
              Scottona.{" "}
              <span className="italic text-puro-green">Piastra.</span>{" "}
              Morso.
            </h2>
            <p className="text-white/60 max-w-md text-pretty">
              Tre smash firma Puro. Doppio patty di scottona italiana, crosta
              caramellata, ingredienti scelti uno per uno. Zero additivi.
            </p>
          </div>
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 text-puro-green font-semibold hover:gap-3 transition-all whitespace-nowrap border-b border-puro-green/40 pb-1"
          >
            Vedi tutto il menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {featured.map((item, i) => (
            <BurgerCard key={item.id} item={item} priority={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
