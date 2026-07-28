import Image from "next/image";

const TITLE = "Tonos, acabados y materiales";
const TEXT =
  "El microcemento y el Mortex admiten una amplia gama de colores y texturas. Aquí tienes nuestra selección esencial — los tonos que mejor funcionan en espacios residenciales y proyectos de autor en Barcelona.";

const SWATCHES = [
  { name: "Gris Cemento", hex: "#A8A29A" },
  { name: "Arena", hex: "#C9B896" },
  { name: "Hueso", hex: "#E8E2D5" },
  { name: "Antracita", hex: "#3A3A3A" },
];

const CATALOGS = [
  {
    label: "Ver carta de colores Microcemento →",
    href: "https://decorrevestimientos.com/Decor_carta_colores.pdf",
    note: "Gamas minerales y texturas suaves para suelos y paredes.",
  },
  {
    label: "Ver carta de colores Mortex →",
    href: "https://decorrevestimientos.com/Decor_carta_mortex.pdf",
    note: "Tonos orgánicos y acabados de alta resistencia técnica.",
  },
];

const BRANDS_TEXT =
  "Nuestra ejecución solo es tan buena como el material que aplicamos. Trabajamos con Mortex, Topciment y Belastone, fabricantes de referencia que certifican la durabilidad y el comportamiento técnico de cada producto. Y cuando el proyecto lo requiere, seleccionamos el material más adecuado entre una gama más amplia de proveedores especializados.";

const BRAND_LOGOS = [
  { src: "/images/Logo-Mortex.png", alt: "Mortex" },
  { src: "/images/logo-topciment-1.webp", alt: "Topciment" },
  { src: "/images/BEALSTONE-Color.webp", alt: "Bealstone" },
];

export default function SuperficiesColoresSection() {
  return (
    <section className="sco-section">
      <style>{`
        .sco-section {
          background-color: #F5F5F5;
          color: #111111;
          padding-top: 100px;
          padding-bottom: 100px;
        }
        .sco-inner {
          width: 100%;
          max-width: 720px;
        }
        .sco-h2 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(28px, 3.4vw, 40px);
          color: #111111;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin: 0 0 1rem 0;
        }
        .sco-text {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: #6B6B6B;
          line-height: 1.6;
          margin: 0 0 2.75rem 0;
        }
        .sco-swatches {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          margin-bottom: 2.75rem;
        }
        .sco-swatch {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .sco-swatch-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1px solid rgba(17,17,17,0.12);
        }
        .sco-swatch-name {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #111111;
        }
        .sco-note {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: #6B6B6B;
          line-height: 1.6;
          margin: 0 0 2rem 0;
        }
        .sco-catalogs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .sco-catalog-link {
          display: inline-block;
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #111111;
          text-decoration: none;
          border-bottom: 1.5px solid #111111;
          padding-bottom: 2px;
          margin-bottom: 10px;
          transition: opacity 0.2s ease;
        }
        .sco-catalog-link:hover {
          opacity: 0.6;
        }
        .sco-catalog-note {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: 13.5px;
          color: #6B6B6B;
          line-height: 1.6;
          margin: 0;
        }
        .sco-divider {
          border: none;
          border-top: 1px solid rgba(17,17,17,0.12);
          margin: 3.5rem 0 3rem 0;
        }
        .sco-brands-text {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: #6B6B6B;
          line-height: 1.7;
          margin: 0 0 2.25rem 0;
        }
        .sco-brand-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 40px;
        }
        .sco-brand-logo {
          position: relative;
          height: 24px;
          width: 90px;
          opacity: 0.85;
        }

        @media (max-width: 640px) {
          .sco-section {
            padding-top: 72px;
            padding-bottom: 72px;
          }
          .sco-swatches {
            gap: 24px;
          }
          .sco-swatch-circle {
            width: 52px;
            height: 52px;
          }
          .sco-catalogs {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .sco-divider {
            margin: 2.75rem 0 2.5rem 0;
          }
          .sco-brand-logos {
            gap: 28px;
          }
        }
      `}</style>

      <div className="dc-container">
        <div className="sco-inner">
          <h2 className="sco-h2">{TITLE}</h2>
          <p className="sco-text">{TEXT}</p>

          <div className="sco-swatches">
            {SWATCHES.map((s) => (
              <div key={s.name} className="sco-swatch">
                <span className="sco-swatch-circle" style={{ backgroundColor: s.hex }} />
                <span className="sco-swatch-name">{s.name}</span>
              </div>
            ))}
          </div>

          <p className="sco-note">
            Si buscas una personalización total, puedes consultar los catálogos completos según el material elegido para tu proyecto.
          </p>

          <div className="sco-catalogs">
            {CATALOGS.map((c) => (
              <div key={c.href}>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="sco-catalog-link">
                  {c.label}
                </a>
                <p className="sco-catalog-note">{c.note}</p>
              </div>
            ))}
          </div>

          <hr className="sco-divider" />

          <p className="sco-brands-text">{BRANDS_TEXT}</p>

          <div className="sco-brand-logos">
            {BRAND_LOGOS.map((logo) => (
              <div key={logo.alt} className="sco-brand-logo">
                <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: "contain" }} sizes="90px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
