import Image from "next/image";
import ColaboracionesFAQAccordion from "./ColaboracionesFAQAccordion";

const TITLE = "Aplicadores de microcemento en Barcelona para interioristas y arquitectos";
const SUBTITLE =
  "Trabajamos con estudios de interiorismo y arquitectura en Barcelona que necesitan un aplicador certificado, técnicamente solvente y que no da sorpresas en obra.";

const INTRO_TEXT =
  "Si diseñas proyectos de reforma para clientes de nivel medio-alto, sabes que el aplicador que eliges es tan importante como el material que especificas. Un mal acabado, un soporte mal preparado o un plazo incumplido no es solo un problema técnico — es tu reputación delante de tu cliente final. En Decor trabajamos habitualmente con interioristas y arquitectos en Barcelona que buscan exactamente lo contrario: un colaborador que entiende el proyecto antes de ejecutarlo, que sabe manejar soportes no convencionales y que entrega lo que se ha acordado. Somos aplicadores certificados en Mortex, el micro-mortero técnico belga de referencia, y llevamos más de 7 años ejecutando proyectos de autor en Barcelona.";

const BULLETS = [
  "Aplicadores certificados en Mortex",
  "Experiencia en soportes no convencionales: MDF, cristal, mármol, acero",
  "Diagnóstico técnico previo en cada proyecto",
  "Respetamos las especificaciones del proyecto sin improvisaciones",
  "Encimeras, mobiliario y proyectos de autor",
  "Comunicación profesional y cumplimiento de plazos",
];

export default function ColaboracionesHeroSplit() {
  return (
    <section className="cb-split">
      <style>{`
        .cb-split {
          position: relative;
        }

        /* ── Sección superior (fondo claro, igual que el resto de la web) ── */
        .cb-top {
          position: relative;
          background-color: #F5F5F5;
          color: #111111;
          padding-top: 80px;
          padding-bottom: 130px;
          min-height: 84vh;
        }
        .cb-top-inner {
          width: 100%;
          max-width: 780px;
        }
        .cb-h1 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(34px, 4.4vw, 54px);
          color: #111111;
          line-height: 1.12;
          letter-spacing: -0.5px;
          margin: 0 0 0.6rem 0;
        }
        .cb-subtitle {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: #6B6B6B;
          margin: 0;
          max-width: 560px;
        }

        /* ── Sección inferior (gris de la paleta) ── */
        .cb-bottom {
          background-color: var(--color-dc-muted);
          color: var(--color-dc-dark);
          padding-top: 500px;
          padding-bottom: 140px;
          min-height: 110vh;
        }
        .cb-bottom-inner {
          width: 100%;
        }
        .cb-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
          width: 100%;
        }
        .cb-bottom-text {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15px, 1.4vw, 17px);
          line-height: 1.7;
          color: var(--color-dc-mid);
          margin: 0;
        }
        .cb-bullets {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .cb-bullet {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14.5px, 1.3vw, 16px);
          line-height: 1.5;
          color: var(--color-dc-dark);
        }
        .cb-bullet-dot {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--color-dc-dark);
          margin-top: 8px;
        }

        /* ── Imagen partida en la unión (16:9, centrada horizontalmente) ── */
        .cb-image-wrap {
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
        .cb-image-wrap img {
          object-fit: cover;
        }
        .cb-image-desktop {
          display: block;
        }
        .cb-image-mobile {
          display: none;
        }

        @media (max-width: 900px) {
          .cb-top {
            padding-bottom: 100px;
            min-height: auto;
          }
          .cb-bottom {
            padding-top: 300px;
            min-height: auto;
          }
          .cb-bottom-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          .cb-top {
            padding-top: 64px;
            padding-bottom: 70vw;
            min-height: auto;
          }
          .cb-top-inner {
            max-width: 100%;
          }
          .cb-bottom {
            padding-top: 70vw;
            padding-bottom: 64px;
            min-height: auto;
          }
          .cb-image-wrap {
            width: 88%;
            aspect-ratio: 4 / 5;
          }
          .cb-image-desktop {
            display: none;
          }
          .cb-image-mobile {
            display: block;
          }
        }
      `}</style>

      <div className="cb-top">
        <div className="dc-container">
          <div className="cb-top-inner">
            <h1 className="cb-h1">{TITLE}</h1>
            <p className="cb-subtitle">{SUBTITLE}</p>
          </div>
        </div>

        <div className="cb-image-wrap">
          <Image
            src="/images/b2b_or.webp"
            alt="Proyecto de interiorismo en microcemento"
            fill
            sizes="(max-width: 640px) 0px, 86vw"
            priority
            className="cb-image-desktop"
          />
          <Image
            src="/images/b2b_mv.webp"
            alt="Proyecto de interiorismo en microcemento"
            fill
            sizes="(max-width: 640px) 88vw, 0px"
            priority
            className="cb-image-mobile"
          />
        </div>
      </div>

      <div className="cb-bottom">
        <div className="dc-container">
          <div className="cb-bottom-inner">
            <div className="cb-bottom-grid">
              <p className="cb-bottom-text">{INTRO_TEXT}</p>
              <ul className="cb-bullets">
                {BULLETS.map((item) => (
                  <li key={item} className="cb-bullet">
                    <span className="cb-bullet-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ColaboracionesFAQAccordion />
          </div>
        </div>
      </div>
    </section>
  );
}
