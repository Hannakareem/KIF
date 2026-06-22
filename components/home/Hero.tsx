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
    <section className="section--hero text-white uppercase" style={{ fontFamily: "Futura PT, Futura, sans-serif" }}>
      <div>
        <h1 className="display-xxl font-normal">SHAPING</h1>

        <h1 className="display-xxl font-normal">THE <span style={{ color: "var(--color-accent-2)" }}>FUTURE</span></h1>

        <div className="hero-clip">
          <motion.h1
            key={words[index]}
            animate={{ y: [40, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-0 top-0 display-xxl font-normal text-white"
          >
            OF {words[index]}
          </motion.h1>
        </div>
      </div>

      <div className="flex items-center gap-16 mt-8 text-white" style={{ fontFamily: "Inter, sans-serif" }}>
        <div className="flex items-center gap-3">
          <CalendarDays size={24} strokeWidth={1.7} />
          <span className="lead">25–26 September 2026</span>
        </div>

        <div className="flex items-center gap-3">
          <MapPin size={24} strokeWidth={1.7} />
          <span className="lead">Kerala Startup Mission, Kochi</span>
        </div>
      </div>
    </section>
  );
}
