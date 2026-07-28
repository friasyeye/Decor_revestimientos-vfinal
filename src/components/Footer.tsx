import Link from "next/link";

const PHONE = "+34 603 14 30 50";
const PHONE_HREF = "tel:+34603143050";
const EMAIL = "contacto@decorrevestimientos.com";
const EMAIL_HREF = "mailto:contacto@decorrevestimientos.com";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Baños", href: "/estancias/banos" },
  { label: "Cocina", href: "/estancias/cocina" },
  { label: "Terrazas", href: "/estancias/terrazas" },
  { label: "Piscinas", href: "/estancias/piscinas" },
  { label: "Superficies", href: "/superficies" },
  { label: "Colaboraciones", href: "/colaboraciones" },
  { label: "Galería", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
];

const contactLinks = [
  { label: PHONE, href: PHONE_HREF },
  { label: EMAIL, href: EMAIL_HREF },
];

const linkStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
  fontSize: 16,
  color: "rgba(17,17,17,0.65)",
  marginBottom: 12,
  textDecoration: "none",
};

const columnHeaderStyle: React.CSSProperties = {
  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "0.05em",
  color: "#111111",
  marginBottom: 16,
  display: "block",
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#D4D4D4" }}>
      <div className="dc-container grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 py-16">
        {/* Left column: brand */}
        <div>
          {/* Logo row */}
          <div className="mb-3">
            <span
              style={{
                fontFamily: '"Abhaya Libre", Georgia, serif',
                fontSize: 20,
                letterSpacing: "-0.4px",
                color: "#111111",
              }}
            >
              Decor Revestimientos
            </span>
          </div>

          {/* Tagline */}
          <p
            className="leading-relaxed max-w-[280px] mb-10"
            style={{
              fontFamily: "Satoshi, ui-sans-serif, sans-serif",
              fontSize: 14,
              color: "#6B6B6B",
            }}
          >
            Revestimientos continuos en microcemento y Mortex. Baños, cocinas, suelos y
            piscinas en Barcelona y alrededores.
          </p>

          {/* Ubicación */}
          <p
            style={{
              fontFamily: "Satoshi, ui-sans-serif, sans-serif",
              fontSize: 13,
              color: "rgba(17,17,17,0.45)",
            }}
          >
            Barcelona y alrededores
          </p>
        </div>

        {/* Navigation column */}
        <nav aria-label="Navegación">
          <span style={columnHeaderStyle}>Navegación</span>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} style={linkStyle}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contact column */}
        <div>
          <span style={columnHeaderStyle}>Contacto</span>
          {contactLinks.map((link) => (
            <a key={link.href} href={link.href} style={linkStyle}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
