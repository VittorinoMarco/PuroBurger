"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Burger } from "@/lib/burgers";
import { getBurgerImage } from "@/lib/burgers";
import Badge from "./Badge";

interface BurgerCardProps {
  burger: Burger;
  imageUrl?: string;
  compact?: boolean;
}

export default function BurgerCard({ burger, imageUrl, compact = false }: BurgerCardProps) {
  const imgSrc = imageUrl || getBurgerImage(burger.imageIndex ?? 0);

  const card = (
    <motion.article
      whileHover={{ scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[20px] overflow-hidden shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imgSrc}
          alt={burger.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-xl text-black">
          {burger.name}
        </h3>
        <p
          className={`text-black/70 leading-relaxed ${
            compact ? "line-clamp-2 text-sm" : "text-sm mt-1"
          }`}
        >
          {burger.ingredients}
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1">
            {burger.badges?.map((b) => (
              <Badge key={b} variant={b} />
            ))}
          </div>
          <span className="font-bold text-puro-green">{burger.price}</span>
        </div>
      </div>
    </motion.article>
  );

  return card;
}
