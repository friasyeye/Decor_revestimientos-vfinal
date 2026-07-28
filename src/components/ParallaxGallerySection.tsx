"use client";
import { useState } from "react";
import Image from "next/image";

const row1 = [
  { src: "/images/proy_bano_doble_general.webp", alt: "Baño doble lavabo en microcemento" },
  { src: "/images/proy_cocina.webp", alt: "Cocina revestida en microcemento" },
  { src: "/images/proy_ducha_negra.webp", alt: "Ducha en microcemento negro" },
  { src: "/images/proy_bano_doble_lavabo.webp", alt: "Baño con doble lavabo de piedra" },
];

const row2 = [
  { src: "/images/proy_ducha_gris.webp", alt: "Ducha en microcemento gris" },
  { src: "/images/proy_ducha_dorada.webp", alt: "Ducha con detalles dorados" },
  { src: "/images/proy_bano_lamparas.webp", alt: "Baño con iluminación de diseño" },
  { src: "/images/proy_local_comercial.webp", alt: "Local comercial revestido en microcemento" },
];

// Duplicamos para garantizar bucle sin huecos: translateX(-50%) = 1 copia original
const strip1 = [...row1, ...row1];
const strip2 = [...row2, ...row2];

export default function ParallaxGallerySection() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <style>{`
        .gs-section {
          position: relative;
          background: #111111;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 5rem 0 5rem;
        }

        .gs-title {
          position: relative;
          z-index: 1;
          font-family: var(--font-serif);
          font-size: clamp(4rem, 18vw, 16rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: #F5F5F5;
          white-space: nowrap;
          line-height: 1;
          text-align: center;
          pointer-events: none;
          user-select: none;
        }

        /* Fade lateral edges */
        .gs-section::before,
        .gs-section::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 160px;
          z-index: 3;
          pointer-events: none;
        }
        .gs-section::before {
          left: 0;
          background: linear-gradient(to right, #111111 30%, transparent);
        }
        .gs-section::after {
          right: 0;
          background: linear-gradient(to left, #111111 30%, transparent);
        }

        .gs-rows {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          flex: 1;
          justify-content: center;
        }

        .gs-track {
          width: 100%;
          overflow: hidden;
        }

        /* Card width + gap define el paso del loop.
           translateX(-50%) mueve exactamente 1/2 del strip (= 1 copia original),
           volviendo al mismo estado visual → bucle perfecto sin huecos. */
        .gs-strip {
          display: flex;
          gap: 0.75rem;
          width: max-content;
          will-change: transform;
        }

        .gs-strip--left {
          animation: gsLeft 30s linear infinite;
        }
        .gs-strip--right {
          animation: gsRight 36s linear infinite;
        }

        .gs-strip:hover {
          animation-play-state: paused;
        }

        @keyframes gsLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes gsRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .gs-card {
          position: relative;
          flex-shrink: 0;
          width: 260px;
          aspect-ratio: 16 / 10;
          border-radius: 4px;
          overflow: hidden;
        }
        .gs-card img {
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gs-card:hover img {
          transform: scale(1.06);
        }

        .gs-cta {
          position: relative;
          z-index: 1;
          margin-top: 3rem;
        }

        @media (min-width: 768px) {
          .gs-rows {
            gap: 2rem;
          }
          .gs-card {
            width: 300px;
          }
        }

        @media (max-width: 640px) {
          .gs-card {
            width: 200px;
          }
          .gs-cta {
            margin-top: 3rem;
          }
        }
      `}</style>

      <section className="gs-section">
        {/* Título arriba, en el flujo, no tapado por imágenes */}
        <div aria-hidden="true" className="gs-title">GALERÍA</div>

        <div className="gs-rows">
          {/* Fila 1 — izquierda */}
          <div className="gs-track">
            <div className="gs-strip gs-strip--left">
              {strip1.map((img, i) => (
                <div key={i} className="gs-card">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 300px, 200px" loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Fila 2 — derecha */}
          <div className="gs-track">
            <div className="gs-strip gs-strip--right">
              {strip2.map((img, i) => (
                <div key={i} className="gs-card">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 300px, 200px" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="gs-cta">
          <a
            href="/galeria"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              backgroundColor: hovered ? "#F5F5F5" : "transparent",
              color: hovered ? "#111111" : "#F5F5F5",
              border: "1.5px solid #F5F5F5",
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
              transform: hovered ? "translateY(-2px)" : "translateY(0)",
              transition: "background-color 0.22s ease, color 0.22s ease, transform 0.22s ease",
              cursor: "pointer",
            }}
          >
            Ver galería
          </a>
        </div>
      </section>
    </>
  );
}
