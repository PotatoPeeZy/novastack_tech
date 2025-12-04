"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wide text-600">
          NovaStack Technologies
        </Link>

        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link href="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <a href="/about" className="hover:text-indigo-600 transition">
            About Us
          </a>
          <a href="/contact" className="hover:text-indigo-600 transition">
            Contact Us
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-lg border hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      <div className="h-px bg-white"></div>

      {/* Mobile Sidebar */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col p-4 space-y-4 text-lg font-medium">
            <Link
              href="/"
              className="hover:text-indigo-600 transition"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-indigo-600 transition"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-indigo-600 transition"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
