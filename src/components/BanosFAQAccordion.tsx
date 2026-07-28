"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿Se puede aplicar microcemento encima del azulejo del baño sin quitar nada?",
    a: "Sí. Aplicamos directamente sobre azulejo existente, rachola antigua o gresite sin necesidad de picar. Antes de empezar hacemos una visita técnica para analizar el soporte. Si hay algún problema, te lo decimos antes de empezar, no a mitad de obra.",
  },
  {
    q: "¿El microcemento en la ducha es impermeable?",
    a: "Con el sellado adecuado, sí. Para platos de ducha y zonas de alta humedad recomendamos Mortex, impermeable por naturaleza y sin necesidad de juntas de dilatación. Es la solución más segura si no quieres preocuparte por filtraciones en los próximos años.",
  },
  {
    q: "¿Cuánto tarda reformar un baño con microcemento?",
    a: "En la mayoría de los casos entre 1 y 3 días de aplicación. El material necesita unos 7 días de curado. Durante ese tiempo te explicamos exactamente cómo usarlo para que el acabado dure como tiene que durar.",
  },
  {
    q: "¿El microcemento en el baño se agrieta o se deteriora?",
    a: "Aplicado correctamente sobre un soporte bien preparado, no. La clave está en el diagnóstico previo. Analizamos estabilidad y humedad antes de empezar. Quien te da precio por WhatsApp sin ver la superficie no puede garantizarte esto.",
  },
  {
    q: "¿Qué diferencia hay entre cemento pulido y microcemento?",
    a: "Son términos que se usan indistintamente pero no son lo mismo. El cemento pulido es más artesanal y rugoso. El microcemento es más fino, más versátil y admite mayor variedad de acabados. Ambos dan ese aspecto mineral continuo que tanto se busca en baños modernos.",
  },
];

export default function BanosFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bf-faq">
      <style>{`
        .bf-faq {
          margin-top: 64px;
        }
        .bf-faq-title {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(28px, 3.4vw, 40px);
          color: var(--color-dc-dark);
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 2rem 0;
        }
        .bf-faq-item {
          border-bottom: 1px solid rgba(17,17,17,0.15);
          padding: 22px 0;
          cursor: pointer;
        }
        .bf-faq-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .bf-faq-q {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15.5px, 1.5vw, 18px);
          font-weight: 500;
          color: var(--color-dc-dark);
          margin: 0;
        }
        .bf-faq-toggle {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: var(--color-dc-dark);
          color: var(--color-dc-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          line-height: 1;
          transition: transform 0.3s ease;
        }
        .bf-faq-toggle.open {
          transform: rotate(180deg);
        }
        .bf-faq-answer {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 14px 0 0 0;
          max-width: 68ch;
          animation: bfFadeIn 0.3s ease;
        }
        @keyframes bfFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h2 className="bf-faq-title">Preguntas frecuentes sobre microcemento en baños</h2>

      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="bf-faq-item"
            onClick={() => setOpenIndex(isOpen ? null : i)}
          >
            <div className="bf-faq-row">
              <p className="bf-faq-q">{item.q}</p>
              <span className={`bf-faq-toggle${isOpen ? " open" : ""}`}>
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen && <p className="bf-faq-answer">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
