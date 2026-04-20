"use client";
import Link from "next/link";
import { useState } from "react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  weight: "400",
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full bg-black shadow-[0_0_20px_2px_#ffffff] z-10">
      <div className="w-full px-2 py-4 md:py-1 md:px-16">
        <div className="flex justify-between md:items-center">
          {/* LOGO */}
          <Link
            href={"/"}
            className={`${cinzel.className} text-white text-5xl`}
            onClick={() => setIsOpen(false)}
          >
            Prasan K.C.
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl text-white hover:scale-120 hover:text-green-500 p-5"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU */}
          <div className="flex items-end md:hidden">
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-9 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE POPUP */}
      <div className="bg-black">
        {isOpen &&
          navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block border-b px-5 py-2 text-white text-xl"
            >
              {link.name}
            </Link>
          ))}
      </div>
    </nav>
  );
}
