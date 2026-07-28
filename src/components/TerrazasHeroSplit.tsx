import Image from "next/image";
import TerrazasFAQAccordion from "./TerrazasFAQAccordion";

const TITLE = "Microcemento para terrazas y exteriores en Barcelona";
const SUBTITLE =
  "Aplicamos microcemento en terrazas y patios de Barcelona sobre lo que ya tienes, sin obra ni escombros, con un acabado antideslizante y resistente al clima mediterráneo.";

const INTRO_TEXT =
  "Una terraza con azulejo viejo, juntas ennegrecidas y superficies que resbalan cuando llueven no es lo que quieres ver desde tu salón. El microcemento para exteriores permite renovar completamente el suelo de tu terraza o patio en una sola intervención, directamente sobre lo que ya tienes, sin picar y sin generar escombros. El resultado es una superficie continua, sin juntas, con textura antideslizante y resistente a la radiación solar, el agua y el desgaste climático. Un exterior que aguanta lo que Barcelona le pone por delante.";

const BULLETS = [
  "Suelo continuo sin juntas para terrazas y patios",
  "Textura antideslizante para uso exterior seguro",
  "Resistente a la radiación UV y al desgaste climático",
  "Aplicación sobre azulejo, cerámica y pavimento existente",
  "Sin obra, sin polvo, sin escombros",
  "Acabado personalizable en color y textura",
];

export default function TerrazasHeroSplit() {
  return (
    <section className="ts-split">
      <style>{`
        .ts-split {
          position: relative;
        }

        /* ── Sección superior (fondo claro, igual que el resto de la web) ── */
        .ts-top {
          position: relative;
          background-color: #F5F5F5;
          color: #111111;
          padding-top: 80px;
          padding-bottom: 130px;
          min-height: 76vh;
        }
        .ts-top-inner {
          width: 100%;
          max-width: 620px;
        }
        .ts-h1 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(36px, 5vw, 60px);
          color: #111111;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 0.6rem 0;
        }
        .ts-subtitle {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: #6B6B6B;
          margin: 0;
          max-width: 480px;
        }

        /* ── Sección inferior (gris de la paleta) ── */
        .ts-bottom {
          background-color: var(--color-dc-muted);
          color: var(--color-dc-dark);
          padding-top: 500px;
          padding-bottom: 140px;
          min-height: 110vh;
        }
        .ts-bottom-inner {
          width: 100%;
        }
        .ts-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          width: 100%;
        }
        .ts-bottom-text {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15px, 1.4vw, 17px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 0;
        }
        .ts-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .ts-bullet {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14.5px, 1.3vw, 16px);
          line-height: 1.5;
          color: var(--color-dc-dark);
        }
        .ts-bullet-dot {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-dc-dark);
          margin-top: 8px;
        }

        /* ── Imagen partida en la unión (16:9, centrada horizontalmente) ── */
        .ts-image-wrap {
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
        .ts-image-wrap img {
          object-fit: cover;
        }
        .ts-image-desktop {
          display: block;
        }
        .ts-image-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .ts-top {
            padding-bottom: 100px;
            min-height: auto;
          }
          .ts-bottom {
            padding-top: 300px;
            min-height: auto;
          }
          .ts-bottom-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .ts-top {
            padding-top: 64px;
            padding-bottom: 70vw;
            min-height: auto;
          }
          .ts-top-inner {
            max-width: 100%;
          }
          .ts-bottom {
            padding-top: 70vw;
            padding-bottom: 64px;
            min-height: auto;
          }
          .ts-image-wrap {
            width: 88%;
            aspect-ratio: 4 / 5;
          }
          .ts-image-desktop {
            display: none;
          }
          .ts-image-mobile {
            display: block;
          }
        }
      `}</style>

      <div className="ts-top">
        <div className="dc-container">
          <div className="ts-top-inner">
            <h1 className="ts-h1">{TITLE}</h1>
            <p className="ts-subtitle">{SUBTITLE}</p>
          </div>
        </div>

        <div className="ts-image-wrap">
          <Image
            src="/images/servicios_terraza_or.webp"
            alt="Terraza renovada en microcemento"
            fill
            sizes="(max-width: 640px) 0px, 86vw"
            priority
            className="ts-image-desktop"
          />
          <Image
            src="/images/servicios_terraza_mv.webp"
            alt="Terraza renovada en microcemento"
            fill
            sizes="(max-width: 640px) 88vw, 0px"
            priority
            className="ts-image-mobile"
          />
        </div>
      </div>

      <div className="ts-bottom">
        <div className="dc-container">
          <div className="ts-bottom-inner">
            <div className="ts-bottom-grid">
              <p className="ts-bottom-text">{INTRO_TEXT}</p>
              <ul className="ts-bullets">
                {BULLETS.map((item) => (
                  <li key={item} className="ts-bullet">
                    <span className="ts-bullet-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <TerrazasFAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
