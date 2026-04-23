import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Puro Burger — Home"
      className={clsx("inline-flex items-center gap-2", className)}
    >
      <Image
        src="/LogoPuroBurger.png"
        alt="Puro Burger"
        width={160}
        height={44}
        priority
        className="h-10 w-auto"
      />
    </Link>
  );
}
