import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "São Luis Garagem - Oficina Mecânica em Oliveira de Azeméis",
  description:
    "Mecânica de confiança, serviços multimarca e diagnóstico especializado. Reparação automóvel, manutenção preventiva e inspeções em Oliveira de Azeméis, Aveiro.",
  keywords: [
    "oficina mecânica",
    "reparação automóvel",
    "Oliveira de Azeméis",
    "mecânica multimarca",
    "diagnóstico automóvel",
    "manutenção preventiva",
    "inspeção automóvel",
    "Aveiro",
    "São Luis Garagem",
    "eletricidade auto",
    "ar condicionado auto",
  ],
  metadataBase: new URL("https://sao-luis-garage.vercel.app"),
  authors: [{ name: "São Luis Garagem" }],
  creator: "São Luis Garagem",
  publisher: "São Luis Garagem",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://sao-luis-garage.vercel.app",
    siteName: "São Luis Garagem",
    title: "São Luis Garagem - Oficina Mecânica em Oliveira de Azeméis",
    description:
      "Mecânica de confiança, serviços multimarca e diagnóstico especializado. Reparação automóvel, manutenção preventiva e inspeções em Oliveira de Azeméis, Aveiro.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "São Luis Garagem - Oficina Mecânica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "São Luis Garagem - Oficina Mecânica em Oliveira de Azeméis",
    description:
      "Mecânica de confiança, serviços multimarca e diagnóstico especializado.",
    images: ["/og-image.jpg"],
  },
  // verification: {
  //   google: "verification-code-pending",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "São Luis Garagem",
    image: "https://sao-luis-garage.vercel.app/img/logo.svg",
    "@id": "https://sao-luis-garage.vercel.app",
    url: "https://sao-luis-garage.vercel.app",
    telephone: "+351916580788, +351256112112",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua do Rei 452",
      addressLocality: "Figueiredo",
      addressRegion: "Pinheiro da Bemposta, Oliveira de Azemeis",
      postalCode: "3720-474",
      addressCountry: "PT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7925,
      longitude: -8.4808,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: ["https://www.facebook.com/JoaoPlacidoOficina/?locale=pt_PT"],
  };

  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
