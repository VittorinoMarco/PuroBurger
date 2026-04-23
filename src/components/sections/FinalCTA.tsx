import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="section-y bg-puro-black">
      <div className="container mx-auto">
        <div className="relative min-h-[320px] overflow-hidden rounded-food-lg border border-puro-border bg-puro-card p-8 sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
          <div className="absolute -right-10 -top-10 h-[360px] w-[360px] rounded-full bg-puro-green/10 blur-3xl" aria-hidden />

          <div className="relative grid items-center gap-10 sm:grid-cols-[1fr_320px] sm:gap-12">
            <div className="space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1] text-balance">
                Assaggia la <br />
                <span className="text-puro-green">differenza.</span>
              </h2>
              <p className="text-white/60 max-w-md text-pretty">
                Dine-in, take away o consegna. Stessa scottona, stessa
                tecnica, stesso morso. Nessun compromesso.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={SITE.orderUrl} size="lg" withArrow>
                  Ordina su WhatsApp
                </Button>
                <Link
                  href="/contatti"
                  className="btn btn-ghost px-6 py-3.5 text-sm"
                >
                  Vieni in store
                </Link>
              </div>
            </div>

            <div className="relative hidden sm:block h-56">
              <Image
                src="/TimbroZero.png"
                alt="Zero additivi"
                fill
                sizes="320px"
                className="object-contain rotate-[-6deg] drop-shadow-[0_12px_32px_rgba(141,198,63,.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
