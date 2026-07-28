"use client";
import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Baños y zonas húmedas",
    badges: ["Microcemento en baños", "Platos de ducha", "Estanqueidad garantizada"],
    summary: "Transformamos baños en espacios continuos sin juntas. Platos de ducha integrados, lavabos de obra y paredes impermeables con garantía de estanqueidad.",
    detail: "Un baño con microcemento o Mortex no tiene juntas que limpiar, no acumula hongos en las grietas y es completamente impermeable. Aplicamos sobre azulejos existentes sin necesidad de obra, en 1-2 días. Acabado mate o satinado, con textura antideslizante si lo requieres.",
    img: "/images/servicios_baño_or.webp",
  },
  {
    title: "Cocinas",
    badges: ["Suelo y paredes sin juntas", "Encimeras a medida", "Resistente a grasa y humedad"],
    summary: "Renovamos suelo, paredes y encimeras de cocina en una sola intervención. Superficie continua, sin juntas donde se acumule la grasa, lista para el uso diario.",
    detail: "Aplicamos directamente sobre azulejo, cerámica o revestimiento existente, sin picar ni generar escombros. Para encimeras y frentes de cocina usamos Mortex, más denso y resistente a la abrasión, con un tacto mineral que recuerda a la piedra natural.",
    img: "/images/servicios_cocina_or.webp",
  },
  {
    title: "Suelos, terrazas y exteriores",
    badges: ["Suelo continuo sin juntas", "Terrazas y patios", "Durabilidad premium"],
    summary: "Pavimentos continuos para salones, pasillos, terrazas y patios. Sin juntas, sin grietas, amplitud visual garantizada.",
    detail: "El suelo de microcemento se aplica sobre cerámica, hormigón o madera preparada. Crea una sensación de amplitud porque no hay cortes visuales. Para exteriores aplicamos con textura rugosa antideslizante y resistencia UV. Perfecta durabilidad en Barcelona.",
    img: "/images/servicios_terraza_or.webp",
  },
  {
    title: "Piscinas y zonas sumergidas",
    badges: ["Mortex para piscinas", "Sin gresite", "Estanqueidad absoluta"],
    summary: "Revestimiento del vaso de piscina y jacuzzi con Mortex. Estanqueidad absoluta, resistente a cloro y químicos del agua.",
    detail: "Es la aplicación técnicamente más exigente de nuestro catálogo. Mortex es impermeable por naturaleza y absorbe micro-tensiones del soporte, evitando filtraciones. No necesita gresite ni juntas de dilatación. Certificación de aplicador obligatoria — nosotros la tenemos.",
    img: "/images/servicios_piscina_or.webp",
  },
];

const badgeColors = [
  { bg: "rgba(17,17,17,0.07)", text: "#3A3A3A", border: "rgba(17,17,17,0.15)" },
  { bg: "rgba(107,107,107,0.12)", text: "#6B6B6B", border: "rgba(107,107,107,0.2)" },
  { bg: "rgba(17,17,17,0.04)", text: "#6B6B6B", border: "rgba(17,17,17,0.1)" },
];

export function ExperiencesSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: "#F5F5F5",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: 80,
        paddingBottom: 100,
        borderRadius: "30px 30px 0 0",
        marginTop: -30,
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="dc-container">

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
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "40px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    textAlign: "left",
                    position: "relative",
                  }}
                >
                  {/* Imagen hover */}
                  <div
                    className="hidden md:block"
                    style={{
                      position: "absolute",
                      right: 52,
                      top: "50%",
                      transform: hovered === i ? "translateY(-50%) scale(1) rotate(-4deg)" : "translateY(-50%) scale(0.92) rotate(-4deg)",
                      opacity: hovered === i ? 1 : 0,
                      transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                      pointerEvents: "none",
                      zIndex: 10,
                      width: 220,
                      height: 150,
                      borderRadius: 8,
                      overflow: "hidden",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    }}
                  >
                    <Image src={s.img} alt={s.title} fill style={{ objectFit: "cover" }} sizes="220px" quality={90} />
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flex: 1, gap: 24, minWidth: 0 }}>
                    {/* Título + badges móvil */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          fontFamily: "Instrument Serif, Georgia, serif",
                          fontStyle: "italic",
                          fontSize: "clamp(22px, 2.4vw, 32px)",
                          color: isOpen ? "#111111" : "#4A4A4A",
                          margin: 0,
                          transition: "color 0.3s ease",
                          lineHeight: 1.2,
                          minWidth: 0,
                          wordBreak: "break-word",
                        }}
                      >
                        {s.title}
                      </h3>

                      {/* Badges — solo móvil, debajo del título, una sola fila */}
                      <div className="flex md:hidden" style={{ flexWrap: "nowrap", gap: 5 }}>
                        {s.badges.map((b, bi) => {
                          const c = badgeColors[bi % badgeColors.length];
                          return (
                            <span
                              key={bi}
                              style={{
                                fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                                fontSize: "10px",
                                fontWeight: 500,
                                letterSpacing: "0.02em",
                                padding: "3px 8px",
                                borderRadius: 999,
                                backgroundColor: c.bg,
                                color: c.text,
                                whiteSpace: "nowrap",
                                flexShrink: 1,
                              }}
                            >
                              {b}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Badges a la derecha — solo desktop */}
                    <div className="hidden md:flex" style={{ flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
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
                      alignSelf: "flex-start",
                      marginTop: "4px",
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
                          maxWidth: "68ch",
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
                          maxWidth: "68ch",
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

        {/* Link a superficies */}
        <a
          href="/superficies"
          className="group"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            marginTop: 72,
            textDecoration: "none",
            color: "#111111",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: "1px solid rgba(17,17,17,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), background-color 0.3s ease, color 0.3s ease",
            }}
            className="group-hover:translate-x-1 group-hover:bg-[#111111] group-hover:text-[#F5F5F5]"
          >
            →
          </span>
          <span
            style={{
              fontFamily: "Satoshi, ui-sans-serif, sans-serif",
              fontSize: "clamp(14.5px, 1.4vw, 16px)",
              fontWeight: 500,
              color: "#4A4A4A",
            }}
          >
            ¿Tu superficie no aparece aquí? Trabajamos sobre casi cualquier material
          </span>
        </a>
      </div>
    </section>
  );
}
