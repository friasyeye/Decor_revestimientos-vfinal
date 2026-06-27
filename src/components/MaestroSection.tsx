import Image from "next/image";

export default function MaestroSection() {
  return (
    <section
      className="px-6 py-20 md:px-20"
      style={{ backgroundColor: "#dfe5d7" }}
    >
      {/* Label */}
      <p
        className="text-center mb-2 tracking-wider"
        style={{ color: "#2c3229", fontSize: "14px" }}
      >
        Meet the Maestro
      </p>

      {/* Heading */}
      <h2
        className="text-center mb-10"
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontStyle: "italic",
          fontSize: "clamp(40px, 6vw, 64px)",
          color: "#0d120b",
          lineHeight: 1.1,
        }}
      >
        Giovanni Rossi
      </h2>

      {/* Portrait */}
      <div className="mx-auto" style={{ maxWidth: "900px" }}>
        <Image
          src="/images/5qnNbBZBmCAAJDt4Jo1UUDzZyRk.jpg"
          alt="Giovanni Rossi — man in apron with flour-dusted hands"
          width={900}
          height={506}
          className="w-full h-auto rounded-2xl"
          priority
        />
      </div>

      {/* Bio — 2-column on md+, 1-column on mobile */}
      <div
        className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        style={{ maxWidth: "900px" }}
      >
        <p
          className="leading-relaxed"
          style={{ color: "#2c3229", fontSize: "18px" }}
        >
          For over 20 years, Giovanni has studied dough the way others study
          wine. His training was shaped by the old masters of Neapolitan pizza,
          then refined in the countryside of Tuscany, where slower rhythms
          allowed technique to evolve into instinct.
        </p>
        <p
          className="leading-relaxed"
          style={{ color: "#2c3229", fontSize: "18px" }}
        >
          His work has fed Michelin-star kitchens, private estates, and chefs
          who came for mastery. Those who learn from him don&apos;t leave with
          recipes. They leave with judgment, confidence, and a deeper
          relationship to their work.
        </p>
      </div>
    </section>
  );
}
