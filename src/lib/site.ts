export const SITE = {
  name: "PuroBurger",
  tagline: "N°1 dello Smash Burger",
  claim: "N°1 dello Smash Burger",
  slogan: "100% carne di scottona, zero additivi",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://puroburger.it",
  phone: "+39 375 824 9449",
  whatsapp: "393758249449",
  email: "puroburger@libero.it",
  address: "Corso Mediterraneo 12, 87029 Scalea (CS)",
  hours: {
    weekdays: "18:00 – 23:30",
    weekend: "12:30 – 15:00 · 18:00 – 00:30",
  },
  social: {
    instagram: "https://www.instagram.com/puroburgeritalia/",
    facebook: "https://facebook.com/puroburger",
    tiktok: "https://tiktok.com/@puroburger",
  },
  orderUrl:
    "https://wa.me/393758249449?text=Ciao%20PuroBurger!%20Vorrei%20ordinare",
};

/** `false` = niente voce Menu in nav, niente link al listino, `/menu` reindirizza a home. */
export const SHOW_MENU_PAGE_PUBLIC = false;

/** `false` = nasconde il blocco combo weekend in home (`#combo`). Componente mantenuto in repo. */
export const SHOW_COMBO_SECTION_ON_HOME = false;

const NAV_LINKS_ALL = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatti", label: "Contatti" },
] as const;

export const NAV_LINKS: readonly { href: string; label: string }[] =
  SHOW_MENU_PAGE_PUBLIC
    ? NAV_LINKS_ALL
    : NAV_LINKS_ALL.filter((l) => l.href !== "/menu");
