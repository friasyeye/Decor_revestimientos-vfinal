import type { Metadata } from "next";
import { ContactoContent } from "@/components/ContactoContent";

export const metadata: Metadata = {
  title: "Contacto | Microcemento en Barcelona",
  description:
    "Contacta con Decor Revestimientos en Barcelona. Presupuesto sin compromiso por WhatsApp, teléfono o email. Respondemos en menos de 24 horas.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return <ContactoContent />;
}
