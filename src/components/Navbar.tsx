"use client";

import { StarSparkleIcon } from "./icons";

const NAV_LINKS = [
  { label: "Experiences", href: "#experiences" },
  { label: "Host", href: "#host" },
  { label: "Package", href: "#package" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{ height: "76px" }}
    >
      <div className="flex items-center justify-between h-full px-6 md:px-10">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="MaestroClass home"
        >
          <span
            style={{ width: "16px", height: "16px", display: "inline-flex", flexShrink: 0 }}
          >
            <StarSparkleIcon className="text-[#0d120b] w-full h-full" />
          </span>
          <span
            style={{
              fontFamily: "var(--font-abhaya-libre), Georgia, serif",
              fontSize: "20px",
              color: "#0d120b",
              letterSpacing: "-0.4px",
              lineHeight: 1,
              fontWeight: 600,
            }}
          >
            MaestroClass
          </span>
        </a>

        {/* Center-right nav links — hidden on mobile */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "18px",
                color: "#171d15",
                letterSpacing: "0.16px",
                textDecoration: "none",
                fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
              }}
              className="hover:opacity-70 transition-opacity duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Apply Now button */}
        <a
          href="#apply"
          style={{
            backgroundColor: "#171d15",
            color: "#dfe5d7",
            borderRadius: "100px",
            padding: "12px 24px",
            fontSize: "18px",
            fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
            textDecoration: "none",
            lineHeight: 1,
            display: "inline-flex",
            alignItems: "center",
            whiteSpace: "nowrap",
          }}
          className="hover:opacity-85 transition-opacity duration-150 shrink-0"
        >
          Apply Now
        </a>
      </div>
    </header>
  );
}
