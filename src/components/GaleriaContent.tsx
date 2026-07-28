"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const photos = [
  { src: "/images/proy_bano_doble_general.webp", alt: "Baño con doble lavabo en microcemento" },
  { src: "/images/proy_cocina.webp", alt: "Cocina revestida en microcemento" },
  { src: "/images/proy_ducha_negra.webp", alt: "Ducha en microcemento negro" },
  { src: "/images/proy_ducha_dorada.webp", alt: "Ducha con grifería dorada sobre microcemento" },
  { src: "/images/proy_bano_lamparas.webp", alt: "Baño con iluminación de diseño" },
  { src: "/images/proy_ducha_gris.webp", alt: "Ducha en microcemento gris" },
  { src: "/images/proy_bano_doble_lavabo.webp", alt: "Baño con doble lavabo de piedra natural" },
  { src: "/images/proy_local_comercial.webp", alt: "Local comercial revestido en microcemento" },
];

export function GaleriaContent() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
      <Navbar />
      <main>
        <style>{`
          .gal-section {
            background-color: #F5F5F5;
            padding: 160px 0 120px;
            box-sizing: border-box;
          }
          .gal-header {
            margin-bottom: 4.5rem;
          }
          .gal-h1 {
            font-family: "Instrument Serif", Georgia, serif;
            font-style: italic;
            font-size: clamp(42px, 6vw, 72px);
            color: #111111;
            line-height: 1.05;
            letter-spacing: -0.5px;
            margin: 0 0 0.7rem 0;
          }
          .gal-subtitle {
            font-family: "Satoshi", ui-sans-serif, sans-serif;
            font-size: clamp(15px, 1.5vw, 17px);
            color: #6B6B6B;
            margin: 0;
            max-width: 560px;
            line-height: 1.6;
          }
          .gal-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 48px 32px;
          }
          .gal-item {
            position: relative;
            aspect-ratio: 4 / 3;
            border-radius: 10px;
            overflow: hidden;
            background-color: #E5E5E5;
            cursor: pointer;
            border: none;
            padding: 0;
            display: block;
            width: 100%;
          }
          .gal-item img {
            transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
          }
          .gal-item:hover img {
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .gal-section {
              padding: 120px 0 80px;
            }
            .gal-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }
          }

          .gal-lightbox {
            position: fixed;
            inset: 0;
            z-index: 100;
            background-color: rgba(17,17,17,0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            box-sizing: border-box;
            animation: galFadeIn 0.25s ease;
          }
          @keyframes galFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .gal-lightbox-figure {
            position: relative;
            width: 100%;
            height: 100%;
            max-width: 1200px;
          }
          .gal-lightbox-close,
          .gal-lightbox-prev,
          .gal-lightbox-next {
            position: fixed;
            background: none;
            border: 1px solid rgba(245,245,245,0.3);
            border-radius: 50%;
            color: #F5F5F5;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s ease, border-color 0.2s ease;
          }
          .gal-lightbox-close:hover,
          .gal-lightbox-prev:hover,
          .gal-lightbox-next:hover {
            background-color: rgba(245,245,245,0.12);
            border-color: rgba(245,245,245,0.5);
          }
          .gal-lightbox-close {
            top: 24px;
            right: 24px;
            width: 44px;
            height: 44px;
            font-size: 20px;
          }
          .gal-lightbox-prev,
          .gal-lightbox-next {
            top: 50%;
            transform: translateY(-50%);
            width: 48px;
            height: 48px;
            font-size: 22px;
          }
          .gal-lightbox-prev {
            left: 24px;
          }
          .gal-lightbox-next {
            right: 24px;
          }
          .gal-lightbox-counter {
            position: fixed;
            bottom: 28px;
            left: 50%;
            transform: translateX(-50%);
            font-family: "Satoshi", ui-sans-serif, sans-serif;
            font-size: 13px;
            letter-spacing: 0.05em;
            color: rgba(245,245,245,0.7);
          }

          @media (max-width: 640px) {
            .gal-lightbox-prev,
            .gal-lightbox-next {
              width: 40px;
              height: 40px;
            }
            .gal-lightbox-prev {
              left: 10px;
            }
            .gal-lightbox-next {
              right: 10px;
            }
            .gal-lightbox-close {
              top: 12px;
              right: 12px;
            }
          }
        `}</style>

        <section className="gal-section">
          <div className="dc-container">
            <div className="gal-header">
              <h1 className="gal-h1">Galería</h1>
              <p className="gal-subtitle">
                Proyectos reales de microcemento y Mortex en Barcelona y alrededores.
              </p>
            </div>

            <div className="gal-grid">
              {photos.map((photo, i) => (
                <button
                  key={i}
                  type="button"
                  className="gal-item"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Ver ${photo.alt} en grande`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {activeIndex !== null && (
          <div
            className="gal-lightbox"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveIndex(null)}
          >
            <button
              type="button"
              className="gal-lightbox-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Cerrar"
            >
              ✕
            </button>
            <button
              type="button"
              className="gal-lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
              }}
              aria-label="Foto anterior"
            >
              ←
            </button>
            <button
              type="button"
              className="gal-lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length));
              }}
              aria-label="Foto siguiente"
            >
              →
            </button>

            <div className="gal-lightbox-figure" onClick={(e) => e.stopPropagation()}>
              <Image
                src={photos[activeIndex].src}
                alt={photos[activeIndex].alt}
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
                priority
              />
            </div>

            <p className="gal-lightbox-counter">
              {activeIndex + 1} / {photos.length}
            </p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
