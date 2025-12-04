import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero_2() {
  return (
    <div className="text-black bg-white max-w-screen-xl flex flex-col sm:flex-row items-center p-6 justify-center gap-6">
      <Image
        width={1200}
        height={600}
        src="/Home/Hero_2.png"
        alt="Hero"
        className="w-[80%] sm:w-[40%]"
      ></Image>

      <div className="flex flex-row sm:flex-col">
        <div className="text-4xl">Solutions for Every Business Need</div>
        <div className="text-lg">
          Learn why we are the best service providers that you should hire. We
          have various elements that add to an excellent service tailored to
          your demands.
        </div>
        <Link
          href="/about"
          className="bg-[var(--clr-primary)] p-2 text-white mt-4 hover:bg-black transition rounded-md w-max"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Hero_2;
