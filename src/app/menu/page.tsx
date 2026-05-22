import type { Metadata } from "next";
import { redirect } from "next/navigation";
import clsx from "clsx";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BurgerCard } from "@/components/ui/BurgerCard";
import { MENU_CATEGORIES } from "@/lib/menu";
import { SITE, SHOW_MENU_PAGE_PUBLIC } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Il menu PuroBurger: smash #SmashAlto di carne di scottona, fritti, bibite, liquori, vini e birre. 100% carne di scottona, zero additivi.",
  alternates: { canonical: `${SITE.url}/menu` },
};

export default function MenuPage() {
  if (!SHOW_MENU_PAGE_PUBLIC) {
    redirect("/");
  }

  return (
    <>
      <div className="border-b border-puro-border bg-puro-black">
        <div className="container mx-auto pt-5 pb-1 sm:pt-6 sm:pb-2 lg:pt-7">
          <SectionLabel>Il menu PuroBurger</SectionLabel>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[0.95] text-balance max-w-3xl">
            Solo carne di scottona.{" "}
            <span className="italic text-puro-green">Solo smash.</span>
          </h1>
          <p className="mt-2 text-sm text-white/50 max-w-xl leading-snug text-pretty">
            Filiera italiana, macinatura ogni mattina, piastra a 260°C. Zero
            additivi.
          </p>
        </div>

        <nav
          className="sticky top-16 z-40 border-t border-puro-border/50 bg-puro-black/92 backdrop-blur-md lg:top-20"
          aria-label="Sezioni menu"
        >
          <div className="container mx-auto py-2 sm:py-2.5">
            <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 sm:hidden">
              Vai a
            </p>
            <ul className="flex flex-wrap gap-1 sm:gap-1.5">
              {MENU_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="inline-flex min-h-8 items-center rounded-md border border-puro-border/90 bg-puro-card/40 px-2 py-1 text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-white/75 transition hover:border-puro-green/50 hover:bg-puro-card hover:text-puro-green sm:min-h-9 sm:px-2.5 sm:py-1.5 sm:text-[11px]"
                  >
                    {cat.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      {MENU_CATEGORIES.map((cat, index) => (
        <section
          key={cat.id}
          id={cat.id}
          className={clsx(
            "bg-puro-black scroll-mt-32 lg:scroll-mt-36",
            index === 0
              ? "pt-3 pb-10 sm:pt-4 sm:pb-12 lg:pb-16"
              : "py-10 sm:py-12 lg:py-14"
          )}
        >
          <div className="container mx-auto">
            <header
              className={clsx(
                "mb-6 sm:mb-8",
                index === 0 && "mb-5 sm:mb-6"
              )}
            >
              <h2 className="font-display text-2xl font-bold uppercase sm:text-3xl">
                {cat.title}
              </h2>
              {cat.subtitle && (
                <p className="mt-1 max-w-2xl text-sm text-white/50 text-pretty sm:text-base">
                  {cat.subtitle}
                </p>
              )}
            </header>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
              {cat.items.map((item) => (
                <BurgerCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
