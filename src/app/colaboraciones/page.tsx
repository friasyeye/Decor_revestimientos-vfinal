import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import ColaboracionesHeroSplit from "@/components/ColaboracionesHeroSplit";
import ColaboracionesCTASection from "@/components/ColaboracionesCTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aplicadores de Microcemento en Barcelona | Certificados en Mortex",
  description:
    "Aplicadores de microcemento y Mortex en Barcelona para interioristas y arquitectos. Certificados en Mortex. Soportes no convencionales. Diagnóstico técnico previo. Contáctanos.",
};

export default function ColaboracionesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ColaboracionesHeroSplit />
        <ColaboracionesCTASection />
      </main>
      <Footer />
    </>
  );
}
