import Image from "next/image";

interface CardData {
  title: string;
  desc: string;
  img: string;
}

const cards: CardData[] = [
  {
    title: "Personal Guidance",
    desc: "Direct access to the maestro throughout the experience.",
    img: "/images/PQG2GwhLLy7cIzpYItvStfLPNgQ.jpg",
  },
  {
    title: "Culinary",
    desc: "Private estate dinners, local wine pairings, and a guided market immersion with regional producers",
    img: "/images/jUruyIReP2hMt6XoadJ6BFLSk5E.jpg",
  },
  {
    title: "Materials",
    desc: "Every session, ingredient, tool, and resource is provided.",
    img: "/images/hYOHLXabWyjdEekAjazyOqWm8Y.jpg",
  },
  {
    title: "Accommodation",
    desc: "Two nights in a secluded countryside estate, shared only with fellow participants.",
    img: "/images/wXeQRFjGVqNnDdqh4kbOSklmvWY.jpg",
  },
];

function IncludedCard({ card }: { card: CardData }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ borderRadius: "20px", aspectRatio: "3 / 4" }}
    >
      <Image
        src={card.img}
        alt={card.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)",
        }}
      />
      {/* Card text */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3
          className="mb-2 italic"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "28px",
            color: "#dfe5d7",
          }}
        >
          {card.title}
        </h3>
        <p
          className="leading-relaxed"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "14px",
            color: "rgba(223,229,215,0.85)",
          }}
        >
          {card.desc}
        </p>
      </div>
    </div>
  );
}

export function WhatsIncludedSection() {
  return (
    <section
      className="px-6 py-24 md:px-20"
      style={{ backgroundColor: "#0d120b" }}
    >
      {/* Heading */}
      <h2
        className="mb-16 text-center italic"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "clamp(60px, 10vw, 140px)",
          color: "#dfe5d7",
          lineHeight: 1,
        }}
      >
        What&apos;s Included
      </h2>

      {/* 2×2 grid */}
      <div
        className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2"
        style={{ maxWidth: "900px" }}
      >
        {cards.map((card) => (
          <IncludedCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
