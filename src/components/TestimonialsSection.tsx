"use client";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "The setting, the pace, the level of attention. It felt more like an apprenticeship than a class.",
    name: "Sofia Klein",
    role: "Artisan Baker",
  },
  {
    quote:
      "I came expecting techniques. I left with intuition. This workshop reshaped my relationship with craft.",
    name: "Daniel Hart",
    role: "Restaurant Owner",
  },
  {
    quote:
      "This completely changed how I approach dough and teaching. I've never experienced anything like it.",
    name: "Elena Moretti",
    role: "Private Chef",
  },
  {
    quote:
      "This is not for everyone, and that's exactly why it's powerful. If you're serious, it's worth every investment.",
    name: "Emily Alvarez",
    role: "Food Consultant",
  },
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl p-10 flex flex-col gap-6"
      style={{
        backgroundColor: "#c2c8bc",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s`,
      }}
    >
      <p
        className="leading-relaxed flex-1 text-[24px]"
        style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontStyle: "italic",
          color: "#0d120b",
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </p>
      <div>
        <p
          className="text-[16px] font-medium"
          style={{
            fontFamily: "Satoshi, ui-sans-serif, sans-serif",
            color: "#0d120b",
          }}
        >
          {t.name}
        </p>
        <p
          className="text-[14px]"
          style={{
            fontFamily: "Satoshi, ui-sans-serif, sans-serif",
            color: "#2c3229",
          }}
        >
          {t.role}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVis, setHeaderVis] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVis(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="px-6 py-24 md:px-20" style={{ backgroundColor: "#dfe5d7" }}>
      {/* Header */}
      <div
        ref={headerRef}
        className="text-center mb-16"
        style={{
          opacity: headerVis ? 1 : 0,
          transform: headerVis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <h2
          className="mb-3 leading-tight"
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontStyle: "italic",
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "#0d120b",
            letterSpacing: "-0.3px",
          }}
        >
          From Past Participants
        </h2>
        <p
          className="text-[18px]"
          style={{
            color: "#2c3229",
            fontFamily: "Satoshi, ui-sans-serif, sans-serif",
          }}
        >
          Reflections from those who&apos;ve been inside the experience.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] mx-auto">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} index={i} />
        ))}
      </div>
    </section>
  );
}
