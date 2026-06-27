"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Experience {
  num: string;
  title: string;
  img: string;
  desc: string;
}

const experiences: Experience[] = [
  {
    num: "001",
    title: "The Science of Sourdough",
    img: "/images/CTYQjTOJGK5FVvbAkfOYUFmkVNQ.jpg",
    desc: "Master fermentation, hydration, and heat through guided dough work and live-fire baking. Learn why dough behaves the way it does, not just how to follow a recipe.",
  },
  {
    num: "002",
    title: "The Tuscan Market Immersion",
    img: "/images/uy1XcmmT2qiaTBk18eoukQqlPk.jpg",
    desc: "Walk the local markets with a chef's eye. Source flour, tomatoes, and basil directly from the people who grow and make them.",
  },
  {
    num: "003",
    title: "Private Wood-Fired Sessions",
    img: "/images/imeUcyMMbKYRMNhUDuVvx4Ns6mg.jpg",
    desc: "Hands-on oven time with direct, personal feedback. No demonstrations. No spectators. We make sure every participant works the fire.",
  },
  {
    num: "004",
    title: "Sunset Estate Dinner",
    img: "/images/WRCbmp2tgPvD2rZF622bBKVrbt0.jpg",
    desc: "An intimate dinner featuring your own creations, shared at a private Tuscan estate with all the participants as the sun goes down.",
  },
  {
    num: "005",
    title: "From Technique to Instinct",
    img: "/images/xkarbZrnCBVYbD2kRRdam9aKt0.jpg",
    desc: "Move beyond measurements and timers. Learn to read dough, feel fermentation, and work with confidence under real conditions.",
  },
];

function ExperienceItem({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 1;

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

  const imageBlock = (
    <div style={{ width: 476, flexShrink: 0, borderRadius: 16, overflow: "hidden", height: 319 }}>
      <Image
        src={exp.img}
        alt={exp.title}
        width={476}
        height={319}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );

  const textBlock = (
    <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 48px",
    }}>
      <h3 style={{
        fontFamily: '"Instrument Serif", Georgia, serif',
        fontStyle: "normal",
        fontSize: 34,
        color: "#0d120b",
        lineHeight: 1.15,
        marginBottom: 16,
        marginTop: 0,
      }}>
        {exp.title}
      </h3>
      <p style={{
        fontFamily: "Satoshi, ui-sans-serif, sans-serif",
        fontSize: 17,
        color: "#2c3229",
        lineHeight: 1.6,
        margin: 0,
      }}>
        {exp.desc}
      </p>
    </div>
  );

  const divider = (
    <div style={{ width: 1, flexShrink: 0, background: "rgba(13,18,11,0.18)", alignSelf: "stretch" }} />
  );

  return (
    <li
      ref={ref}
      style={{
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${index * 0.08}s, transform 0.7s ease ${index * 0.08}s`,
      }}
    >
      {/* Number badge centered on the vertical line */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 48,
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{
          backgroundColor: "#5a6056",
          color: "#dfe5d7",
          borderRadius: 10,
          padding: "6px 14px",
          fontSize: 12,
          fontFamily: "Satoshi, ui-sans-serif, sans-serif",
          letterSpacing: "0.05em",
          lineHeight: 1,
        }}>
          {exp.num}
        </div>
      </div>

      {/* Content row: image | 1px line | text */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        width: "100%",
      }}>
        {/* Mobile */}
        <div className="md:hidden" style={{ width: "100%" }}>
          <div style={{ borderRadius: 14, overflow: "hidden", marginBottom: 20, height: 240 }}>
            <Image src={exp.img} alt={exp.title} width={476} height={240}
              style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <h3 style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontStyle: "normal",
            fontSize: 28, color: "#0d120b", lineHeight: 1.2, marginBottom: 10, marginTop: 0 }}>
            {exp.title}
          </h3>
          <p style={{ fontFamily: "Satoshi, sans-serif", fontSize: 16, color: "#2c3229",
            lineHeight: 1.6, margin: 0 }}>{exp.desc}</p>
        </div>

        {/* Desktop alternating */}
        <div className="hidden md:flex" style={{ width: "100%", alignItems: "stretch" }}>
          {isEven ? <>{textBlock}{divider}{imageBlock}</> : <>{imageBlock}{divider}{textBlock}</>}
        </div>
      </div>
    </li>
  );
}

export function ExperiencesSection() {
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
    <section
      style={{
        backgroundColor: "#dfe5d7",
        paddingTop: 80,
        paddingBottom: 100,
        borderRadius: "30px 30px 0 0",
        marginTop: -30,
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* Section header */}
      <div
        ref={headerRef}
        style={{
          textAlign: "center",
          marginBottom: 20,
          padding: "0 24px",
          opacity: headerVis ? 1 : 0,
          transform: headerVis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <h2 style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontStyle: "italic",
          fontSize: "clamp(40px, 5.5vw, 60px)",
          color: "#0d120b",
          lineHeight: 1.1,
          letterSpacing: "-0.5px",
          margin: "0 0 12px",
        }}>
          What the 48 Hours Hold
        </h2>
        <p style={{
          fontFamily: "Satoshi, ui-sans-serif, sans-serif",
          fontSize: 18,
          color: "#2c3229",
          margin: 0,
        }}>
          Every moment designed for depth, craft, and mastery.
        </p>
      </div>

      {/* Timeline list with continuous center line */}
      <div style={{ position: "relative", maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
        {/* Continuous vertical line (desktop only) */}
        <div className="hidden md:block" style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: 1,
          backgroundColor: "rgba(13,18,11,0.15)",
          transform: "translateX(-50%)",
        }} />

        <ul style={{ padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 32 }}>
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.num} exp={exp} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
