"use client";

import { BURGERS, FEATURED_BURGERS, FEATURED_BURGER_IMAGES } from "@/lib/burgers";
import BurgerCard from "@/components/ui/BurgerCard";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BurgerPreviewSection() {
  const featured = BURGERS.filter((b) => FEATURED_BURGERS.includes(b.id));

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <SectionLabel>I NOSTRI BURGER</SectionLabel>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-black">
            I Signature Burger
          </h2>
        </AnimatedSection>

        <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible snap-x snap-mandatory md:snap-none">
          <div className="flex gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
            {featured.map((burger, i) => (
              <AnimatedSection key={burger.id} delay={i * 0.1}>
                <div className="w-[280px] md:w-auto snap-center">
                  <BurgerCard
                    burger={burger}
                    imageUrl={FEATURED_BURGER_IMAGES[burger.id]}
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="text-center mt-12">
          <Button href="/menu" variant="primary" size="lg">
            Vedi tutto il menu →
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
