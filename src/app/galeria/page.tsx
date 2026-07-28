import type { Metadata } from "next";
import { GaleriaContent } from "@/components/GaleriaContent";

export const metadata: Metadata = {
  title: "Galería de Proyectos | Microcemento en Barcelona | Decor Revestimientos",
  description:
    "Proyectos reales de microcemento y Mortex en Barcelona y alrededores: baños, cocinas, duchas y locales comerciales revestidos sin juntas.",
  alternates: { canonical: "/galeria" },
};

export default function GaleriaPage() {
  return <GaleriaContent />;
}
