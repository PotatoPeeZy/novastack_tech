import React from "react";
import FooterSec1 from "./FooterSec1";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto px-6 py-4 border-t bg-white text-black justify-center items-center flex">
      <div
        style={{ maxWidth: "80rem" }}
        className="flex flex-col sm:flex-row sm:justify-between w-full"
      >
        <div className="max-w-[20%]">
          <FooterSec1 />
        </div>
        <div>sec1</div>
        <div>sec1</div>
        <div>sec1</div>
      </div>
    </footer>
  );
};

export default Footer;
