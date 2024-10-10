"use client";

import logo from "../../../public/static/images/Berry-Studio-Logo-fin.png";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // event listener for click outside the mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="border-b-2 shadow-lg z-50 w-full bg-background fixed top-0">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 max-w-6xl">
            <div className="flex items-center lg:ml-10">
              <Link href="/">
                {" "}
                <Image
                  alt="berry studio logo"
                  src={logo}
                  width={220}
                  height={500}
                />
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-8 uppercase tracking-wide">
              <Link href="/" className="group  transition duration-300">
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-mainPurp"></span>
              </Link>
              <Link href="/about" className="group  transition duration-300">
                O Nas
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-mainPurp"></span>
              </Link>
              <Link
                href="/#services"
                className="group  transition duration-300"
              >
                Usługi
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-mainPurp"></span>
              </Link>
              <Link href="/#contact">
                <button
                  type="button"
                  className="rounded-md  uppercase bg-mainPurp px-6 py-2.5 duration-300 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Kontakt{" "}
                </button>
              </Link>
            </div>
            <div className="lg:hidden flex items-center mt-2">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-900 "
              >
                {menuOpen ? (
                  <XMarkIcon className="size-9" />
                ) : (
                  <Bars3Icon className="size-9" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div ref={menuRef} className="lg:hidden">
            <div className="px-4 pr-28 pt-2 pb-3 space-y-1 divide-y divide-mainPurp">
              <Link
                href="/"
                className="block px-3 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2"
                onClick={() => setMenuOpen(false)}
              >
                O Nas
              </Link>
              <Link
                href="/#services"
                className="block px-3 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Usługi
              </Link>
              <Link
                href="/#contact"
                className="block px-3 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
