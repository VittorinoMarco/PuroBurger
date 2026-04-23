import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const MENU = [
  { label: "I Nostri Smash", href: "/menu#smash" },
  { label: "Sides & Drinks", href: "/menu#sides" },
  { label: "Dolci", href: "/menu#dolci" },
  { label: "Combo 15€ (lun–gio)", href: "/#combo" },
];

const AZIENDA = [
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Il processo", href: "/chi-siamo#processo" },
  { label: "Lavora con noi", href: "/contatti" },
];

const SUPPORTO = [
  { label: "Contatti", href: "/contatti" },
  { label: "Allergeni", href: "/contatti#allergeni" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Termini e Condizioni", href: "/termini" },
];

export function Footer() {
  return (
    <footer className="border-t border-puro-border bg-puro-ink">
      <div className="container mx-auto py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-2 gap-10 sm:gap-12 lg:grid-cols-5 lg:gap-14">
          <div className="col-span-2 lg:col-span-2 space-y-5">
            <Logo />
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-bold bg-puro-green text-black px-3 py-1.5 rounded-full">
                N°1 dello Smash Burger
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-bold bg-puro-green/10 text-puro-green border border-puro-green/30 px-3 py-1.5 rounded-full">
                100% scottona · Zero additivi
              </span>
            </div>
            <p className="text-sm text-white/55 max-w-sm">
              Smash di sola scottona italiana, macinata ogni mattina in
              cucina. Zero conservanti, zero coloranti, nessun compromesso.
              Dal 2019 a Scalea.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-puro-green"
              >
                <Instagram className="h-4 w-4" /> @puroburger
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-puro-green"
              >
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-puro-green"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>{SITE.address}</span>
              </p>
            </div>
          </div>

          <FooterColumn title="Menu" links={MENU} />
          <FooterColumn title="Azienda" links={AZIENDA} />
          <FooterColumn title="Supporto" links={SUPPORTO} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40 sm:flex-row sm:items-center lg:mt-20 lg:pt-10">
          <p>© {new Date().getFullYear()} Puro Burger. Tutti i diritti riservati.</p>
          <p>
            Carne pura. Gesto preciso.{" "}
            <span className="text-puro-green">Ogni volta.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-puro-green mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5 text-sm text-white/65">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
