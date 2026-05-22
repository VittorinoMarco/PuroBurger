import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BurgerCard } from "@/components/ui/BurgerCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SMASH_BURGERS } from "@/lib/menu";
import { SCELTE_PURE } from "@/lib/speciali";
import { SHOW_MENU_PAGE_PUBLIC } from "@/lib/site";

export function SmashShowcase() {
  const featured = SCELTE_PURE.map((s) => {
    const item = SMASH_BURGERS.find((b) => b.id === s.id);
    if (!item) return null;
    return { ...item, description: s.description };
  }).filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <section
      id="scelte-pure"
      className="relative border-t border-puro-border bg-puro-black pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14"
    >
      <div className="container mx-auto">
        <header className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between md:gap-12 lg:gap-16">
          <div className="max-w-2xl space-y-6">
            <SectionLabel>Scelte Pure</SectionLabel>
            <h2 className="font-display text-4xl font-black uppercase leading-[1] text-balance sm:text-5xl lg:text-6xl">
              Carne di scottona.{" "}
              <span className="italic text-puro-green">Piastra.</span>{" "}
              Morso.
            </h2>
            <p className="max-w-md text-pretty text-white/60">
              Tre signature dalla linea PuroBurger. Carne di scottona #SmashAlto,
              crosta caramellata, ingredienti scelti uno per uno. Zero additivi.
            </p>
          </div>
          {SHOW_MENU_PAGE_PUBLIC ? (
            <Link
              href="/menu#smash"
              className="group inline-flex items-center gap-2 whitespace-nowrap border-b border-puro-green/40 pb-1 font-semibold text-puro-green transition-all hover:gap-3"
            >
              Vedi tutto il menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : null}
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
