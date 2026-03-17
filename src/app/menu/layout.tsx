import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Il Menu | Puro Burger Scalea",
  description:
    "14 burger preparati con carne di scottona 100% italiana. Scopri i nostri Signature Burger.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
