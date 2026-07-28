import Image from "next/image";

export default function CocinaCTASection() {
  return (
    <section className="cc-cta">
      <style>{`
        .cc-cta {
          position: relative;
          background-color: var(--color-dc-dark);
          padding: 100px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .cc-cta-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .cc-cta-bg img {
          object-fit: cover;
          filter: blur(18px) brightness(0.55);
          transform: scale(1.1);
        }
        .cc-cta-img-desktop {
          display: block;
        }
        .cc-cta-img-mobile {
          display: none;
        }
        .cc-cta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(17, 17, 17, 0.45);
          z-index: 1;
        }
        .cc-cta-card {
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
        .cc-cta-h2 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(32px, 4.5vw, 48px);
          color: #F5F5F5;
          line-height: 1.15;
          letter-spacing: -0.5px;
          margin: 0 0 18px 0;
        }
        .cc-cta-text {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15px, 1.5vw, 17px);
          color: rgba(245, 245, 245, 0.75);
          line-height: 1.6;
          margin: 0 0 32px 0;
        }
        .cc-cta-button {
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
        .cc-cta-button:hover {
          background-color: transparent;
          color: #D4D4D4;
          transform: translateY(-1px);
        }
        .cc-cta-contact {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 22px;
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: 14.5px;
          color: rgba(245, 245, 245, 0.65);
        }
        .cc-cta-contact a {
          color: rgba(245, 245, 245, 0.9);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .cc-cta-contact a:hover {
          color: #F5F5F5;
        }
        .cc-cta-contact-divider {
          width: 1px;
          height: 14px;
          background-color: rgba(245, 245, 245, 0.3);
        }

        @media (max-width: 640px) {
          .cc-cta {
            padding: 72px 0;
          }
          .cc-cta-card {
            padding: 40px 28px;
          }
          .cc-cta-img-desktop {
            display: none;
          }
          .cc-cta-img-mobile {
            display: block;
          }
        }
      `}</style>

      <div className="cc-cta-bg" aria-hidden="true">
        <Image
          src="/images/servicios_cocina_or.webp"
          alt=""
          fill
          sizes="(max-width: 640px) 0px, 100vw"
          className="cc-cta-img-desktop"
        />
        <Image
          src="/images/servicios_cocina_mv.webp"
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 0px"
          className="cc-cta-img-mobile"
        />
      </div>
      <div className="cc-cta-overlay" aria-hidden="true" />

      <div className="cc-cta-card">
        <h2 className="cc-cta-h2">¿Quieres renovar tu cocina sin obra?</h2>
        <p className="cc-cta-text">
          Venimos a verla, te explicamos qué se puede hacer y te damos un presupuesto cerrado. Sin rodeos, sin sorpresas.
        </p>
        <a href="/contacto" className="cc-cta-button">
          Pide tu visita gratuita
        </a>

        <div className="cc-cta-contact">
          <a href="tel:+34603143050">+34 603 14 30 50</a>
          <span className="cc-cta-contact-divider" aria-hidden="true" />
          <span>Barcelona</span>
        </div>
      </div>
    </section>
  );
}
