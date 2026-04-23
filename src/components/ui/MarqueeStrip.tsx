const DEFAULTS = [
  "N°1 dello Smash Burger",
  "100% Scottona Italiana",
  "Zero additivi · Zero conservanti",
  "Macinata ogni giorno · Mai congelata",
  "Brioche a lievitazione naturale",
  "Nessun compromesso",
];

export function MarqueeStrip({ items = DEFAULTS }: { items?: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-puro-border bg-puro-panel py-6 sm:py-7">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {loop.map((label, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-puro-green" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
