import { Trophy, Beef, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Trophy, text: "N°1 dello Smash Burger" },
  { icon: Beef, text: "100% Scottona Italiana" },
  { icon: ShieldCheck, text: "Zero Additivi · Zero Conservanti" },
];

export function TopBar() {
  return (
    <div className="relative bg-puro-green text-black text-[11px] font-bold uppercase tracking-[0.14em]">
      <div className="container mx-auto h-9 flex items-center justify-center gap-5 sm:gap-10 overflow-hidden">
        {ITEMS.map(({ icon: Icon, text }, i) => (
          <span
            key={i}
            className={`flex items-center gap-2 whitespace-nowrap ${
              i > 0 ? "hidden sm:flex" : ""
            }`}
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
