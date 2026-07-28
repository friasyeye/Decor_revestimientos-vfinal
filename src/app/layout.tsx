import type { Metadata } from "next";
import { Instrument_Serif, Abhaya_Libre } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const abhayaLibre = Abhaya_Libre({
  variable: "--font-abhaya-libre",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://decorrevestimientos.com"),
  title: {
    default: "Empresa de Microcemento en Barcelona | Aplicadores Especializados",
    template: "%s | Decor Revestimientos",
  },
  description: "Empresa de microcemento en Barcelona especializada en baños, suelos y piscinas. Certificados en Mortex. Presupuesto sin compromiso.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Decor Revestimientos",
    title: "Empresa de Microcemento en Barcelona | Aplicadores Especializados",
    description: "Empresa de microcemento en Barcelona especializada en baños, suelos y piscinas. Certificados en Mortex. Presupuesto sin compromiso.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empresa de Microcemento en Barcelona | Aplicadores Especializados",
    description: "Empresa de microcemento en Barcelona especializada en baños, suelos y piscinas. Certificados en Mortex. Presupuesto sin compromiso.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Decor Revestimientos",
  description:
    "Empresa de microcemento en Barcelona especializada en baños, suelos y piscinas. Certificados en Mortex.",
  url: "https://decorrevestimientos.com",
  telephone: "+34603143050",
  email: "contacto@decorrevestimientos.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
  areaServed: "Barcelona",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${instrumentSerif.variable} ${abhayaLibre.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
