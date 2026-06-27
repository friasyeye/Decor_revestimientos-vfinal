import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PhotoGallerySection } from "@/components/PhotoGallerySection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import MaestroSection from "@/components/MaestroSection";
import WorkshopGallerySection from "@/components/WorkshopGallerySection";
import { WhatsIncludedSection } from "@/components/WhatsIncludedSection";
import { LocationSection } from "@/components/LocationSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ApplySection } from "@/components/ApplySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PhotoGallerySection />
        <ExperiencesSection />
        <MaestroSection />
        <WorkshopGallerySection />
        <WhatsIncludedSection />
        <LocationSection />
        <TestimonialsSection />
        <FAQSection />
        <ApplySection />
      </main>
      <Footer />
    </>
  );
}
