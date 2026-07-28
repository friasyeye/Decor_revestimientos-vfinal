"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿El microcemento para terrazas resiste la lluvia y el sol?",
    a: "Sí. Para exteriores aplicamos variantes específicas con sellados resistentes a la radiación UV y al agua. El clima mediterráneo de Barcelona — sol intenso, lluvias puntuales y cambios de temperatura — no es problema si el material y el proceso son los adecuados.",
  },
  {
    q: "¿Se puede aplicar microcemento en terrazas encima del azulejo existente?",
    a: "Sí. Aplicamos directamente sobre cerámica, gres o azulejo sin necesidad de picar. Antes de empezar hacemos una visita técnica para analizar el soporte y confirmar que está en condiciones para recibir el revestimiento.",
  },
  {
    q: "¿El microcemento exterior es antideslizante?",
    a: "Sí. Para terrazas y patios aplicamos siempre con textura rugosa antideslizante. Es un requisito técnico en exteriores, especialmente en zonas que pueden mojarse con la lluvia.",
  },
  {
    q: "¿Cuánto tarda reformar una terraza con microcemento?",
    a: "Depende de la superficie, pero en la mayoría de los casos entre 1 y 3 días de aplicación. El material necesita unos 7 días de curado antes de recibir uso normal.",
  },
  {
    q: "¿El microcemento exterior necesita mantenimiento especial?",
    a: "No especial, pero sí periódico. Recomendamos reaplicar el sellado cada cierto tiempo según el uso y la exposición solar. Te lo indicamos al terminar el proyecto para que el acabado dure el máximo posible.",
  },
];

export default function TerrazasFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="tf-faq">
      <style>{`
        .tf-faq {
          margin-top: 64px;
        }
        .tf-faq-title {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(28px, 3.4vw, 40px);
          color: var(--color-dc-dark);
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 2rem 0;
        }
        .tf-faq-item {
          border-bottom: 1px solid rgba(17,17,17,0.15);
          padding: 22px 0;
          cursor: pointer;
        }
        .tf-faq-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .tf-faq-q {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15.5px, 1.5vw, 18px);
          font-weight: 500;
          color: var(--color-dc-dark);
          margin: 0;
        }
        .tf-faq-toggle {
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
        .tf-faq-toggle.open {
          transform: rotate(180deg);
        }
        .tf-faq-answer {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 14px 0 0 0;
          max-width: 68ch;
          animation: tfFadeIn 0.3s ease;
        }
        @keyframes tfFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h2 className="tf-faq-title">Preguntas frecuentes sobre microcemento en terrazas</h2>

      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="tf-faq-item"
            onClick={() => setOpenIndex(isOpen ? null : i)}
          >
            <div className="tf-faq-row">
              <p className="tf-faq-q">{item.q}</p>
              <span className={`tf-faq-toggle${isOpen ? " open" : ""}`}>
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen && <p className="tf-faq-answer">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
