"use client";

import Image from "next/image";

interface PuroSpritzProps {
  /** Show section title above (for menu page) */
  showSectionTitle?: boolean;
}

const DRINK_IMAGE =
  "https://images.unsplash.com/photo-1560508180-03f285f67ded?w=700&q=80";
const BURGER_IMAGE =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=80";

export default function PuroSpritz({ showSectionTitle = false }: PuroSpritzProps) {
  return (
    <section
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: "#0E0E0A" }}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {showSectionTitle && (
          <div className="mb-10 text-center">
            <p className="font-sans text-sm uppercase tracking-widest text-puro-green mb-2">
              DA ABBINARE
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
              PuroSpritz
            </h2>
          </div>
        )}

        <div className="relative rounded-[24px] overflow-hidden">
          {/* Horizontal layout: drink left, burger right */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
              <Image
                src={DRINK_IMAGE}
                alt="Aperol Spritz"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
              <Image
                src={BURGER_IMAGE}
                alt="Burger"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Dark gradient overlay for text legibility */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
            }}
          />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            {/* Logo top-right: PURO + SPRITZ */}
            <div className="flex justify-end">
              <div className="text-right">
                <span className="font-sans font-bold text-2xl md:text-3xl lg:text-4xl uppercase text-white tracking-tight">
                  PUR
                  <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-puro-green text-white mx-0.5 align-middle text-[0.7em]">
                    O
                  </span>
                </span>
                <div className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl uppercase text-puro-green tracking-tight mt-1">
                  SPRITZ
                </div>
              </div>
            </div>

            {/* Drinks list bottom-left */}
            <div className="max-w-md">
              <p className="font-sans font-medium text-sm md:text-base text-puro-green italic mb-3">
                Provalo con i nostri panini
              </p>
              <div className="space-y-1">
                <div className="flex justify-between items-baseline font-sans font-bold text-lg md:text-[22px] text-white">
                  <span>Aperol Spritz</span>
                  <span className="font-medium ml-4">6.00</span>
                </div>
                <div className="flex justify-between items-baseline font-sans font-bold text-lg md:text-[22px] text-white">
                  <span>Limoncello Spritz</span>
                  <span className="font-medium ml-4">7.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
