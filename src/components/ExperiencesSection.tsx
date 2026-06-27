import Image from "next/image";

interface Experience {
  num: string;
  title: string;
  img: string;
  desc: string;
}

const experiences: Experience[] = [
  {
    num: "001",
    title: "The Science of Sourdough",
    img: "/images/CTYQjTOJGK5FVvbAkfOYUFmkVNQ.jpg",
    desc: "Master fermentation, hydration, and heat through guided dough work and live-fire baking. Learn why dough behaves the way it does, not just how to follow a recipe.",
  },
  {
    num: "002",
    title: "The Tuscan Market Immersion",
    img: "/images/uy1XcmmT2qiaTBk18eoukQqlPk.jpg",
    desc: "Walk the local markets with a chef's eye. Source flour, tomatoes, and basil directly from the people who grow and make them.",
  },
  {
    num: "003",
    title: "Private Wood-Fired Sessions",
    img: "/images/imeUcyMMbKYRMNhUDuVvx4Ns6mg.jpg",
    desc: "Hands-on oven time with direct, personal feedback. No demonstrations. No spectators. We make sure every participant works the fire.",
  },
  {
    num: "004",
    title: "Sunset Estate Dinner",
    img: "/images/WRCbmp2tgPvD2rZF622bBKVrbt0.jpg",
    desc: "An intimate dinner featuring your own creations, shared at a private Tuscan estate with all the participants as the sun goes down.",
  },
  {
    num: "005",
    title: "From Technique to Instinct",
    img: "/images/xkarbZrnCBVYbD2kRRdam9aKt0.jpg",
    desc: "Move beyond measurements and timers. Learn to read dough, feel fermentation, and work with confidence under real conditions.",
  },
];

function ExperienceItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const isEven = index % 2 === 1; // 0-indexed: odd index = even item (2,4)

  const imageBlock = (
    <div className="flex-shrink-0 w-full md:w-[480px]">
      <div className="relative w-full md:w-[480px] h-[280px] md:h-[360px] rounded-2xl overflow-hidden">
        <Image
          src={experience.img}
          alt={experience.title}
          width={480}
          height={360}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  const divider = (
    <div className="hidden md:flex flex-col items-center gap-3 self-stretch">
      {/* Number badge */}
      <div
        className="rounded-full px-3 py-1 flex-shrink-0"
        style={{ backgroundColor: "rgba(44,50,41,0.5)" }}
      >
        <span
          className="text-sm"
          style={{ color: "#dfe5d7", fontFamily: "Satoshi, sans-serif" }}
        >
          {experience.num}
        </span>
      </div>
      {/* Vertical line */}
      <div
        className="flex-1 w-px"
        style={{ backgroundColor: "rgba(13,18,11,0.15)" }}
      />
    </div>
  );

  const textBlock = (
    <div className="flex-1 max-w-full md:max-w-[440px]">
      <h3
        className="text-[32px] md:text-[40px] leading-tight mb-4"
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontStyle: "italic",
          color: "#0d120b",
        }}
      >
        {experience.title}
      </h3>
      <p
        className="text-[16px] md:text-[18px] leading-relaxed"
        style={{ color: "#2c3229", fontFamily: "Satoshi, sans-serif" }}
      >
        {experience.desc}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center mb-16 md:mb-20">
      {/* Mobile: number badge above image */}
      <div className="flex items-center gap-3 md:hidden">
        <div
          className="rounded-full px-3 py-1"
          style={{ backgroundColor: "rgba(44,50,41,0.5)" }}
        >
          <span
            className="text-sm"
            style={{ color: "#dfe5d7", fontFamily: "Satoshi, sans-serif" }}
          >
            {experience.num}
          </span>
        </div>
      </div>

      {/* Desktop layout: alternate image/text sides */}
      {isEven ? (
        <>
          <div className="hidden md:block">{textBlock}</div>
          <div className="hidden md:flex">{divider}</div>
          <div className="hidden md:block">{imageBlock}</div>
        </>
      ) : (
        <>
          <div className="hidden md:block">{imageBlock}</div>
          <div className="hidden md:flex">{divider}</div>
          <div className="hidden md:block">{textBlock}</div>
        </>
      )}

      {/* Mobile layout: always image on top, text below */}
      <div className="md:hidden w-full">{imageBlock}</div>
      <div className="md:hidden">{textBlock}</div>
    </div>
  );
}

export function ExperiencesSection() {
  return (
    <section
      className="w-full px-6 md:px-16 py-20"
      style={{ backgroundColor: "#dfe5d7" }}
    >
      {/* Section header */}
      <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
        <h2
          className="text-[40px] md:text-[64px] leading-none mb-4"
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontStyle: "italic",
            color: "#0d120b",
          }}
        >
          What the 48 Hours Hold
        </h2>
        <p
          className="text-[16px] md:text-[18px]"
          style={{ color: "#2c3229", fontFamily: "Satoshi, sans-serif" }}
        >
          Every moment designed for depth, craft, and mastery.
        </p>
      </div>

      {/* Experience items */}
      <div className="max-w-6xl mx-auto">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={experience.num}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
