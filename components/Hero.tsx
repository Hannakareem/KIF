"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const words = [
    "INNOVATION",
    "STARTUPS",
    "TECHNOLOGY",
    "ENTREPRENEURSHIP",
    "IMPACT",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % words.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="px-[36px] pt-[150px] pb-[20px]">
      <div
        className="text-white uppercase"
        style={{ fontFamily: "Futura PT, Futura, sans-serif" }}
      >
        <h1 className="text-[110px] leading-[0.88] tracking-[-4px] font-normal">
          SHAPING
        </h1>

        <h1 className="text-[110px] leading-[0.88] tracking-[-4px] font-normal">
          THE <span className="text-[#FF3B30]">FUTURE</span>
        </h1>
<div className="relative h-[120px] overflow-hidden">
  <motion.h1
    key={words[index]}
    animate={{
      y: [40, 0],
      opacity: [0, 1],
    }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
    }}
    className="absolute left-0 top-0 text-[110px] leading-[0.88] tracking-[-4px] font-normal text-white"
  >
    OF {words[index]}
  </motion.h1>
</div>
      </div>

      <div
        className="flex items-center gap-16 mt-8 text-white"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        <div className="flex items-center gap-3">
          <CalendarDays size={24} strokeWidth={1.7} />
          <span className="text-[18px]">
            25–26 September 2026
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={24} strokeWidth={1.7} />
          <span className="text-[18px]">
            Kerala Startup Mission, Kochi
          </span>
        </div>
      </div>
    </section>
  );
}