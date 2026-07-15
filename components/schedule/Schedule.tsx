"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import Container from "../layout/Container";
import PageHeader from "../layout/PageHeader";
import type { Slot } from "../../lib/types";

function TimelineItem({
  slot,
  isLast,
}: {
  slot: Slot;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="relative flex gap-6"
    >
      {/* Time */}
      <div className="w-24 shrink-0 text-right">
        <p className="text-sm text-zinc-400 font-medium">
          {slot.time}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col items-center">
       <div className="z-10 h-5 w-5 rounded-full bg-red-500 ring-8 ring-red-500/20 shadow-[0_0_25px_rgba(239,68,68,0.8)]" />

        {!isLast && (
          <div className="w-[3px] flex-1 min-h-28 bg-gradient-to-b from-red-500 via-red-400 to-zinc-800" />
        )}
      </div>

     {/* Card */}
<motion.div
  whileHover={{
    scale: 1.02,
    y: -5,
  }}
  className="mb-10 flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:border-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,0.2)]"
>
  <div className="mb-4 flex items-center justify-between">
    <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">
      SESSION
    </span>

    <span className="text-xs text-zinc-500">
      {slot.time}
    </span>
  </div>

  <h3 className="text-2xl font-bold text-white">
    {slot.title}
  </h3>

  {slot.speakers && (
    <p className="mt-3 text-zinc-400">
      🎤 {slot.speakers}
    </p>
  )}
</motion.div>
    </motion.div>
  );
}

export default function Schedule({
  friday,
  saturday,
}: {
  friday?: Slot[];
  saturday?: Slot[];
}) {
  const f = friday ?? [];
  const s = saturday ?? [];
  console.log("Friday:", f);
console.log("Saturday:", s);

  const [day, setDay] = useState<"friday" | "saturday">("friday");
  const [query, setQuery] = useState("");

 const slots = useMemo(() => {
  const list = day === "friday" ? [...f] : [...s];

  if (query.trim() === "") return list;

  return list.filter((item) =>
    (
      item.title +
      " " +
      (item.speakers ?? "")
    )
      .toLowerCase()
      .includes(query.toLowerCase())
  );
}, [day, query, f, s]);

  return (
    <section className="bg-black py-20 text-white">
      <Container>

       <PageHeader
  title="KIF 2026 Schedule"
  subtitle="Experience every keynote, startup showcase, workshop and networking session through an interactive timeline."
/>
                {/* Day Selector */}
        <div className="sticky top-20 z-20 mb-10 flex justify-center">
          <div className="flex rounded-full border border-zinc-800 bg-zinc-900/80 p-2 backdrop-blur-xl">
            <button
              onClick={() => setDay("friday")}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${
                day === "friday"
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Friday
            </button>

            <button
              onClick={() => setDay("saturday")}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all ${
                day === "saturday"
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Saturday
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mx-auto mb-16 max-w-xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sessions or speakers..."
            className="w-full rounded-full border border-zinc-800 bg-zinc-900/70 px-6 py-4 text-white placeholder:text-zinc-500 focus:border-red-500 focus:outline-none"
          />
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">

          {/* Background Line */}
          <div className="absolute left-[108px] top-0 h-full w-[2px] bg-zinc-800" />

          {slots.map((slot, index) => (
  <TimelineItem
    key={`${slot.time}-${slot.title}`}
    slot={slot}
    isLast={index === slots.length - 1}
  />
))}

{slots.length === 0 && (
  <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-10 text-center text-zinc-400">
    No sessions found.
  </div>
)}
        </div>
              </Container>
    </section>
  );
}