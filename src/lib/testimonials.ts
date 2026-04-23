export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  rating: number;
  text: string;
  avatar: string;
};

const a = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=120&q=80`;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Luca B.",
    role: "Recensione Google",
    rating: 5,
    text: "Il miglior smash che abbia mai provato. Si sente la scottona vera, non il burger industriale. Crosta perfetta, cuore succoso.",
    avatar: a("photo-1500648767791-00dcc994a43e"),
  },
  {
    id: "2",
    name: "Giulia M.",
    role: "Recensione Google",
    rating: 5,
    text: "Staff preparato, tempi giusti e soprattutto un burger che sa di carne. Finalmente un locale dove la qualità è riconoscibile.",
    avatar: a("photo-1494790108377-be9c29b29330"),
  },
  {
    id: "3",
    name: "Alessandro T.",
    role: "Recensione TripAdvisor",
    rating: 5,
    text: "Ingredienti che riconosci in bocca. Scottona italiana, brioche artigianale, salse di casa. Rispetto totale della materia prima.",
    avatar: a("photo-1472099645785-5658abf4ff4e"),
  },
  {
    id: "4",
    name: "Francesca R.",
    role: "Recensione Google",
    rating: 5,
    text: "Rapporto qualità-prezzo difficile da trovare. La combo da 15€ in settimana è diventata il mio rito. Cliente fissa.",
    avatar: a("photo-1487412720507-e7ab37603c6f"),
  },
];
