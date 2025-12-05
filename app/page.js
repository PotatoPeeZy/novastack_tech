import Title from "@/components/Home/Title";
import Hero_1 from "@/components/Home/Hero_1";
import Hero_2 from "@/components/Home/Hero_2";
import ServicesSection from "@/components/Services/ServiceSection";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Title />
      <Hero_1 />
      <Hero_2 />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
