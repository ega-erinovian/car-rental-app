"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, FC } from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  linkColor: string;
  linkHoverColor?: string;
  linkHoverScrolledColor?: string;
}

const Navbar: FC<NavbarProps> = ({
  linkColor,
  linkHoverColor = "text-blue-600",
  linkHoverScrolledColor = "text-white",
}) => {
  const [state, setState] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navigationLink = [
    { title: "Cars", path: "/cars" },
    { title: "About Us", path: "/about-us" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`z-40 fixed top-0 w-full py-2 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}>
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 gap-6 ">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image
              src="/svg/logo.svg"
              width={150}
              height={70}
              alt="Float UI logo"
            />
          </Link>
          <div className="md:hidden">
            <button
              className={`outline-none p-2 rounded-md focus:border-gray-400 focus:border transition-colors duration-200 ${
                scrolled ? "text-gray-700" : linkColor
              }`}
              onClick={() => setState(!state)}>
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          } ${
            state && !scrolled
              ? "bg-white/90 backdrop-blur-md rounded-lg p-4 mx-4 md:bg-transparent md:backdrop-blur-none md:p-0 md:mx-0"
              : ""
          }`}>
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigationLink.map((item, idx) => {
              const isActive = pathname === item.path;
              return (
                <li key={idx} className="text-center">
                  <Link
                    href={item.path}
                    className={`
                      relative inline-block
                      transition-all duration-300 ease-out
                      transform hover:scale-110 
                      ${
                        isActive
                          ? `${
                              scrolled
                                ? `text-gray-600 hover:${linkHoverScrolledColor}`
                                : state
                                ? `text-white hover:${linkHoverColor}`
                                : linkColor
                            } font-bold before:w-full`
                          : `${
                              scrolled
                                ? `text-gray-600 hover:${linkHoverScrolledColor}`
                                : state
                                ? `text-gray-600 hover:${linkHoverColor}`
                                : linkColor
                            } font-semibold hover:font-bold`
                      }
                      hover:tracking-wide
                      hover:text-shadow-sm
                    `}>
                    <span className="relative z-10 transition-all duration-300 ease-out">
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <Link
            href="/#cars"
            className="py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
