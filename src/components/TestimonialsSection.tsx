const testimonials = [
  {
    quote:
      "The setting, the pace, the level of attention. It felt more like an apprenticeship than a class.",
    name: "Sofia Klein",
    role: "Artisan Baker",
  },
  {
    quote:
      "I came expecting techniques. I left with intuition. This workshop reshaped my relationship with craft.",
    name: "Daniel Hart",
    role: "Restaurant Owner",
  },
  {
    quote:
      "This completely changed how I approach dough and teaching. I've never experienced anything like it.",
    name: "Elena Moretti",
    role: "Private Chef",
  },
  {
    quote:
      "This is not for everyone, and that's exactly why it's powerful. If you're serious, it's worth every investment.",
    name: "Emily Alvarez",
    role: "Food Consultant",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-6 py-20 md:px-20" style={{ backgroundColor: "#dfe5d7" }}>
      {/* Header */}
      <div className="text-center mb-14">
        <h2
          className="mb-3 text-[36px] md:text-[56px] leading-tight"
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontStyle: "italic",
            color: "#0d120b",
          }}
        >
          From Past Participants
        </h2>
        <p
          className="text-[18px]"
          style={{
            color: "#2c3229",
            fontFamily: "Satoshi, ui-sans-serif, sans-serif",
          }}
        >
          Reflections from those who&apos;ve been inside the experience.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl p-10 flex flex-col gap-6"
            style={{ backgroundColor: "#c2c8bc" }}
          >
            <p
              className="leading-relaxed flex-1 text-[24px]"
              style={{
                fontFamily: '"Instrument Serif", Georgia, serif',
                fontStyle: "italic",
                color: "#0d120b",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p
                className="text-[16px] font-medium"
                style={{
                  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                  color: "#0d120b",
                }}
              >
                {t.name}
              </p>
              <p
                className="text-[14px]"
                style={{
                  fontFamily: "Satoshi, ui-sans-serif, sans-serif",
                  color: "#2c3229",
                }}
              >
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
