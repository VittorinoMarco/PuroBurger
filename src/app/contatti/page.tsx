import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Prenota un tavolo, ordina su WhatsApp o vieni a Scalea: Puro Burger, N°1 dello Smash Burger. 100% scottona italiana, zero additivi.",
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
        <div className="container mx-auto grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-8">
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
            <ContactCard
              icon={MapPin}
              label="Indirizzo"
              value={SITE.address}
            />

            <div id="allergeni" className="card-dark space-y-3 p-6 sm:p-7">
              <h2 className="font-bold uppercase tracking-wide text-sm text-puro-green">
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

          <form
            action="#"
            method="post"
            className="card-dark space-y-5 p-7 sm:p-8 lg:p-10"
          >
            <h2 className="font-display text-2xl font-bold uppercase">
              Scrivici
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Oggetto" name="subject" />
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-wider text-white/55 font-bold"
              >
                Messaggio
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-puro-ink border border-puro-border rounded-food px-4 py-3 text-sm focus:outline-none focus:border-puro-green focus:ring-2 focus:ring-puro-green/20 transition"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full py-3.5">
              Invia messaggio
            </button>
            <p className="text-[11px] text-white/40">
              Ti risponderemo entro 24h lavorative.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

type Icon = React.ComponentType<{ className?: string; strokeWidth?: number }>;

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
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  return <a href={href}>{inner}</a>;
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-wider text-white/55 font-bold"
      >
        {label} {required && <span className="text-puro-green">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-puro-ink border border-puro-border rounded-food px-4 py-3 text-sm focus:outline-none focus:border-puro-green focus:ring-2 focus:ring-puro-green/20 transition"
      />
    </div>
  );
}
