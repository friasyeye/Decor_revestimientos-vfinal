import Image from "next/image";
import CocinaFAQAccordion from "./CocinaFAQAccordion";

const TITLE = "Microcemento para cocinas en Barcelona";
const SUBTITLE =
  "Aplicamos microcemento en cocinas de Barcelona sobre lo que ya tienes, sin obra ni escombros, con un acabado continuo e impermeable que no necesita juntas.";

const INTRO_TEXT =
  "La cocina es el espacio que más castigo recibe y el que más cuesta reformar sin convertir la casa en una obra. El microcemento permite renovar el suelo y las paredes en una sola intervención, directamente sobre el azulejo o el revestimiento existente, sin picar y sin generar escombros. El resultado es una superficie continua, sin juntas donde se acumule la grasa, resistente al uso diario y fácil de limpiar. Para encimeras y frentes de cocina aplicamos Mortex, más denso y resistente a la abrasión, con un tacto mineral que recuerda a la piedra natural.";

const BULLETS = [
  "Suelo de cocina continuo sin juntas",
  "Paredes y frentes sin azulejo ni juntas visibles",
  "Encimeras de microcemento o Mortex a medida",
  "Aplicación sobre azulejo, cerámica y revestimiento existente",
  "Resistente a la humedad, la grasa y el uso diario",
  "Sin obra, sin polvo, sin escombros",
];

export default function CocinaHeroSplit() {
  return (
    <section className="cs-split">
      <style>{`
        .cs-split {
          position: relative;
        }

        /* ── Sección superior (fondo claro, igual que el resto de la web) ── */
        .cs-top {
          position: relative;
          background-color: #F5F5F5;
          color: #111111;
          padding-top: 80px;
          padding-bottom: 130px;
          min-height: 76vh;
        }
        .cs-top-inner {
          width: 100%;
          max-width: 620px;
        }
        .cs-h1 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(36px, 5vw, 60px);
          color: #111111;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 0.6rem 0;
        }
        .cs-subtitle {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: #6B6B6B;
          margin: 0;
          max-width: 480px;
        }

        /* ── Sección inferior (gris de la paleta) ── */
        .cs-bottom {
          background-color: var(--color-dc-muted);
          color: var(--color-dc-dark);
          padding-top: 500px;
          padding-bottom: 140px;
          min-height: 110vh;
        }
        .cs-bottom-inner {
          width: 100%;
        }
        .cs-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          width: 100%;
        }
        .cs-bottom-text {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15px, 1.4vw, 17px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 0;
        }
        .cs-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .cs-bullet {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14.5px, 1.3vw, 16px);
          line-height: 1.5;
          color: var(--color-dc-dark);
        }
        .cs-bullet-dot {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-dc-dark);
          margin-top: 8px;
        }

        /* ── Imagen partida en la unión (16:9, centrada horizontalmente) ── */
        .cs-image-wrap {
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
        .cs-image-wrap img {
          object-fit: cover;
        }
        .cs-image-desktop {
          display: block;
        }
        .cs-image-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .cs-top {
            padding-bottom: 100px;
            min-height: auto;
          }
          .cs-bottom {
            padding-top: 300px;
            min-height: auto;
          }
          .cs-bottom-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .cs-top {
            padding-top: 64px;
            padding-bottom: 70vw;
            min-height: auto;
          }
          .cs-top-inner {
            max-width: 100%;
          }
          .cs-bottom {
            padding-top: 70vw;
            padding-bottom: 64px;
            min-height: auto;
          }
          .cs-image-wrap {
            width: 88%;
            aspect-ratio: 4 / 5;
          }
          .cs-image-desktop {
            display: none;
          }
          .cs-image-mobile {
            display: block;
          }
        }
      `}</style>

      <div className="cs-top">
        <div className="dc-container">
          <div className="cs-top-inner">
            <h1 className="cs-h1">{TITLE}</h1>
            <p className="cs-subtitle">{SUBTITLE}</p>
          </div>
        </div>

        <div className="cs-image-wrap">
          <Image
            src="/images/servicios_cocina_or.webp"
            alt="Cocina renovada en microcemento"
            fill
            sizes="(max-width: 640px) 0px, 86vw"
            priority
            className="cs-image-desktop"
          />
          <Image
            src="/images/servicios_cocina_mv.webp"
            alt="Cocina renovada en microcemento"
            fill
            sizes="(max-width: 640px) 88vw, 0px"
            priority
            className="cs-image-mobile"
          />
        </div>
      </div>

      <div className="cs-bottom">
        <div className="dc-container">
          <div className="cs-bottom-inner">
            <div className="cs-bottom-grid">
              <p className="cs-bottom-text">{INTRO_TEXT}</p>
              <ul className="cs-bullets">
                {BULLETS.map((item) => (
                  <li key={item} className="cs-bullet">
                    <span className="cs-bullet-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <CocinaFAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
