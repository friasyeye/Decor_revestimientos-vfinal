import Image from "next/image";

export function HeroSection() {
  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          position: relative;
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
          padding: 80px max(24px, 4vw);
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
        }
        .hero-content-inner {
          max-width: 700px;
          width: 100%;
          text-align: left;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-eyebrow {
          font-family: Satoshi, ui-sans-serif, system-ui, sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: rgba(245,245,245,0.5);
          margin: 0 0 20px 0;
        }
        .hero-claim {
          font-family: var(--font-instrument-serif), Georgia, serif;
          font-style: italic;
          font-size: clamp(28px, 4.2vw, 54px);
          color: #F5F5F5;
          line-height: 1.12;
          letter-spacing: -0.3px;
          margin-bottom: 40px;
        }
        .hero-buttons {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: flex-start;
        }
        .hero-cta {
          background-color: #D4D4D4;
          color: #111111;
          border: 1.5px solid #D4D4D4;
          border-radius: 6px;
          padding: 15px 32px;
          font-size: 16px;
          font-family: Satoshi, ui-sans-serif, system-ui, sans-serif;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          line-height: 1;
          transform: translateY(0);
          transition: background-color 0.22s ease, color 0.22s ease, transform 0.22s ease;
          cursor: pointer;
        }
        .hero-cta:hover {
          background-color: transparent;
          color: #D4D4D4;
          transform: translateY(-2px);
        }
        .hero-note {
          font-family: Satoshi, ui-sans-serif, system-ui, sans-serif;
          font-size: 12px;
          color: rgba(245,245,245,0.65);
          margin-top: 12px;
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
          .hero-eyebrow {
            font-size: 10px;
            letter-spacing: 0.14em;
            margin-bottom: 16px;
          }
          .hero-claim {
            font-size: clamp(24px, 7vw, 36px);
            margin-bottom: 28px;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            width: 100%;
          }
          .hero-buttons a {
            width: auto;
            justify-content: center;
            padding: 12px 24px !important;
            font-size: 14px !important;
          }
        }
      `}</style>

      <section className="hero-section">
        <Image
          src="/images/hero.webp"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        />
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

            {/* H1 SEO — eyebrow discreto */}
            <h1 className="hero-eyebrow">
              Empresa de microcemento en Barcelona
            </h1>

            {/* Claim principal */}
            <p className="hero-claim">
              Aplicamos revestimientos continuos en cualquier superficie de tu hogar
            </p>

            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div className="hero-buttons">
                <a href="/contacto" className="hero-cta">
                  Solicita tu visita gratuita
                </a>
              </div>

              <p className="hero-note">
                * Te respondemos por WhatsApp en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
