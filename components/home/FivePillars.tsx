"use client";

<<<<<<< HEAD
import { useEffect, useRef } from "react";
import { animate, scroll, spring } from "motion";

const pillars = [
  {
    title: "AI",
    movingText: "ARTIFICIAL INTELLIGENCE",
    bg: "bg-sky-600",
  },
  {
    title: "DEEP TECH",
    movingText: "DEEP TECH",
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
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll(".pillar-slide");

    if (!ulRef.current || items.length === 0) return;

    const controls = animate(
      ulRef.current,
      {
        transform: [
          "translateX(0)",
          `translateX(-${(items.length - 1) * 100}vw)`,
        ],
      },
      {
        easing: spring(),
      }
    );

    const section = document.querySelector("#pillars-scroll");

    if (section) {
      scroll(controls, {
        target: section,
      });
    }
  }, []);

  return (
    <section className="bg-black text-white">
      {/* Section Heading */}
      <div className="py-24">
        <h2 className="text-center text-3xl md:text-5xl font-bold tracking-wide">
          FIVE PILLARS OF KIF
        </h2>
      </div>

      {/* Horizontal Scroll */}
      <section
        id="pillars-scroll"
        className="relative h-[500vh]"
      >
        <ul
          ref={ulRef}
          className="sticky top-0 flex h-screen"
        >
          {pillars.map((pillar, index) => (
            <li
              key={pillar.title}
              className={`pillar-slide relative h-screen w-screen shrink-0 overflow-hidden ${pillar.bg}`}
            >
              {/* Background Text */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <h2 className="whitespace-nowrap text-[12vw] md:text-[16vw] font-black text-black/10">
                  {pillar.movingText}
                </h2>
              </div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

              {/* Slide Number */}
              <div className="absolute top-10 right-10 z-20 text-white/40 text-3xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6">
                <p className="mb-4 uppercase tracking-[0.4em] text-white/70 text-sm md:text-base">
                  Pillar
                </p>

                <h3 className="text-5xl md:text-8xl font-bold text-white transition-transform duration-500 hover:scale-105">
                  {pillar.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </section>
=======
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
>>>>>>> 2b20c6a (My DomeGallery work)
    </section>
  );
}