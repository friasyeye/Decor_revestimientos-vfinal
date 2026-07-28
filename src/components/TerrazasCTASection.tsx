import Image from "next/image";

export default function TerrazasCTASection() {
  return (
    <section className="tc-cta">
      <style>{`
        .tc-cta {
          position: relative;
          background-color: var(--color-dc-dark);
          padding: 100px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .tc-cta-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .tc-cta-bg img {
          object-fit: cover;
          filter: blur(18px) brightness(0.55);
          transform: scale(1.1);
        }
        .tc-cta-img-desktop {
          display: block;
        }
        .tc-cta-img-mobile {
          display: none;
        }
        .tc-cta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(17, 17, 17, 0.45);
          z-index: 1;
        }
        .tc-cta-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 620px;
          margin: 0 24px;
          text-align: center;
          background: rgba(212, 212, 212, 0.16);
          border: 1px solid rgba(212, 212, 212, 0.28);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 56px 40px;
          box-sizing: border-box;
        }
        .tc-cta-h2 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(32px, 4.5vw, 48px);
          color: #F5F5F5;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin: 0 0 18px 0;
        }
        .tc-cta-text {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15px, 1.5vw, 17px);
          color: rgba(245, 245, 245, 0.75);
          line-height: 1.6;
          margin: 0 0 32px 0;
        }
        .tc-cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 36px;
          border: 1.5px solid #D4D4D4;
          border-radius: 6px;
          background-color: #D4D4D4;
          color: #111111;
          font-family: "Satoshi", ui-sans-serif, system-ui, sans-serif;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.02em;
          text-decoration: none;
          transition: background-color 0.22s ease, color 0.22s ease, transform 0.22s ease;
        }
        .tc-cta-button:hover {
          background-color: transparent;
          color: #D4D4D4;
          transform: translateY(-1px);
        }
        .tc-cta-contact {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 22px;
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: 14.5px;
          color: rgba(245, 245, 245, 0.65);
        }
        .tc-cta-contact a {
          color: rgba(245, 245, 245, 0.9);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .tc-cta-contact a:hover {
          color: #F5F5F5;
        }
        .tc-cta-contact-divider {
          width: 1px;
          height: 14px;
          background-color: rgba(245, 245, 245, 0.3);
        }

        @media (max-width: 640px) {
          .tc-cta {
            padding: 72px 0;
          }
          .tc-cta-card {
            padding: 40px 28px;
          }
          .tc-cta-img-desktop {
            display: none;
          }
          .tc-cta-img-mobile {
            display: block;
          }
        }
      `}</style>

      <div className="tc-cta-bg" aria-hidden="true">
        <Image
          src="/images/servicios_terraza_or.webp"
          alt=""
          fill
          sizes="(max-width: 640px) 0px, 100vw"
          className="tc-cta-img-desktop"
        />
        <Image
          src="/images/servicios_terraza_mv.webp"
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 0px"
          className="tc-cta-img-mobile"
        />
      </div>
      <div className="tc-cta-overlay" aria-hidden="true" />

      <div className="tc-cta-card">
        <h2 className="tc-cta-h2">¿Tu terraza necesita un cambio?</h2>
        <p className="tc-cta-text">
          Venimos a verla, te explicamos qué se puede hacer y te damos un presupuesto cerrado. Sin rodeos, sin sorpresas.
        </p>
        <a href="/contacto" className="tc-cta-button">
          Pide tu visita gratuita
        </a>

        <div className="tc-cta-contact">
          <a href="tel:+34603143050">+34 603 14 30 50</a>
          <span className="tc-cta-contact-divider" aria-hidden="true" />
          <span>Barcelona</span>
        </div>
      </div>
    </section>
  );
}
