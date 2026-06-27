"use client";

import { useEffect, useState } from "react";
import { StarSparkleIcon } from "./icons";

const NAV_LINKS = [
  { label: "Experiences", href: "#experiences" },
  { label: "Host", href: "#host" },
  { label: "Package", href: "#package" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    const HERO_H = window.innerHeight;
    // Dark gallery section is roughly from 100vh to 200vh
    const GALLERY_END = HERO_H * 2.2;

    const handleScroll = () => {
      const y = window.scrollY;
      setOnDark(y > HERO_H * 0.85 && y < GALLERY_END);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = onDark ? "#dfe5d7" : "#0d120b";
  const btnBg = onDark ? "transparent" : "#171d15";
  const btnColor = onDark ? "#dfe5d7" : "#dfe5d7";
  const btnBorder = onDark ? "1.5px solid rgba(223,229,215,0.6)" : "1.5px solid transparent";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        height: "76px",
        transition: "color 0.3s ease",
      }}
    >
      <div className="flex items-center justify-between h-full px-6 md:px-10">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="MaestroClass home"
          style={{ transition: "color 0.3s ease" }}
        >
          <span style={{ width: "16px", height: "16px", display: "inline-flex", flexShrink: 0 }}>
            <span style={{ color: textColor, transition: "color 0.3s ease", display: "flex" }}>
              <StarSparkleIcon className="w-full h-full" />
            </span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-abhaya-libre), Georgia, serif",
              fontSize: "20px",
              color: textColor,
              letterSpacing: "-0.4px",
              lineHeight: 1,
              fontWeight: 600,
              transition: "color 0.3s ease",
            }}
          >
            MaestroClass
          </span>
        </a>

        {/* Center nav links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "18px",
                color: textColor,
                letterSpacing: "0.16px",
                textDecoration: "none",
                fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
                transition: "color 0.3s ease, opacity 0.15s ease",
              }}
              className="hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Apply Now button */}
        <a
          href="#apply"
          style={{
            backgroundColor: btnBg,
            color: btnColor,
            border: btnBorder,
            borderRadius: "100px",
            padding: "12px 24px",
            fontSize: "18px",
            fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
            textDecoration: "none",
            lineHeight: 1,
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            transition: "background-color 0.3s ease, border 0.3s ease, color 0.3s ease",
          }}
          className="hover:opacity-85 transition-opacity duration-150 shrink-0"
        >
          Apply Now
        </a>
      </div>
    </header>
  );
}
