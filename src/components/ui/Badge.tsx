type BadgeVariant = "smashAlto" | "vegetariano" | "piccante" | "signature";

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  smashAlto: "bg-puro-olive text-puro-cream",
  vegetariano: "bg-puro-green text-white",
  piccante: "bg-puro-red text-white",
  signature: "bg-puro-green/20 text-puro-green border border-puro-green",
};

const variantLabels: Record<BadgeVariant, string> = {
  smashAlto: "#SmashAlto",
  vegetariano: "🌿 Vegetariano",
  piccante: "🌶 Piccante",
  signature: "⭐ Signature",
};

export default function Badge({ variant, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {variantLabels[variant]}
    </span>
  );
}
