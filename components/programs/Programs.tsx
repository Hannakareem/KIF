"use client";

import Container from "../layout/Container";
import PageHeader from "../layout/PageHeader";

import {
  Rocket,
  Bot,
  Wrench,
  Palette,
  UserRound,
  Leaf,
  Gamepad2,
  Cpu,
  Glasses,
  Wifi,
  Plane,
  CreditCard,
  HeartPulse,
  Sprout,
  GraduationCap,
  BookOpen,
  Mic,
  Users,
  Building2,
  Sparkles,
} from "lucide-react";

const programs = [
  { title: "Startup Summit", icon: Rocket },
  { title: "AI & Future Tech", icon: Bot },
  { title: "Maker Fest", icon: Wrench },
  { title: "Design Thinking", icon: Palette },
  { title: "Women in Tech", icon: UserRound },
  { title: "Sustainability", icon: Leaf },
  { title: "Gaming Zone", icon: Gamepad2 },
  { title: "Robotics", icon: Cpu },
  { title: "AR / VR", icon: Glasses },
  { title: "IoT", icon: Wifi },
  { title: "Drone Tech", icon: Plane },
  { title: "FinTech", icon: CreditCard },
  { title: "HealthTech", icon: HeartPulse },
  { title: "AgriTech", icon: Sprout },
  { title: "EdTech", icon: GraduationCap },
  { title: "Workshops", icon: BookOpen },
  { title: "Pitch Arena", icon: Mic },
  { title: "Networking", icon: Users },
  { title: "Innovation Expo", icon: Building2 },
  { title: "Creative Economy", icon: Sparkles },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      <Container>
        <PageHeader
          eyebrow="Programs"
          title="Explore KIF Experiences"
          description="Discover innovation, technology, creativity, entrepreneurship, and future-focused experiences at Kerala Innovation Festival."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-12">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  p-6
                  h-44
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                "
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white/80 transition-colors duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="text-white font-medium text-lg leading-snug">
                    {program.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}