import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SHOW_MENU_PAGE_PUBLIC } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center bg-puro-black px-4 py-20 sm:py-24">
      <div className="container mx-auto space-y-8 text-center">
        <p className="font-display text-puro-green text-sm uppercase tracking-[0.3em]">
          404 — Pagina bruciata
        </p>
        <h1 className="font-display text-5xl sm:text-7xl font-black uppercase leading-[0.95]">
          Pagina non <br />
          <span className="italic text-puro-green">trovata.</span>
        </h1>
        <p className="mx-auto max-w-md text-pretty text-white/55">
          La crosticina è andata, la carne di scottona no. Torna in home
          {SHOW_MENU_PAGE_PUBLIC ? " o scegli il tuo prossimo smash dal menu." : "."}
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <Button href="/" withArrow>
            Torna alla Home
          </Button>
          {SHOW_MENU_PAGE_PUBLIC ? (
            <Link href="/menu" className="btn btn-ghost px-5 py-2.5 text-sm">
              Scegli il tuo smash
            </Link>
          ) : (
            <Link href="/contatti" className="btn btn-ghost px-5 py-2.5 text-sm">
              Contattaci
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
