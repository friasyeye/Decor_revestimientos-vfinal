"use client";

import { useEffect, useRef, useState } from "react";
import { InstagramIcon, PhoneIcon, MailIcon } from "./icons";

const faqs = [
  {
    q: "¿Se puede aplicar microcemento encima de los azulejos sin quitar nada?",
    a: "Sí. Aplicamos directamente sobre rachola, azulejo antiguo, gresite, mármol y cristal sin necesidad de picar ni generar escombros. Antes de cualquier proyecto hacemos una visita técnica para analizar el soporte y confirmar que todo está en condiciones.",
  },
  {
    q: "¿El microcemento se agrieta con el tiempo?",
    a: "Aplicado correctamente y sobre un soporte bien preparado, no. Por eso hacemos siempre un diagnóstico técnico previo — analizamos la estabilidad, la humedad y la porosidad antes de empezar. Ahí está la diferencia entre un acabado que dura y uno que falla.",
  },
  {
    q: "¿Se puede poner microcemento en la ducha o en zonas con agua?",
    a: "Sí, con el sellado adecuado el microcemento es impermeable. Para zonas de alto riesgo de filtración recomendamos Mortex, que es impermeable por naturaleza y no necesita juntas de dilatación.",
  },
  {
    q: "¿Qué diferencia hay entre microcemento y Mortex?",
    a: "El microcemento es un revestimiento continuo versátil, ideal para baños, suelos y paredes. Mortex es un micro-mortero técnico belga de mayor densidad y dureza, más indicado para zonas húmedas, piscinas y proyectos complejos. Somos aplicadores certificados en ambos.",
  },
  {
    q: "¿Dais presupuesto sin visitar la superficie?",
    a: "No. Nunca damos precio sin ver el soporte en persona. La visita técnica previa es parte de nuestro proceso — sin ella no podemos garantizar el resultado.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [sidebarVis, setSidebarVis] = useState(false);
  const [accordionVis, setAccordionVis] = useState(false);

  useEffect(() => {
    const obs = (ref: React.RefObject<HTMLDivElement | null>, setter: (v: boolean) => void) => {
      const el = ref.current;
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setter(true); o.disconnect(); } },
        { threshold: 0.15 }
      );
      o.observe(el);
      return o;
    };
    obs(sidebarRef, setSidebarVis);
    obs(accordionRef, setAccordionVis);
  }, []);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="py-24" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="dc-container">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 md:gap-20 items-start">
        {/* Left sidebar */}
        <div
          ref={sidebarRef}
          style={{
            opacity: sidebarVis ? 1 : 0,
            transform: sidebarVis ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2
            className="text-[36px] md:text-[48px] leading-tight mb-4"
            style={{ fontFamily: "Instrument Serif, Georgia, serif", color: "#111111" }}
          >
            Preguntas frecuentes
          </h2>
          <p
            className="text-[18px] mb-10"
            style={{ fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif", color: "#4A4A4A" }}
          >
            Todo lo que necesitas saber antes de empezar.
          </p>
          <p
            className="text-[18px] mb-6 leading-relaxed"
            style={{
              fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
              color: "#4A4A4A",
            }}
          >
            ¿Tienes más preguntas?{" "}
            <span className="font-medium" style={{ color: "#111111" }}>
              Escríbenos o llámanos.
            </span>
          </p>
          <div className="flex gap-3">
            {/* Instagram */}
            <button
              className="flex items-center justify-center rounded-full shrink-0 transition-transform hover:scale-110"
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#4A4A4A",
                color: "#F5F5F5",
              }}
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </button>
            {/* Phone */}
            <button
              className="flex items-center justify-center rounded-full shrink-0 transition-transform hover:scale-110"
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#4A4A4A",
                color: "#F5F5F5",
              }}
              aria-label="Phone"
            >
              <PhoneIcon className="w-5 h-5" />
            </button>
            {/* Mail */}
            <button
              className="flex items-center justify-center rounded-full shrink-0 transition-transform hover:scale-110"
              style={{
                width: 48,
                height: 48,
                backgroundColor: "#4A4A4A",
                color: "#F5F5F5",
              }}
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right accordion */}
        <div
          ref={accordionRef}
          style={{
            opacity: accordionVis ? 1 : 0,
            transform: accordionVis ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          {faqs.map((item, i) => (
            <div
              key={i}
              className="py-5 cursor-pointer transition-colors hover:bg-opacity-50"
              style={{ borderBottom: "1px solid rgba(13,18,11,0.2)" }}
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <p
                  className="text-[18px] pr-4"
                  style={{
                    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
                    color: "#111111",
                  }}
                >
                  {item.q}
                </p>
                <div
                  className="flex items-center justify-center rounded-full shrink-0 select-none transition-transform"
                  style={{
                    width: 32,
                    height: 32,
                    backgroundColor: "#111111",
                    color: "#F5F5F5",
                    fontSize: 20,
                    lineHeight: 1,
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {openIndex === i ? "−" : "+"}
                </div>
              </div>
              {openIndex === i && (
                <p
                  className="text-[16px] leading-relaxed pt-3 pb-1"
                  style={{
                    fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
                    color: "#4A4A4A",
                    animation: "fadeIn 0.3s ease",
                  }}
                >
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
