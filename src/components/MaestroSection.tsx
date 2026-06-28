"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MaestroSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="px-6 py-24 md:px-20"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      {/* Label */}
      <p
        className="text-center mb-2 tracking-widest uppercase"
        style={{
          color: "#4A4A4A",
          fontSize: "12px",
          fontFamily: "Satoshi, sans-serif",
          letterSpacing: "0.15em",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        Meet the Maestro
      </p>

      {/* Heading */}
      <h2
        className="text-center mb-12"
        style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontStyle: "italic",
          fontSize: "clamp(40px, 6vw, 64px)",
          color: "#111111",
          lineHeight: 1.1,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
        }}
      >
        Giovanni Rossi
      </h2>

      {/* Portrait */}
      <div
        className="mx-auto"
        style={{
          maxWidth: "900px",
          borderRadius: 10,
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
        }}
      >
        <Image
          src="/images/5qnNbBZBmCAAJDt4Jo1UUDzZyRk.jpg"
          alt="Giovanni Rossi — man in apron with flour-dusted hands"
          width={900}
          height={506}
          className="w-full h-auto"
        />
      </div>

      {/* Bio */}
      <div
        className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        style={{
          maxWidth: "900px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s",
        }}
      >
        <p className="leading-relaxed" style={{ color: "#4A4A4A", fontSize: "18px", fontFamily: "Satoshi, sans-serif" }}>
          For over 20 years, Giovanni has studied dough the way others study
          wine. His training was shaped by the old masters of Neapolitan pizza,
          then refined in the countryside of Tuscany, where slower rhythms
          allowed technique to evolve into instinct.
        </p>
        <p className="leading-relaxed" style={{ color: "#4A4A4A", fontSize: "18px", fontFamily: "Satoshi, sans-serif" }}>
          His work has fed Michelin-star kitchens, private estates, and chefs
          who came for mastery. Those who learn from him don&apos;t leave with
          recipes. They leave with judgment, confidence, and a deeper
          relationship to their work.
        </p>
      </div>
    </section>
  );
}
