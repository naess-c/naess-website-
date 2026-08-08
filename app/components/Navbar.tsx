"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/organization", label: "Organization" },
    { href: "/team", label: "Executive Team" },
    { href: "/alumni", label: "Alumni" },
    { href: "/gallery", label: "Gallery" },
    { href: "/notes", label: "Resources" },
    { href: "/notices", label: "Notices" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-black/30 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="NAESS Logo"
            width={scrolled ? 40 : 55}
            height={scrolled ? 40 : 55}
            className="transition-all duration-500"
          />
          <div>
            <h1
              className={`font-bold transition-all duration-500 ${
                scrolled ? "text-teal-700 text-lg" : "text-white text-lg"
              }`}
            >
              NAESS
            </h1>
            <p
              className={`block text-[10px] md:text-xs transition-all duration-500 ${
                scrolled ? "text-gray-600" : "text-white/90"
              }`}
            >
              National Agricultural Engineering Students' Society
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            
           <a   key={link.href}
              href={link.href}
              className={`relative pb-1 transition ${
                scrolled
                  ? isActive(link.href)
                    ? "text-teal-700 font-semibold"
                    : "text-gray-700 hover:text-teal-700"
                  : isActive(link.href)
                    ? "text-white font-semibold"
                    : "text-white hover:text-teal-200"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span
                  className={`absolute left-0 -bottom-0.5 w-full h-0.5 rounded-full ${
                    scrolled ? "bg-teal-700" : "bg-white"
                  }`}
                ></span>
              )}
            </a>
          ))}
        </div>

        <button
          className={`md:hidden text-3xl transition ${
            scrolled ? "text-teal-700" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          {links.map((link) => (
            
            <a  key={link.href}
              href={link.href}
              className={`block px-6 py-3 hover:bg-gray-100 ${
                isActive(link.href) ? "text-teal-700 font-semibold bg-gray-50" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}