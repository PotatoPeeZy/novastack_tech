import React from "react";
import ServiceCard from "./ServiceCard";
import servicesData from "@/app/appData/Services.json";

export default function ServicesSection() {
  const { services } = servicesData;

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            name={service.name}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
