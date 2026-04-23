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
    "Doppio Smash di sola scottona italiana, Parmigiano 24 mesi e balsamico. Solo per questo mese.",
  description:
    "Doppio smash di scottona italiana, crema di Parmigiano Reggiano 24 mesi, bacon croccante, riduzione di aceto balsamico, rucola su pane brioche a lievitazione naturale.",
  price: 13.9,
  poster: "/PuroParmigiano.png",
  ingredients: [
    "Doppio SmashAlto",
    "Scottona 100%",
    "Parmigiano 24 mesi",
    "Bacon croccante",
    "Balsamico ridotto",
  ],
};
