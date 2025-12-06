"use client";

import React, { useEffect, useRef, useState } from "react";
import testimonialsData from "@/app/appData/Testimonials.json";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const { testimonials } = testimonialsData;

  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Apply transform
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  // Swipe handlers
  const startDrag = (clientX) => {
    isDragging.current = true;
    startX.current = clientX;
  };

  const moveDrag = (clientX) => {
    if (!isDragging.current) return;
    const diff = clientX - startX.current;
    currentTranslate.current = -index * 100 + (diff / window.innerWidth) * 100;

    sliderRef.current.style.transform = `translateX(${currentTranslate.current}%)`;
  };

  const endDrag = () => {
    isDragging.current = false;

    const diff = currentTranslate.current + index * 100;

    if (diff < -10) {
      setIndex((i) => (i + 1) % testimonials.length);
    } else if (diff > 10) {
      setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
    } else {
      setIndex((i) => i);
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        What Our Clients Say
      </h2>

      <div className="relative max-w-3xl mx-auto overflow-hidden select-none">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ width: `${testimonials.length * 100}%` }}
          onMouseDown={(e) => startDrag(e.clientX)}
          onMouseMove={(e) => moveDrag(e.clientX)}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={(e) => startDrag(e.touches[0].clientX)}
          onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
          onTouchEnd={endDrag}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="w-full flex-shrink-0 px-4"
              style={{ width: "100%" }}
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-blue-600 scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
