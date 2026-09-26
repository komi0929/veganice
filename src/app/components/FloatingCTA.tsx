"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const contactForm = document.getElementById("contact-form");

    const handleScroll = () => {
      const pastHero = window.scrollY > 500;

      // contact-form が画面内に見えていたらCTAを隠す
      let contactVisible = false;
      if (contactForm) {
        const rect = contactForm.getBoundingClientRect();
        contactVisible = rect.top < window.innerHeight && rect.bottom > 0;
      }

      setIsVisible(pastHero && !contactVisible);
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
          <div className="mx-auto flex max-w-lg items-center gap-2 md:mx-0 md:flex-col md:gap-3">
            <a
              href="#contact-form"
              onClick={scrollToContact}
              className="bg-cta hover:bg-cta-hover animate-breathe block flex-1 rounded-full px-6 py-3 text-center font-sans text-sm font-bold whitespace-nowrap text-white shadow-sm transition-all hover:shadow-md md:flex-none md:px-10 md:py-3.5 md:text-base"
            >
              無料でサンプルを試す
            </a>
            <a
              href="https://lin.ee/OnsWAWw2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-full bg-[#06C755] px-5 py-3 font-sans text-sm font-bold whitespace-nowrap text-white shadow-sm transition-all hover:bg-[#05b34c] hover:shadow-md md:px-8 md:py-3.5 md:text-base"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current md:h-5 md:w-5">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINE
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
