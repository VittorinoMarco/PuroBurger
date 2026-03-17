export const CONTACT = {
  phone: "3758249449",
  phoneFormatted: "375 824 9449",
  whatsapp: "393758249449",
  whatsappUrl: "https://wa.me/393758249449",
  location: "Scalea (CS), Calabria",
  instagram: "@puroburger_scalea",
  instagramUrl: "https://instagram.com/puroburger_scalea",
  facebookUrl: "https://facebook.com",
  tiktokUrl: "https://tiktok.com",
} as const;

export const HOURS = {
  days: "Lunedì — Domenica",
  lunch: "12:00 – 15:00",
  dinner: "19:00 – 23:00",
  note: "Orari soggetti a variazioni stagionali",
  short: "Lun–Dom: 12:00–15:00 / 19:00–23:00",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
] as const;
