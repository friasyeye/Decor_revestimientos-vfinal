"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "¿Trabajáis con estudios de interiorismo y arquitectura de forma habitual?",
    a: "Sí. Colaboramos con interioristas y arquitectos en Barcelona en proyectos de reforma de cliente final. Entendemos el proyecto antes de ejecutarlo y respetamos las especificaciones sin improvisaciones en obra.",
  },
  {
    q: "¿Podéis aplicar microcemento o Mortex sobre MDF, cristal o acero?",
    a: "Sí. Tenemos experiencia en soportes no convencionales que otros aplicadores no saben manejar. MDF, cristal, mármol, acero y otros materiales de autor forman parte de nuestro trabajo habitual.",
  },
  {
    q: "¿Qué garantía tenéis como aplicadores de Mortex?",
    a: "Somos ejecutores certificados de Mortex, el micro-mortero técnico belga de referencia. La certificación garantiza tanto la calidad del material como la correcta ejecución del proceso. Es el argumento técnico que puedes trasladar directamente a tu cliente final.",
  },
  {
    q: "¿Hacéis diagnóstico técnico previo en proyectos de interiorismo?",
    a: "Siempre. Antes de presupuestar cualquier proyecto analizamos el soporte, la estabilidad y las condiciones de la superficie. Es la única forma de garantizar el resultado que has diseñado.",
  },
  {
    q: "¿Cómo es el proceso de colaboración con vosotros?",
    a: "Visitamos el espacio, analizamos el soporte y nos reunimos contigo para entender el proyecto. A partir de ahí proponemos el material y el proceso más adecuado, presupuestamos y ejecutamos. Sin subcontratas, sin intermediarios, de principio a fin.",
  },
];

export default function ColaboracionesFAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="cbf-faq">
      <style>{`
        .cbf-faq {
          margin-top: 64px;
        }
        .cbf-faq-title {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(28px, 3.4vw, 40px);
          color: var(--color-dc-dark);
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 2rem 0;
        }
        .cbf-faq-item {
          border-bottom: 1px solid rgba(17,17,17,0.15);
          padding: 22px 0;
          cursor: pointer;
        }
        .cbf-faq-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .cbf-faq-q {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15.5px, 1.5vw, 18px);
          font-weight: 500;
          color: var(--color-dc-dark);
          margin: 0;
        }
        .cbf-faq-toggle {
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
        .cbf-faq-toggle.open {
          transform: rotate(180deg);
        }
        .cbf-faq-answer {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.3vw, 16px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 14px 0 0 0;
          max-width: 68ch;
          animation: cbfFadeIn 0.3s ease;
        }
        @keyframes cbfFadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <h2 className="cbf-faq-title">Preguntas frecuentes sobre colaboraciones</h2>

      {FAQS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className="cbf-faq-item"
            onClick={() => setOpenIndex(isOpen ? null : i)}
          >
            <div className="cbf-faq-row">
              <p className="cbf-faq-q">{item.q}</p>
              <span className={`cbf-faq-toggle${isOpen ? " open" : ""}`}>
                {isOpen ? "−" : "+"}
              </span>
            </div>
            {isOpen && <p className="cbf-faq-answer">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
