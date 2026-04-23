import { SectionLabel } from "@/components/ui/SectionLabel";

const STEPS = [
  {
    n: "01",
    title: "La pallina",
    text: "Scottona italiana macinata ogni giorno. Palline da 80g, senza comprimere la carne: aria e succosità intatte.",
  },
  {
    n: "02",
    title: "Lo smash",
    text: "Piastra a 260°C, 30 secondi di pressione decisa. La carne si allarga, i succhi caramellizzano: nasce la crosta Puro.",
  },
  {
    n: "03",
    title: "L'assemblaggio",
    text: "Brioche artigianale tostata, salse di casa, verdure di stagione. Montato in 30 secondi, in tavola ancora caldo.",
  },
];

export function Process() {
  return (
    <section
      id="processo"
      className="section-y scroll-mt-24 bg-puro-black lg:scroll-mt-28"
    >
      <div className="container mx-auto">
        <div className="mb-12 max-w-2xl space-y-5 sm:mb-16 lg:mb-20">
          <SectionLabel>Come nasce uno smash</SectionLabel>
          <h2 className="font-display text-4xl font-black uppercase leading-[1] text-balance sm:text-5xl lg:text-6xl">
            Tre gesti.{" "}
            <span className="italic text-puro-green">Nessun compromesso.</span>
          </h2>
          <p className="font-display text-base text-white/60 text-pretty sm:text-lg">
            Lo SmashAlto firmato Puro in tre passaggi: stessa tecnica, stessa
            materia prima, ogni morso.
          </p>
        </div>

        <ol className="flex flex-col gap-12 sm:gap-14 md:flex-row md:items-start md:gap-10 lg:gap-14 xl:gap-16">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="font-display flex-1 px-5 sm:px-7 md:px-5 lg:px-7 xl:px-9"
            >
              <span className="block text-3xl font-black tracking-wide text-puro-green sm:text-4xl">
                {s.n}
              </span>
              <h3 className="mt-5 text-lg font-bold uppercase leading-tight tracking-wide text-white sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-[15px]">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
