"use client";
import { useState } from "react";

const services = [
  {
    title: "Baños y zonas húmedas",
    badges: ["Microcemento en baños", "Platos de ducha", "Estanqueidad garantizada"],
    summary: "Transformamos baños en espacios continuos sin juntas. Platos de ducha integrados, lavabos de obra y paredes impermeables con garantía de estanqueidad.",
    detail: "Un baño con microcemento o Mortex no tiene juntas que limpiar, no acumula hongos en las grietas y es completamente impermeable. Aplicamos sobre azulejos existentes sin necesidad de obra, en 1-2 días. Acabado mate o satinado, con textura antideslizante si lo requieres.",
  },
  {
    title: "Suelos interiores y exteriores",
    badges: ["Suelo continuo sin juntas", "Salones y terrazas", "Durabilidad premium"],
    summary: "Pavimentos continuos para salones, pasillos, terrazas y patios. Sin juntas, sin grietas, amplitud visual garantizada.",
    detail: "El suelo de microcemento se aplica sobre cerámica, hormigón o madera preparada. Crea una sensación de amplitud porque no hay cortes visuales. Para exteriores aplicamos con textura rugosa antideslizante y resistencia UV. Perfecta durabilidad en Barcelona.",
  },
  {
    title: "Piscinas y zonas sumergidas",
    badges: ["Mortex para piscinas", "Sin gresite", "Estanqueidad absoluta"],
    summary: "Revestimiento del vaso de piscina y jacuzzi con Mortex. Estanqueidad absoluta, resistente a cloro y químicos del agua.",
    detail: "Es la aplicación técnicamente más exigente de nuestro catálogo. Mortex es impermeable por naturaleza y absorbe micro-tensiones del soporte, evitando filtraciones. No necesita gresite ni juntas de dilatación. Certificación de aplicador obligatoria — nosotros la tenemos.",
  },
  {
    title: "Escaleras",
    badges: ["Escaleras de diseño", "Pieza única sin juntas", "Alta durabilidad"],
    summary: "Transformamos escaleras en obra de diseño de una sola pieza. Eliminan cortes y juntas, con dureza mecánica para alto tránsito.",
    detail: "Una escalera revestida en microcemento o Mortex es fácil de mantener, cómoda de subir y estéticamente limpia. Mortex aporta la dureza necesaria para escaleras de mucho uso. Aplicamos sobre madera, hormigón o metal.",
  },
  {
    title: "Encimeras, mobiliario y proyectos especiales",
    badges: ["Encimeras de cocina", "Mobiliario de autor", "Acabado mineral"],
    summary: "Aplicación sobre muebles, encimeras y proyectos de diseño. Tacto mineral que recuerda a la piedra natural.",
    detail: "Para interioristas y arquitectos que diseñan espacios singulares. Aplicamos sobre MDF, madera, acero y superficies no convencionales. Acabado personalizado según proyecto. Garantía total de adhesión.",
  },
];

const badgeColors = [
  { bg: "rgba(17,17,17,0.07)", text: "#3A3A3A", border: "rgba(17,17,17,0.15)" },
  { bg: "rgba(107,107,107,0.12)", text: "#6B6B6B", border: "rgba(107,107,107,0.2)" },
  { bg: "rgba(17,17,17,0.04)", text: "#6B6B6B", border: "rgba(17,17,17,0.1)" },
];

export function ExperiencesSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: "#F5F5F5",
        paddingTop: 80,
        paddingBottom: 100,
        borderRadius: "30px 30px 0 0",
        marginTop: -30,
        position: "relative",
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

        {/* Header */}
        <h2
          style={{
            fontFamily: "Instrument Serif, Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(36px, 5vw, 60px)",
            color: "#111111",
            lineHeight: 1.1,
            letterSpacing: "-0.5px",
            marginBottom: "0.6rem",
          }}
        >
          Qué hacemos
        </h2>
        <p
          style={{
            fontFamily: "Satoshi, ui-sans-serif, sans-serif",
            fontSize: "clamp(14px, 1.4vw, 17px)",
            color: "#6B6B6B",
            marginBottom: "3.5rem",
          }}
        >
          Servicios de revestimiento continuo en Barcelona. Cada proyecto es diferente.
        </p>

        {/* Accordion */}
        <div>
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderTop: "1px solid rgba(17,17,17,0.12)",
                  ...(i === services.length - 1 ? { borderBottom: "1px solid rgba(17,17,17,0.12)" } : {}),
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "32px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    textAlign: "left",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flex: 1, gap: 24 }}>
                    <h3
                      style={{
                        fontFamily: "Instrument Serif, Georgia, serif",
                        fontStyle: "italic",
                        fontSize: "clamp(22px, 2.4vw, 32px)",
                        color: isOpen ? "#111111" : "#4A4A4A",
                        margin: 0,
                        transition: "color 0.3s ease",
                        lineHeight: 1.2,
                        flexShrink: 0,
                      }}
                    >
                      {s.title}
                    </h3>

                    {/* Badges a la derecha */}
                    <div className="hidden md:flex" style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
                      {s.badges.map((b, bi) => {
                        const c = badgeColors[bi % badgeColors.length];
                        return (
                          <span
                            key={bi}
                            style={{
                              fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                              fontSize: "clamp(10px, 0.9vw, 12px)",
                              fontWeight: 500,
                              letterSpacing: "0.03em",
                              padding: "4px 11px",
                              borderRadius: 999,
                              backgroundColor: c.bg,
                              color: c.text,
                            }}
                          >
                            {b}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <span
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      border: "1px solid rgba(17,17,17,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6B6B6B",
                      fontSize: 18,
                      lineHeight: 1,
                      transition: "transform 0.35s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div style={{ paddingBottom: "36px" }}>
                      <p
                        style={{
                          fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                          fontSize: "clamp(15px, 1.5vw, 17px)",
                          color: "#3A3A3A",
                          lineHeight: 1.7,
                          marginBottom: "0.9rem",
                        }}
                      >
                        {s.summary}
                      </p>

                      <p
                        style={{
                          fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                          fontSize: "clamp(13px, 1.3vw, 15px)",
                          color: "#6B6B6B",
                          lineHeight: 1.75,
                        }}
                      >
                        {s.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
