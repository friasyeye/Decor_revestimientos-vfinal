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

function RevealItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function ExperienceItem({ experience, index }: { experience: Experience; index: number }) {
  const isEven = index % 2 === 1;

  const imageBlock = (
    <div className="flex-shrink-0">
      <div className="relative w-full md:w-[480px] h-[280px] md:h-[360px] rounded-2xl overflow-hidden">
        <Image
          src={experience.img}
          alt={experience.title}
          width={480}
          height={360}
          className="w-full h-full object-cover"
          style={{ transition: "transform 0.6s ease" }}
        />
      </div>
    </div>
  );

  const divider = (
    <div className="hidden md:flex flex-col items-center gap-3 self-stretch flex-shrink-0 px-2">
      <div
        className="rounded-full px-3 py-1 flex-shrink-0"
        style={{ backgroundColor: "rgba(44,50,41,0.45)" }}
      >
        <span
          className="text-sm font-medium"
          style={{ color: "#dfe5d7", fontFamily: "Satoshi, sans-serif", letterSpacing: "0.05em" }}
        >
          {experience.num}
        </span>
      </div>
      <div className="flex-1 w-px" style={{ backgroundColor: "rgba(13,18,11,0.15)" }} />
    </div>
  );

  const textBlock = (
    <div className="flex-1 max-w-full md:max-w-[420px]">
      <h3
        className="leading-tight mb-4"
        style={{
          fontFamily: '"Instrument Serif", Georgia, serif',
          fontStyle: "italic",
          fontSize: "clamp(28px, 3.5vw, 40px)",
          color: "#0d120b",
        }}
      >
        {experience.title}
      </h3>
      <p
        className="text-[16px] md:text-[18px] leading-relaxed"
        style={{ color: "#2c3229", fontFamily: "Satoshi, sans-serif" }}
      >
        {experience.desc}
      </p>
    </div>
  );

  return (
    <RevealItem delay={0}>
      <div className="mb-16 md:mb-24">
        {/* Mobile: number + image + text */}
        <div className="md:hidden mb-2">
          <div
            className="inline-flex rounded-full px-3 py-1 mb-4"
            style={{ backgroundColor: "rgba(44,50,41,0.45)" }}
          >
            <span className="text-sm" style={{ color: "#dfe5d7", fontFamily: "Satoshi, sans-serif" }}>
              {experience.num}
            </span>
          </div>
          <div className="relative w-full h-[240px] rounded-2xl overflow-hidden mb-5">
            <Image src={experience.img} alt={experience.title} fill className="object-cover" />
          </div>
          {textBlock}
        </div>

        {/* Desktop: alternating layout */}
        <div className="hidden md:flex flex-row gap-0 items-center">
          {isEven ? (
            <>{textBlock}{divider}{imageBlock}</>
          ) : (
            <>{imageBlock}{divider}{textBlock}</>
          )}
        </div>
      </div>
    </RevealItem>
  );
}

export function ExperiencesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full px-6 md:px-20 py-24" style={{ backgroundColor: "#dfe5d7" }}>
      {/* Section header */}
      <div
        ref={headerRef}
        className="text-center mb-20 max-w-3xl mx-auto"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <h2
          className="leading-none mb-4"
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontStyle: "italic",
            fontSize: "clamp(40px, 6vw, 64px)",
            color: "#0d120b",
            letterSpacing: "-0.5px",
          }}
        >
          What the 48 Hours Hold
        </h2>
        <p
          className="text-[16px] md:text-[18px]"
          style={{ color: "#2c3229", fontFamily: "Satoshi, sans-serif" }}
        >
          Every moment designed for depth, craft, and mastery.
        </p>
      </div>

      {/* Experience items */}
      <div className="max-w-5xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceItem key={experience.num} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
}
