"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CARDS = [
  {
    title: "La nostra carne",
    body: "Ogni hamburger Puro è fatto con 100% carne di scottona selezionata: nessuna aggiunta di carne di maiale, nessun amido, nessun additivo. Quello che assaggi è carne vera, e solo quella.",
    highlightWord: null as string | null,
  },
  {
    title: "N°1 dello SmashAlto",
    body: "SmashAlto è il nostro modo di fare lo smashburger più alto e succoso: un patty più alto fatto di 100% carne di scottona, schiacciato in cottura per creare crosticina intensa fuori e morbidezza dentro, così in bocca resta pieno e mai secco.",
    highlightWord: null as string | null,
  },
  {
    title: "PuroBurger perché?",
    body: "I nostri Smash Burger sono preparati solo con carne fresca 100% di scottona, macinata poche ore prima della cottura senza : conservanti - coloranti - additivi",
    highlightWord: "fresca",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function renderBody(text: string, highlightWord: string | null) {
  if (!highlightWord) {
    return text;
  }
  const parts = text.split(new RegExp(`(${highlightWord})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === highlightWord.toLowerCase() ? (
      <span key={i} className="font-bold text-puro-green">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function InfoCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: "#0E0E0A" }}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: i * 0.15,
              }}
              className="rounded-[16px] p-5 md:p-6 text-center border-[1.5px] border-puro-green transition-shadow duration-300 hover:shadow-[0_0_16px_rgba(141,198,63,0.15)]"
              style={{ backgroundColor: "#1A1A10" }}
            >
              <h3 className="font-sans font-extrabold text-[22px] md:text-[28px] text-white uppercase mb-4">
                {card.title}
              </h3>
              <p className="font-sans text-[15px] text-white leading-[1.65]">
                {renderBody(card.body, card.highlightWord)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
