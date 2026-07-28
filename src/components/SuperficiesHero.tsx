const TITLE = "Microcemento sobre cualquier superficie en Barcelona";
const SUBTITLE =
  "Aplicamos microcemento y Mortex sobre casi cualquier superficie existente, sin picar ni generar escombros. La clave está en el diagnóstico técnico previo — no todos los soportes están siempre en condiciones, y saberlo antes marca la diferencia.";

const INDEX_ITEMS = [
  "Superficies porosas",
  "Superficies duras",
  "Superficies orgánicas",
  "Superficies técnicas",
];

export default function SuperficiesHero() {
  return (
    <section className="sh-hero">
      <style>{`
        .sh-hero {
          background-color: #F5F5F5;
          color: #111111;
          padding-top: 152px;
          padding-bottom: 80px;
        }
        .sh-hero-inner {
          width: 100%;
          max-width: 720px;
        }
        .sh-h1 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(36px, 5vw, 60px);
          color: #111111;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 0.9rem 0;
        }
        .sh-subtitle {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: #6B6B6B;
          line-height: 1.6;
          margin: 0 0 2.5rem 0;
          max-width: 620px;
        }
        .sh-index {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 14px;
        }
        .sh-index-item {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.03em;
          color: #8A8A8A;
          padding: 8px 16px;
          border: 1px solid rgba(17,17,17,0.10);
          border-radius: 999px;
        }

        @media (max-width: 640px) {
          .sh-hero {
            padding-top: 116px;
            padding-bottom: 56px;
          }
          .sh-index {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .sh-index-item {
            text-align: center;
          }
        }
      `}</style>

      <div className="dc-container">
        <div className="sh-hero-inner">
          <h1 className="sh-h1">{TITLE}</h1>
          <p className="sh-subtitle">{SUBTITLE}</p>

          <div className="sh-index">
            {INDEX_ITEMS.map((item) => (
              <span key={item} className="sh-index-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
