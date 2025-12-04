"use client";
import Image from "next/image";
import React from "react";

function Hero_1() {
  const handleClick = () => {
    window.location.href = "/contact";
  };
  return (
    <div className="text-black w-full flex flex-col sm:flex-row items-center p-6 justify-center gap-6">
      <div>
        <div className="text-4xl">It Software Solutions</div>
        <div className="text-lg">Real Time App Development Solutions</div>
        <div>
          <button
            onClick={handleClick}
            className="bg-[var(--clr-primary)] p-2 text-white mt-4 hover:bg-black transition rounded-md"
          >
            Get a Quote
          </button>
        </div>
      </div>
      <Image
        width={1200}
        height={600}
        src="/Home/Hero_1.webp"
        alt="Hero"
        className="w-[80%] sm:w-[40%]"
      ></Image>
    </div>
  );
}

export default Hero_1;
