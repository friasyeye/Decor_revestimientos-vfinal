"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

const cards = [
  {
    title: "Accommodation",
    desc: "Two nights in a secluded countryside estate, shared only with fellow participants.",
    img: "/images/wXeQRFjGVqNnDdqh4kbOSklmvWY.jpg",
    rotation: -20,
  },
  {
    title: "Culinary",
    desc: "Private estate dinners, local wine pairings, and a guided market immersion with regional producers",
    img: "/images/jUruyIReP2hMt6XoadJ6BFLSk5E.jpg",
    rotation: 12,
  },
  {
    title: "Materials",
    desc: "Every session, ingredient, tool, and resource is provided.",
    img: "/images/hYOHLXabWyjdEekAjazyOqWm8Y.jpg",
    rotation: -15,
  },
  {
    title: "Personal Guidance",
    desc: "Direct access to the maestro throughout the experience.",
    img: "/images/PQG2GwhLLy7cIzpYItvStfLPNgQ.jpg",
    rotation: 10,
  },
];

export function WhatsIncludedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const prevIndexRef = useRef(0);

  const handleScroll = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const totalScrollable = el.offsetHeight - window.innerHeight;
    const scrolled = Math.max(0, -rect.top);
    const progress = Math.min(1, scrolled / totalScrollable);
    const idx = Math.min(Math.floor(progress * cards.length), cards.length - 1);

    if (idx !== prevIndexRef.current) {
      prevIndexRef.current = idx;
      setVisible(false);
      setTimeout(() => {
        setActiveIndex(idx);
        setVisible(true);
      }, 250);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const card = cards[activeIndex];

  return (
    <div
      ref={sectionRef}
      style={{ height: "400vh", backgroundColor: "#0d120b", position: "relative" }}
    >
      {/* Rounded top corners transition */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 30,
          backgroundColor: "#dfe5d7",
          borderRadius: "0 0 30px 30px",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d120b",
          borderRadius: "30px 30px 0 0",
        }}
      >
        {/* Huge background heading */}
        <h2
          aria-label="What's Included"
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontStyle: "italic",
            fontSize: "clamp(70px, 13vw, 170px)",
            color: "#dfe5d7",
            opacity: 0.9,
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            lineHeight: 0.95,
            letterSpacing: "-2px",
            userSelect: "none",
            pointerEvents: "none",
            margin: 0,
            padding: "0 20px",
            whiteSpace: "nowrap",
          }}
        >
          What&apos;s Included
        </h2>

        {/* Single rotating card */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: 300,
            height: 400,
            borderRadius: 20,
            overflow: "hidden",
            transform: `rotate(${card.rotation}deg) translateY(${visible ? "0px" : "30px"})`,
            opacity: visible ? 1 : 0,
            transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1), opacity 0.3s ease",
            boxShadow: "0 28px 70px rgba(0,0,0,0.55)",
          }}
        >
          <Image
            src={card.img}
            alt={card.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="300px"
          />
          {/* Bottom gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 75%)",
            }}
          />
          {/* Text */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "20px 20px 26px",
            }}
          >
            <p
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontStyle: "italic",
                fontSize: 22,
                color: "#dfe5d7",
                margin: "0 0 6px",
              }}
            >
              {card.title}
            </p>
            <p
              style={{
                fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                fontSize: 13,
                color: "rgba(223,229,213,0.88)",
                lineHeight: 1.55,
                margin: 0,
              }}
            >
              {card.desc}
            </p>
          </div>
        </div>

        {/* Progress dots */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
        >
          {cards.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === activeIndex ? 24 : 6,
                height: 6,
                borderRadius: 3,
                backgroundColor:
                  i === activeIndex ? "#dfe5d7" : "rgba(223,229,215,0.3)",
                transition: "all 0.4s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
