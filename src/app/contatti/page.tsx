import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Prenota un tavolo, ordina su WhatsApp o vieni a Scalea: PuroBurger, N°1 dello Smash Burger. 100% carne di scottona italiana, zero additivi.",
  alternates: { canonical: `${SITE.url}/contatti` },
};

export default function ContattiPage() {
  return (
    <>
      <section className="border-b border-puro-border bg-puro-black py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto">
          <SectionLabel>Contatti</SectionLabel>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-[0.95] text-balance">
            Parliamone <br />
            <span className="italic text-puro-green">davanti a uno smash.</span>
          </h1>
          <p className="mt-6 text-white/60 max-w-xl text-pretty">
            Prenotazioni, ordini, eventi privati, collaborazioni. Ti
            rispondiamo su WhatsApp entro 10 minuti negli orari di apertura.
          </p>
        </div>
      </section>

      <section className="section-y-sm bg-puro-black">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 sm:gap-10">
            <ContactCard
              icon={Phone}
              label="Telefono"
              value={SITE.phone}
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value="Ordina in un click"
              href={SITE.orderUrl}
              external
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value={SITE.email}
              href={`mailto:${SITE.email}`}
            />
          </div>

          <div className="mt-10 sm:mt-12">
            <ContactCard
              icon={MapPin}
              label="Indirizzo"
              value={SITE.address}
            />
          </div>

          <div id="allergeni" className="card-dark mt-10 space-y-3 p-6 sm:mt-12 sm:p-7">
            <h2 className="text-sm font-bold uppercase tracking-wide text-puro-green">
              Allergeni & trasparenza
            </h2>
            <p className="text-sm text-white/55 text-pretty">
              Trasparenza totale: lista completa ingredienti e allergeni
              disponibile in store e via email. Per intolleranze, segnalaci
              tutto al momento dell&apos;ordine: avvisiamo cucina e
              adattiamo la preparazione. Scrivici a{" "}
              <a className="underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

type Icon = LucideIcon;

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: Icon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="card-dark flex items-start gap-4 p-6 transition-colors hover:border-puro-green/40 sm:p-7">
      <div className="h-11 w-11 rounded-full bg-puro-green/10 grid place-items-center text-puro-green shrink-0">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.2em] text-white/45 font-bold">
          {label}
        </p>
        <p className="mt-1 text-lg font-semibold">{value}</p>
      </div>
    </div>
  );

  if (!href) return inner;
  if (external)
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {inner}
      </a>
    );
  return (
    <a href={href} className="block">
      {inner}
    </a>
  );
}
