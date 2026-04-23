import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { PressStrip } from "@/components/sections/PressStrip";
import { SmashShowcase } from "@/components/sections/SmashShowcase";
import { Features } from "@/components/sections/Features";
import { Manifesto } from "@/components/sections/Manifesto";
import { Process } from "@/components/sections/Process";
import { ComboBanner } from "@/components/sections/ComboBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <PressStrip />
      <SmashShowcase />
      <Features />
      <Manifesto />
      <Process />
      <ComboBanner />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
