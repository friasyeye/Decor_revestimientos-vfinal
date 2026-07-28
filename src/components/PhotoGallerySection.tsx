"use client";
import { useEffect, useRef, useState } from "react";

export function PhotoGallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: "#111111",
        minHeight: "100vh",
        position: "relative",
        zIndex: 20,
        display: "flex",
        alignItems: "center",
      }}
      className="w-full"
    >
      <div className="dc-container">

        {/* Decorative line — left-aligned, reveals left→right */}
        <div
          style={{
            width: 48,
            height: 1,
            backgroundColor: "#DFE5D7",
            marginBottom: "2rem",
            opacity: visible ? 0.6 : 0,
            transform: visible ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left center",
            transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
          }}
        />

        {/* Two-column grid on desktop, stacked on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(28px, 4vw, 56px)",
          }}
          className="md:grid-cols-[3fr_2fr] md:gap-x-16 lg:gap-x-24"
        >
          {/* H2 — large serif statement, dominant visual weight */}
          <h2
            style={{
              fontFamily: "Instrument Serif, Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(30px, 3.6vw, 52px)",
              color: "#F5F5F5",
              lineHeight: 1.2,
              fontWeight: "normal",
              margin: 0,
              maxWidth: "68ch",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.75s ease 0.25s, transform 0.75s ease 0.25s",
            }}
          >
            Somos aplicadores especializados en microcemento y Mortex con más de 7 años de experiencia en Barcelona.
          </h2>

          {/* Paragraph — sans-serif body, clearly subordinate */}
          <p
            style={{
              fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
              fontSize: "clamp(15px, 1.35vw, 17px)",
              color: "#9A9A9A",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: "58ch",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.75s ease 0.42s, transform 0.75s ease 0.42s",
              alignSelf: "end",
            }}
          >
            Trabajamos en baños, suelos, piscinas, escaleras y proyectos de autor, siempre con visita técnica previa y ejecución completa del proyecto. Todo ello sin obra, sin escombros y sin intermediarios, sobre la superficie que ya tienes.
          </p>
        </div>

        {/* Stats — desktop only */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            marginTop: "clamp(48px, 6vw, 80px)",
            borderTop: "1px solid rgba(245,245,245,0.1)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.75s ease 0.6s, transform 0.75s ease 0.6s",
          }}
          className="pg-stats"
        >
          {[
            { num: "+7", label: "años de experiencia" },
            { num: "+65", label: "proyectos completados" },
            { num: "Certificados", label: "aplicadores Mortex" },
            { num: "Barcelona", label: "y provincia" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: "32px 0",
                borderRight: i < 3 ? "1px solid rgba(245,245,245,0.1)" : "none",
                paddingLeft: i === 0 ? 0 : "clamp(20px, 2.5vw, 40px)",
                paddingRight: i === 3 ? 0 : "clamp(20px, 2.5vw, 40px)",
              }}
            >
              <div
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(28px, 3vw, 42px)",
                  color: "#F5F5F5",
                  lineHeight: 1.1,
                  marginBottom: "6px",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
                  fontSize: "clamp(13px, 1vw, 14px)",
                  color: "#6B6B6B",
                  lineHeight: 1.4,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .pg-stats { display: none; }
          }
        `}</style>
      </div>
    </section>
  );
}
