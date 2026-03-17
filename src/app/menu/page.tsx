"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BURGERS } from "@/lib/burgers";
import BurgerCard from "@/components/ui/BurgerCard";
import TimbroStamp from "@/components/ui/TimbroStamp";
import PuroSpritz from "@/components/sections/PuroSpritz";
import { CONTACT } from "@/lib/constants";

type MenuFilter = "tutti" | "classici" | "signature" | "vegetariano";

const FILTERS: { id: MenuFilter; label: string }[] = [
  { id: "tutti", label: "Tutti" },
  { id: "classici", label: "I Classici" },
  { id: "signature", label: "I Signature" },
  { id: "vegetariano", label: "Vegetariano" },
];

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState<MenuFilter>("tutti");

  const filteredBurgers =
    activeFilter === "tutti"
      ? BURGERS
      : BURGERS.filter((b) => b.category === activeFilter);

  return (
    <main className="min-h-screen bg-black pt-24 md:pt-28">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[300px] flex flex-col justify-center items-center text-center px-4">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1400&q=60"
              alt=""
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <TimbroStamp variant="smash-alto" position="bottom-right" size={90} />
            <TimbroStamp variant="zero" position="top-left" size={80} />
          </div>
          <div className="relative z-10">
            <h1 className="font-display font-bold italic text-5xl md:text-7xl lg:text-8xl text-white">
              IL MENU
            </h1>
            <p className="mt-4 text-white/80 text-lg">
              Tutto preparato al momento · Carne di Scottona 100% Italiana
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <div className="sticky top-16 md:top-20 z-30 bg-black/95 backdrop-blur py-4 overflow-x-auto">
          <div className="max-w-container mx-auto px-4 flex gap-2 justify-center items-center pt-2.5">
            {FILTERS.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all min-h-[44px] ${
                  activeFilter === filter.id
                    ? "bg-puro-green text-white"
                    : "border-2 border-white text-white hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBurgers.map((burger, i) => (
              <motion.div
                key={burger.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <BurgerCard burger={burger} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* PuroSpritz - Da Abbinare */}
        <PuroSpritz showSectionTitle />

        {/* Bottom Banner */}
        <section className="bg-puro-green py-8">
          <div className="max-w-container mx-auto px-4 text-center">
            <p className="text-white">
              Hai allergie o intolleranze? Chiedi al nostro staff.
            </p>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-block mt-2 text-puro-green font-semibold hover:underline"
            >
              {CONTACT.phoneFormatted}
            </a>
          </div>
        </section>

        <div className="py-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-puro-green transition-colors"
          >
            ← Torna alla Home
          </Link>
        </div>
      </main>
  );
}
