const pillars = [
  { title: "AI", color: "bg-sky-600" },
  { title: "Deep Tech", color: "bg-cyan-500" },
  { title: "Sustainability", color: "bg-green-700" },
  { title: "Creative Economy", color: "bg-red-600" },
  { title: "Food Tech", color: "bg-yellow-500" },
];

export default function FivePillars() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          FIVE PILLARS OF KIF
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`${pillar.color} h-64 md:h-96 rounded-lg flex items-end p-4`}
            >
              <h3 className="text-white font-semibold">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}