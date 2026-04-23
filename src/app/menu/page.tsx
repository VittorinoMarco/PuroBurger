import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BurgerCard } from "@/components/ui/BurgerCard";
import { MENU_CATEGORIES } from "@/lib/menu";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Il menu Puro Burger: Smash di sola scottona italiana, sides, drinks e dolci. 100% carne di scottona, zero additivi. N°1 dello Smash Burger.",
  alternates: { canonical: `${SITE.url}/menu` },
};

export default function MenuPage() {
  return (
    <>
      <section className="border-b border-puro-border bg-puro-black pb-12 pt-12 sm:pb-14 sm:pt-16 lg:pb-16 lg:pt-20">
        <div className="container mx-auto">
          <SectionLabel>Il menu Puro</SectionLabel>
          <div className="mt-5 flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] text-balance">
              Solo scottona. <br />
              <span className="italic text-puro-green">Solo smash.</span>
            </h1>
            <div className="flex flex-wrap gap-2">
              {MENU_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="chip bg-puro-card border border-puro-border text-white/70 hover:text-puro-green hover:border-puro-green transition"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 bg-puro-green text-black font-bold uppercase tracking-[0.14em] text-[11px] sm:text-xs px-4 py-2 rounded-full">
            100% carne di scottona · Zero additivi
          </div>
          <p className="mt-4 text-white/55 max-w-2xl text-pretty">
            Ogni smash è fatto con la stessa carne, la stessa tecnica, le
            stesse materie prime. Filiera italiana, macinatura ogni mattina,
            piastra a 260°C. Nessun compromesso su cosa finisce nel pane.
          </p>
        </div>
      </section>

      {MENU_CATEGORIES.map((cat) => (
        <section
          key={cat.id}
          id={cat.id}
          className="scroll-mt-24 bg-puro-black py-14 sm:py-16 lg:scroll-mt-28 lg:py-20"
        >
          <div className="container mx-auto">
            <header className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
                  {cat.title}
                </h2>
                {cat.subtitle && (
                  <p className="text-white/55 mt-1 max-w-xl text-pretty">
                    {cat.subtitle}
                  </p>
                )}
              </div>
            </header>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">
              {cat.items.map((item) => (
                <BurgerCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-y-sm bg-puro-black">
        <div className="container mx-auto">
          <div className="card-dark flex flex-col items-start justify-between gap-8 p-8 sm:flex-row sm:items-center sm:gap-10 sm:p-10 lg:p-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase leading-tight">
                Pronto ad assaggiare la differenza?
              </h2>
              <p className="text-white/55 mt-2">
                Dine-in, take away o consegna. La stessa scottona, ovunque.
              </p>
            </div>
            <Button href={SITE.orderUrl} size="lg" withArrow>
              Ordina su WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
