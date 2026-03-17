"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 min-w-[44px] min-h-[44px]">
              <div className="relative w-[180px] aspect-[3/1]">
                <Image
                  src="/LogoPuroBurger.png"
                  alt="Puro Burger"
                  fill
                  className="object-contain object-left"
                  sizes="180px"
                  style={{
                    boxSizing: "content-box",
                    background: "unset",
                    backgroundColor: "unset",
                  }}
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white text-[13px] font-medium uppercase tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center gap-2 border-2 border-puro-green text-puro-green hover:bg-puro-green hover:text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-300"
              >
                <Phone size={16} />
                {CONTACT.phoneFormatted}
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-white min-w-[44px] min-h-[44px]"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
