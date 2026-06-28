"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function LocationSection() {
  const photoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [photoVis, setPhotoVis] = useState(false);
  const [textVis, setTextVis] = useState(false);

  useEffect(() => {
    const obs = (ref: React.RefObject<HTMLDivElement | null>, setter: (v: boolean) => void) => {
      const el = ref.current;
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setter(true); o.disconnect(); } },
        { threshold: 0.15 }
      );
      o.observe(el);
      return o;
    };
    obs(photoRef, setPhotoVis);
    obs(textRef, setTextVis);
  }, []);

  return (
    <section style={{ backgroundColor: "#F5F5F5", paddingTop: 24 }}>
      {/* Photos row */}
      <div
        ref={photoRef}
        className="mb-16 grid grid-cols-1 gap-2 md:grid-cols-[1fr_2fr]"
        style={{
          opacity: photoVis ? 1 : 0,
          transform: photoVis ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="overflow-hidden rounded-[10px]">
          <Image
            src="/images/3iC1MXJJcUe9OZi5KP7RvyfbzXE.jpg"
            alt="Tuscan estate aerial view"
            width={800}
            height={400}
            className="h-[400px] w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-[10px]">
          <Image
            src="/images/qi31jTCjPGBFLq2Bsxyr7jMEt3U.jpg"
            alt="Tuscan countryside aerial view"
            width={800}
            height={400}
            className="h-[400px] w-full object-cover"
          />
        </div>
      </div>

      {/* Text block */}
      <div
        ref={textRef}
        className="px-6 pb-20 md:px-20"
        style={{
          opacity: textVis ? 1 : 0,
          transform: textVis ? "translateY(0)" : "translateY(32px)",
          transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
        }}
      >
        <h2
          className="mb-3 text-center italic"
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "#111111",
            letterSpacing: "-0.3px",
          }}
        >
          Set in the Heart of Tuscany
        </h2>

        <p
          className="mb-10 text-center"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "18px",
            color: "#4A4A4A",
          }}
        >
          Where tradition, land, and craft intersect.
        </p>

        <p
          className="mx-auto mb-4 max-w-2xl text-center leading-relaxed"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "18px",
            color: "#4A4A4A",
          }}
        >
          The masterclass takes place in a private Tuscan estate.
        </p>

        <p
          className="mx-auto max-w-2xl text-center leading-relaxed"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "18px",
            color: "#4A4A4A",
          }}
        >
          This location is surrounded by olive groves and vineyards, far from
          tourist routes and distractions. The climate, ingredients, and pace of
          life here are essential to understanding the craft. Exact location
          details are shared after your application is approved.
        </p>
      </div>
    </section>
  );
}
