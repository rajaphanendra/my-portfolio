"use client";

import Link from 'next/link';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      {/* Updated Header */}
      <header className="fixed w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white p-4 shadow-md">
        <nav className="flex justify-between items-center container mx-auto">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            {["About Me", "Projects", "Skills", "Experience", "Contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {section}
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
};

export default Layout;