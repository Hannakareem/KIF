"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";

export default function Speakers({ speakersData }: { speakersData?: { id: number; name: string; title: string; image: string }[] }) {
  // ---------- REAL SPEAKER LIST (SAFE) ----------
  const speakers = speakersData ?? Array.from({ length: 39 }, (_, i) => {
    const id = i + 1;
    return {
      id,
      name: `Speaker ${id}`,
      title: "Visionary • Innovator • Leader",
      image: `/speakers/all-speakers/${id}.jpg`,
    };
  });

  // ---------- FILTER OUT MISSING IMAGES ----------
  type SpeakerItem = {
    id: number;
    name: string;
    title: string;
    image: string;
  };

  const [validSpeakers, setValidSpeakers] = useState<SpeakerItem[]>([]);

  useEffect(() => {
    const checkImages = async () => {
      const results = await Promise.all(
        speakers.map((sp) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = sp.image;

            img.onload = () => resolve(sp);
            img.onerror = () => resolve(null);
          });
        })
      );

      setValidSpeakers(results.filter((item): item is SpeakerItem => Boolean(item)));
    };

    checkImages();
  }, []);

  // ---------- REVEAL HOOK ----------
  const useReveal = (): [React.RefObject<HTMLDivElement | null>, boolean] => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.15 }
      );

      if (ref.current) obs.observe(ref.current);

      return () => obs.disconnect();
    }, []);

    return [ref, visible];
  };

  // ---------- CARD ----------
  function SpeakerCard({ speaker, index }: { speaker: SpeakerItem; index: number }) {
    const [ref, visible] = useReveal();

    return (
      <div
        ref={ref}
        className={`bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 20}ms` }}
      >
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-44 object-cover"
        />

        <div className="p-3 text-center">
          <h3 className="font-semibold text-sm">{speaker.name}</h3>
          <p className="text-xs text-zinc-400">{speaker.title}</p>
        </div>
      </div>
    );
  }

  const featured = validSpeakers.slice(0, 9);

  return (
    <section className="py-14">
      <Container>

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[0.4em] mb-4">
            “Voices that inspire change”
          </p>

          <h1 className="text-6xl font-extrabold uppercase">
            Speakers
          </h1>
        </div>

        {/* FEATURED */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Speakers
          </h2>

          <div className="relative flex justify-center items-center h-[360px]">
            {featured.map((speaker, i) => {
              const total = featured.length;
              const center = (total - 1) / 2;

              const distance = Math.abs(i - center);
              const scale = 1.25 - distance * 0.12;
              const yOffset = Math.pow(distance, 2) * 10;
              const rotate = (i - center) * 6;

              return (
                <div
                  key={speaker.id}
                  className="absolute transition-all duration-700 hover:scale-125"
                  style={{
                    transform: `
                      translateX(${(i - center) * 110}px)
                      translateY(${yOffset}px)
                      scale(${scale})
                      rotate(${rotate}deg)
                    `,
                    zIndex: Math.round(10 - distance),
                  }}
                >
                  <div className="w-36 md:w-44 lg:w-48">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-52 md:h-56 object-cover rounded-2xl shadow-xl border border-zinc-700"
                    />

                    <p className="text-center text-xs md:text-sm mt-2 text-zinc-300">
                      {speaker.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ALL SPEAKERS */}
        <div className="mt-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            All Speakers
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {validSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                index={index}
              />
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}