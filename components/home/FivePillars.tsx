"use client";

import { ContainerScroll, CardSticky } from "@/components/blocks/cards-stack";

const pillars = [
  { title: "AI", color: "bg-sky-600" },
  { title: "Deep Tech", color: "bg-cyan-500" },
  { title: "Sustainability", color: "bg-green-700" },
  { title: "Creative Economy", color: "bg-red-600" },
  { title: "Food Tech", color: "bg-yellow-500" },
];

export default function FivePillars() {
  return (
    <section className="bg-black text-white">
      <ContainerScroll className="min-h-[120vh] py-24">

        <h2 className="text-center text-3xl md:text-5xl font-bold mb-20">
          FIVE PILLARS OF KIF
        </h2>

        <div className="relative flex justify-center">
          <div className="relative w-[320px] md:w-[420px]">

            {pillars.map((pillar, index) => (
              <CardSticky
                key={pillar.title}
                index={index + 2}
                className={`${pillar.color} h-72 md:h-80 p-6 flex items-end text-white font-semibold shadow-xl`}
              >
                <h3 className="text-lg">{pillar.title}</h3>
              </CardSticky>
            ))}

          </div>
        </div>

      </ContainerScroll>
    </section>
  );
}
