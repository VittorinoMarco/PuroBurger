/**
 * Imposta `true` per mostrare di nuovo il blocco Panino del mese in home.
 * Dati e componente restano nel progetto anche quando è `false`.
 */
export const SHOW_PANINO_DEL_MESE_ON_HOME = false;

export type MonthlySpecial = {
  id: string;
  month: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  poster: string;
  ingredients: string[];
};

/**
 * Il panino del mese. Modifica qui per aggiornare l'Hero.
 * `poster` = file in /public con il poster marketing (include già titolo e brand).
 */
export const MONTHLY_SPECIAL: MonthlySpecial = {
  id: "puro-parmigiano",
  month: "Aprile 2026",
  name: "PuroParmigiano",
  tagline:
    "Parmigiano Reggiano, bacon supreme e Tropea piastrata: il Panino del Mese firmato PuroBurger.",
  description:
    "Bun soffice a lunga lievitazione, puro hamburger di carne di scottona #SmashAlto, Parmigiano Reggiano, bacon supreme piastrato, cipolla rossa di Tropea piastrata, glassa di aceto balsamico e rucola.",
  price: 13.9,
  poster: "/PuroParmigiano.png",
  ingredients: [
    "SmashAlto",
    "Parmigiano Reggiano",
    "Bacon supreme",
    "Tropea piastrata",
    "Glassa balsamico",
    "Rucola",
  ],
};
