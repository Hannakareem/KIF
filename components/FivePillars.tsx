import Image from "next/image";

const pillars = [
  { title: "AI", color: "bg-sky-600", img: "/images/pillars/ai.png" },
  { title: "Deep Tech", color: "bg-cyan-500", img: "/images/pillars/deepTech.png" },
  { title: "Sustainability", color: "bg-green-700", img: "/images/pillars/sustainability.png" },
  { title: "Creative Economy", color: "bg-red-600", img: "/images/pillars/creative-economy.png" },
  { title: "Food Tech", color: "bg-yellow-500", img: "/images/pillars/Foodtech.png" },
];

export default function FivePillars() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-16 tracking-wide">
          FIVE PILLARS OF KIF
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">

          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`
                ${pillar.color}
                relative
                h-64 md:h-96
                rounded-2xl
                flex flex-col items-center justify-center
                overflow-hidden
                shadow-xl
                hover:scale-105 hover:-translate-y-2
                transition duration-300
              `}
            >

              {/* Glow effect */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

              {/* Floating image (premium effect) */}
              <div className="relative z-10 -mt-6 mb-4">
                <Image
                  src={pillar.img}
                  alt={pillar.title}
                  width={90}
                  height={90}
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-white font-bold text-center text-lg md:text-xl">
                {pillar.title}
              </h3>

              {/* Soft bottom glow */}
              <div className="absolute bottom-0 w-full h-20 bg-black/20 blur-xl" />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}