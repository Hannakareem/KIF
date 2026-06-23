"use client";

import "./CircularGallery.css";

export default function CircularGallery({
  items,
}: {
  items: { image: string; text: string }[];
}) {
  return (
    <div className="circular-gallery">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-52 object-cover"
            />

            <div className="p-4">
              <h3 className="text-white font-semibold text-center">
                {item.text}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}