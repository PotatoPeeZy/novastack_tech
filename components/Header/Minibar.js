"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Minibar() {
  const linkClasses =
    "transition hover:text-[rgb(1,58,70)] flex flex-row gap-1";

  return (
    <div className="hidden sm:flex flex-row h-3 text-sm font-extralight gap-4 justify-end items-center p-3">
      <Link className={linkClasses} href={"tel:01792438135"}>
        <Image
          width={16}
          height={16}
          src="/icons/phone.gif"
          alt="Call:"
        ></Image>
        +880-1792-438135
      </Link>
      <Link className={linkClasses} href={"mailto:contact@novastack.tech"}>
        <Image width={16} height={16} src="/icons/mail.gif" alt="Call:"></Image>
        contact@novastack.tech
      </Link>
    </div>
  );
}

export default Minibar;
