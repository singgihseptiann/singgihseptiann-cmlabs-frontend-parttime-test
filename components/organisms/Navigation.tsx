"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Defined outside component — stable reference, no SSR/client mismatch
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/foods", label: "Foods" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/local-culinary", label: "Local Culinary" },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo — use flex-shrink-0 instead of shrink-0 */}
          <Link href="/" className="text-xl font-bold text-zinc-800 flex-shrink-0">
            mealapp
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-zinc-600 hover:text-zinc-900 transition-colors duration-200">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-zinc-900 focus:outline-none" aria-label="Toggle menu">
            <svg className={`h-6 w-6 transition-transform duration-200 ${isMounted && isOpen ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMounted && isOpen && (
          <div className="md:hidden pb-4 border-t border-zinc-200">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block px-3 py-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
