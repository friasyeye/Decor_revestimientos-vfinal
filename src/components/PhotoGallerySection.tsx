import Image from "next/image";

const photos = [
  {
    src: "/images/oxAs3awJ7m9V4sHOKzuHAiL0b0.jpg",
    alt: "Tuscan villa vineyard",
    offset: false,
  },
  {
    src: "/images/CMSqKS7ljFjUX1ul6BIQXpe0Pc.jpg",
    alt: "Bread baking at sunset",
    offset: true,
  },
  {
    src: "/images/S4ZTmItkEi1cWGNHDbJEN0O1zY.jpg",
    alt: "Stone farmhouse kitchen",
    offset: false,
  },
  {
    src: "/images/catBe2oDLW9NxJc1PzHxZSn6xY.jpg",
    alt: "Cypress tree dirt road",
    offset: false,
  },
] as const;

export function PhotoGallerySection() {
  return (
    <section
      style={{ backgroundColor: "#2c3229" }}
      className="w-full px-8 md:px-16 py-20"
    >
      {/* Desktop: horizontal row */}
      <div className="hidden md:flex flex-row gap-4 justify-center items-end max-w-6xl mx-auto">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className={`relative flex-1 rounded-2xl overflow-hidden${photo.offset ? " -mt-10" : ""}`}
            style={{ height: "520px" }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={520}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile: 2×2 grid */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative rounded-2xl overflow-hidden"
            style={{ height: "240px" }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={520}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
