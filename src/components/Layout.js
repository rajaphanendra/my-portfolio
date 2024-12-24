"use client";
import React, { useState, useEffect } from "react";

export default function Layout({ children }) {
  const sections = ["about", "projects", "skills", "experience", "contact"]; // Match these exactly with the section ids
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        const rect = element?.getBoundingClientRect();
        return rect?.top >= 0 && rect?.top < window.innerHeight / 2;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-4 shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center px-6 md:px-10">
          {/* Left: Portfolio Title */}
          <h1 className="text-2xl font-bold whitespace-nowrap">My Portfolio</h1>

          {/* Right: Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`text-gray-300 hover:text-blue-400 transition-all ${
                    activeSection === section ? "text-blue-400 underline" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button for Mobile */}
          <button
            className="block md:hidden text-white focus:outline-none hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>

          {/* Dropdown Menu for Mobile */}
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-gray-900 text-center md:hidden`}
          >
            {sections.map((section) => (
              <li key={section} className="border-b border-gray-700">
                <a
                  href={`#${section}`}
                  className="block py-3 text-gray-300 hover:text-blue-400 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-16">{children}</main>
    </>
  );
}