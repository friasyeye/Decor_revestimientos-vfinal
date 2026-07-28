import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import PiscinasHeroSplit from "@/components/PiscinasHeroSplit";
import PiscinasCTASection from "@/components/PiscinasCTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mortex para Piscinas en Barcelona | Aplicadores Certificados",
  description:
    "¿Quieres renovar tu piscina en Barcelona sin quitar el gresite? Aplicamos Mortex sobre gresite existente. Estanqueidad absoluta. Presupuesto sin compromiso.",
};

export default function PiscinasPage() {
  return (
    <>
      <Navbar />
      <main>
        <PiscinasHeroSplit />
        <PiscinasCTASection />
      </main>
      <Footer />
    </>
  );
}
