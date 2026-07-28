import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import TerrazasHeroSplit from "@/components/TerrazasHeroSplit";
import TerrazasCTASection from "@/components/TerrazasCTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Microcemento para Terrazas y Exteriores en Barcelona | Aplicadores Certificados",
  description:
    "¿Buscas microcemento para tu terraza en Barcelona? Antideslizante y resistente al clima. Aplicamos sobre pavimento existente. Presupuesto sin compromiso.",
};

export default function TerrazasPage() {
  return (
    <>
      <Navbar />
      <main>
        <TerrazasHeroSplit />
        <TerrazasCTASection />
      </main>
      <Footer />
    </>
  );
}
