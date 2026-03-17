"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const stats = [
  { value: 14, suffix: "+", label: "Burger in Menu" },
  { value: 100, suffix: "%", label: "Carne di Scottona" },
  { value: 0, suffix: "", label: "Additivi o Conservanti" },
  { value: 1, suffix: "", label: "Posto dove mangiare così a Scalea" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {value}
          {suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </span>
  );
}

export default function NumeriSection() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-puro-green">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-white/80 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
