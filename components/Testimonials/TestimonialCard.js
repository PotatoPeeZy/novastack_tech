"use client";
import React from "react";
import { Star } from "lucide-react";

export default function TestimonialCard({ t }) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <p className="text-gray-700 text-lg mb-6 italic">
        &rdquo;{t.content}&rdquo;
      </p>

      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < t.rating ? "text-yellow-400" : "text-gray-300"
            } fill-current`}
          />
        ))}
      </div>

      <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
      <p className="text-sm text-gray-600">
        {t.title}, {t.company}
      </p>
    </div>
  );
}
