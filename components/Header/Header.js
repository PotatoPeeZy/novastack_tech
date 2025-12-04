"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Minibar from "./Minibar";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClasses = (path) =>
    `transition ${
      pathname === path
        ? "text-[var(--clr-primary)] font-semibold "
        : "hover:text-[var(--clr-primary)] "
    }`;

  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50 bg-white text-black">
      <Minibar />
      <div className="h-px bg-[gray]"></div>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} priority />
          <span className="text-2xl font-bold tracking-wide text-gray-700">
            {process.env.NEXT_PUBLIC_WEB_NAME}
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-lg font-medium ">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            About Us
          </Link>
          <Link href="/contact" className={linkClasses("/contact")}>
            Contact Us
          </Link>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className="h-px bg-black"></div>

      <div
        className={`md:hidden bg-white shadow-lg border-t overflow-hidden transform transition-all duration-300 ease-in-out
    ${
      open
        ? "max-h-[400px] opacity-100 translate-y-0 pointer-events-auto"
        : "max-h-0 opacity-0 -translate-y-3 pointer-events-none"
    }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col p-4 space-y-4 text-lg font-medium">
          <Link
            href="/"
            className={linkClasses("/")}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={linkClasses("/about")}
            onClick={() => setOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={linkClasses("/contact")}
            onClick={() => setOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
