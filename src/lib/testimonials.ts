export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  rating: number;
  text: string;
};

export const GOOGLE_RATING = {
  score: "4,8",
  count: 241,
  label: "(241) recensioni",
} as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Cliente Google",
    role: "Local Guide",
    rating: 5,
    text: "Locale pulito e dal design moderno e confortevole; cibo abbondante e squisito; prezzo proporzionato all'offerta; servizio veloce e personale estremamente gentile. Prima di lasciare il locale ci hanno offerto delle caramelle Rossana al pistacchio buonissime che non avevo mai assaggiato. Grazie mille!",
  },
  {
    id: "2",
    name: "Laura Battaglia",
    role: "Recensione Google",
    rating: 5,
    text: "Esperienza assolutamente positiva! Questa paninoteca si distingue per la qualità eccellente degli ingredienti, la varietà del menù e l'attenzione ai dettagli. Il personale è cortese, sorridente e molto disponibile: ti accoglie con gentilezza e sa consigliare al meglio in base ai tuoi gusti. L'ambiente è pulito, curato e accogliente. Tornerò sicuramente!",
  },
  {
    id: "3",
    name: "Aniello De Magistris",
    role: "Recensione Google",
    rating: 5,
    text: "Un locale di livello superiore, il panino realizzato con fiocchi di patate è eccezionale, buonissimo e leggero. Hamburger realizzati direttamente nella loro cucina, quindi senza aggiunta di altro… ma semplicemente solo carne, fanno la differenza. L'attenzione ai particolari che i titolari hanno avuto nella realizzazione del locale fa percepire la passione per il proprio lavoro. Complimenti ragazzi, grazie per il vostro impegno.",
  },
];
