import Link from "next/link";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-puro-green text-black hover:bg-puro-green-hover shadow-glow active:scale-[.98]",
  ghost:
    "border border-white/20 text-white hover:border-puro-green hover:text-puro-green",
  outline:
    "border border-puro-green text-puro-green hover:bg-puro-green hover:text-black",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  withArrow,
  className,
  children,
  ...rest
}: BaseProps & { href?: string } & Omit<ComponentProps<"button">, "children">) {
  const cls = clsx(
    "btn rounded-full font-semibold inline-flex items-center justify-center gap-2 transition-all",
    sizes[size],
    variants[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      )}
    </>
  );

  if (href) {
    const isExternal = /^https?:/.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(cls, "group")}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={clsx(cls, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button className={clsx(cls, "group")} {...rest}>
      {content}
    </button>
  );
}
