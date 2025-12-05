"use client";
import { Globe, Smartphone, Cloud } from "lucide-react";
import React from "react";

const iconMap = {
  globe: Globe,
  smartphone: Smartphone,
  cloud: Cloud,
};

export default function ServiceCard({ name, description, icon }) {
  const IconComponent = iconMap[icon] || Globe;

  return (
    <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
      <div className="flex items-center gap-3 mb-3">
        <IconComponent className="w-8 h-8 text-[var(--clr-primary)]" />
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
