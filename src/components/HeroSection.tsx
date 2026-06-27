export function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#b8c4a8",
      }}
    >
      {/* Sky gradient layer */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/CQolT7pNbKjqpl7iVfUegyYCSEE.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />
      {/* Vineyard landscape layer */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/WHoMq8xXXy3ogXpDpTqBo3Wth0A.png')",
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-instrument-serif), Georgia, serif",
            fontSize: "clamp(48px, 8vw, 88px)",
            fontStyle: "italic",
            color: "#0d120b",
            lineHeight: 1.1,
            letterSpacing: "-0.32px",
            marginBottom: "24px",
          }}
        >
          The Lost Art of Dough
        </h1>

        <p
          style={{
            fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
            fontSize: "18px",
            color: "#0d120b",
            maxWidth: "480px",
            lineHeight: 1.6,
            marginBottom: "40px",
          }}
        >
          A 48-Hour immersive masterclass in sourdough, fire, and Italian
          tradition. Hosted in the hills of Tuscany. Limited to twelve artisans.
        </p>

        <a
          href="#apply"
          style={{
            backgroundColor: "#0d120b",
            color: "#dfe5d7",
            borderRadius: "100px",
            padding: "16px 32px",
            fontSize: "18px",
            fontFamily: "Satoshi, ui-sans-serif, system-ui, sans-serif",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            lineHeight: 1,
          }}
        >
          Apply for a Seat
        </a>
      </div>
    </section>
  );
}
