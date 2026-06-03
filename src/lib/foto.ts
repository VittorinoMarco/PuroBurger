/** Foto reali del locale e del prodotto (`/public/foto`). */
export const FOTO = {
  paninoMorso: "/foto/Panino-morso.jpg",
  dettaglioBoxPanino: "/foto/dettaglio-box-panino.jpg",
  iconMuro: "/foto/Icon-PuroBurger-Muro.jpg",
  coperchioAlto: "/foto/coperchio-alto.jpg",
  boxChiuso: "/foto/box-chiuso.jpg",
  hamburgerFormaggio: "/foto/hamburger+formaggio.jpg",
  esternoLocale: "/foto/EsternoLocale-PuroBurger.jpg",
  smashata: "/foto/smashata.jpg",
  carne: "/foto/Carne.jpg",
  boxPanino: "/foto/box-panino.jpg",
  pallinaBurger: "/foto/pallina-burger.jpg",
  vaschettaCarne: "/foto/Vaschetta-Carne.jpg",
  taglioCarne: "/foto/Taglio-Carne.jpg",
  boxCliente: "/foto/box-cliente.jpg",
  carneMacinata: "/foto/Carne-macinata.jpg",
  puroUovoTagliere: "/foto/PuroUovo-tagliere.jpg",
  puroUovo: "/foto/PuroUovo.png",
  puroPecorino: "/foto/PuroPecorino.png",
  puroNduja: "/foto/PuroNduja.png",
  burgerBaconFormaggio: "/foto/burger+bacon+formaggip.jpg",
  muro: "/foto/PuroBurger-Muro.jpg",
  puroUovoManiPiatto: "/foto/PuroUovo-mani-piatto.jpg",
  patatePanoramica: "/foto/patate-panoramica.jpg",
  paninoBox: "/foto/Panino-Box.jpg",
  patateBacon: "/foto/patate-bacon.jpg",
} as const;

export const MANIFESTO_GALLERY = [
  { src: FOTO.carne, alt: "Carne di scottona selezionata" },
  { src: FOTO.smashata, alt: "Smash sulla piastra rovente" },
  { src: FOTO.pallinaBurger, alt: "Pallina di carne prima dello smash" },
  { src: FOTO.paninoMorso, alt: "Smash burger PuroBurger" },
  { src: FOTO.vaschettaCarne, alt: "Vaschetta con carne di scottona" },
  { src: FOTO.esternoLocale, alt: "Esterno del locale PuroBurger a Scalea" },
] as const;

export const CHI_SIAMO_HERO = [
  { src: FOTO.esternoLocale, alt: "Esterno del locale PuroBurger a Scalea" },
  { src: FOTO.paninoMorso, alt: "Smash burger PuroBurger" },
  { src: FOTO.smashata, alt: "Tecnica smash sulla piastra" },
  { src: FOTO.muro, alt: "Interno PuroBurger" },
] as const;

export const CHI_SIAMO_GALLERY = [
  { src: FOTO.smashata, alt: "Smash in cottura sulla piastra" },
  { src: FOTO.pallinaBurger, alt: "Pallina di carne modellata a mano" },
  { src: FOTO.carneMacinata, alt: "Carne macinata fresca" },
  { src: FOTO.taglioCarne, alt: "Taglio della carne di scottona" },
  { src: FOTO.puroUovoManiPiatto, alt: "Puro Uovo servito al piatto" },
  { src: FOTO.boxChiuso, alt: "Box asporto PuroBurger chiuso" },
  { src: FOTO.coperchioAlto, alt: "Box asporto PuroBurger aperto" },
  { src: FOTO.iconMuro, alt: "Icona PuroBurger sul muro del locale" },
] as const;
