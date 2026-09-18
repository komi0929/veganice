"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling past 500px (approximate hero height)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-form");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: "spring", stiffness: 200, damping: 24 }}
          className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200/50 bg-white/95 p-3 backdrop-blur-sm md:right-8 md:bottom-8 md:left-auto md:w-auto md:border-t-0 md:bg-transparent md:p-0 md:backdrop-blur-none"
        >
          <div className="mx-auto max-w-lg md:mx-0">
            <a
              href="#contact-form"
              onClick={scrollToContact}
              className="bg-cta hover:bg-cta-hover animate-breathe block rounded-full px-8 py-3 text-center font-sans text-sm font-bold whitespace-nowrap text-white shadow-sm transition-all hover:shadow-md md:px-10 md:py-3.5 md:text-base"
            >
              まず味見してみる
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
