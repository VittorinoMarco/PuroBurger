"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function SmashAltoSection() {
  return (
    <section className="pt-24 md:pt-32 pb-0">
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        <AnimatedSection className="bg-puro-green flex flex-col justify-center p-8 md:p-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white">
            La crosta perfetta. Il cuore tenero.
          </h2>
          <p className="mt-6 text-white/90 text-base leading-[1.7]">
            La patty di scottona viene pressata sulla piastra a 250°C nei primi
            secondi di cottura. La reazione di Maillard crea una crosta
            caramellata irreplicabile che sigilla i succhi all&apos;interno. Il
            risultato è un burger diverso da qualsiasi altro: croccante fuori,
            morbido e saporito dentro. Questa è la firma di Puro Burger.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="relative min-h-[400px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=85"
            alt="Tecnica SmashAlto - cottura burger su piastra"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
