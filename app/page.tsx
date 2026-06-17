import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import FivePillars from "../components/FivePillars";
import Stats from "../components/Stats";
<<<<<<< HEAD
import News from "../components/News";
=======
import NewsTicker from "../components/News";
>>>>>>> b11d4ee72afa66c066ed74052842aa289325c087

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