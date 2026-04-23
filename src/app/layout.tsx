import type { Metadata, Viewport } from "next";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Puro Burger · N°1 dello Smash Burger a Scalea (CS). 100% carne di scottona italiana, zero additivi, nessun compromesso. Scopri il Panino del Mese e ordina ora.",
  applicationName: SITE.name,
  keywords: [
    "smash burger",
    "hamburger Scalea",
    "burger Cosenza",
    "Puro Burger",
    "scottona italiana",
    "burger Calabria",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/FaviconBurger.png", type: "image/png" },
    ],
    apple: "/FaviconBurger.png",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} · ${SITE.tagline}`,
    description:
      "N°1 dello Smash Burger a Scalea. 100% scottona italiana, zero additivi.",
    images: [{ url: "/LogoPuroBurger.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · ${SITE.tagline}`,
    description:
      "N°1 dello Smash Burger a Scalea. 100% scottona italiana, zero additivi.",
    images: ["/LogoPuroBurger.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/LogoPuroBurger.png`,
  telephone: SITE.phone,
  servesCuisine: "American, Burger",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Corso Mediterraneo 12",
    addressLocality: "Scalea",
    addressRegion: "CS",
    postalCode: "87029",
    addressCountry: "IT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
