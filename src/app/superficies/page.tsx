import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import SuperficiesHero from "@/components/SuperficiesHero";
import SuperficiesContent from "@/components/SuperficiesContent";
import SuperficiesColoresSection from "@/components/SuperficiesColoresSection";
import SuperficiesCTASection from "@/components/SuperficiesCTASection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Microcemento sobre Azulejos y Otras Superficies en Barcelona | Decor Revestimientos",
  description:
    "¿Puedes aplicar microcemento sobre tu superficie? Azulejos, mármol, madera, MDF y más. Sin picar ni generar escombros. Visita técnica gratuita en Barcelona. Te respondemos hoy.",
};

export default function SuperficiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <SuperficiesHero />
        <SuperficiesContent />
        <SuperficiesColoresSection />
        <SuperficiesCTASection />
      </main>
      <Footer />
    </>
  );
}
