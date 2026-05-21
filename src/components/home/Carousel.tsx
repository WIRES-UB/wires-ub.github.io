"use client";

// "use client" tells Next.js this component runs in the browser (not the server)
// because it uses useState and useEffect (interactive features)

import Image from "next/image";
import { useState, useEffect } from "react";

// List of all slides shown in the carousel
const slides = [
  { src: "/images/slider/dloc.png", alt: "DLoc — Deep Learning Localization" },
  { src: "/images/slider/1.png", alt: "Research slide 1" },
  { src: "/images/slider/2.png", alt: "Research slide 2" },
  { src: "/images/slider/3.png", alt: "Research slide 3" },
  { src: "/images/slider/4.png", alt: "Research slide 4" },
];

export default function Carousel() {
  // currentSlide tracks which slide is visible (0 = first slide)
  const [currentSlide, setCurrentSlide] = useState(0);

  // isPaused stops the auto-advance when the user hovers over the carousel
  const [isPaused, setIsPaused] = useState(false);

  // Move to the next slide, wrapping back to 0 after the last slide
  function goToNext() {
    setCurrentSlide((i) => (i + 1) % slides.length);
  }

  // Move to the previous slide, wrapping to the last slide when going back from slide 0
  function goToPrev() {
    setCurrentSlide((i) => (i - 1 + slides.length) % slides.length);
  }

  // Auto-advance the carousel every 5 seconds unless the user is hovering
  useEffect(() => {
    if (isPaused) return; // do nothing when paused

    const timer = setInterval(() => {
      setCurrentSlide((i) => (i + 1) % slides.length);
    }, 5000);

    // Cleanup: clear the timer when the component unmounts or isPaused changes
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    // Outer container — fixed height, clips overflowing slides
    <div
      className="relative w-full overflow-hidden rounded-xl bg-gray-100 select-none"
      style={{ height: "380px" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Render every slide stacked on top of each other.
          Only the current slide is fully visible (opacity-100); others are hidden (opacity-0). */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-500 ${
            i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0} // load the first image immediately for faster page load
          />
        </div>
      ))}

      {/* Left arrow button — goes to the previous slide */}
      <button
        onClick={goToPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right arrow button — goes to the next slide */}
      <button
        onClick={goToNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators at the bottom — one dot per slide.
          The active dot is highlighted in blue; inactive dots are semi-transparent white. */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)} // clicking a dot jumps directly to that slide
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === currentSlide ? "bg-ub-blue" : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
