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
        <div className="flex flex-col items-center max-w-[20%]">
          <Image src="/logo.png" alt="Logo" width={48} height={48} />
          <div className="text-[var(--clr-primary)] text-2xl">NovaStack</div>
          <div className="font-extralight text-justify text-sm mt-2">
            NovaStack Technology is a software firm with the main services and
            development department in Khulna, Bangladesh.
          </div>

          {/* Social Icons */}
          <div className="flex flex-row gap-4 mt-4">
            <a
              href="https://facebook.com/NovaStackTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="icon-hover"
              />
            </a>
            <a
              href="https://linkedin.com/company/novastack-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="icon-hover"
              />
            </a>
            <a
              href="https://github.com/NovaStack-Tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/github.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="icon-hover"
              />
            </a>
          </div>
        </div>

        <div>sec1</div>
        <div>sec1</div>
      </div>
    </footer>
  );
};

export default Footer;
