"use client";

import TestimonialCarousel from "./TestimonialCarousel-WithFrames";

const TESTIMONIALS = [
  {
    quote:
      "I can say my day was made coming here and seeing all this happen. Extremely proud of what you have all achieved.",
    author: "Kris Gopalakrishnan • Co-founder, Infosys",
    image: "/images/testimonials/kris.jpg",
    alt: "Kris Gopalakrishnan",
  },
  {
    quote:
      "I believe opportunities don't just happen; they need to be created. As members of the film industry, we have a responsibility to create opportunities for talented people.",
    author: "Nikhila Vimal • Indian Actress",
    image: "/images/testimonials/nikila.jpg",
    alt: "Nikhila Vimal",
  },
  {
    quote:
      "KIF goes beyond technology by bringing together creativity, arts, design and innovation to build a Creative Economy.",
    author: "Anoop Ambika • CEO, Kerala Startup Mission",
    image: "/images/testimonials/anoop.jpg",
    alt: "Anoop Ambika",
  },
];

function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--color-foreground)' }}>
            What Our Speakers Say
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Hear from industry leaders and creative professionals about their experience
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="max-w-6xl mx-auto rounded-2xl shadow-md overflow-hidden"
          style={{ backgroundColor: 'var(--card-bg)', border: '1px solid rgba(255,255,255,0.04)' }}
        >
          <TestimonialCarousel testimonials={TESTIMONIALS} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
