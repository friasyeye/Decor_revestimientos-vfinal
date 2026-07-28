import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PHONE = "+34 603 14 30 50";
const PHONE_HREF = "tel:+34603143050";
const WHATSAPP_HREF = "https://wa.me/34603143050";
const EMAIL = "contacto@decorrevestimientos.com";
const EMAIL_HREF = "mailto:contacto@decorrevestimientos.com";

const contacts = [
  {
    label: "Teléfono",
    value: PHONE,
    actions: [
      { text: "WhatsApp", href: WHATSAPP_HREF, primary: true },
      { text: "Llamar", href: PHONE_HREF, primary: false },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Correo electrónico",
    value: EMAIL,
    actions: [
      { text: "Enviar correo", href: EMAIL_HREF, primary: true },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Ubicación",
    value: "Barcelona, España",
    actions: [
      { text: "Ver en Google Maps", href: "https://maps.google.com/?q=Barcelona,España", primary: false },
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 22, height: 22 }}>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export function ContactoContent() {
  return (
    <>
      <style>{`
        .contacto-action {
          transition: background-color 0.22s ease, color 0.22s ease, transform 0.22s ease;
        }
        .contacto-action:hover {
          transform: translateY(-1px);
        }
        .contacto-action--primary {
          background-color: #111111;
          color: #F5F5F5;
        }
        .contacto-action--primary:hover {
          background-color: transparent;
          color: #111111;
        }
        .contacto-action--secondary {
          background-color: transparent;
          color: #111111;
        }
        .contacto-action--secondary:hover {
          background-color: #111111;
          color: #F5F5F5;
        }
      `}</style>
      <Navbar />
      <main>
        <section
          style={{
            minHeight: "100vh",
            backgroundColor: "#F5F5F5",
            display: "flex",
            alignItems: "center",
            paddingTop: 120,
            paddingBottom: 100,
            boxSizing: "border-box",
          }}
        >
          <div className="dc-container" style={{ maxWidth: 760, margin: "0 auto" }}>

            {/* Header */}
            <div style={{ marginBottom: "3.5rem" }}>
              <h1
                style={{
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(42px, 6vw, 72px)",
                  color: "#111111",
                  lineHeight: 1.05,
                  letterSpacing: "-0.5px",
                  margin: "0 0 0.7rem 0",
                }}
              >
                Hablemos
              </h1>
              <p
                style={{
                  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                  fontSize: "clamp(15px, 1.5vw, 17px)",
                  color: "#6B6B6B",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                Estamos en Barcelona y respondemos en menos de 24 horas.
              </p>
            </div>

            {/* Cards de contacto */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {contacts.map((c, i) => (
                <div
                  key={i}
                  style={{
                    borderTop: "1px solid rgba(17,17,17,0.1)",
                    ...(i === contacts.length - 1 ? { borderBottom: "1px solid rgba(17,17,17,0.1)" } : {}),
                    padding: "32px 0",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  {/* Icono + texto */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 16, flex: 1, minWidth: 0 }}>
                    <span style={{ color: "#6B6B6B", flexShrink: 0, marginTop: 2 }}>
                      {c.icon}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                          fontSize: "12px",
                          fontWeight: 500,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#9A9A9A",
                          margin: "0 0 4px 0",
                        }}
                      >
                        {c.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                          fontSize: "clamp(17px, 1.8vw, 20px)",
                          fontWeight: 500,
                          color: "#111111",
                          margin: 0,
                          letterSpacing: "-0.2px",
                        }}
                      >
                        {c.value}
                      </p>
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div style={{ display: "flex", gap: 10, flexShrink: 0, alignItems: "center" }}>
                    {c.actions.map((action) => (
                      <a
                        key={action.text}
                        href={action.href}
                        target={action.href.startsWith("http") ? "_blank" : undefined}
                        rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`contacto-action ${action.primary ? "contacto-action--primary" : "contacto-action--secondary"}`}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "10px 20px",
                          borderRadius: "6px",
                          border: "1.5px solid #111111",
                          fontSize: "14px",
                          fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                          fontWeight: 500,
                          letterSpacing: "0.02em",
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {action.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Nota al pie */}
            <p
              style={{
                fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                fontSize: "13px",
                color: "#9A9A9A",
                marginTop: "2.5rem",
                lineHeight: 1.6,
              }}
            >
              * Realizamos visitas gratuitas para presupuestar tu proyecto en cualquier punto de Barcelona y alrededores.
            </p>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
