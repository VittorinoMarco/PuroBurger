"use client";

const MARQUEE_TEXT =
  "100% SCOTTONA · ZERO ADDITIVI · #SMASHALTÒ · SOLO CARNE ITALIANA · FRESCO OGNI GIORNO ·";

export default function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-puro-green py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="mx-8 font-bold uppercase text-puro-cream text-sm md:text-base tracking-wider"
          >
            {MARQUEE_TEXT}
            <span className="mx-4 text-puro-green">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
