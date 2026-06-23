"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  image: string;
  alt: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between gap-8 px-8 py-16 lg:px-16 lg:py-24">
        {/* Left Arrow Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-transform active:scale-95"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-foreground)' }}
          aria-label="Previous testimonial"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Main Content Container */}
        <div className="flex-1 flex items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {/* Image with Layered Frames */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
            {/* Background Frame Layer 3 (largest, most transparent) */}
            <div
              className="absolute inset-0 -z-30 rounded-2xl transform translate-x-4 translate-y-4"
              style={{ backgroundColor: 'rgba(0,163,255,0.12)' }}
            />

            <div
              className="absolute inset-0 -z-20 rounded-2xl transform translate-x-2 translate-y-2"
              style={{ backgroundColor: 'rgba(0,163,255,0.18)' }}
            />

            <div
              className="absolute inset-0 -z-10 rounded-2xl transform translate-x-1 translate-y-1"
              style={{ backgroundColor: 'rgba(0,163,255,0.28)' }}
            />

            {/* Main Profile Image */}
            <div className="relative w-full h-full">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.alt}
                fill
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
              {/* Gradient overlay for depth */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,163,255,0.08), rgba(255,59,48,0.06))',
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            {/* Quote Mark */}
            <div className="text-7xl leading-none mb-2 font-serif" style={{ color: 'var(--color-muted)' }}>
              "
            </div>

            {/* Quote Text */}
            <p className="text-2xl md:text-3xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-foreground)' }}>
              {currentTestimonial.quote}
            </p>

            {/* Author Name */}
            <p className="text-lg font-medium" style={{ color: 'var(--color-muted)' }}>
              {currentTestimonial.author}
            </p>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-transform active:scale-95"
          style={{ backgroundColor: 'var(--color-accent)', color: 'var(--color-foreground)' }}
          aria-label="Next testimonial"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-3 pb-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${index === currentIndex ? 'w-3 h-3' : 'w-2 h-2'}`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            style={{ backgroundColor: index === currentIndex ? 'var(--color-accent)' : 'var(--color-muted)' }}
          />
        ))}
      </div>
    </div>
  );
}
