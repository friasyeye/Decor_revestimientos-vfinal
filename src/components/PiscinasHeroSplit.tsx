import Image from "next/image";
import PiscinasFAQAccordion from "./PiscinasFAQAccordion";

const TITLE = "Microcemento y Mortex para piscinas en Barcelona";
const SUBTITLE =
  "Aplicamos Mortex en piscinas de Barcelona directamente sobre el gresite existente, sin vaciado total ni escombros, con estanqueidad absoluta y resistencia al cloro.";

const INTRO_TEXT =
  "El gresite apagado, las juntas oscurecidas y las piezas sueltas tienen solución sin convertir el jardín en una obra de un mes. Mortex es el único revestimiento técnico que permite renovar el vaso de una piscina directamente sobre el gresite existente, con estanqueidad absoluta y resistencia total a los productos químicos del agua. No es microcemento convencional — es un micro-mortero técnico belga de mayor densidad, impermeable por naturaleza y diseñado para zonas sumergidas. Y aplicarlo requiere certificación específica de aplicador. Nosotros la tenemos.";

const BULLETS = [
  "Revestimiento continuo sin gresite ni juntas visibles",
  "Estanqueidad absoluta sin juntas de dilatación",
  "Resistente al cloro y productos químicos del agua",
  "Aplicación sobre gresite existente sin picar",
  "Sin obra mayor, sin escombros, sin meses de espera",
  "Aplicadores certificados en Mortex",
];

export default function PiscinasHeroSplit() {
  return (
    <section className="ps-split">
      <style>{`
        .ps-split {
          position: relative;
        }

        /* ── Sección superior (fondo claro, igual que el resto de la web) ── */
        .ps-top {
          position: relative;
          background-color: #F5F5F5;
          color: #111111;
          padding-top: 80px;
          padding-bottom: 130px;
          min-height: 76vh;
        }
        .ps-top-inner {
          width: 100%;
          max-width: 620px;
        }
        .ps-h1 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(36px, 5vw, 60px);
          color: #111111;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 0.6rem 0;
        }
        .ps-subtitle {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: #6B6B6B;
          margin: 0;
          max-width: 480px;
        }

        /* ── Sección inferior (gris de la paleta) ── */
        .ps-bottom {
          background-color: var(--color-dc-muted);
          color: var(--color-dc-dark);
          padding-top: 500px;
          padding-bottom: 140px;
          min-height: 110vh;
        }
        .ps-bottom-inner {
          width: 100%;
        }
        .ps-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          width: 100%;
        }
        .ps-bottom-text {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15px, 1.4vw, 17px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 0;
        }
        .ps-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .ps-bullet {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14.5px, 1.3vw, 16px);
          line-height: 1.5;
          color: var(--color-dc-dark);
        }
        .ps-bullet-dot {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-dc-dark);
          margin-top: 8px;
        }

        /* ── Imagen partida en la unión (16:9, centrada horizontalmente) ── */
        .ps-image-wrap {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 50%);
          width: 86%;
          max-width: 1360px;
          aspect-ratio: 16 / 9;
          z-index: 10;
          border-radius: 10px;
          overflow: hidden;
        }
        .ps-image-wrap img {
          object-fit: cover;
        }
        .ps-image-desktop {
          display: block;
        }
        .ps-image-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .ps-top {
            padding-bottom: 100px;
            min-height: auto;
          }
          .ps-bottom {
            padding-top: 300px;
            min-height: auto;
          }
          .ps-bottom-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .ps-top {
            padding-top: 64px;
            padding-bottom: 70vw;
            min-height: auto;
          }
          .ps-top-inner {
            max-width: 100%;
          }
          .ps-bottom {
            padding-top: 70vw;
            padding-bottom: 64px;
            min-height: auto;
          }
          .ps-image-wrap {
            width: 88%;
            aspect-ratio: 4 / 5;
          }
          .ps-image-desktop {
            display: none;
          }
          .ps-image-mobile {
            display: block;
          }
        }
      `}</style>

      <div className="ps-top">
        <div className="dc-container">
          <div className="ps-top-inner">
            <h1 className="ps-h1">{TITLE}</h1>
            <p className="ps-subtitle">{SUBTITLE}</p>
          </div>
        </div>

        <div className="ps-image-wrap">
          <Image
            src="/images/servicios_piscina_or.webp"
            alt="Piscina renovada en Mortex"
            fill
            sizes="(max-width: 640px) 0px, 86vw"
            priority
            className="ps-image-desktop"
          />
          <Image
            src="/images/servicios_piscina_mv.webp"
            alt="Piscina renovada en Mortex"
            fill
            sizes="(max-width: 640px) 88vw, 0px"
            priority
            className="ps-image-mobile"
          />
        </div>
      </div>

      <div className="ps-bottom">
        <div className="dc-container">
          <div className="ps-bottom-inner">
            <div className="ps-bottom-grid">
              <p className="ps-bottom-text">{INTRO_TEXT}</p>
              <ul className="ps-bullets">
                {BULLETS.map((item) => (
                  <li key={item} className="ps-bullet">
                    <span className="ps-bullet-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <PiscinasFAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
