"use client";
import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Visita y diagnóstico",
    body: "Vemos tu superficie en persona. Analizamos el soporte, la humedad y las condiciones reales. Te explicamos qué necesita tu proyecto. Sin compromiso.",
  },
  {
    num: "02",
    title: "Presupuesto personalizado",
    body: "Basado en lo que hemos visto, no en fotos ni estimaciones. Te decimos exactamente qué material es el adecuado y por qué.",
  },
  {
    num: "03",
    title: "Preparación",
    body: "Limpiamos y preparamos la superficie. Sin picar, sin obra, sin escombros. Todo listo para aplicar.",
  },
  {
    num: "04",
    title: "Aplicación",
    body: "Aplicamos el revestimiento continuo. Según el proyecto, toma 1-2 días. Trabajamos limpio y sin interrupciones.",
  },
  {
    num: "05",
    title: "Curado y listo",
    body: "El material endurece progresivamente. En 7 días está listo para uso normal. Te enseñamos cómo cuidarlo en esos primeros días.",
  },
];

export default function MaestroSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Sección pineada: el scroll vertical de la página se convierte en
  // desplazamiento horizontal del track mientras la sección está fija.
  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const isDesktop = () => window.matchMedia("(min-width: 641px)").matches;
    let raf = 0;

    // La altura extra del wrapper define cuánto scroll vertical se
    // "consume" para recorrer todo el ancho horizontal del track.
    const syncHeight = () => {
      if (!isDesktop()) {
        wrap.style.height = "";
        return;
      }
      const extra = track.scrollWidth - track.clientWidth;
      wrap.style.height = extra > 0 ? `${window.innerHeight + extra}px` : "";
    };

    const update = () => {
      raf = 0;
      if (!isDesktop()) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      const scrollable = wrap.offsetHeight - window.innerHeight;
      if (maxScroll <= 0 || scrollable <= 0) return;
      const progress = Math.min(1, Math.max(0, -wrap.getBoundingClientRect().top / scrollable));
      track.scrollLeft = progress * maxScroll;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      syncHeight();
      onScroll();
    };

    syncHeight();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(track);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        .asi-wrap {
          background-color: #F5F5F5;
        }
        .asi-pin {
          position: sticky;
          top: 0;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding: 90px 0 60px;
          box-sizing: border-box;
        }
        .asi-inner {
          width: 100%;
          padding: 0 max(24px, 4vw);
          box-sizing: border-box;
        }
        .asi-header {
          margin-bottom: 64px;
        }
        .asi-h2 {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(36px, 5vw, 60px);
          color: #111111;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 12px 0;
        }
        .asi-subtitle {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          color: #6B6B6B;
          margin: 0;
          max-width: 560px;
          line-height: 1.6;
        }
        .asi-stepper {
          display: flex;
          gap: 80px;
          overflow-x: hidden;
          width: 100%;
          padding: 0 max(24px, 4vw);
          box-sizing: border-box;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .asi-stepper::-webkit-scrollbar {
          display: none;
        }
        .asi-step {
          display: flex;
          flex-direction: column;
          flex: 0 0 auto;
          width: min(480px, 82vw);
          border-top: 1px solid rgba(17,17,17,0.15);
          padding-top: 32px;
        }
        .asi-step-num {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(110px, 12vw, 180px);
          color: #111111;
          line-height: 0.85;
          margin: 0 0 32px 0;
        }
        .asi-step-title {
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: clamp(26px, 2.6vw, 34px);
          color: #111111;
          line-height: 1.2;
          margin: 0 0 16px 0;
        }
        .asi-step-body {
          font-family: "Satoshi", ui-sans-serif, sans-serif;
          font-size: clamp(15px, 1.3vw, 17px);
          color: #6B6B6B;
          line-height: 1.7;
          margin: 0;
          max-width: 42ch;
        }

        @media (max-width: 640px) {
          /* En móvil no hay pin: swipe táctil nativo sobre el track */
          .asi-pin {
            position: static;
            min-height: 0;
            padding: 80px 0;
            overflow: visible;
          }
          .asi-stepper {
            overflow-x: auto;
            scroll-snap-type: x proximity;
            touch-action: pan-x pan-y;
            gap: 48px;
          }
          .asi-step {
            scroll-snap-align: start;
          }
          .asi-step-num {
            font-size: clamp(80px, 26vw, 120px);
            margin-bottom: 20px;
          }
        }
      `}</style>

      <section className="asi-wrap" ref={wrapRef}>
        <div className="asi-pin">
          <div className="asi-inner">
            <div className="asi-header">
              <h2 className="asi-h2">Así trabajamos</h2>
              <p className="asi-subtitle">
                Desde que llamas hasta que entras en tu espacio renovado, cada paso es claro y sin sorpresas.
              </p>
            </div>
          </div>

          <div className="asi-stepper" ref={trackRef}>
            {steps.map((step, i) => (
              <div key={i} className="asi-step">
                <p className="asi-step-num">{step.num}</p>
                <h3 className="asi-step-title">{step.title}</h3>
                <p className="asi-step-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
