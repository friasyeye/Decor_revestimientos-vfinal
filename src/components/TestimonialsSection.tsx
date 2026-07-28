"use client";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Profesionales desde el primer día. Vinieron a ver, explicaron bien y en dos días el baño quedó impecable. Sin polvo, sin escombros. Los recomiendo.",
    name: "Rosa M.",
  },
  {
    quote: "Teníamos la piscina con gresite en mal estado. Fueron los únicos que supieron cómo arreglarlo sin vaciarla. Resultado perfecto. Muy contentos.",
    name: "Jordi L.",
  },
  {
    quote: "Reformaron el baño encima del azulejo antiguo. Trabajo limpio, cumplieron plazos y el acabado quedó muy bien. Los volveríamos a contratar.",
    name: "Carmen G.",
  },
  {
    quote: "Trabajo excelente. Atentos a los detalles, profesionales y sin sorpresas. Se nota que tienen experiencia. Muy recomendables.",
    name: "Núria P.",
  },
  {
    quote: "Son atentos, te explican todo con claridad y cumplen lo que prometen. El resultado habla por sí solo.",
    name: "Miguel R.",
  },
  {
    quote: "Llevaba años queriendo cambiar el suelo del salón. Sin obra, sin caos. Perfecto.",
    name: "Lucía F.",
  },
  {
    quote: "Muy profesionales, presupuesto claro y sin sorpresas en obra. Eso es lo que necesitaba.",
    name: "David T.",
  },
  {
    quote: "El microcemento quedó impecable. Se ve que saben lo que hacen.",
    name: "Silvia H.",
  },
  {
    quote: "Cumplieron con los plazos, mantuvieron todo limpio y el acabado es de primera. Recomendados.",
    name: "Antonio V.",
  },
];

const loopItems = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVis, setHeaderVis] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVis(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24" style={{ backgroundColor: "#F5F5F5", overflow: "hidden" }}>
      <style>{`
        .tm-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: tm-marquee 32s linear infinite;
          will-change: transform;
        }
        .tm-viewport:hover .tm-track {
          animation-play-state: paused;
        }
        @keyframes tm-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tm-card {
          flex: 0 0 auto;
          width: 340px;
          background-color: #D4D4D4;
          border-radius: 10px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          min-height: 220px;
          box-sizing: border-box;
        }
        @media (max-width: 768px) {
          .tm-card {
            width: 280px;
            min-height: auto;
            padding: 1.75rem;
          }
        }
      `}</style>

      <div className="dc-container">
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVis ? 1 : 0,
            transform: headerVis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2
            style={{
              fontFamily: '"Instrument Serif", Georgia, serif',
              fontStyle: "italic",
              fontSize: "clamp(36px, 5vw, 56px)",
              color: "#111111",
              letterSpacing: "-0.3px",
              lineHeight: 1.1,
            }}
          >
            Lo que dicen nuestros clientes
          </h2>
        </div>
      </div>

      {/* Marquee — full bleed, no container padding */}
      <div className="tm-viewport" style={{ width: "100%", overflow: "hidden" }}>
        <div className="tm-track">
          {loopItems.map((t, i) => (
            <div key={i} className="tm-card">
              <p
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontStyle: "italic",
                  fontSize: "clamp(16px, 1.4vw, 20px)",
                  color: "#111111",
                  lineHeight: 1.5,
                  flex: 1,
                  margin: 0,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <p
                style={{
                  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111111",
                  margin: 0,
                }}
              >
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
