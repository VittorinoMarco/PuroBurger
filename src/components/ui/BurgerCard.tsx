import Image from "next/image";
import { Plus } from "lucide-react";
import { Badge } from "./Badge";
import type { MenuItem } from "@/lib/menu";
import { SITE } from "@/lib/site";

export function BurgerCard({ item, priority }: { item: MenuItem; priority?: boolean }) {
  return (
    <article className="card-dark overflow-hidden flex flex-col group hover:border-puro-green/40 transition-colors">
      <div className="relative aspect-[4/3] bg-puro-ink">
        {item.isNew && (
          <Badge className="absolute top-3 left-3 z-10">New</Badge>
        )}
        {item.isSignature && !item.isNew && (
          <Badge tone="dark" className="absolute top-3 left-3 z-10">
            Signature
          </Badge>
        )}
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <h3 className="font-display text-xl font-bold uppercase tracking-wide">
          {item.name}
        </h3>
        <p className="text-sm text-white/60 leading-relaxed flex-1 text-pretty">
          {item.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold">
            €{item.price.toFixed(2).replace(".", ",")}
          </span>
          <a
            href={SITE.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ordina ${item.name}`}
            className="h-10 w-10 rounded-full bg-puro-green text-black grid place-items-center hover:bg-puro-green-hover active:scale-95 transition"
          >
            <Plus className="h-5 w-5" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </article>
  );
}
