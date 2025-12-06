"use client";

import React, { useEffect, useState } from "react";
import testimonialsData from "@/app/appData/Testimonials.json";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  const { testimonials } = testimonialsData;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-4 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        What Our Clients Say
      </h2>

      {/* Use relative layering WITHOUT removing from flow */}
      <div className="max-w-3xl mx-auto relative">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`transition-opacity duration-700 
              ${i === index ? "opacity-100" : "opacity-0"} 
              ${i === index ? "z-20" : "z-10"} 
              absolute inset-0`}
          >
            <TestimonialCard t={t} />
          </div>
        ))}

        {/* This dummy keeps the height stable for responsiveness */}
        <div className="invisible">
          <TestimonialCard t={testimonials[0]} />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-blue-600 scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
