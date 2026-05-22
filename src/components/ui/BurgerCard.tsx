import Image from "next/image";
import { Fragment } from "react";
import { Badge } from "./Badge";
import type { MenuItem } from "@/lib/menu";

const SMASH_TOKEN = "#SmashAlto";

function DescriptionWithSmashAlto({ text }: { text: string }) {
  const parts = text.split(SMASH_TOKEN);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 ? (
            <span className="font-bold text-puro-green">{SMASH_TOKEN}</span>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}

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
          <DescriptionWithSmashAlto text={item.description} />
        </p>
        <p className="pt-2 text-xl font-bold tabular-nums">
          €{item.price.toFixed(2).replace(".", ",")}
        </p>
      </div>
    </article>
  );
}
