export default function News() {
  const items = [
    {
      id: 1,
      date: "June 10, 2026",
      title: "Call for Startups: Apply for Product Showcases",
    },
    {
      id: 2,
      date: "May 28, 2026",
      title: "Keynote Speaker Announcement: Dr. Asha Menon",
    },
    {
      id: 3,
      date: "April 15, 2026",
      title: "Volunteer Registration Now Open",
    },
  ];

  const loop = [...items, ...items];

  return (
    <section className="py-4 bg-black text-white border-t border-zinc-800">
      <div className="w-full overflow-hidden">
        <div className="flex items-center">
          <div className="flex-none px-8">
            <h3 className="text-[16px] font-medium uppercase">
              Latest News
            </h3>
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="ticker-track flex whitespace-nowrap">
              {loop.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-4 mr-16"
                >
                  <span className="text-white/60 text-sm">
                    {item.date}
                  </span>

                 <span className="text-[18px] text-[#00A3FF]">
                    {item.title}
                  </span>

                  <span className="text-[#00A3FF] text-xl">
                    •
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}