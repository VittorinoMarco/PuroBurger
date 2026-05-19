/** Sezione home "Scelte Pure": tre panini + testi SmashAlto / PuroBurger perché.
 * Nei testi usa il segnaposto letterale `#SmashAlto` dove va mostrato il simbolo grafico. */
export type SceltaPuraItem = {
  id: string;
  name: string;
  price: number;
  /** Include esattamente `#SmashAlto` dove sostituire il badge grafico. */
  description: string;
};

export const SCELTE_PURE: SceltaPuraItem[] = [
  {
    id: "puro-nduja",
    name: "Puro Nduja",
    price: 14,
    description:
      "Bun soffice a lunga lievitazione, puro hamburger di carne di scottona #SmashAlto, pecorino calabrese, bacon supreme piastrato, cipolla rossa piastrata, 'nduja di Spilinga e rucola.",
  },
  {
    id: "puro-uovo",
    name: "Puro Uovo",
    price: 14,
    description:
      "Bun soffice a lunga lievitazione, puro hamburger di carne di scottona #SmashAlto, white cheese, bacon supreme piastrato, uovo piastrato, cipolla rossa di Tropea, rucola e glassa di aceto balsamico.",
  },
  {
    id: "puro-pecorino",
    name: "Puro Pecorino",
    price: 14,
    description:
      "Bun soffice a lunga lievitazione, puro hamburger di carne di scottona #SmashAlto, pecorino calabrese, bacon supreme piastrato, cipolla rossa piastrata, glassa di aceto balsamico e rucola.",
  },
];

export const SMASHALTO_COPY = {
  title: "N°1 dello SmashAlto",
  body:
    "SmashAlto è il nostro modo di fare lo smashburger più alto e succoso: un patty più alto fatto di 100% carne di scottona, schiacciato in cottura per creare crosticina intensa fuori e morbidezza dentro, così in bocca resta pieno e mai secco.",
};

export const PURO_PERCHE_COPY = {
  title: "PuroBurger perché?",
  body:
    "I nostri Smash Burger sono preparati solo con carne di scottona fresca al 100%, macinata poche ore prima della cottura, senza conservanti, coloranti né additivi.",
};
