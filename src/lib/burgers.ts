export type BurgerCategory = "classici" | "signature" | "vegetariano";
export type BurgerBadge = "smashAlto" | "vegetariano" | "piccante" | "signature";

export interface Burger {
  id: string;
  name: string;
  ingredients: string;
  price: string;
  category: BurgerCategory;
  badges?: BurgerBadge[];
  imageIndex?: number; // for rotating Unsplash images (index % 6)
}

const BURGER_IMAGES = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=75",
  "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=75",
  "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=75",
  "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=75",
  "https://images.unsplash.com/photo-1550950158-d0d960dff596?w=500&q=75",
  "https://images.unsplash.com/photo-1549782568-e24f04f9c0e5?w=500&q=75",
];

export function getBurgerImage(index: number): string {
  return BURGER_IMAGES[index % BURGER_IMAGES.length];
}

export const BURGERS: Burger[] = [
  // I CLASSICI
  {
    id: "purogoo",
    name: "PuroGoo",
    ingredients: "Bun a lunga lievitazione, Smash patty di scottona",
    price: "€6,00",
    category: "classici",
    badges: ["smashAlto"],
    imageIndex: 0,
  },
  {
    id: "purobasic",
    name: "PuroBasic",
    ingredients: "Bun, Smash patty, White Cheese, Sauce PuroBurger",
    price: "€8,00",
    category: "classici",
    badges: ["smashAlto"],
    imageIndex: 1,
  },
  {
    id: "purocruncy",
    name: "PuroCruncy",
    ingredients: "Bun, Smash patty, White Cheese, Patatine Cruncy",
    price: "€9,00",
    category: "classici",
    badges: ["smashAlto"],
    imageIndex: 2,
  },
  {
    id: "purofresh",
    name: "PuroFresh",
    ingredients: "Bun, Smash patty, White Cheese, Lattuga Iceberg, Pomodoro",
    price: "€9,00",
    category: "classici",
    badges: ["smashAlto"],
    imageIndex: 3,
  },
  {
    id: "puroclassic",
    name: "PuroClassic",
    ingredients:
      "Bun, Smash patty, White Cheese, Lattuga, Cipolla Rossa di Tropea, Sauce PuroBurger",
    price: "€10,00",
    category: "classici",
    badges: ["smashAlto"],
    imageIndex: 4,
  },
  // I SIGNATURE
  {
    id: "purobacon",
    name: "PuroBacon",
    ingredients:
      "Bun, Smash patty, White Cheese, Bacon Supreme Piastrato, Sauce PuroBurger",
    price: "€11,00",
    category: "signature",
    badges: ["smashAlto"],
    imageIndex: 5,
  },
  {
    id: "purooriginal",
    name: "PuroOriginal",
    ingredients:
      "Bun, Smash patty, White Cheese, Bacon Supreme, Lattuga, Cipolla Rossa, Sauce PuroBurger",
    price: "€12,00",
    category: "signature",
    badges: ["smashAlto"],
    imageIndex: 0,
  },
  {
    id: "purobufala",
    name: "PuroBufala",
    ingredients:
      "Bun, Smash patty, Mozzarella di Bufala di Paestum DOP, Pomodoro, Lattuga",
    price: "€12,00",
    category: "signature",
    badges: ["smashAlto"],
    imageIndex: 1,
  },
  {
    id: "puropecorino",
    name: "PuroPecorino",
    ingredients:
      "Bun, Smash patty, Pecorino Calabrese, Bacon Supreme, Cipolla Rossa Piastrata, Glassa Aceto Balsamico, Rucola",
    price: "€14,00",
    category: "signature",
    badges: ["smashAlto", "signature"],
    imageIndex: 2,
  },
  {
    id: "purouovo",
    name: "PuroUovo",
    ingredients:
      "Bun, Smash patty, White Cheese, Bacon Supreme, Uovo Piastrato, Cipolla Rossa, Rucola, Glassa Aceto Balsamico",
    price: "€14,00",
    category: "signature",
    badges: ["smashAlto", "signature"],
    imageIndex: 3,
  },
  {
    id: "puronduja",
    name: "PuroNduja",
    ingredients:
      "Bun, Smash patty, Pecorino Calabrese, Bacon Supreme, Cipolla Rossa Piastrata, Nduja di Spilinga, Rucola",
    price: "€14,00",
    category: "signature",
    badges: ["smashAlto", "piccante"],
    imageIndex: 4,
  },
  {
    id: "puroporcino",
    name: "PuroPorcino",
    ingredients:
      "Bun, Smash patty, White Cheese, Bacon Supreme, Funghi Porcini, Rucola",
    price: "€15,00",
    category: "signature",
    badges: ["smashAlto", "signature"],
    imageIndex: 5,
  },
  {
    id: "purodouble",
    name: "PuroDouble",
    ingredients:
      "Bun, DOPPIO Smash patty, Doppio White Cheese, Bacon Supreme, Sauce PuroBurger",
    price: "€16,00",
    category: "signature",
    badges: ["smashAlto", "signature"],
    imageIndex: 0,
  },
  // VEGETARIANO
  {
    id: "purogreen",
    name: "PuroGreen",
    ingredients:
      "Bun, Hamburger Vegetariano SmashAlto, White Cheese, Lattuga, Pomodoro",
    price: "€12,00",
    category: "vegetariano",
    badges: ["vegetariano"],
    imageIndex: 1,
  },
];

export const FEATURED_BURGERS = ["purodouble", "puropecorino", "purobufala", "puronduja"];

export const FEATURED_BURGER_IMAGES: Record<string, string> = {
  purodouble: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80",
  puropecorino: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80",
  purobufala: "https://images.unsplash.com/photo-1549782568-e24f04f9c0e5?w=500&q=80",
  puronduja: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&q=80",
};
