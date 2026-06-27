"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const photos = [
  { src: "/images/oxAs3awJ7m9V4sHOKzuHAiL0b0.jpg", alt: "Tuscan villa vineyard", h: 440, mt: 0 },
  { src: "/images/CMSqKS7ljFjUX1ul6BIQXpe0Pc.jpg", alt: "Bread baking at sunset", h: 520, mt: -60 },
  { src: "/images/S4ZTmItkEi1cWGNHDbJEN0O1zY.jpg", alt: "Stone farmhouse kitchen", h: 480, mt: -20 },
  { src: "/images/catBe2oDLW9NxJc1PzHxZSn6xY.jpg", alt: "Cypress tree dirt road", h: 440, mt: 0 },
] as const;

export function PhotoGallerySection() {
  const ref = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);
  const [textVis, setTextVis] = useState(false);

  useEffect(() => {
    const observe = (el: Element | null, setter: (v: boolean) => void, threshold = 0.1) => {
      if (!el) return;
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setter(true); o.disconnect(); } },
        { threshold }
      );
      o.observe(el);
    };
    observe(ref.current, setVisible);
    observe(textRef.current, setTextVis, 0.3);
  }, []);

  return (
    <section
      ref={ref}
      style={{ backgroundColor: "#2c3229", paddingTop: 48, paddingBottom: 80 }}
      className="w-full px-8 md:px-14"
    >
      {/* Desktop: horizontal staggered row */}
      <div className="hidden md:flex flex-row gap-4 justify-center items-end max-w-5xl mx-auto mb-16">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            style={{
              flex: 1,
              borderRadius: 16,
              overflow: "hidden",
              height: photo.h,
              marginTop: photo.mt,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
            }}
          >
            <Image src={photo.src} alt={photo.alt} width={400} height={photo.h}
              className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Mobile: 2×2 grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden mb-12">
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            style={{
              borderRadius: 14,
              overflow: "hidden",
              height: 220,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.6s ease ${i * 0.08}s, transform 0.6s ease ${i * 0.08}s`,
            }}
          >
            <Image src={photo.src} alt={photo.alt} width={400} height={520}
              className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Description text — missing from original clone */}
      <p
        ref={textRef}
        style={{
          fontFamily: "Satoshi, ui-sans-serif, sans-serif",
          fontSize: "clamp(16px, 1.8vw, 18px)",
          color: "rgba(223,229,215,0.82)",
          textAlign: "center",
          maxWidth: 700,
          margin: "0 auto",
          lineHeight: 1.72,
          opacity: textVis ? 1 : 0,
          transform: textVis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
        }}
      >
        This is a workshop for those who believe mastery is built slowly, intentionally, and by hand.
        For 48 hours, you&apos;ll step inside a private Tuscan kitchen to learn the science, rhythm, and
        instinct behind exceptional sourdough pizza. No crowds. No shortcuts. No certificates for showing
        up. Just fire, fermentation, and a maestro guiding every step.
      </p>
    </section>
  );
}
