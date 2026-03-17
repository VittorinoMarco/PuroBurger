"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import TimbroStamp from "@/components/ui/TimbroStamp";

export default function ChiSiamoContent() {
  return (
    <main className="min-h-screen bg-black pt-24 md:pt-28">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=60"
            alt="Ambiente Puro Burger"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <TimbroStamp variant="zero" position="bottom-right" size={100} />
          <TimbroStamp variant="smash-alto" position="top-left" size={90} />
        </div>
        <h1 className="relative z-10 font-display font-bold text-4xl md:text-6xl text-white">
          Chi Siamo
        </h1>
      </section>

      {/* La nostra carne */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-black">
                La nostra carne
              </h2>
              <p className="mt-6 text-black/80 text-base leading-[1.7]">
                Ogni hamburger Puro è fatto con 100% carne di scottona selezionata: nessuna aggiunta di carne di maiale, nessun amido, nessun additivo. Quello che assaggi è carne vera, e solo quella.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                  alt="Interno Puro Burger"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <TimbroStamp variant="smash-alto" position="bottom-right" size={80} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* I Valori */}
      <section className="py-24 md:py-32 bg-puro-green">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="bg-black/20 rounded-[24px] p-8 h-full">
                <span className="text-4xl mb-4 block">🐄</span>
                <h3 className="font-display font-bold text-xl text-white">
                  N°1 dello SmashAlto
                </h3>
                <p className="mt-4 text-white/90 text-sm leading-[1.7]">
                  SmashAlto è il nostro modo di fare lo smashburger più alto e succoso: un patty più alto fatto di 100% carne di scottona, schiacciato in cottura per creare crosticina intensa fuori e morbidezza dentro, così in bocca resta pieno e mai secco.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-black/20 rounded-[24px] p-8 h-full">
                <span className="text-4xl mb-4 block">🔥</span>
                <h3 className="font-display font-bold text-xl text-white">
                  Senza compromessi
                </h3>
                <p className="mt-4 text-white/90 text-sm leading-[1.7]">
                  I nostri Smash Burger sono preparati solo con carne fresca 100% di scottona, macinata poche ore prima della cottura — senza conservanti, senza coloranti, senza additivi.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-black/20 rounded-[24px] p-8 h-full">
                <span className="text-4xl mb-4 block">🫙</span>
                <h3 className="font-display font-bold text-xl text-white">
                  Il Bun a Lunga Lievitazione
                </h3>
                <p className="mt-4 text-white/90 text-sm leading-[1.7]">
                  Il pane fa la differenza. I nostri bun sono prodotti con
                  lievitazione naturale lenta: soffici, profumati, abbastanza
                  robusti da reggere la succulenza della carne senza cedere.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* La Famiglia */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              Carne fresca ogni giorno, preparata da noi.
            </h2>
            <p className="mt-6 text-white/80 text-lg italic max-w-2xl mx-auto">
              Ogni hamburger è <strong>SOLO</strong> di carne di scottona.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
              "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
              "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
            ].map((src, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden">
                  <Image
                    src={src}
                    alt={`Puro Burger ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {i === 1 && (
                    <TimbroStamp variant="zero" position="bottom-right" size={70} />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-black">
                Unisciti al Team
              </h2>
              <p className="mt-6 text-black/80 text-base leading-[1.7]">
                Cerchiamo persone appassionate che condividano la nostra filosofia:
                qualità senza compromessi, rispetto per gli ingredienti e un
                ambiente di lavoro dove ogni giorno si impara qualcosa. Se vuoi
                far parte di Puro Burger, inviaci la tua candidatura.
              </p>
              <div className="mt-8">
                <Button
                  href="mailto:info@puroburger.it?subject=Candidatura Puro Burger"
                  variant="primary"
                  size="lg"
                  className="bg-puro-black hover:bg-black/90"
                >
                  Candidati per lavorare con noi
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                  alt="Team Puro Burger"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <TimbroStamp variant="smash-alto" position="bottom-right" size={80} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-puro-green">
        <div className="max-w-container mx-auto px-4 text-center">
          <p className="text-white text-xl font-semibold mb-6">
            Vieni a trovarci a Scalea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/menu" variant="primary" size="lg" className="bg-puro-black hover:bg-black/90">
              Vedi il Menu
            </Button>
            <Button href="tel:3758249449" variant="secondary" size="lg">
              Chiamaci
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
