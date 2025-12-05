"use client";
import React from "react";
import { Star } from "lucide-react";

export default function TestimonialCard({
  name,
  title,
  company,
  content,
  rating,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl mx-auto border border-gray-200">
      <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
        {content}
      </p>

      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            } fill-current`}
          />
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">
          {title}, {company}
        </p>
      </div>
    </div>
  );
}
