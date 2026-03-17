"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, ChevronDown } from "lucide-react";
import { CONTACT, HOURS } from "@/lib/constants";
import Button from "@/components/ui/Button";

const FAQ = [
  {
    q: "Accettate prenotazioni?",
    a: "Al momento non accettiamo prenotazioni. Vieni direttamente da noi, ti accogliamo con piacere!",
  },
  {
    q: "I vostri ingredienti sono freschi?",
    a: "Assolutamente sì. Ogni ingrediente viene preparato fresco ogni giorno. Zero surgelati, zero additivi.",
  },
  {
    q: "C'è opzione vegetariana?",
    a: "Sì! Il nostro PuroGreen è preparato con hamburger vegetariano SmashAlto, White Cheese, lattuga e pomodoro.",
  },
  {
    q: "Fate delivery?",
    a: "Contattaci direttamente su WhatsApp al 375 824 9449 per informazioni sulla consegna.",
  },
  {
    q: "Come mai solo scottona?",
    a: "La scottona è la femmina bovina giovane, con carne più tenera e saporita rispetto al normale manzo. È la nostra scelta deliberata per garantire il miglior risultato.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 flex justify-between items-center text-left font-medium text-white hover:text-puro-green transition-colors"
      >
        {q}
        <ChevronDown
          size={20}
          className={`flex-shrink-0 ml-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-white/70 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContattiContent() {
  return (
    <main className="min-h-screen bg-black pt-24 md:pt-28">
      {/* Hero */}
      <section className="py-12 md:py-16 text-center">
        <h1 className="font-display font-bold text-4xl md:text-5xl text-white">
          Contatti
        </h1>
        <p className="mt-3 text-white/70">Siamo qui per te</p>
      </section>

      {/* Main - centered container */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Info Card */}
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 md:p-8 shadow-sm order-2 lg:order-1">
            <h2 className="font-display font-bold text-2xl text-white mb-6">
              PURO BURGER
            </h2>
            <div className="space-y-5 text-white/80">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-puro-green flex-shrink-0 mt-0.5" />
                <span>{CONTACT.location} — Italia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-puro-green flex-shrink-0" />
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="hover:text-puro-green transition-colors font-medium"
                >
                  {CONTACT.phoneFormatted}
                </a>
              </div>

              {/* CTA Buttons - adaptive padding, centered */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  href={`tel:${CONTACT.phone}`}
                  variant="primary"
                  size="md"
                >
                  <Phone size={18} />
                  Chiama ora
                </Button>
                <Button
                  href={CONTACT.whatsappUrl}
                  variant="whatsapp"
                  size="md"
                >
                  Scrivici su WhatsApp
                </Button>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-puro-green">📸</span>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-puro-green transition-colors"
                >
                  {CONTACT.instagram}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-puro-green flex-shrink-0 mt-0.5" />
                <div>
                  <p>{HOURS.days}</p>
                  <p className="text-sm">
                    Pranzo: {HOURS.lunch} · Cena: {HOURS.dinner}
                  </p>
                  <p className="text-xs text-white/50 mt-1">{HOURS.note}</p>
                </div>
              </div>
            </div>
            <p className="mt-6 pt-6 border-t border-white/10 text-sm text-white/60">
              Seguici sui social
            </p>
            <div className="flex gap-6 mt-3">
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-puro-green transition-colors"
              >
                Instagram
              </a>
              <a
                href={CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-puro-green transition-colors"
              >
                Facebook
              </a>
              <a
                href={CONTACT.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-puro-green transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>

          {/* Map - real embed */}
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-sm aspect-[4/3] min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.824424715609!2d15.787514476982711!3d39.81092999228605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133f1fb31f570dff%3A0x34687de0c075473a!2sPuroBurger!5e0!3m2!1sit!2sit!4v1773696500302!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Puro Burger Scalea - Mappa"
                className="w-full h-full min-h-[300px]"
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/60">
              📍 PuroBurger — Scalea (CS)
            </p>
          </div>
        </div>

        {/* FAQ - centered */}
        <section className="mt-16 md:mt-24 max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-white mb-8 text-center">
            Domande frequenti
          </h2>
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 md:p-8 shadow-sm">
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
