import { Beef, Flame, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Beef,
    title: "Solo Scottona Italiana",
    text: "Filiera corta, allevamenti selezionati, macinatura in cucina ogni mattina. Mai congelata.",
  },
  {
    icon: Flame,
    title: "La tecnica dello SmashAlto",
    text: "Pallina da 80g, piastra a 260°C, 30 secondi di pressione decisa. Crosta caramellata, cuore succoso.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Additivi. Nessun Compromesso",
    text: "Niente conservanti, niente coloranti, niente scorciatoie. Solo ingredienti che sappiamo riconoscere.",
  },
];

export function Features() {
  return (
    <section className="section-y bg-puro-black">
      <div className="container mx-auto">
        <div className="card-dark overflow-hidden">
          <div className="grid divide-y divide-puro-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-5 p-7 sm:p-8 lg:p-10"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-puro-green/10 text-puro-green ring-green">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 space-y-2">
                  <h3 className="text-sm font-bold uppercase tracking-wide">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 text-pretty">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
