"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, scroll, spring } from "motion";

const pillars = [
  {
    title: "AI",
    image: "/images/pillars/ai.jpg",
    bg: "bg-sky-500",
  },
  {
    title: "DEEP TECH",
    image: "/images/pillars/deeptech.jpg",
    bg: "bg-cyan-500",
  },
  {
    title: "SUSTAINABILITY",
    image: "/images/pillars/sustainability.jpg",
    bg: "bg-green-600",
  },
  {
    title: "CREATIVE",
    image: "/images/pillars/creative.jpg",
    bg: "bg-red-500",
  },
  {
    title: "FOOD TECH",
    image: "/images/pillars/foodtech.jpg",
    bg: "bg-yellow-400",
  },
];

export default function FivePillars() {
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = document.querySelectorAll(".pillar");

    if (!ulRef.current) return;

    const controls = animate(
      ulRef.current,
      {
        transform: [
          "none",
          `translateX(-${(items.length - 1) * 100}vw)`,
        ],
      },
      {
        easing: spring(),
      }
    );

    const section = document.querySelector("#pillars");

    if (section) {
      scroll(controls, { target: section });
    }
  }, []);

  return (
    <section id="pillars" className="h-[500vh] relative">
      <ul ref={ulRef} className="flex sticky top-0">
        {pillars.map((pillar) => (
          <li
            key={pillar.title}
            className={`pillar h-screen w-screen ${pillar.bg} flex flex-col justify-center items-center overflow-hidden relative`}
          >
            <h2 className="text-[18vw] font-black text-black">
              {pillar.title}
            </h2>

            <Image
              src={pillar.image}
              width={600}
              height={600}
              alt={pillar.title}
              className="absolute bottom-0 w-[400px] md:w-[550px]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}