"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Experiences", href: "#experiences" },
  { label: "Host", href: "#host" },
  { label: "Package", href: "#package" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sobre el hero (oscuro): texto blanco, sin fondo
  // Fuera del hero (secciones claras): fondo blanco sutil + texto negro
  const textColor = scrolled ? "#111111" : "#F5F5F5";
  const bgColor = scrolled ? "rgba(245,245,245,0.92)" : "transparent";
  const borderBottom = scrolled ? "1px solid #D4D4D4" : "none";
  const btnBg = scrolled ? "#111111" : "rgba(245,245,245,0.15)";
  const btnBorder = scrolled ? "1.5px solid #111111" : "1.5px solid rgba(245,245,245,0.7)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        height: "72px",
        backgroundColor: bgColor,
        borderBottom,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background-color 0.3s ease, border-bottom 0.3s ease",
      }}
    >
      <div className="flex items-center justify-between h-full px-6 md:px-10">
        {/* Logo */}
        <a
          href="/"
          className="shrink-0"
          aria-label="Decor Revestimientos home"
          style={{ transition: "color 0.3s ease" }}
        >
          <span
            style={{
              fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
              fontSize: "17px",
              color: textColor,
              letterSpacing: "0.08em",
              lineHeight: 1,
              fontWeight: 600,
              transition: "color 0.3s ease",
            }}
          >
            Decor Revestimientos
          </span>
        </a>

        {/* Center nav links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "15px",
                color: textColor,
                letterSpacing: "0.1px",
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

        {/* CTA button */}
        <a
          href="#contacto"
          style={{
            backgroundColor: btnBg,
            color: "#F5F5F5",
            border: btnBorder,
            borderRadius: "6px",
            padding: "10px 22px",
            fontSize: "15px",
            fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
            fontWeight: 500,
            textDecoration: "none",
            lineHeight: 1,
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
            transition: "background-color 0.3s ease, border 0.3s ease, color 0.3s ease",
          }}
          className="shrink-0"
        >
          Whatsapp
        </a>
      </div>
    </header>
  );
}
