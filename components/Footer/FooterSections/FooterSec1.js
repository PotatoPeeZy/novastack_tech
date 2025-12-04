"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterSec1() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/logo.png" alt="Logo" width={48} height={48} />
      <div className="text-[var(--clr-primary)] text-2xl">NovaStack</div>
      <div className="font-extralight text-justify text-sm mt-2">
        {process.env.NEXT_PUBLIC_DESCRIPTION}
      </div>

      {/* Social Icons */}
      <div className="flex flex-row gap-4 mt-4">
        <Link
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
        </Link>
        <Link
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
        </Link>
        <Link
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
        </Link>
      </div>
    </div>
  );
}

export default FooterSec1;
