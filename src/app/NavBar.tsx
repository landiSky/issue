"use client"; // This file is a client component in Next.js

import React from "react";
import Link from "next/link";
import { FaBug } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Links = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Issue",
    href: "/issues",
  },
];

export default function NavBar() {
  const pathName = usePathname();
  console.log("pathname", pathName);
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {Links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              //   className="text-zinc-500 hover:text-zinc-800 transition-colors"
              className={classNames({
                "text-zinc-500": pathName !== link.href,
                "text-zinc-900": pathName === link.href,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
