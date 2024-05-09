'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, CircleX } from "lucide-react";
import { usePathname } from "next/navigation";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  const pathname = usePathname();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 300);
    });
  }, []);

  // Array of links
  const links = [
    { href: "#", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#contact", text: "Contact" },
    { href: "#team", text: "Team" },
    { href: "#service", text: "Service" },
    { href: "#price", text: "Price" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black ${
        scrollActive ? "bg-black" : "md:bg-transparent"
      }`}
    >
      <div className="w-full h-20 mx-auto px-4">
        <div className="max-w-7xl m-auto flex justify-between items-center h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <p className="font-semibold text-orange-400 px-6 text-2xl lg:ext-3xl">
                Karma Tattoo
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className=" ml-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  aria-current="page"
                  className={`text-gray-300  px-3 py-2 rounded-md text-xl font-medium hover:text-orange-500 active:text-orange-500 ${
                    pathname === link.href ? "text-orange-500 " : ""
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <Menu /> : <CircleX />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`md:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black w-full min-h-screen">
          <div className="flex flex-col">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
