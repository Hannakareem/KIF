import Image from "next/image";
import Lanyard from "@/components/Lanyard/Lanyard";

export default function About() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Campus Image */}
        <div className="relative h-64 md:h-[450px] rounded-xl mb-16 overflow-visible">
  <Image
    src="/images/about/campus.png"
    alt="Campus Image"
    fill
    priority
    className="object-cover rounded-xl"
  />
</div>
        {/* About Content */}
        <div className="relative flex flex-col lg:flex-row gap-12 md:gap-20 items-start">

          {/* Vertical ABOUT */}
          <div className="flex justify-center">
            <h2
              className="text-red-500 text-5xl md:text-7xl font-bold uppercase tracking-wider"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                lineHeight: 1,
              }}
            >
              ABOUT
            </h2>
          </div>

          {/* Text Content */}
          <div className="max-w-2xl">
            <p className="text-gray-300 text-sm md:text-base leading-7">
              Kerala Startup Mission (KSUM) is the Government of Kerala's
              nodal agency for entrepreneurship development and startup
              growth. Through its programs, infrastructure, funding support,
              and ecosystem initiatives, KSUM has helped build one of India's
              leading startup ecosystems.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-7 mt-5">
              Kerala Innovation Festival (KIF) 2026, KSUM's flagship event,
              is India's largest innovation festival, bringing together
              startups, students, innovators, investors, industry leaders,
              and policymakers.
            </p>

            <p className="text-gray-300 text-sm md:text-base leading-7 mt-5">
              Through exhibitions, summits, workshops, and networking
              sessions, KIF showcases innovations in AI, DeepTech,
              Sustainability, Creative Economy, and FoodTech, creating
              opportunities to connect, collaborate, and shape the future.
            </p>
          </div>
          <div className="hidden lg:block absolute right-0 -top-[65px] z-30">
  <div className="w-[320px] h-[500px]">
    <Lanyard
      frontImage="/images/kif-front.png"
      backImage="/images/kif-back.png"
      lanyardImage="/lanyard/kif-lanyard.png"
      position={[0, 0, 22]}
      gravity={[0, -40, 0]}
    />
  </div>
</div>

        
          

        </div>

      </div>
    </section>
  );
}