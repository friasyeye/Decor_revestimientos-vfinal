import Image from "next/image";

const galleryImages = [
  { src: "/images/z821vNPNUJeKcWr76E0f3cymNo.jpg", alt: "Group around wooden table" },
  { src: "/images/mKRu7f0u4HUSaV8Zd395eBgOE.jpg", alt: "Family meal at vineyard" },
  { src: "/images/IHsObMetV7AEeyjOW0zgKhm5o9U.jpg", alt: "Removing bread from oven" },
  { src: "/images/AWlL1H4QLEme1sD4dGqa7dvnr8.jpg", alt: "Group of smiling people" },
  { src: "/images/1v28XS77BccorWaMJ7suXwVaKMo.jpg", alt: "Stacking firewood" },
  { src: "/images/rurWZkxRma3VIOLcSkpiVf8YaL0.jpg", alt: "Shaping dough at table" },
  { src: "/images/Ns2lwideopI3LuOCH5Oythwj2U.jpg", alt: "Five people sitting outdoors" },
  { src: "/images/VdvQOfJqXkm5iAiVXPlg5cBzdQ.jpg", alt: "Under olive trees" },
  { src: "/images/YoOdBvIm6cyatNpumE2HZD5YB2I.jpg", alt: "Outside stone building" },
  { src: "/images/kdn9lH05Uzi5oqeiBS5oKBY6Q.jpg", alt: "Walking vineyard path" },
] as const;

export default function WorkshopGallerySection() {
  return (
    <section
      className="px-6 py-20 md:px-20"
      style={{ backgroundColor: "#dfe5d7" }}
    >
      {/* Heading */}
      <h2
        className="text-center mb-3"
        style={{
          fontFamily: '"Instrument Serif", serif',
          fontStyle: "italic",
          fontSize: "clamp(36px, 5vw, 56px)",
          color: "#0d120b",
          lineHeight: 1.1,
        }}
      >
        Moments from the Workshop
      </h2>

      {/* Subtitle */}
      <p
        className="text-center mb-12"
        style={{ color: "#2c3229", fontSize: "18px" }}
      >
        Quiet mornings. Fire-lit nights. Work worth remembering.
      </p>

      {/* Photo grid */}
      <div
        className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        style={{ maxWidth: "1200px" }}
      >
        {galleryImages.map((image, index) => {
          // Every 3rd image (index 0, 3, 6, 9) gets tall portrait ratio
          const isTall = index % 3 === 0;
          const aspectClass = isTall ? "aspect-[3/4]" : "aspect-[4/3]";

          return (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-xl ${aspectClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
