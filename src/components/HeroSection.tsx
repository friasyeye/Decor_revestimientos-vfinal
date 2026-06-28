"use client";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          position: sticky;
          top: 0;
          z-index: 1;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #9A9A9A;
        }
        .hero-content-outer {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 6vw;
          box-sizing: border-box;
        }
        .hero-content-inner {
          max-width: 700px;
          width: 100%;
        }
        .hero-subtitle {
          font-family: var(--font-instrument-serif), Georgia, serif;
          font-style: italic;
          font-size: clamp(28px, 4.2vw, 54px);
          color: #F5F5F5;
          line-height: 1.12;
          letter-spacing: -0.3px;
          margin-bottom: 40px;
        }
        @media (max-width: 768px) {
          .hero-section {
            min-height: 100svh;
            align-items: center;
          }
          .hero-content-outer {
            padding: 0 24px 8vh;
          }
          .hero-content-inner {
            max-width: 100%;
          }
          .hero-subtitle {
            font-size: clamp(24px, 7vw, 36px);
            margin-bottom: 28px;
          }
        }
      `}</style>

      <section className="hero-section">
        {/* Background image */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/hero (2).png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />

        {/* Overlay oscuro */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.42)",
            zIndex: 1,
          }}
        />

        <div className="hero-content-outer">
          <div className="hero-content-inner">
            <h1
              style={{
                fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
                fontSize: "clamp(12px, 1.1vw, 15px)",
                fontStyle: "normal",
                fontWeight: 500,
                color: "#F5F5F5",
                lineHeight: 1.3,
                letterSpacing: "0.03em",
                marginBottom: "16px",
                filter: loaded ? "blur(0px)" : "blur(8px)",
                opacity: loaded ? 0.85 : 0,
                transform: loaded ? "translateY(0)" : "translateY(12px)",
                transition: "filter 0.9s ease, opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              Empresa de microcemento en Barcelona
            </h1>

            <p
              className="hero-subtitle"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              Aplicamos revestimientos continuos en cualquier superficie de tu hogar, sin obras ni escombros
            </p>

            <a
              href="#contacto"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                backgroundColor: hovered ? "transparent" : "#D4D4D4",
                color: hovered ? "#D4D4D4" : "#111111",
                border: "1.5px solid #D4D4D4",
                borderRadius: "6px",
                padding: "15px 32px",
                fontSize: "16px",
                fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.02em",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                lineHeight: 1,
                opacity: loaded ? 1 : 0,
                transform: loaded ? (hovered ? "translateY(-2px)" : "translateY(0)") : "translateY(12px)",
                transition:
                  "background-color 0.22s ease, color 0.22s ease, transform 0.22s ease, opacity 0.7s ease 0.35s",
                cursor: "pointer",
              }}
            >
              Solicita tu visita gratuita
            </a>

            <p
              style={{
                fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
                fontSize: "12px",
                color: "rgba(245,245,245,0.65)",
                marginTop: "12px",
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.7s ease 0.5s",
              }}
            >
              * Te respondemos por WhatsApp en menos de 24 horas
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
