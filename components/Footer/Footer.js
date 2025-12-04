import Image from "next/image";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto px-6 py-4 border-t bg-white text-black justify-center items-center flex">
      <div
        style={{ maxWidth: "80rem" }}
        className="flex flex-col sm:flex-row sm:justify-between w-full"
      >
        <div className="flex flex-col items-center max-w-[25%] font-light text-justify">
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
          <div className="text-[var(--clr-primary)] text-2xl">NovaStack</div>
          <div className="text-s">
            NovaStack Technology based software firm with the main services and
            development department in khulna, Bangladesh
          </div>
        </div>
        <div>sec1</div>
        <div>sec1</div>s
      </div>
    </footer>
  );
};

export default Footer;
