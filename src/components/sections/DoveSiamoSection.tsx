"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { CONTACT, HOURS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function DoveSiamoSection() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-8">
              Vieni a trovarci
            </h2>
            <div className="space-y-6 text-white/90">
              <div className="flex items-center gap-4">
                <MapPin size={24} className="text-puro-green flex-shrink-0" />
                <span>{CONTACT.location}</span>
              </div>
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-4 hover:text-puro-green transition-colors"
              >
                <Phone size={24} className="text-puro-green flex-shrink-0" />
                <span className="text-xl font-semibold">{CONTACT.phoneFormatted}</span>
              </a>
              <div className="flex items-center gap-4">
                <Clock size={24} className="text-puro-green flex-shrink-0" />
                <span>{HOURS.short}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button href={CONTACT.whatsappUrl} variant="whatsapp" size="lg">
                WhatsApp
              </Button>
              <Button href={`tel:${CONTACT.phone}`} variant="secondary" size="lg">
                Chiama
              </Button>
            </div>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-white/70 hover:text-puro-green transition-colors"
            >
              Instagram
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-sm aspect-[4/3] min-h-[300px]">
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
