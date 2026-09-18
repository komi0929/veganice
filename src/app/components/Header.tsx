"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "私たちのストーリー", href: "#story" },
    { label: "商品紹介", href: "#products" },
    { label: "お客様の声", href: "#reviews" },
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
          <Link href="/" className="flex flex-col">
            <span
              className={`font-sans text-[10px] tracking-[0.2em] transition-colors duration-300 md:text-xs ${
                isScrolled ? "text-ink-light" : "text-white/70"
              }`}
            >
              ヴィーガン米粉アイス
            </span>
            <p
              className={`font-serif text-xl font-bold tracking-tight transition-all duration-300 md:text-2xl ${
                isScrolled ? "text-ink" : "text-white"
              }`}
            >
              SoyStories
            </p>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-sans text-sm transition-colors duration-300 ${
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
              href="#contact-form"
              className="bg-cta hover:bg-cta-hover rounded-full px-6 py-2.5 font-sans text-sm font-medium text-white transition-colors duration-300"
            >
              まず味見してみる
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
            href="#contact-form"
            className="bg-cta mt-4 rounded-full px-8 py-3 font-sans text-base font-medium text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            まず味見してみる
          </Link>
        </nav>
      </div>
    </>
  );
}
