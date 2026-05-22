import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { PaninoDelMese } from "@/components/sections/PaninoDelMese";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";
import { PressStrip } from "@/components/sections/PressStrip";
import { SmashShowcase } from "@/components/sections/SmashShowcase";
import { Speciali } from "@/components/sections/Speciali";
import { Features } from "@/components/sections/Features";
import { Manifesto } from "@/components/sections/Manifesto";
import { SHOW_PANINO_DEL_MESE_ON_HOME } from "@/lib/monthly-special";
import { Process } from "@/components/sections/Process";
import { SHOW_COMBO_SECTION_ON_HOME } from "@/lib/site";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

const ComboBannerLazy = SHOW_COMBO_SECTION_ON_HOME
  ? dynamic(() =>
      import("@/components/sections/ComboBanner").then((m) => ({
        default: m.ComboBanner,
      }))
    )
  : function ComboBannerOff() {
      return null;
    };

export default function HomePage() {
  return (
    <>
      <Manifesto />
      <Hero />
      {SHOW_PANINO_DEL_MESE_ON_HOME ? <PaninoDelMese /> : null}
      <MarqueeStrip />
      <PressStrip />
      <Speciali />
      <SmashShowcase />
      <Features />
      <Process />
      <ComboBannerLazy />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
