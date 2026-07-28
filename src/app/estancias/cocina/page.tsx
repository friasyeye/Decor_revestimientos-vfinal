import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import CocinaHeroSplit from "@/components/CocinaHeroSplit";
import CocinaCTASection from "@/components/CocinaCTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Microcemento para Cocinas en Barcelona | Aplicadores Certificados",
  description:
    "¿Buscas microcemento para tu cocina en Barcelona? Suelos y paredes sin juntas. Aplicamos sobre azulejo existente. Presupuesto sin compromiso.",
};

export default function CocinaPage() {
  return (
    <>
      <Navbar />
      <main>
        <CocinaHeroSplit />
        <CocinaCTASection />
      </main>
      <Footer />
    </>
  );
}
