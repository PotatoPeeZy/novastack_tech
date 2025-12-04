import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-6 bg-white text-black">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to NovaStack Technologies
      </h1>
      <p className="text-lg text-center max-w-2xl">
        We are committed to delivering innovative tech solutions that drive
        success and transform businesses. Explore our services and discover how
        we can help you achieve your goals.
      </p>
    </div>
  );
}
