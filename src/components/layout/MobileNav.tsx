"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import clsx from "clsx";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Apri menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/15 text-white hover:border-puro-green hover:text-puro-green transition"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div
        aria-hidden={!open}
        className={clsx(
          "fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl transition-opacity duration-300 lg:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto h-full flex flex-col">
          <div className="flex items-center justify-between py-5">
            <Logo />
            <button
              type="button"
              aria-label="Chiudi menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/15 text-white hover:border-puro-green hover:text-puro-green transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center gap-1">
            {NAV_LINKS.map((link, i) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className={clsx(
                    "group flex items-center justify-between py-4 border-b border-white/5 font-display text-3xl font-bold uppercase tracking-wide animate-fade-in-up",
                    active ? "text-puro-green" : "text-white"
                  )}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-6 w-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                </Link>
              );
            })}
          </nav>

          <div className="py-8 space-y-4">
            <a
              href={SITE.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full py-4"
            >
              Ordina su WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-center text-[11px] uppercase tracking-[0.22em] text-puro-green font-bold">
              100% Scottona · Zero Additivi
            </p>
            <div className="flex justify-between text-sm text-white/60">
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
