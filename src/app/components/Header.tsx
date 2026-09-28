"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isScrolled = !isHome || hasScrolled;

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navLinks = [
    { label: "商品ラインナップ", href: isHome ? "#products" : "/#products" },
    { label: "私たちの想い", href: isHome ? "#story" : "/#story" },
    { label: "導入の流れ", href: isHome ? "#flow" : "/#flow" },
    { label: "よくあるご質問", href: isHome ? "#faq" : "/#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white py-4 shadow-sm" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <Link href="/" className="relative flex h-8 items-center sm:h-9">
            {/* Transparent Header / Dark background (White text + Green accent) */}
            <img
              src="/images/logo_horizontal_white.png"
              alt="SoyStories — plant base sweets"
              className={`h-7 w-auto transition-opacity duration-300 sm:h-8 lg:h-8.5 ${
                isScrolled || isMobileMenuOpen
                  ? "pointer-events-none absolute left-0 opacity-0"
                  : "opacity-100"
              }`}
            />
            {/* Scrolled / Light background (Dark text + Green accent) */}
            <img
              src="/images/logo_horizontal.png"
              alt="SoyStories — plant base sweets"
              className={`h-7 w-auto transition-opacity duration-300 sm:h-8 lg:h-8.5 ${
                isScrolled || isMobileMenuOpen
                  ? "opacity-100"
                  : "pointer-events-none absolute left-0 opacity-0"
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-5 md:flex lg:gap-8">
            <nav className="flex items-center gap-5 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-sans text-sm whitespace-nowrap transition-colors duration-300 ${
                    isScrolled
                      ? "text-ink-light hover:text-brand-dark"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href={isHome ? "#contact-form" : "/#contact-form"}
              className="bg-cta hover:bg-cta-hover rounded-full px-5 py-2 font-sans text-sm font-medium whitespace-nowrap text-white shadow-xs transition-colors duration-300 lg:px-6 lg:py-2.5"
            >
              無料でサンプルを試す
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5 focus:outline-none md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? "bg-ink translate-y-2 rotate-45" : isScrolled ? "bg-ink" : "bg-white"}`}
            ></span>
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? "bg-ink opacity-0" : isScrolled ? "bg-ink" : "bg-white"}`}
            ></span>
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${isMobileMenuOpen ? "bg-ink -translate-y-2 -rotate-45" : isScrolled ? "bg-ink" : "bg-white"}`}
            ></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center space-y-8 bg-white transition-transform duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-ink hover:text-brand font-sans transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={isHome ? "#contact-form" : "/#contact-form"}
            className="bg-cta mt-4 rounded-full px-8 py-3 font-sans text-base font-medium text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            無料でサンプルを試す
          </Link>
        </nav>
      </div>
    </>
  );
}
