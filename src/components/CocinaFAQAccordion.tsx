"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿Se puede aplicar microcemento en el suelo de la cocina encima del azulejo?",
    a: "Sí. Aplicamos directamente sobre cerámica, gres o azulejo existente sin necesidad de picar. Antes de empezar hacemos una visita técnica para analizar el soporte. Si hay algún problema, te lo decimos antes de empezar, no a mitad de obra.",
  },
  {
    q: "¿El microcemento en la cocina resiste la grasa y la humedad?",
    a: "Sí, con el sellado adecuado. El microcemento sellado es impermeable y resistente a la grasa del uso diario. Para encimeras o zonas de máximo desgaste recomendamos Mortex, más denso y resistente a la abrasión.",
  },
  {
    q: "¿Se puede poner microcemento en las paredes de la cocina?",
    a: "Sí. Es una de las aplicaciones más habituales. El microcemento en paredes de cocina elimina las juntas donde se acumula la suciedad y da un acabado mineral continuo que transforma completamente el espacio.",
  },
  {
    q: "¿Cuánto tarda reformar una cocina con microcemento?",
    a: "Depende de la superficie, pero en la mayoría de los casos entre 2 y 4 días de aplicación. El material necesita unos 7 días de curado. Durante ese tiempo te explicamos cómo usarlo para que el acabado dure como tiene que durar.",
  },
  {
    q: "¿El microcemento es adecuado para encimeras de cocina?",
    a: "Sí, aunque para encimeras recomendamos Mortex por su mayor densidad y resistencia a la abrasión. El tacto es mineral, parecido a la piedra natural, y el resultado es una encimera continua sin juntas ni cortes.",
  },
];

export default function CocinaFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="cf-faq">
      <style>{`
        .cf-faq {
          margin-top: 64px;
        }
        .cf-faq-title {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(28px, 3.4vw, 40px);
          color: var(--color-dc-dark);
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 2rem 0;
        }
        .cf-faq-item {
          border-bottom: 1px solid rgba(17,17,17,0.15);
          padding: 22px 0;
          cursor: pointer;
        }
        .cf-faq-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .cf-faq-q {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15.5px, 1.5vw, 18px);
          font-weight: 500;
          color: var(--color-dc-dark);
          margin: 0;
        }
        .cf-faq-toggle {
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
        .cf-faq-toggle.open {
          transform: rotate(180deg);
        }
        .cf-faq-answer {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 14px 0 0 0;
          max-width: 68ch;
          animation: cfFadeIn 0.3s ease;
        }
        @keyframes cfFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h2 className="cf-faq-title">Preguntas frecuentes sobre microcemento en cocinas</h2>

      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="cf-faq-item"
            onClick={() => setOpenIndex(isOpen ? null : i)}
          >
            <div className="cf-faq-row">
              <p className="cf-faq-q">{item.q}</p>
              <span className={`cf-faq-toggle${isOpen ? " open" : ""}`}>
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen && <p className="cf-faq-answer">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
