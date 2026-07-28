import Image from "next/image";
import BanosFAQAccordion from "./BanosFAQAccordion";

const TITLE = "Microcemento para baños en Barcelona";
const SUBTITLE =
  "Aplicamos microcemento en baños de Barcelona sobre lo que ya tienes, sin obra ni escombros, con un acabado continuo e impermeable que no necesita juntas.";

const INTRO_TEXT =
  "Llevas tiempo mirando ese azulejo antiguo y sabes que quieres cambiarlo. Lo que no quieres es una obra de semanas, polvo por toda la casa y vecinos llamando a la puerta. El microcemento permite renovar paredes, suelo y ducha en una sola intervención, sin picar, sin escombros, directamente sobre lo que ya tienes. El resultado es una superficie continua, sin juntas, impermeable y fácil de mantener. Para platos de ducha integrados o zonas de alta humedad, aplicamos Mortex, un micro-mortero técnico belga impermeable por naturaleza que elimina cualquier riesgo de filtración.";

const BULLETS = [
  "Paredes y suelo en continuidad, sin juntas",
  "Platos de ducha integrados sin gresite",
  "Lavabos de obra a medida",
  "Aplicación sobre azulejo, rachola y gresite existente",
  "Acabado impermeable sin riesgo de filtraciones",
  "Sin obra, sin polvo, sin escombros",
];

export default function BanosHeroSplit() {
  return (
    <section className="bs-split">
      <style>{`
        .bs-split {
          position: relative;
        }

        /* ── Sección superior (fondo claro, igual que el resto de la web) ── */
        .bs-top {
          position: relative;
          background-color: #F5F5F5;
          color: #111111;
          padding-top: 80px;
          padding-bottom: 130px;
          min-height: 76vh;
        }
        .bs-top-inner {
          width: 100%;
          max-width: 620px;
        }
        .bs-h1 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(36px, 5vw, 60px);
          color: #111111;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 0.6rem 0;
        }
        .bs-subtitle {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: #6B6B6B;
          margin: 0;
          max-width: 480px;
        }

        /* ── Sección inferior (gris de la paleta) ── */
        .bs-bottom {
          background-color: var(--color-dc-muted);
          color: var(--color-dc-dark);
          padding-top: 500px;
          padding-bottom: 140px;
          min-height: 110vh;
        }
        .bs-bottom-inner {
          width: 100%;
        }
        .bs-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          width: 100%;
        }
        .bs-bottom-text {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15px, 1.4vw, 17px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 0;
        }
        .bs-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .bs-bullet {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14.5px, 1.3vw, 16px);
          line-height: 1.5;
          color: var(--color-dc-dark);
        }
        .bs-bullet-dot {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-dc-dark);
          margin-top: 8px;
        }

        /* ── Imagen partida en la unión (16:9, centrada horizontalmente) ── */
        .bs-image-wrap {
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
        .bs-image-wrap img {
          object-fit: cover;
        }
        .bs-image-desktop {
          display: block;
        }
        .bs-image-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .bs-top {
            padding-bottom: 100px;
            min-height: auto;
          }
          .bs-bottom {
            padding-top: 300px;
            min-height: auto;
          }
          .bs-bottom-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .bs-top {
            padding-top: 64px;
            padding-bottom: 70vw;
            min-height: auto;
          }
          .bs-top-inner {
            max-width: 100%;
          }
          .bs-bottom {
            padding-top: 70vw;
            padding-bottom: 64px;
            min-height: auto;
          }
          .bs-image-wrap {
            width: 88%;
            aspect-ratio: 4 / 5;
          }
          .bs-image-desktop {
            display: none;
          }
          .bs-image-mobile {
            display: block;
          }
        }
      `}</style>

      <div className="bs-top">
        <div className="dc-container">
          <div className="bs-top-inner">
            <h1 className="bs-h1">{TITLE}</h1>
            <p className="bs-subtitle">{SUBTITLE}</p>
          </div>
        </div>

        <div className="bs-image-wrap">
          <Image
            src="/images/servicios_baño_or.webp"
            alt="Baño renovado en microcemento"
            fill
            sizes="(max-width: 640px) 0px, 86vw"
            priority
            className="bs-image-desktop"
          />
          <Image
            src="/images/servicios_baño_mv.webp"
            alt="Baño renovado en microcemento"
            fill
            sizes="(max-width: 640px) 88vw, 0px"
            priority
            className="bs-image-mobile"
          />
        </div>
      </div>

      <div className="bs-bottom">
        <div className="dc-container">
          <div className="bs-bottom-inner">
            <div className="bs-bottom-grid">
              <p className="bs-bottom-text">{INTRO_TEXT}</p>
              <ul className="bs-bullets">
                {BULLETS.map((item) => (
                  <li key={item} className="bs-bullet">
                    <span className="bs-bullet-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <BanosFAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
