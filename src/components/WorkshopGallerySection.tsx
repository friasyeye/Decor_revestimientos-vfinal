"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galleryImages = [
  { src: "/images/z821vNPNUJeKcWr76E0f3cymNo.jpg", alt: "Group around wooden table" },
  { src: "/images/mKRu7f0u4HUSaV8Zd395eBgOE.jpg", alt: "Family meal at vineyard" },
  { src: "/images/IHsObMetV7AEeyjOW0zgKhm5o9U.jpg", alt: "Removing bread from oven" },
  { src: "/images/AWlL1H4QLEme1sD4dGqa7dvnr8.jpg", alt: "Group of smiling people" },
  { src: "/images/1v28XS77BccorWaMJ7suXwVaKMo.jpg", alt: "Stacking firewood" },
  { src: "/images/rurWZkxRma3VIOLcSkpiVf8YaL0.jpg", alt: "Shaping dough at table" },
  { src: "/images/Ns2lwideopI3LuOCH5Oythwj2U.jpg", alt: "Five people sitting outdoors" },
  { src: "/images/VdvQOfJqXkm5iAiVXPlg5cBzdQ.jpg", alt: "Under olive trees" },
  { src: "/images/YoOdBvIm6cyatNpumE2HZD5YB2I.jpg", alt: "Outside stone building" },
  { src: "/images/kdn9lH05Uzi5oqeiBS5oKBY6Q.jpg", alt: "Walking vineyard path" },
] as const;

function GalleryImage({ image, index }: { image: (typeof galleryImages)[number]; index: number }) {
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

  const isTall = index % 3 === 0;
  const aspectClass = isTall ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-xl ${aspectClass}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${index * 0.06}s, transform 0.6s ease ${index * 0.06}s`,
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
      />
    </div>
  );
}

export default function WorkshopGallerySection() {
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
        style={{
          opacity: headerVis ? 1 : 0,
          transform: headerVis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <h2
          className="text-center mb-3"
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontStyle: "italic",
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "#0d120b",
            letterSpacing: "-0.3px",
            lineHeight: 1.1,
          }}
        >
          Moments from the Workshop
        </h2>

        <p
          className="text-center mb-14"
          style={{
            color: "#2c3229",
            fontSize: "18px",
            fontFamily: "Satoshi, sans-serif",
          }}
        >
          Quiet mornings. Fire-lit nights. Work worth remembering.
        </p>
      </div>

      {/* Photo grid */}
      <div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        style={{ maxWidth: "1200px" }}
      >
        {galleryImages.map((image, index) => (
          <GalleryImage key={image.src} image={image} index={index} />
        ))}
      </div>
    </section>
  );
}
