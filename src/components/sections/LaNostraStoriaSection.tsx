"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import TimbroStamp from "@/components/ui/TimbroStamp";

export default function LaNostraStoriaSection() {
  return (
    <section className="py-24 md:py-32 bg-white" id="la-nostra-storia">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <AnimatedSection>
            <SectionLabel>LA NOSTRA STORIA</SectionLabel>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-black mt-2">
              Nati dalla passione per la carne vera.
            </h2>
            <p className="mt-6 text-black/80 text-base leading-[1.7]">
              Puro Burger nasce a Scalea da un&apos;unica ossessione: portare in
              Calabria il miglior smash burger d&apos;Italia. Usiamo solo carne di
              scottona italiana, selezionata ogni giorno, senza additivi, senza
              scorciatoie. La tecnica SmashAlto — pressare la patty su piastra
              rovente — crea una crosta caramellata unica che racchiude tutta la
              succulenza della carne. Non è fast food. È carne.
            </p>
            <Link
              href="/chi-siamo"
              className="inline-flex items-center gap-2 mt-8 font-medium text-puro-green hover:gap-4 transition-all"
            >
              Leggi di più →
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=700&q=80"
                  alt="Preparazione burger Puro Burger"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <TimbroStamp variant="smash-alto" position="bottom-right" size={80} />
              </div>
              <div className="absolute -bottom-6 -left-6 w-40 md:w-48 aspect-square rounded-[24px] overflow-hidden shadow-xl border-4 border-white hidden md:block">
                <Image
                  src="https://images.unsplash.com/photo-1550950158-d0d960dff596?w=500&q=80"
                  alt="Ingredienti freschi Puro Burger"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
