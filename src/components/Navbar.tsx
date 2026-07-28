"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ESTANCIAS = [
  { label: "Baños", href: "/estancias/banos" },
  { label: "Cocina", href: "/estancias/cocina" },
  { label: "Terrazas", href: "/estancias/terrazas" },
  { label: "Piscinas", href: "/estancias/piscinas" },
];

const SIMPLE_LINKS = [
  { label: "Superficies", href: "/superficies" },
  { label: "Colaboraciones", href: "/colaboraciones" },
  { label: "Galería", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        width: 13,
        height: 13,
        flexShrink: 0,
        transition: "transform 0.25s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}

const LIGHT_HERO_PATHS = ["/estancias/banos", "/estancias/cocina", "/estancias/terrazas", "/estancias/piscinas", "/colaboraciones", "/superficies"];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const hasLightHero = LIGHT_HERO_PATHS.includes(pathname);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [estanciasHovered, setEstanciasHovered] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMobileAccordionOpen(false);
  }, [pathname]);

  // Bloquea scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  function openDesktopDropdown() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopDropdownOpen(true);
  }

  function scheduleCloseDesktopDropdown() {
    closeTimer.current = setTimeout(() => setDesktopDropdownOpen(false), 160);
  }

  // Colores según estado de scroll y si el menú está abierto
  const onDark = !scrolled && !hasLightHero; // sobre fondo oscuro (hero)
  const navBg = menuOpen
    ? (onDark ? "rgba(17,17,17,0.97)" : "rgba(245,245,245,0.97)")
    : scrolled
      ? "rgba(245,245,245,0.94)"
      : "transparent";
  const borderBottom = scrolled ? "1px solid #D4D4D4" : "none";
  const linkColor = onDark ? "#F5F5F5" : "#111111";

  // Para el menú móvil siempre usa las variables correctas según fondo actual
  const mobileBg = onDark ? "rgba(17,17,17,0.97)" : "rgba(245,245,245,0.97)";
  const mobileLinkColor = onDark ? "#F5F5F5" : "#111111";
  const mobileMutedColor = onDark ? "#9A9A9A" : "#6B6B6B";
  const mobileDivider = onDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  const ACCORDION_ITEM_H = 44; // px por subitem en acordeón

  return (
    <>
      <style>{`
        .hamburger-line {
          display: block;
          width: 22px;
          height: 1.5px;
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        /* ── Desktop dropdown ── */
        .dc-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 148px;
          border-radius: 6px;
          overflow: hidden;
          z-index: 200;
          animation: dcDropIn 0.18s ease;
        }
        @keyframes dcDropIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .dc-dropdown a {
          display: block;
          padding: 11px 18px;
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0;
          text-decoration: none;
          transition: background-color 0.15s ease, opacity 0.15s ease;
          white-space: nowrap;
        }

        /* ── Mobile menu ── */
        .dc-mobile-menu {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 49;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          padding-bottom: 32px;
        }
        .dc-mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: 22px;
          font-weight: 400;
          letter-spacing: 0;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: opacity 0.15s ease;
        }
        .dc-mobile-link:active { opacity: 0.6; }

        .dc-mobile-sublinks {
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.25s ease;
        }
        .dc-mobile-sublink {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 24px 0 40px;
          height: ${ACCORDION_ITEM_H}px;
          font-family: "Instrument Serif", Georgia, serif;
          font-style: italic;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0;
          text-decoration: none;
          transition: opacity 0.15s ease;
        }
        .dc-mobile-sublink:before {
          content: '';
          display: block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: currentColor;
          opacity: 0.4;
          flex-shrink: 0;
        }
        .dc-mobile-sublink:active { opacity: 0.6; }

        .dc-mobile-divider {
          height: 1px;
          margin: 0 24px;
        }
      `}</style>

      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{
          height: "72px",
          backgroundColor: navBg,
          borderBottom,
          backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
          transition: "background-color 0.3s ease, border-bottom 0.3s ease",
        }}
      >
        <div className="dc-container flex items-center justify-between h-full">

          {/* Logo */}
          <Link href="/" aria-label="Decor Revestimientos home" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
                fontSize: "16px",
                color: linkColor,
                letterSpacing: "0.09em",
                fontWeight: 600,
                lineHeight: 1,
                transition: "color 0.3s ease",
                textTransform: "uppercase",
              }}
            >
              Decor Revestimientos
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
            style={{ marginLeft: "auto", paddingLeft: "64px" }}
          >
            {!isHome && (
              <Link
                href="/"
                onMouseEnter={() => setHoveredLink("inicio")}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  fontSize: "17px",
                  color: linkColor,
                  letterSpacing: "0px",
                  textDecoration: "none",
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  opacity: hoveredLink === "inicio" ? 0.55 : 1,
                  transition: "opacity 0.18s ease",
                }}
              >
                Inicio
              </Link>
            )}

            {/* Estancias dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={openDesktopDropdown}
              onMouseLeave={scheduleCloseDesktopDropdown}
            >
              <button
                aria-expanded={desktopDropdownOpen}
                aria-haspopup="true"
                onMouseEnter={() => setEstanciasHovered(true)}
                onMouseLeave={() => setEstanciasHovered(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "17px",
                  color: linkColor,
                  letterSpacing: "0px",
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  opacity: estanciasHovered ? 0.55 : 1,
                  transition: "opacity 0.18s ease",
                }}
              >
                Estancias
                <ChevronIcon open={desktopDropdownOpen} />
              </button>

              {desktopDropdownOpen && (
                <div
                  className="dc-dropdown"
                  style={{
                    backgroundColor: scrolled ? "rgba(245,245,245,0.98)" : "rgba(26,26,26,0.96)",
                    backdropFilter: "blur(16px)",
                    border: scrolled ? "1.5px solid #D4D4D4" : "1.5px solid rgba(212,212,212,0.18)",
                    boxShadow: scrolled
                      ? "0 8px 32px rgba(0,0,0,0.10)"
                      : "0 8px 32px rgba(0,0,0,0.35)",
                  }}
                  onMouseEnter={openDesktopDropdown}
                  onMouseLeave={scheduleCloseDesktopDropdown}
                >
                  {ESTANCIAS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      style={{ color: scrolled ? "#111111" : "#F5F5F5" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = scrolled
                          ? "rgba(0,0,0,0.05)"
                          : "rgba(255,255,255,0.07)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Links simples */}
            {SIMPLE_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  fontSize: "17px",
                  color: linkColor,
                  letterSpacing: "0px",
                  textDecoration: "none",
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  opacity: hoveredLink === link.label ? 0.55 : 1,
                  transition: "opacity 0.18s ease",
                }}
              >
                {link.label}
              </a>
            ))}

            {/* CTA — estilo botón del hero */}
            <Link
              href="/contacto"
              onMouseEnter={() => setHoveredLink("cta")}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "9px 20px",
                border: `1.5px solid ${onDark ? "#D4D4D4" : "#111111"}`,
                borderRadius: "6px",
                fontSize: "13.5px",
                fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.03em",
                textDecoration: "none",
                backgroundColor: hoveredLink === "cta"
                  ? (onDark ? "#D4D4D4" : "#111111")
                  : "transparent",
                color: hoveredLink === "cta"
                  ? (onDark ? "#111111" : "#F5F5F5")
                  : linkColor,
                transform: hoveredLink === "cta" ? "translateY(-1px)" : "translateY(0)",
                transition: "background-color 0.22s ease, color 0.22s ease, border-color 0.22s ease, transform 0.22s ease",
              }}
            >
              Pide presupuesto
            </Link>
          </nav>

          {/* ── Hamburger ── */}
          <button
            className="flex md:hidden flex-col justify-center items-center gap-[5px] w-10 h-10 shrink-0"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <span className="hamburger-line" style={{ backgroundColor: linkColor, transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
            <span className="hamburger-line" style={{ backgroundColor: linkColor, opacity: menuOpen ? 0 : 1 }} />
            <span className="hamburger-line" style={{ backgroundColor: linkColor, transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <nav
          className="dc-mobile-menu md:hidden"
          aria-label="Mobile navigation"
          style={{ backgroundColor: mobileBg, backdropFilter: "blur(16px)" }}
        >
          {!isHome && (
            <>
              <Link href="/" className="dc-mobile-link" style={{ color: mobileLinkColor }}>
                Inicio
              </Link>
              <div className="dc-mobile-divider" style={{ backgroundColor: mobileDivider }} />
            </>
          )}

          {/* Estancias acordeón */}
          <button
            className="dc-mobile-link"
            onClick={() => setMobileAccordionOpen((v) => !v)}
            aria-expanded={mobileAccordionOpen}
            style={{ color: mobileLinkColor }}
          >
            Estancias
            <ChevronIcon open={mobileAccordionOpen} />
          </button>

          <div
            className="dc-mobile-sublinks"
            style={{
              maxHeight: mobileAccordionOpen ? `${ESTANCIAS.length * ACCORDION_ITEM_H}px` : "0px",
              opacity: mobileAccordionOpen ? 1 : 0,
            }}
          >
            {ESTANCIAS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="dc-mobile-sublink"
                onClick={() => setMenuOpen(false)}
                style={{ color: mobileMutedColor }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="dc-mobile-divider" style={{ backgroundColor: mobileDivider }} />

          {SIMPLE_LINKS.map((link, i) => (
            <span key={link.label}>
              <a
                href={link.href}
                className="dc-mobile-link"
                onClick={() => setMenuOpen(false)}
                style={{ color: mobileLinkColor }}
              >
                {link.label}
              </a>
              {i < SIMPLE_LINKS.length - 1 && (
                <div className="dc-mobile-divider" style={{ backgroundColor: mobileDivider }} />
              )}
            </span>
          ))}

          {/* CTA móvil */}
          <div style={{ padding: "20px 24px 0" }}>
            <Link
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 24px",
                border: `1.5px solid ${scrolled ? "#111111" : "#D4D4D4"}`,
                borderRadius: "6px",
                fontSize: "15px",
                fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.03em",
                textDecoration: "none",
                backgroundColor: scrolled ? "#111111" : "#D4D4D4",
                color: scrolled ? "#F5F5F5" : "#111111",
              }}
            >
              Pide presupuesto
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
