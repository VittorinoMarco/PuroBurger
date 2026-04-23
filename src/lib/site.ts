export const SITE = {
  name: "Puro Burger",
  tagline: "N°1 dello Smash Burger",
  claim: "N°1 dello Smash Burger",
  slogan: "100% carne di scottona, zero additivi",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://puroburger.it",
  phone: "+39 329 123 4567",
  whatsapp: "393291234567",
  email: "ciao@puroburger.it",
  address: "Corso Mediterraneo 12, 87029 Scalea (CS)",
  hours: {
    weekdays: "18:00 – 23:30",
    weekend: "12:30 – 15:00 · 18:00 – 00:30",
  },
  social: {
    instagram: "https://instagram.com/puroburger",
    facebook: "https://facebook.com/puroburger",
    tiktok: "https://tiktok.com/@puroburger",
  },
  orderUrl:
    "https://wa.me/393291234567?text=Ciao%20Puro%20Burger!%20Vorrei%20ordinare%20il%20Panino%20del%20Mese",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
] as const;
