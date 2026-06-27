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
      style={{ backgroundColor: "#2c3229", paddingBottom: 100 }}
      className="w-full px-8 md:px-14 pt-12"
    >
      {/* Desktop: horizontal staggered row */}
      <div className="hidden md:flex flex-row gap-4 justify-center items-end max-w-5xl mx-auto" style={{ paddingBottom: 20 }}>
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
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={photo.h}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile: 2×2 grid */}
      <div className="grid grid-cols-2 gap-3 md:hidden">
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
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={520}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
