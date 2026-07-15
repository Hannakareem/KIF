"use client";

import { useEffect, useRef } from "react";

const pillars = [
  {
    title: "AI",
    movingText: "ARTIFICIAL INTELLIGENCE",
    description:
      "Exploring intelligent systems and emerging technologies.\nDriving innovation across industries and society.",
    bg: "bg-sky-600",
  },
  {
    title: "DEEP TECH",
    movingText: "DEEP TECH",
    description:
      "Breakthrough innovations rooted in science and engineering.\nTransforming research into real-world impact.",
    bg: "bg-cyan-500",
  },
  {
    title: "SUSTAINABILITY",
    movingText: "SUSTAINABLE FUTURES",
    description:
      "Advancing solutions for a resilient and sustainable future.\nBalancing growth, climate action, and wellbeing.",
    bg: "bg-green-700",
  },
  {
    title: "CREATIVE ECONOMY",
    movingText: "CREATIVE ECONOMY",
    description:
      "Empowering innovation through culture and creativity.\nUnlocking opportunities across creative industries.",
    bg: "bg-red-600",
  },
  {
    title: "FOOD TECH",
    movingText: "FOOD TECHNOLOGY",
    description:
      "Reimagining food systems through science and technology.\nEnhancing nutrition, production, and sustainability.",
    bg: "bg-yellow-500",
  },
];

export default function FivePillars() {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = ulRef.current;
    const items = document.querySelectorAll<HTMLElement>(".pillar-slide");
    const section = document.getElementById("pillars-scroll");

    if (!ul || items.length === 0 || !section) return;

    const updateTransform = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;
      const maxScrollDistance = sectionHeight - viewportHeight;
      const scrollY = window.scrollY;
      const start = sectionTop - viewportHeight;
      const end = sectionTop + maxScrollDistance;
      const progress = Math.min(
        1,
        Math.max(0, (scrollY - start) / Math.max(1, end - start))
      );

      ul.style.transform = `translateX(-${progress * (items.length - 1) * 100}vw)`;
    };

    updateTransform();
    window.addEventListener("scroll", updateTransform, { passive: true });
    window.addEventListener("resize", updateTransform);

    return () => {
      window.removeEventListener("scroll", updateTransform);
      window.removeEventListener("resize", updateTransform);
    };
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

  <p className="mt-8 max-w-2xl whitespace-pre-line text-base md:text-lg text-white/80 leading-relaxed">
    {pillar.description}
  </p>
</div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}