import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import BanosHeroSplit from "@/components/BanosHeroSplit";
import BanosCTASection from "@/components/BanosCTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Microcemento para Baños en Barcelona | Aplicadores Certificados",
  description:
    "¿Buscas microcemento para tu baño en Barcelona? Aplicamos sobre azulejo existente. Certificados en Mortex. Presupuesto sin compromiso.",
};

export default function BanosPage() {
  return (
    <>
      <Navbar />
      <main>
        <BanosHeroSplit />
        <BanosCTASection />
      </main>
      <Footer />
    </>
  );
}
