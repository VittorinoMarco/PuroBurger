import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import InfoCards from "@/components/sections/InfoCards";
import LaNostraStoriaSection from "@/components/sections/LaNostraStoriaSection";
import NumeriSection from "@/components/sections/NumeriSection";
import BurgerPreviewSection from "@/components/sections/BurgerPreviewSection";
import PuroSpritz from "@/components/sections/PuroSpritz";
import SmashAltoSection from "@/components/sections/SmashAltoSection";
import DoveSiamoSection from "@/components/sections/DoveSiamoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <InfoCards />
      <LaNostraStoriaSection />
      <NumeriSection />
      <BurgerPreviewSection />
      <PuroSpritz />
      <SmashAltoSection />
      <DoveSiamoSection />
    </main>
  );
}
