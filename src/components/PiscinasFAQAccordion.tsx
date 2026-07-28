"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿Se puede aplicar Mortex en una piscina sin vaciarla ni quitar el gresite?",
    a: "Hay que vaciar la piscina para trabajar en el vaso, pero no es necesario picar el gresite existente. Aplicamos Mortex directamente sobre él, lo que elimina la obra mayor y reduce enormemente el tiempo y los residuos generados.",
  },
  {
    q: "¿El Mortex en piscinas aguanta el cloro y los productos químicos?",
    a: "Sí. Mortex es impermeable por naturaleza y está diseñado específicamente para resistir los productos químicos del agua de piscina. Es la razón por la que lo usamos en piscinas y no microcemento convencional.",
  },
  {
    q: "¿Cualquier empresa de microcemento puede aplicar Mortex en piscinas?",
    a: "No. La aplicación de Mortex en zonas sumergidas requiere certificación específica de aplicador. Es la aplicación técnicamente más exigente del revestimiento continuo y no cualquier empresa está preparada para ejecutarla. Nosotros somos aplicadores certificados.",
  },
  {
    q: "¿Cuánto tarda renovar una piscina con Mortex?",
    a: "Depende del tamaño del vaso, pero en la mayoría de los casos entre 3 y 5 días de aplicación. A eso hay que sumar el tiempo de curado antes de volver a llenar la piscina, que te indicamos al terminar el proyecto.",
  },
  {
    q: "¿El Mortex en piscinas necesita mantenimiento especial?",
    a: "No especial. El mantenimiento del agua es el mismo que con cualquier otro revestimiento. Te recomendamos revisar periódicamente el pH del agua para proteger el acabado a largo plazo.",
  },
];

export default function PiscinasFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pf-faq">
      <style>{`
        .pf-faq {
          margin-top: 64px;
        }
        .pf-faq-title {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(28px, 3.4vw, 40px);
          color: var(--color-dc-dark);
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 2rem 0;
        }
        .pf-faq-item {
          border-bottom: 1px solid rgba(17,17,17,0.15);
          padding: 22px 0;
          cursor: pointer;
        }
        .pf-faq-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .pf-faq-q {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15.5px, 1.5vw, 18px);
          font-weight: 500;
          color: var(--color-dc-dark);
          margin: 0;
        }
        .pf-faq-toggle {
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
        .pf-faq-toggle.open {
          transform: rotate(180deg);
        }
        .pf-faq-answer {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 14px 0 0 0;
          max-width: 68ch;
          animation: pfFadeIn 0.3s ease;
        }
        @keyframes pfFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h2 className="pf-faq-title">Preguntas frecuentes sobre Mortex en piscinas</h2>

      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="pf-faq-item"
            onClick={() => setOpenIndex(isOpen ? null : i)}
          >
            <div className="pf-faq-row">
              <p className="pf-faq-q">{item.q}</p>
              <span className={`pf-faq-toggle${isOpen ? " open" : ""}`}>
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen && <p className="pf-faq-answer">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
