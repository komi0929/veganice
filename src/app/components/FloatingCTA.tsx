"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed z-50 bottom-0 left-0 right-0 md:left-auto md:right-8 md:bottom-8 md:w-auto p-4 md:p-0 bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-t md:border-t-0 border-gray-200"
        >
          <div className="flex flex-row md:flex-col gap-3 md:gap-4 max-w-lg mx-auto md:mx-0">
            <a
              href="#contact-form"
              onClick={scrollToContact}
              className="flex-1 md:flex-none text-center bg-[#C67C3E] hover:bg-[#b06a31] text-white font-bold py-3 md:py-4 px-4 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 whitespace-nowrap text-sm md:text-base"
            >
              サンプル請求
            </a>
            <a
              href="#contact-form"
              onClick={scrollToContact}
              className="flex-1 md:flex-none text-center bg-[#4A5568] hover:bg-[#384152] text-white font-bold py-3 md:py-4 px-4 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 whitespace-nowrap text-sm md:text-base"
            >
              資料DL
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
