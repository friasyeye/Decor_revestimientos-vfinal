import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { HeroScrollStack } from "@/components/HeroScrollStack";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { Footer } from "@/components/Footer";

// Secciones fuera del viewport inicial: se dividen en su propio chunk
// para no competir por el hilo principal durante la hidratación crítica.
const DiferenciadoresSection = dynamic(() => import("@/components/DiferenciadoresSection").then(m => m.DiferenciadoresSection));
const MaestroSection = dynamic(() => import("@/components/MaestroSection"));
const ParallaxGallerySection = dynamic(() => import("@/components/ParallaxGallerySection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection").then(m => m.TestimonialsSection));
const FAQSection = dynamic(() => import("@/components/FAQSection").then(m => m.FAQSection));

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroScrollStack />
        <ExperiencesSection />
        <DiferenciadoresSection />
        <MaestroSection />
        <ParallaxGallerySection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
