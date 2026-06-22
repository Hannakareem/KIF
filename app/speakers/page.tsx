import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import News from "@/components/home/News";
import About from "@/components/home/About";
import FestivalHighlights from "@/components/home/FestivalHighlights";
import FivePillars from "@/components/home/FivePillars";

import Programs from "@/components/programs/Programs";
import Speakers from "@/components/speakers/Speakers";
import Schedule from "@/components/schedule/Schedule";
import Partners from "@/components/partners/Partners";

// removed unused highlights import (replaced by FestivalHighlights)

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <News />
      <About />
      <FestivalHighlights />
      <FivePillars />
      <Programs />
      <Speakers />
      <Schedule />
      <Partners />
    </main>
  );
}