import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Manifesto() {
  return (
    <section className="section-y-lg relative overflow-hidden border-y border-puro-border bg-puro-ink">
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-puro-green/10 blur-3xl"
        aria-hidden
      />

      <div className="container mx-auto relative">
        <div className="mx-auto max-w-4xl space-y-8 px-1 text-center sm:px-0">
          <SectionLabel className="justify-center">Il manifesto</SectionLabel>

          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[64px] leading-[1] uppercase text-balance">
            100% scottona. <br />
            Zero additivi. <br />
            <span className="italic text-puro-green">Nessun compromesso.</span>
          </h2>

          <div className="h-px w-24 bg-puro-green/40 mx-auto" />

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed text-pretty max-w-3xl mx-auto">
            Non inseguiamo mode. Scegliamo la carne dal macellaio, la
            schiacciamo sulla piastra rovente, la stringiamo tra due fette di
            brioche artigianale. Un gesto antico, fatto con fuoco, tempi giusti
            e materie prime che sappiamo riconoscere. Questo è Puro Burger.
          </p>

          <div className="pt-4">
            <Link
              href="/chi-siamo"
              className="group inline-flex items-center gap-2 text-puro-green font-semibold border-b border-puro-green/40 pb-1 hover:gap-3 transition-all"
            >
              Scopri la filiera
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-3 gap-4 opacity-90 sm:mt-20 sm:grid-cols-6 sm:gap-5 lg:gap-6">
          {[
            "photo-1568901346375-23c9450c58cd",
            "photo-1550547660-d9450f859349",
            "photo-1606131731446-5568d87113aa",
            "photo-1594212699903-ec8a3eca50f5",
            "photo-1572802419224-296b0aeee0d9",
            "photo-1585238342024-78d387f4a707",
          ].map((q, i) => (
            <div
              key={q}
              className="relative aspect-square rounded-food overflow-hidden ring-1 ring-white/5"
            >
              <Image
                src={`https://images.unsplash.com/${q}?auto=format&fit=crop&w=300&q=75`}
                alt=""
                fill
                sizes="(max-width: 640px) 33vw, 180px"
                loading={i < 3 ? "eager" : "lazy"}
                className="object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
