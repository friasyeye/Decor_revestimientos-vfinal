"use client";
import { useEffect, useRef, useState } from "react";

const TITLE = "Por qué elegirnos";
const SUBTITLE = "Antes de contratarnos, esto es lo que debes saber.";

function IconCheck({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="10" stroke="rgba(245,245,245,0.75)" strokeWidth="1.5" fill="none"/>
      <path d="M9 14l3.5 3.5L19 10" stroke="rgba(245,245,245,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconShield({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 4L6 8v7c0 4.4 3.4 8.5 8 9.5 4.6-1 8-5.1 8-9.5V8L14 4z" stroke="rgba(245,245,245,0.75)" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <path d="M10.5 14l2.5 2.5L17.5 11" stroke="rgba(245,245,245,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconHome({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9l9-7 9 7v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" stroke="rgba(245,245,245,0.75)" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
      <path d="M9 21V12h6v9" stroke="rgba(245,245,245,0.75)" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}


const cards = [
  {
    Icon: IconCheck,
    iconSize: 28,
    title: "Solo hacemos esto",
    body: "No somos una empresa de reformas que también hace microcemento. Llevamos más de siete años especializados exclusivamente en revestimientos continuos. Se nota.",
    large: true,
  },
  {
    Icon: IconShield,
    iconSize: 28,
    title: "Certificados en Mortex",
    body: "Somos uno de los pocos aplicadores certificados en Mortex en Barcelona. Un micro-mortero técnico belga que la mayoría de empresas no sabe aplicar y que marca la diferencia en los proyectos más exigentes.",
    large: true,
  },
  {
    Icon: IconHome,
    iconSize: 24,
    title: "Sin obra ni escombros",
    body: "Rachola, gresite, mármol, MDF, cristal. Aplicamos sobre lo que ya tienes. No hace falta picar ni generar escombros. Tu casa sigue siendo tu casa mientras trabajamos.",
    large: true,
  },
];

export function DiferenciadoresSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(cards.map(() => false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            obs.disconnect();
          }
        },
        { threshold: 0.12 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <style>{`
        .dif-section {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          padding: 80px 0 100px;
          box-sizing: border-box;
        }
        .dif-bg {
          position: absolute;
          inset: 0;
          background-image: url('/images/sección_diferenciadora.webp');
          background-size: cover;
          background-position: center;
          z-index: 0;
        }
        .dif-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
        .dif-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 160px);
        }
        .dif-header {
          margin-bottom: 3.5rem;
        }
        .dif-h2 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(36px, 5vw, 60px);
          color: #F5F5F5;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 0.6rem 0;
        }
        .dif-subtitle {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: rgba(245,245,245,0.65);
          margin: 0;
        }
        .dif-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 20px;
          margin: auto 0;
        }
        .dif-card-span2 {
          grid-row: span 2;
        }
        .dif-card {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.13);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 14px;
          padding: 36px 32px;
          box-sizing: border-box;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);
          display: flex;
          flex-direction: column;
        }
        .dif-card.in {
          opacity: 1;
          transform: translateY(0);
        }
        .dif-card-large {
          padding: 40px 36px;
        }
        .dif-card-large .dif-card-title {
          font-size: clamp(20px, 1.8vw, 26px) !important;
          margin-bottom: 16px !important;
        }
        .dif-card-large .dif-card-body {
          font-size: clamp(14px, 1.2vw, 15.5px) !important;
        }
        .dif-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          flex-shrink: 0;
        }
        .dif-card-large .dif-card-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          margin-bottom: 28px;
        }
        .dif-card-title {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(18px, 1.5vw, 21px);
          color: #F5F5F5;
          line-height: 1.2;
          margin: 0 0 12px 0;
        }
        .dif-card-body {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(13.5px, 1.1vw, 15px);
          color: rgba(245,245,245,0.68);
          line-height: 1.72;
          margin: 0;
        }
        .dif-card-extra {
          display: flex;
          flex-direction: column;
          gap: 28px;
          flex: 1;
          justify-content: space-between;
          padding-top: 36px;
        }
        .dif-card-extra-top {
          display: flex;
          flex-direction: column;
          gap: 28px;
          margin-top: auto;
          margin-bottom: auto;
        }
        .dif-card-divider {
          width: 100%;
          height: 1px;
          background: rgba(245,245,245,0.12);
        }
        .dif-card-stat {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .dif-card-stat-num {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(40px, 3.4vw, 52px);
          color: #F5F5F5;
          line-height: 1;
          flex-shrink: 0;
        }
        .dif-card-stat-label {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(12px, 0.9vw, 13px);
          color: rgba(245,245,245,0.5);
          line-height: 1.45;
          white-space: nowrap;
        }
        .dif-card-quote {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(18px, 1.6vw, 22px);
          color: rgba(245,245,245,0.4);
          line-height: 1.45;
          margin: 0;
          border-left: 1px solid rgba(245,245,245,0.18);
          padding-left: 14px;
        }
        @media (max-width: 768px) {
          .dif-card-extra {
            display: none;
          }
          .dif-section {
            padding: 72px 0;
          }
          .dif-header {
            margin-bottom: 40px;
          }
          .dif-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .dif-card-span2 {
            grid-row: span 1;
          }
          .dif-card,
          .dif-card-large {
            padding: 28px 24px;
          }
          .dif-card-large .dif-card-title {
            font-size: clamp(19px, 5vw, 22px) !important;
          }
          .dif-card-icon,
          .dif-card-large .dif-card-icon {
            width: 42px;
            height: 42px;
            border-radius: 10px;
            margin-bottom: 20px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="dif-section">
        <div className="dif-bg" aria-hidden="true" />
        <div className="dif-overlay" aria-hidden="true" />

        <div className="dif-inner dc-container">
          <div className="dif-header">
            <h2 className="dif-h2">{TITLE}</h2>
            <p className="dif-subtitle">{SUBTITLE}</p>
          </div>

          <div className="dif-grid">
            {cards.map((card, i) => {
              const { Icon, iconSize } = card;
              return (
                <div
                  key={i}
                  ref={(el) => { cardRefs.current[i] = el; }}
                  className={`dif-card${card.large ? " dif-card-large" : ""}${i === 0 ? " dif-card-span2" : ""}${visible[i] ? " in" : ""}`}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className="dif-card-icon" aria-hidden="true">
                    <Icon size={iconSize} />
                  </div>
                  <h3 className="dif-card-title">{card.title}</h3>
                  <p className="dif-card-body">{card.body}</p>
                  {i === 0 && (
                    <div className="dif-card-extra">
                      <div className="dif-card-extra-top">
                        <div className="dif-card-divider" />
                        <div className="dif-card-stat">
                          <span className="dif-card-stat-num">+7</span>
                          <span className="dif-card-stat-label">años aplicando exclusivamente revestimientos continuos</span>
                        </div>
                      </div>
                      <p className="dif-card-quote">
                        "Cuando algo es lo único que haces, se nota en cada metro cuadrado."
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
