import clsx from "clsx";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  tone?: "green" | "red" | "white" | "dark";
  className?: string;
};

const tones = {
  green: "bg-puro-green text-black",
  red: "bg-puro-red text-white",
  white: "bg-white text-black",
  dark: "bg-black/70 text-white border border-white/10 backdrop-blur",
};

export function Badge({ children, tone = "green", className }: Props) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
