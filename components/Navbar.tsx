import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-40 bg-transparent text-white">
      <div className="w-full px-8 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/kif-logo.png"
            alt="KIF Logo"
            width={200}
            height={64}
            priority
          />
        </div>

        <div className="hidden md:block absolute left-[70%] transform -translate-x-1/2">
          <div className="flex gap-12 text-[17px]">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Programs</a>
            <a href="#" className="hover:underline">Schedule</a>
            <a href="#" className="hover:underline">Speakers</a>
            <a href="#" className="hover:underline">Venue</a>
          </div>
        </div>

        <div className="flex items-center">
          <button className="bg-red-500 px-5 py-2 rounded-full hover:bg-red-600 transition">
            Register Now
          </button>
        </div>
      </div>
    </nav>
  );
}