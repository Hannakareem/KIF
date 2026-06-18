import Image from "next/image";

export default function About() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Campus Image */}
        <div className="relative h-64 md:h-[450px] rounded-xl mb-10 overflow-hidden">
          <Image
            src="/images/about/campus.png"
            alt="Campus Image"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <h2 className="text-red-500 text-4xl md:text-6xl font-bold">
            About
          </h2>

          <div className="max-w-3xl">
            <p className="text-gray-300 leading-relaxed">
              The Kerala Innovation Festival (KIF) is a celebration of ideas,
              creativity, and collaboration bringing together innovators,
              startups, investors, and policymakers.
            </p>
          </div>
        </div>

        {/* Audience */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">
            WHO SHOULD ATTEND?
          </h3>

          <div className="flex flex-wrap gap-3">
            {[
              "Startups",
              "Students",
              "Innovators",
              "Policy Makers",
              "Creators",
              "Professionals",
            ].map((item) => (
              <span
                key={item}
                className="border border-zinc-600 px-4 py-2 rounded-full text-sm hover:border-red-500 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Card */}
        <div className="mt-12 bg-zinc-100 text-black rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-semibold">
            Stay tuned for KIF 2025
          </h3>
        </div>

      </div>
    </section>
  );
}