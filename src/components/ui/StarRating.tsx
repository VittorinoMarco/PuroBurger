import { Star } from "lucide-react";

export function StarRating({ value = 5, size = 14 }: { value?: number; size?: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      role="img"
      aria-label={`${value} stelle su 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={
            i < value ? "fill-puro-green text-puro-green" : "text-white/20"
          }
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}
