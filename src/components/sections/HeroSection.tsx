"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import TimbroStamp from "@/components/ui/TimbroStamp";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] bg-black overflow-hidden flex flex-col justify-center">
      {/* Giant P and B letters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span
          className="absolute -left-24 top-1/2 -translate-y-1/2 font-display font-black text-[300px] text-white/[0.05] select-none leading-none"
          aria-hidden
        >
          P
        </span>
        <span
          className="absolute -right-24 top-1/2 -translate-y-1/2 font-display font-black text-[300px] text-white/[0.05] select-none leading-none"
          aria-hidden
        >
          B
        </span>
      </div>

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-puro-green text-sm uppercase tracking-[0.2em] mb-4"
          >
            SCALEA · CALABRIA
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-[42px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight"
          >
            N°1 dello
            <br />
            <span className="italic">SmashAlto</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-white/80 text-lg md:text-xl max-w-lg"
          >
            100% carne di scottona · Zero additivi
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 relative -rotate-1"
          >
            <div className="relative aspect-[4/3] w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=85"
                alt="Smash burger Puro Burger - 100% carne di scottona"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 672px"
              />
              <TimbroStamp variant="smash-alto" position="bottom-right" size={100} />
              <TimbroStamp variant="zero" position="top-left" size={90} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-12"
          >
            <Button href="/menu" variant="primary" size="lg">
              Esplora il Menu
            </Button>
            <Button href="/chi-siamo" variant="secondary" size="lg">
              Chi Siamo
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#la-nostra-storia" className="inline-block animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </a>
      </motion.div>
    </section>
  );
}
