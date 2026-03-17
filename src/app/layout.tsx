import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puro Burger Scalea | N°1 dello SmashAlto · 100% Scottona",
  description:
    "Il miglior smash burger di Scalea. 100% carne di scottona italiana, zero additivi. Vieni a scoprire la tecnica #SmashAlto.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://puroburger.it"),
  icons: {
    icon: "/FaviconBurger.png",
    apple: "/FaviconBurger.png",
  },
  openGraph: {
    title: "Puro Burger Scalea | N°1 dello SmashAlto",
    description:
      "100% carne di scottona · Zero additivi. Il miglior smash burger a Scalea (CS).",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
