import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex items-start gap-4">
            <Image src="/images/nav/kif-logo.png" alt="KIF Logo" width={160} height={52} />

            <div className="max-w-md text-gray-300">
              <p className="mb-2">Kerala Innovation Festival is a celebration of ideas, startups and technology — bringing together innovators, creators, and changemakers.</p>
              <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Kerala Innovation Festival</p>
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="text-sm font-semibold mb-3">Explore</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#">Home</a></li>
                <li><a href="#">Programs</a></li>
                <li><a href="#">Speakers</a></li>
                <li><a href="#">Venue</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-zinc-400">
                <li>hello@innovationfestival.in</li>
                <li>Kerala Startup Mission, Kochi</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-sm font-semibold mb-6">Our Partners</h4>
          <p className="text-zinc-400">View all partners and sponsors on the partners page.</p>
          <div className="mt-4">
            <Link href="/partners" className="text-[#00A3FF] hover:underline">See partners</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
