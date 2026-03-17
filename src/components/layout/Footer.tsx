import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { NAV_LINKS, CONTACT, HOURS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black py-16 md:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo + tagline */}
          <div>
            <Image
              src="/LogoPuroBurger.png"
              alt="Puro Burger"
              width={120}
              height={48}
              className="h-10 w-auto"
            />
            <p className="mt-2 text-white/80 text-sm">
              N°1 dello SmashAlto
            </p>
            <p className="text-white/70 text-sm">100% Scottona · Zero Additivi</p>
            <div className="flex gap-4 mt-4">
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-puro-green transition-colors min-w-[44px] min-h-[44px] flex items-center"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href={CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-puro-green transition-colors min-w-[44px] min-h-[44px] flex items-center"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={CONTACT.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-puro-green transition-colors min-w-[44px] min-h-[44px] flex items-center"
                aria-label="TikTok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Naviga */}
          <div>
            <h3 className="font-semibold text-white mb-4">Naviga</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-puro-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contatti */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contatti</h3>
            <p className="text-white/70">{CONTACT.location}</p>
            <a
              href={`tel:${CONTACT.phone}`}
              className="text-white/70 hover:text-puro-green transition-colors block mt-2"
            >
              {CONTACT.phoneFormatted}
            </a>
            <p className="text-white/70 mt-2 text-sm">{HOURS.short}</p>
          </div>

          {/* Col 4: Seguici */}
          <div>
            <h3 className="font-semibold text-white mb-4">Seguici</h3>
            <p className="text-white/70 text-sm">{CONTACT.instagram}</p>
            <p className="text-white/70 text-sm mt-1">Facebook / TikTok</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <span>© 2026 Puro Burger · Scalea (CS) · P.IVA: [placeholder]</span>
          <span>Made by Marco Vittorino</span>
        </div>
      </div>
    </footer>
  );
}
