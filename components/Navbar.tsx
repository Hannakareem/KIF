export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-black text-white">
      <div className="font-bold text-xl">
        KIF 2026
      </div>

      <div className="hidden md:flex gap-8">
        <a href="#">Home</a>
        <a href="#">Programs</a>
        <a href="#">Schedule</a>
        <a href="#">Speakers</a>
        <a href="#">Venue</a>
      </div>

      <button className="bg-red-500 px-5 py-2 rounded-full">
        Register Now
      </button>
    </nav>
  );
}