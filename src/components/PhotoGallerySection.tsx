"use client";

export function PhotoGallerySection() {
  return (
    <section
      style={{
        backgroundColor: "#111111",
        minHeight: "100vh",
        position: "relative",
        zIndex: 20,
      }}
      className="w-full flex items-center justify-center px-8 md:px-14"
    >
      <div style={{ maxWidth: 820, textAlign: "center" }}>
        <p
          style={{
            fontFamily: "Instrument Serif, Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.4vw, 34px)",
            color: "#DFE5D7",
            lineHeight: 1.35,
            marginBottom: "2rem",
          }}
        >
          Somos aplicadores especializados en microcemento y Mortex con más de 7 años de experiencia en Barcelona.
        </p>

        <p
          style={{
            fontFamily: "Instrument Serif, Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.4vw, 34px)",
            color: "#DFE5D7",
            lineHeight: 1.35,
          }}
        >
          Trabajamos en baños, suelos, piscinas, escaleras y proyectos de autor, siempre con visita técnica previa y ejecución completa del proyecto. Todo ello sin obra, sin escombros y sin intermediarios, sobre la superficie que ya tienes.
        </p>
      </div>
    </section>
  );
}
