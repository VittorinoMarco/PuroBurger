import Link from "next/link";
import { Button } from "@/components/ui/Button";

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
        <p className="text-white/55 max-w-md mx-auto text-pretty">
          La crosticina è andata, la scottona no. Torna in home o scegli il
          tuo prossimo smash dal menu.
        </p>
        <div className="flex gap-3 justify-center pt-2">
          <Button href="/" withArrow>
            Torna alla Home
          </Button>
          <Link href="/menu" className="btn btn-ghost px-5 py-2.5 text-sm">
            Scegli il tuo smash
          </Link>
        </div>
      </div>
    </section>
  );
}
