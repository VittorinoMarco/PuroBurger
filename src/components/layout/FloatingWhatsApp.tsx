import { SITE } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={SITE.orderUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ordina su WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-puro-green text-black grid place-items-center shadow-[0_8px_30px_rgba(141,198,63,0.45)] ring-2 ring-black/20 hover:bg-puro-green-hover hover:scale-105 transition"
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden
      >
        <path d="M19.05 4.91A10.37 10.37 0 0 0 12 2a10.44 10.44 0 0 0-9 15.72L2 22l4.43-1.16A10.45 10.45 0 0 0 22.45 12a10.4 10.4 0 0 0-3.4-7.09ZM12 20.28a8.66 8.66 0 0 1-4.4-1.2l-.32-.19-2.63.69.7-2.56-.2-.33A8.66 8.66 0 1 1 20.68 12 8.73 8.73 0 0 1 12 20.28Zm4.74-6.48c-.26-.13-1.54-.76-1.78-.85s-.41-.13-.58.13-.66.85-.81 1-.3.2-.56.07a7.1 7.1 0 0 1-2.1-1.3 7.85 7.85 0 0 1-1.45-1.81c-.15-.26 0-.4.11-.53s.26-.3.39-.45a1.75 1.75 0 0 0 .26-.44.48.48 0 0 0 0-.46c-.07-.13-.58-1.41-.8-1.94s-.42-.44-.58-.45h-.5a1 1 0 0 0-.7.33 2.95 2.95 0 0 0-.92 2.19 5.08 5.08 0 0 0 1.07 2.72 11.72 11.72 0 0 0 4.48 3.96c.63.27 1.12.43 1.5.55a3.62 3.62 0 0 0 1.66.1 2.72 2.72 0 0 0 1.78-1.25 2.19 2.19 0 0 0 .15-1.25c-.06-.12-.24-.19-.5-.32Z" />
      </svg>
    </a>
  );
}
