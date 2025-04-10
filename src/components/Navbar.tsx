"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [state, setState] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navigationLink = [
    { title: "Vehicles", path: "/vehicles" },
    { title: "About Us", path: "/about-us" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 bg-white w-full border-b md:border-0 py-2 transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-blue-50/100 border-blue-50" : ""
      }`}>
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8 gap-6">
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
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
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
          }`}>
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigationLink.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-600 hover:text-blue-600 text-center font-semibold">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a
            href="/"
            className="py-3 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
