"use client";

import Container from "../layout/Container";
import PageHeader from "../layout/PageHeader";

export default function Programs() {
  const programs = [
    "Startup Summit",
    "AI & Future Tech",
    "Maker Fest",
    "Design Thinking",
    "Women in Tech",
    "Sustainability",
    "Gaming Zone",
    "Robotics",
    "AR / VR",
    "IoT",
    "Drone Tech",
    "FinTech",
    "HealthTech",
    "AgriTech",
    "EdTech",
    "Workshops",
    "Pitch Arena",
    "Networking",
    "Innovation Expo",
    "Creative Economy",
  ];

  return (
    <section className="py-20">
      <Container>
        <PageHeader
          title="Programs"
          subtitle="Explore innovation, technology, entrepreneurship, and creative experiences at KIF."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl
              bg-white/5 backdrop-blur-xl border border-white/10
              hover:border-orange-500/50 hover:scale-105
              transition-all duration-500 p-6 h-44"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="text-4xl">
                  {["🚀","🤖","🛠️","🎨","👩‍💻","🌱","🎮","⚙️","🥽","📡","🚁","💳","🏥","🌾","📚","🧑‍🏫","🎤","🤝","🏛️","✨"][index]}
                </div>

                <h3 className="text-white font-semibold text-lg leading-snug">
                  {program}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}