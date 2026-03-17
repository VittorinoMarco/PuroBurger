"use client";

import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-3 rounded-full shadow-lg min-w-[44px] min-h-[44px] transition-colors"
      aria-label="Ordina su WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="font-semibold text-sm">Ordina</span>
    </a>
  );
}
