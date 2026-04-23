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
    id: "puro-classic",
    name: "Puro Classic",
    description:
      "Doppio smash di scottona, cheddar fuso, cipolla, pickles e Puro sauce su brioche artigianale.",
    price: 11.9,
    image: img("photo-1568901346375-23c9450c58cd"),
    isNew: true,
    isSignature: true,
    tags: ["Doppio smash", "Scottona 100%"],
  },
  {
    id: "bacon-crush",
    name: "Bacon Crush",
    description:
      "Doppio smash di scottona, bacon croccante, cheddar, cipolla e salsa BBQ di casa.",
    price: 12.9,
    image: img("photo-1550547660-d9450f859349"),
    isNew: true,
    tags: ["Bacon", "BBQ"],
  },
  {
    id: "spicy-fire",
    name: "Spicy Fire",
    description:
      "Doppio smash di scottona, jalapeños, cheddar, spicy mayo e lattuga croccante.",
    price: 12.9,
    image: img("photo-1606131731446-5568d87113aa"),
    isNew: true,
    tags: ["Piccante", "Jalapeños"],
  },
  {
    id: "truffle-king",
    name: "Truffle King",
    description:
      "Doppio smash di scottona, fonduta, crema di tartufo, rucola e scaglie di Parmigiano 24 mesi.",
    price: 14.5,
    image: img("photo-1594212699903-ec8a3eca50f5"),
    tags: ["Tartufo", "Parmigiano 24m"],
    isSignature: true,
  },
  {
    id: "cheese-lover",
    name: "Cheese Lover",
    description:
      "Doppio smash di scottona, triplo cheddar stagionato, cipolla caramellata, mayo e pickles.",
    price: 13.5,
    image: img("photo-1572802419224-296b0aeee0d9"),
    tags: ["Triplo cheese"],
  },
  {
    id: "veggie-smash",
    name: "Veggie Smash",
    description:
      "Patty vegetale di legumi, cheddar, lattuga, pomodoro di stagione e Puro sauce.",
    price: 11.5,
    image: img("photo-1585238342024-78d387f4a707"),
    tags: ["Veggie"],
  },
];

export const SIDES: MenuItem[] = [
  {
    id: "patatine-puro",
    name: "Patatine Puro",
    description: "Taglio grosso, doppia cottura, sale Maldon in superficie.",
    price: 4.5,
    image: img("photo-1573080496219-bb080dd4f877"),
  },
  {
    id: "cheese-fries",
    name: "Cheese Fries",
    description: "Patatine Puro coperte da cheddar fuso e bacon croccante.",
    price: 6.5,
    image: img("photo-1639024471283-03518883512d"),
  },
  {
    id: "onion-rings",
    name: "Onion Rings",
    description:
      "Anelli di cipolla in pastella croccante, salsa ranch di casa.",
    price: 5.5,
    image: img("photo-1639024471283-03518883512d"),
  },
  {
    id: "nuggets",
    name: "Nuggets di pollo",
    description:
      "8 pezzi, pollo italiano 100%, panatura rustica, salse a scelta.",
    price: 6.9,
    image: img("photo-1562967914-608f82629710"),
  },
];

export const DRINKS: MenuItem[] = [
  {
    id: "puro-spritz",
    name: "PuroSpritz",
    description:
      "Il nostro spritz firmato: agrumi calabresi, amaro erbaceo, verde Puro.",
    price: 5.0,
    image: img("photo-1541976076758-347942db1970"),
    isSignature: true,
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    description: "Lattina 33cl.",
    price: 3.0,
    image: img("photo-1554866585-cd94860890b7"),
  },
  {
    id: "birra-artigianale",
    name: "Birra artigianale",
    description: "Lager 33cl, birrificio calabrese indipendente.",
    price: 5.5,
    image: img("photo-1608270586620-248524c67de9"),
  },
  {
    id: "acqua",
    name: "Acqua naturale / frizzante",
    description: "50cl, vetro a rendere.",
    price: 2.0,
    image: img("photo-1559839914-17aae19cec71"),
  },
];

export const DESSERTS: MenuItem[] = [
  {
    id: "brownie",
    name: "Brownie fondente",
    description:
      "Brownie tiepido al cioccolato 70%, gelato alla vaniglia Bourbon.",
    price: 5.5,
    image: img("photo-1606313564200-e75d5e30476c"),
  },
  {
    id: "cheesecake",
    name: "NY Cheesecake",
    description:
      "Cheesecake stile New York, coulis di frutti rossi calabresi.",
    price: 5.0,
    image: img("photo-1533134242443-d4fd215305ad"),
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "smash",
    title: "Smash Burgers",
    subtitle:
      "La firma di Puro. Doppio patty di scottona italiana, crosta caramellata, cuore succoso.",
    items: SMASH_BURGERS,
  },
  {
    id: "sides",
    title: "Sides",
    subtitle:
      "I nostri compagni. Doppia cottura, salse preparate ogni giorno in cucina.",
    items: SIDES,
  },
  {
    id: "drinks",
    title: "Drinks",
    subtitle:
      "Dalle classiche in lattina al nostro PuroSpritz: sempre 33cl di carattere.",
    items: DRINKS,
  },
  {
    id: "dolci",
    title: "Dolci",
    subtitle:
      "Per chiudere: due classici, fatti come si deve. Niente scorciatoie.",
    items: DESSERTS,
  },
];
