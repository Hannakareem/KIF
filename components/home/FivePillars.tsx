"use client";

import { motion } from "motion/react";

const pillars = [
  {
    title: "AI",
    movingText: "ARTIFICIAL INTELLIGENCE",
    bg: "bg-sky-600",
  },
  {
    title: "DEEP TECH",
    movingText: "DEEP TECHNOLOGY",
    bg: "bg-cyan-500",
  },
  {
    title: "SUSTAINABILITY",
    movingText: "SUSTAINABLE FUTURES",
    bg: "bg-green-700",
  },
  {
    title: "CREATIVE ECONOMY",
    movingText: "CREATIVE ECONOMY",
    bg: "bg-red-600",
  },
  {
    title: "FOOD TECH",
    movingText: "FOOD TECHNOLOGY",
    bg: "bg-yellow-500",
  },
];

export default function FivePillars() {
  return (
    <section className="bg-black text-white py-20">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold">
          FIVE PILLARS OF KIF
        </h2>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -150 : 150,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className={`relative overflow-hidden rounded-3xl p-8 md:p-12 ${pillar.bg}`}
          >
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="whitespace-nowrap text-[12vw] md:text-[8vw] font-black text-black/10">
                {pillar.movingText}
              </h2>
            </div>

            {/* Content */}
            <div
              className={`relative z-10 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="max-w-xl">
                <p className="uppercase tracking-[0.4em] text-white/70 text-sm mb-3">
                  Pillar {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-4xl md:text-7xl font-bold">
                  {pillar.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}