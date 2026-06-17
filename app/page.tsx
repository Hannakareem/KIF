import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FivePillars from "../components/FivePillars";
import Stats from "../components/Stats";
import News from "../components/News";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <News />
      <About />
      <FivePillars />
    </main>
  );
}