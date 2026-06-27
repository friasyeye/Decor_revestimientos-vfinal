import { StarSparkleIcon } from "./icons";

const navLinks = ["Experiences", "Host", "Package", "Location", "FAQ"];
const socialLinks = ["Instagram", "Youtube", "X/Twitter", "Threads"];

const linkStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
  fontSize: 16,
  color: "rgba(223,229,215,0.75)",
  marginBottom: 12,
  textDecoration: "none",
};

const columnHeaderStyle: React.CSSProperties = {
  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
  fontSize: 14,
  fontWeight: 500,
  letterSpacing: "0.05em",
  color: "#dfe5d7",
  marginBottom: 16,
  display: "block",
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#5a6056" }}>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 px-6 md:px-20 py-16">
        {/* Left column: brand */}
        <div>
          {/* Logo row */}
          <div className="flex items-center gap-2 mb-3">
            <span className="shrink-0 w-4 h-4" style={{ color: "#dfe5d7" }}>
              <StarSparkleIcon className="w-full h-full" />
            </span>
            <span
              style={{
                fontFamily: '"Abhaya Libre", Georgia, serif',
                fontSize: 20,
                letterSpacing: "-0.4px",
                color: "#dfe5d7",
              }}
            >
              MaestroClass
            </span>
          </div>

          {/* Tagline */}
          <p
            className="leading-relaxed max-w-[280px] mb-10"
            style={{
              fontFamily: "Satoshi, ui-sans-serif, sans-serif",
              fontSize: 14,
              color: "rgba(223,229,215,0.7)",
            }}
          >
            Get an experience of 48-Hour immersive masterclass in sourdough, fire, and Italian
            tradition.
          </p>

          {/* Created by */}
          <p
            style={{
              fontFamily: "Satoshi, ui-sans-serif, sans-serif",
              fontSize: 13,
              color: "rgba(223,229,215,0.5)",
            }}
          >
            Created by Struxent
          </p>
        </div>

        {/* Navigation column */}
        <div>
          <span style={columnHeaderStyle}>Navigation</span>
          {navLinks.map((link) => (
            <a key={link} href="#" style={linkStyle}>
              {link}
            </a>
          ))}
        </div>

        {/* Social column */}
        <div>
          <span style={columnHeaderStyle}>Social</span>
          {socialLinks.map((link) => (
            <a key={link} href="#" style={linkStyle}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
