import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import News from "../components/home/News";
import About from "../components/home/About";
import Programs from "../components/programs/Programs";
import Highlights from "../components/home/Highlights";
import Schedule from "../components/schedule/Schedule";
import Speakers from "../components/speakers/Speakers";
import FestivalHighlights from "../components/festival-highlights/FestivalHighlights";
import Partners from "../components/partners/Partners";
import FivePillars from "../components/home/FivePillars";
import highlights from "../data/highlights.json";
import Testimonials from "../components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <News />
      <About />
      <Highlights items={highlights} />
      <FivePillars />
      <Programs />
      <Speakers />
      <Testimonials />
      <FestivalHighlights />
      <Schedule />
      <Partners />
    </main>
  );
}