import Title from "@/components/Home/Title";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Title />
      <Services />
    </div>
  );
}
