import Image from "next/image";
import Link from "next/link";
import React from "react";

function FooterSec3() {
  return (
    <div className="flex flex-col gap-3">
      <div className="text-lg text-[color:var(--clr-primary)]">Contact</div>
      <div className="text-sm">
        <Link
          href="tel:01792438135"
          className="hover:text-[var(--clr-primary)] transition flex flex-row gap-1"
        >
          {" "}
          <Image
            width={16}
            height={16}
            src="/icons/phone.gif"
            alt="Call:"
          ></Image>
          +880-1792-438135
        </Link>
      </div>
      <div className="text-sm">
        <Link
          className="hover:text-[var(--clr-primary)] transition flex flex-row gap-1"
          href="mailto:"
        >
          <Image
            width={16}
            height={16}
            src="/icons/mail.gif"
            alt="Call:"
          ></Image>
          contact@novastack.tech
        </Link>
      </div>
      <div className="text-sm">
        <Link
          className="hover:text-[var(--clr-primary)] transition"
          href="https://maps.google.com"
        >
          Address: 123 Software St, Khulna, Bangladesh
        </Link>
      </div>
    </div>
  );
}

export default FooterSec3;
