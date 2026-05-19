export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tags?: string[];
  isNew?: boolean;
  isSignature?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=80`;

export const SMASH_BURGERS: MenuItem[] = [
  {
    id: "puro-goo",
    name: "Puro Goo",
    description:
      "Bun soffice a lunga lievitazione, puro hamburger di carne di scottona #SmashAlto.",
    price: 6.0,
    image: img("photo-1568901346375-23c9450c58cd"),
  },
  {
    id: "puro-basic",
    name: "Puro Basic",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona #SmashAlto, white cheese, salsa PuroBurger.",
    price: 8.0,
    image: img("photo-1550547660-d9450f859349"),
  },
  {
    id: "puro-cruncy",
    name: "Puro Cruncy",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona, white cheese, patatine Cruncy.",
    price: 9.0,
    image: img("photo-1572802419224-296b0aeee0d9"),
  },
  {
    id: "puro-fresh",
    name: "Puro Fresh",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona, white cheese, lattuga iceberg, pomodoro a fette.",
    price: 9.0,
    image: img("photo-1606131731446-5568d87113aa"),
  },
  {
    id: "puro-classic",
    name: "Puro Classic",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona, white cheese, lattuga iceberg, cipolla rossa di Tropea, salsa PuroBurger.",
    price: 10.0,
    image: img("photo-1594212699903-ec8a3eca50f5"),
  },
  {
    id: "puro-bacon",
    name: "Puro Bacon",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona, white cheese, bacon supreme piastrato, salsa PuroBurger.",
    price: 11.0,
    image: img("photo-1550547660-d9450f859349"),
  },
  {
    id: "puro-original",
    name: "Puro Original",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona, white cheese, bacon supreme piastrato, lattuga iceberg, cipolla rossa di Tropea, salsa PuroBurger.",
    price: 12.0,
    image: img("photo-1586190848861-99aa4a171e90"),
  },
  {
    id: "puro-bufala",
    name: "Puro Bufala",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona, mozzarella di bufala di Paestum, pomodoro, lattuga iceberg.",
    price: 12.0,
    image: img("photo-1594212699903-ec8a3eca50f5"),
  },
  {
    id: "puro-green",
    name: "Puro Green",
    description:
      "Bun a lunga lievitazione, hamburger vegetariano #SmashAlto, white cheese, lattuga iceberg, pomodoro a fette.",
    price: 12.0,
    image: img("photo-1585238342024-78d387f4a707"),
    tags: ["Vegetariano"],
  },
  {
    id: "puro-uovo",
    name: "Puro Uovo",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona, white cheese, bacon supreme piastrato, uovo piastrato, cipolla rossa di Tropea, rucola, glassa di aceto balsamico.",
    price: 14.0,
    image: img("photo-1504674900247-0877df9cc836"),
  },
  {
    id: "puro-pecorino",
    name: "Puro Pecorino",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona, pecorino calabrese, bacon supreme piastrato, cipolla rossa piastrata, glassa di aceto balsamico, rucola.",
    price: 14.0,
    image: img("photo-1551183053-bf91a1d81141"),
  },
  {
    id: "puro-nduja",
    name: "Puro Nduja",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona, pecorino calabrese, bacon supreme piastrato, cipolla rossa piastrata, 'nduja di Spilinga, rucola.",
    price: 14.0,
    image: img("photo-1606131731446-5568d87113aa"),
  },
  {
    id: "puro-porcino",
    name: "Puro Porcino",
    description:
      "Bun a lunga lievitazione, smash di carne di scottona, white cheese, bacon supreme piastrato, funghi porcini, rucola.",
    price: 15.0,
    image: img("photo-1568901346375-23c9450c58cd"),
  },
  {
    id: "puro-double",
    name: "Puro Double",
    description:
      "Bun a lunga lievitazione, doppio hamburger di carne di scottona #SmashAlto, doppio white cheese, bacon supreme piastrato, salsa PuroBurger.",
    price: 16.0,
    image: img("photo-1594212699903-ec8a3eca50f5"),
    isSignature: true,
  },
];

export const FRITTI: MenuItem[] = [
  {
    id: "patatina-crunchy",
    name: "Patatina crunchy",
    description: "Amido di patate, farina di riso, patate.",
    price: 4.0,
    image: img("photo-1573080496219-bb080dd4f877"),
  },
  {
    id: "triangoli-formaggio",
    name: "Triangoli panati al formaggio svizzero (P5)",
    description:
      "Aglio, amido di patate, cipolla, farina, latte, mozzarella. Porzione 5 pezzi.",
    price: 4.0,
    image: img("photo-1639024471283-03518883512d"),
  },
  {
    id: "jalapenos-red-hot",
    name: "Jalapeños red hot (3 pz.)",
    description: "Crema di formaggio, farina, peperone piccante.",
    price: 4.0,
    image: img("photo-1639024471283-03518883512d"),
  },
];

export const BIBITE: MenuItem[] = [
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Lattina 33 cl.",
    price: 2.5,
    image: img("photo-1554866585-cd94860890b7"),
  },
  {
    id: "coca-zero",
    name: "Coca-Cola Zero",
    description: "Lattina 33 cl.",
    price: 2.5,
    image: img("photo-1554866585-cd94860890b7"),
  },
  {
    id: "fanta",
    name: "Fanta",
    description: "Lattina 33 cl.",
    price: 2.5,
    image: img("photo-1554866585-cd94860890b7"),
  },
  {
    id: "sprite",
    name: "Sprite",
    description: "Lattina 33 cl.",
    price: 2.5,
    image: img("photo-1554866585-cd94860890b7"),
  },
  {
    id: "estathe-limone",
    name: "Estathé al limone",
    description: "Lattina 33 cl.",
    price: 3.0,
    image: img("photo-1554866585-cd94860890b7"),
  },
  {
    id: "estathe-pesca",
    name: "Estathé alla pesca",
    description: "Lattina 33 cl.",
    price: 3.0,
    image: img("photo-1554866585-cd94860890b7"),
  },
  {
    id: "acqua-liscia",
    name: "Acqua liscia",
    description: "Bottiglia 50 cl.",
    price: 1.0,
    image: img("photo-1559839914-17aae19cec71"),
  },
  {
    id: "acqua-frizzante",
    name: "Acqua frizzante",
    description: "Bottiglia 50 cl.",
    price: 1.0,
    image: img("photo-1559839914-17aae19cec71"),
  },
];

export const LIQUORI: MenuItem[] = [
  {
    id: "grappa-barricata",
    name: "Grappa barricata",
    description: "Servizio al bicchiere.",
    price: 2.5,
    image: img("photo-1541976076758-347942db1970"),
  },
  {
    id: "grappa-bianca",
    name: "Grappa bianca",
    description: "Servizio al bicchiere.",
    price: 2.5,
    image: img("photo-1541976076758-347942db1970"),
  },
  {
    id: "amaro-jefferson",
    name: "Amaro Jefferson",
    description: "Servizio al bicchiere.",
    price: 3.5,
    image: img("photo-1541976076758-347942db1970"),
  },
  {
    id: "liquirizia-calabrese",
    name: "Liquirizia calabrese",
    description: "Servizio al bicchiere.",
    price: 3.0,
    image: img("photo-1541976076758-347942db1970"),
  },
  {
    id: "amaro-capo",
    name: "Amaro del Capo",
    description: "Servizio al bicchiere.",
    price: 2.5,
    image: img("photo-1541976076758-347942db1970"),
  },
  {
    id: "limoncello",
    name: "Limoncello",
    description: "Servizio al bicchiere.",
    price: 2.5,
    image: img("photo-1541976076758-347942db1970"),
  },
];

export const VINI: MenuItem[] = [
  {
    id: "vino-bianco-25",
    name: "Vino bianco",
    description: "Bicchiere 25 cl.",
    price: 3.0,
    image: img("photo-1506377247377-2a5b3b417ebb"),
  },
  {
    id: "vino-rosso-25",
    name: "Vino rosso",
    description: "Bicchiere 25 cl.",
    price: 3.0,
    image: img("photo-1506377247377-2a5b3b417ebb"),
  },
  {
    id: "calice-prosecco",
    name: "Calice di Prosecco",
    description: "Un calice.",
    price: 3.0,
    image: img("photo-1541976076758-347942db1970"),
  },
];

export const BIRRE: MenuItem[] = [
  {
    id: "heineken-33",
    name: "Heineken",
    description: "Birra in bottiglia, 33 cl.",
    price: 3.5,
    image: img("photo-1608270586620-248524c67de9"),
  },
  {
    id: "tennents-33",
    name: "Tennent's",
    description: "Birra in bottiglia, 33 cl.",
    price: 4.0,
    image: img("photo-1608270586620-248524c67de9"),
  },
  {
    id: "lowenbrau-30",
    name: "Lager Löwenbräu",
    description: "Birra alla spina, 30 cl.",
    price: 4.0,
    image: img("photo-1608270586620-248524c67de9"),
  },
  {
    id: "theresianer-ipa-30",
    name: "Theresianer IPA",
    description: "Birra alla spina, 30 cl.",
    price: 6.0,
    image: img("photo-1608270586620-248524c67de9"),
  },
  {
    id: "leffe-rouge-30",
    name: "Leffe Rouge doppio malto",
    description: "Birra alla spina, 30 cl.",
    price: 6.0,
    image: img("photo-1608270586620-248524c67de9"),
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "smash",
    title: "Smash burgers",
    subtitle:
      "Bun soffice a lunga lievitazione, puro hamburger di carne di scottona #SmashAlto. Filiera italiana, piastra a 260°C.",
    items: SMASH_BURGERS,
  },
  {
    id: "fritti",
    title: "Fritti",
    subtitle: "La croccantezza giusta da affiancare al tuo smash.",
    items: FRITTI,
  },
  {
    id: "bibite",
    title: "Bibite",
    subtitle: "Lattine 33 cl, acqua 50 cl.",
    items: BIBITE,
  },
  {
    id: "liquori",
    title: "Liquori",
    subtitle: "Selezione al bicchiere.",
    items: LIQUORI,
  },
  {
    id: "vini",
    title: "Vini",
    subtitle: "Al calice e spumante.",
    items: VINI,
  },
  {
    id: "birre",
    title: "Birre",
    subtitle: "Bottiglia e alla spina.",
    items: BIRRE,
  },
];
