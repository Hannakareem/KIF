"use client";

import CardSwap, { Card } from "@/components/ui/CardSwap";
import { Rocket, Globe, Leaf, Users, Lightbulb } from "lucide-react";

export default function WhyAttend() {
  return (
    <section className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-10xl md:text-7xl font-bold leading-tight">
              Why Attend{" "}
              <span className="text-orange-500">
                KIF 2026?
              </span>
            </h2>

            <p className="mt-8 text-xl text-zinc-400 max-w-xl">
              Join innovators, entrepreneurs, investors and industry leaders
              shaping Kerala's future as a global innovation hub.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative h-[200px] flex items-center justify-center">
            <CardSwap
              width={500}
              height={200}
              cardDistance={50}
              verticalDistance={50}
              delay={4000}
              pauseOnHover={true}
            >
              <Card>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Rocket className="text-sky-400" />
                    <h3 className="text-2xl font-bold text-sky-400">
                      A Decade of Impact
                    </h3>
                  </div>
                  <p className="text-zinc-300">
                    Celebrating 10+ years of Kerala Startup Mission's
                    contribution to innovation.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-green-400" />
                    <h3 className="text-2xl font-bold text-green-400">
                      Global Innovation Hub
                    </h3>
                  </div>
                  <p className="text-zinc-300">
                    Connect with startups, investors and ecosystem leaders
                    from around the world.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="text-red-400" />
                    <h3 className="text-2xl font-bold text-red-400">
                      Cross-Border Collaboration
                    </h3>
                  </div>
                  <p className="text-zinc-300">
                    Bringing together innovators, founders and enablers
                    globally.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="text-yellow-400" />
                    <h3 className="text-2xl font-bold text-yellow-400">
                      Sustainable Innovation
                    </h3>
                  </div>
                  <p className="text-zinc-300">
                    Explore green-tech, SDG-focused solutions and smart-city
                    initiatives.
                  </p>
                </div>
              </Card>

              <Card>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="text-orange-400" />
                    <h3 className="text-2xl font-bold text-orange-400">
                      Future Technologies
                    </h3>
                  </div>
                  <p className="text-zinc-300">
                    Discover AI, robotics, deep-tech and emerging innovation
                    trends.
                  </p>
                </div>
              </Card>
            </CardSwap>
          </div>

        </div>
      </div>
    </section>
  );
}