import Image from "next/image";

export function LocationSection() {
  return (
    <section style={{ backgroundColor: "#dfe5d7" }}>
      {/* Photos row — flush, no horizontal padding */}
      <div className="mb-16 grid grid-cols-1 gap-2 md:grid-cols-[1fr_2fr]">
        {/* Narrower photo */}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/3iC1MXJJcUe9OZi5KP7RvyfbzXE.jpg"
            alt="Tuscan estate aerial view"
            width={800}
            height={400}
            className="h-[400px] w-full object-cover"
          />
        </div>
        {/* Wider photo */}
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/qi31jTCjPGBFLq2Bsxyr7jMEt3U.jpg"
            alt="Tuscan countryside aerial view"
            width={800}
            height={400}
            className="h-[400px] w-full object-cover"
          />
        </div>
      </div>

      {/* Text block */}
      <div className="px-6 pb-20 md:px-20">
        <h2
          className="mb-3 text-center italic"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "#0d120b",
          }}
        >
          Set in the Heart of Tuscany
        </h2>

        <p
          className="mb-10 text-center"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "18px",
            color: "#2c3229",
          }}
        >
          Where tradition, land, and craft intersect.
        </p>

        <p
          className="mx-auto mb-4 max-w-2xl text-center"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "18px",
            color: "#2c3229",
          }}
        >
          The masterclass takes place in a private Tuscan estate.
        </p>

        <p
          className="mx-auto max-w-2xl text-center"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: "18px",
            color: "#2c3229",
          }}
        >
          This location is surrounded by olive groves and vineyards, far from
          tourist routes and distractions. The climate, ingredients, and pace of
          life here are essential to understanding the craft. Exact location
          details are shared after your application is approved.
        </p>
      </div>
    </section>
  );
}
