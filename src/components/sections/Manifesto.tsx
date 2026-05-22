import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MANIFESTO_GALLERY } from "@/lib/foto";

export function Manifesto() {
  return (
    <section className="section-y-lg relative overflow-hidden border-b border-puro-border bg-puro-ink">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div
        className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-puro-green/10 blur-3xl"
        aria-hidden
      />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-4xl space-y-8 px-1 text-center sm:px-0">
          <SectionLabel className="justify-center">La nostra filosofia</SectionLabel>

          <h1 className="font-display text-4xl font-black uppercase leading-[1] text-balance sm:text-5xl lg:text-[64px]">
            100% carne di scottona. <br />
            Zero additivi. <br />
            <span className="italic text-puro-green">Nessun compromesso.</span>
          </h1>

          <div className="mx-auto h-px w-24 bg-puro-green/40" />

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 text-pretty sm:text-xl">
            Non inseguiamo mode. Scegliamo la carne con cura, la schiacciamo
            sulla piastra rovente, la stringiamo tra due fette di brioche artigianale. Un gesto antico, fatto con fuoco, tempi giusti
            e materie prime che sappiamo riconoscere. Questo è PuroBurger.
          </p>

          <div className="pt-4">
            <Link
              href="/chi-siamo"
              className="group inline-flex items-center gap-2 border-b border-puro-green/40 pb-1 font-semibold text-puro-green transition-all hover:gap-3"
            >
              Scopri la filiera
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-4 opacity-90 sm:mt-20 sm:grid-cols-6 sm:gap-5 lg:gap-6">
          {MANIFESTO_GALLERY.map(({ src, alt }, i) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-food ring-1 ring-white/5"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 33vw, 180px"
                loading={i < 3 ? "eager" : "lazy"}
                className="object-cover grayscale transition duration-700 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
