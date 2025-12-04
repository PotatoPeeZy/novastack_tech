"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
function FooterSec2() {
  const pathname = usePathname();
  const linkClasses = (path) =>
    `transition ${
      pathname === path
        ? "text-[var(--clr-primary)] font-semibold "
        : "hover:text-[var(--clr-primary)] "
    }`;
  return (
    <div className="flex flex-col gap-3 text-sm justify-center h-full">
      <div className="text-lg text-[color:var(--clr-primary)]">Sitemap</div>
      <Link href="/" className="hover:text-[var(--clr-primary)] transition">
        Home
      </Link>
      <Link
        href="/about-us"
        className="hover:text-[var(--clr-primary)] transition"
      >
        About Us
      </Link>
      <Link
        href="/contact-us"
        className="hover:text-[var(--clr-primary)] transition"
      >
        Contact Us
      </Link>
    </div>
  );
}

export default FooterSec2;
