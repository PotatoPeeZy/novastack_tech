import React from "react";
import FooterSec1 from "./FooterSections/FooterSec1";
import FooterSec2 from "./FooterSections/FooterSec2";
import FooterSec3 from "./FooterSections/FooterSec3";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto px-6 py-4 border-t bg-white text-black justify-center items-center flex">
      <div
        style={{ maxWidth: "80rem" }}
        className="flex flex-col gap-4 justify-center items-center sm:gap-0 sm:flex-row sm:justify-between w-full"
      >
        <div className="w-full sm:max-w-[30%]">
          <FooterSec1 />
        </div>
        <div className="w-full sm:max-w-[30%]">
          <FooterSec2 />
        </div>
        <div className="w-full sm:max-w-[30%]">
          <FooterSec3 />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
