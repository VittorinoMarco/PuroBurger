"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";
import { SectionLabel } from "@/components/ui/SectionLabel";

const FAQS = [
  {
    q: "Che carne usate nei vostri burger?",
    a: "Usiamo esclusivamente scottona italiana, proveniente da allevamenti selezionati. Viene macinata ogni giorno in loco: niente carne congelata, niente additivi, niente conservanti.",
  },
  {
    q: "Cos'è lo Smash Alto?",
    a: "È la nostra tecnica: palline di carne schiacciate su piastra a 260°C per creare una crosticina caramellata sul fuori e mantenere un cuore succoso dentro. Un minuto di cottura, tanti anni di pratica.",
  },
  {
    q: "Avete opzioni senza glutine o vegetariane?",
    a: "Sì. Abbiamo un Veggie Smash con patty vegetale e possiamo servire ogni burger con pane senza glutine. Segnalacelo in ordine per procedere separatamente in cucina.",
  },
  {
    q: "Si può ordinare a domicilio?",
    a: "Certo. Consegna in zona Scalea tramite WhatsApp o Glovo/Deliveroo. Ordine minimo 15€, tempi medi 25–40 minuti.",
  },
  {
    q: "Accettate prenotazioni?",
    a: "Nel weekend sì, consigliate. Scrivici su WhatsApp o chiamaci: ti blocchiamo il tavolo nel turno che preferisci.",
  },
  {
    q: "Avete allergeni e tabella nutrizionale?",
    a: "Sì, disponibili in cartaceo in store e via email su richiesta. Scrivici a ciao@puroburger.it.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-y bg-puro-black">
      <div className="container mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(260px,1fr)_2fr] lg:gap-16 xl:gap-20">
          <div className="space-y-5 lg:sticky lg:top-28">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display font-black text-4xl sm:text-5xl leading-[1] uppercase text-balance">
              Domande. <br />
              <span className="italic text-puro-green">Risposte dirette.</span>
            </h2>
            <p className="text-white/60 text-pretty max-w-sm">
              Trasparenza totale su carne, filiera, tecnica e servizio. Come
              deve essere.
            </p>
          </div>

          <ul className="space-y-4">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <li
                  key={i}
                  className={clsx(
                    "card-dark transition-colors",
                    isOpen && "border-puro-green/40"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7 sm:py-6"
                  >
                    <span className="font-semibold text-base sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={clsx(
                        "h-8 w-8 shrink-0 rounded-full grid place-items-center transition-colors",
                        isOpen
                          ? "bg-puro-green text-black"
                          : "bg-white/5 text-white"
                      )}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={clsx(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-pretty text-white/60 sm:px-7 sm:pb-7">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
