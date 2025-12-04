"use client";
import Link from "next/link";
import React from "react";

function Minibar() {
  const linkClasses = "hidden md:block transition hover:text-[rgb(1,58,70)]";

  return (
    <div className="flex flex-row h-3 text-sm font-extralight gap-4 justify-end items-center p-3">
      <Link className={linkClasses} href={"tel:01792438135"}>
        Call: +880-1792-438135
      </Link>
      <Link className={linkClasses} href={"mailto:contact@novastack.tech"}>
        Mail: contact@novastack.tech
      </Link>
    </div>
  );
}

export default Minibar;
