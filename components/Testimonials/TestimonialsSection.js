"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "@/app/appData/Testimonials.json";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function TestimonialsSection() {
  const { testimonials } = testimonialsData;

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 24,
    },
    autoplay: true,
    duration: 500,
  });

  return (
    <section className="px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        What Our Clients Say
      </h2>

      <div ref={sliderRef} className="keen-slider max-w-3xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.id} className="keen-slider__slide">
            <TestimonialCard
              name={t.name}
              title={t.title}
              company={t.company}
              content={t.content}
              rating={t.rating}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
