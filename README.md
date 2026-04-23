# Puro Burger — Sito Ufficiale

Sito multi-pagina del brand **Puro Burger · N°1 dello Smash**.

## Stack

- **Next.js 14** (App Router) — SSG/ISR, streaming SSR, metadata API per SEO out-of-the-box
- **TypeScript**
- **Tailwind CSS** + design system custom (tokens `puro-*`, tipografia Playfair Display + DM Sans)
- **lucide-react** per le icone
- **Schema.org** (`Restaurant`) + sitemap e robots auto-generati

## Pagine

- `/` — Home con Hero, Smash showcase, Features, Combo Weekend, Testimonials, CTA finale
- `/menu` — Menu completo con categorie (Smash, Sides, Drinks, Dolci)
- `/chi-siamo` — Storia, manifesto, valori, numeri
- `/locations` — Schede location con indirizzi, orari, indicazioni
- `/franchising` — Benefit, processo, form candidatura
- `/contatti` — Contatti diretti + form messaggio + allergeni

## Performance & SEO

- Font Google in `<link>` con `preconnect`
- `next/image` su tutte le immagini (AVIF/WebP auto)
- Metadata API + Open Graph + JSON-LD `Restaurant`
- `sitemap.xml` e `robots.txt` generati via App Router
- Mobile-first, dark-theme ottimizzato per contrast ratio
- Respect `prefers-reduced-motion`

## Comandi

```bash
npm install
npm run dev    # development
npm run build  # build produzione
npm start      # server produzione
npm run lint
```

## Struttura

```
src/
├── app/                 # pagine + layout + sitemap + robots
├── components/
│   ├── layout/          # Navbar, MobileNav, Footer, FloatingWhatsApp
│   ├── sections/        # Hero, SmashShowcase, Features, ComboBanner, Testimonials, FinalCTA
│   └── ui/              # Button, BurgerCard, Badge, SectionLabel, StarRating, MarqueeStrip
└── lib/                 # site config, menu, testimonials, locations
```

## Personalizzazione

- `src/lib/site.ts` — dati brand, telefono, email, URL WhatsApp
- `src/lib/menu.ts` — elenco prodotti
- `src/lib/locations.ts` — sedi
- `tailwind.config.ts` — palette/design tokens
