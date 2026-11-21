"use client";

import { useEffect, useState } from "react";
import { WHOLESALE_FACTS } from "@/app/data/wholesaleFacts";

export default function WholesaleFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pastHero = window.scrollY > 480;
      const contactForm = document.getElementById("contact-form");
      let contactVisible = false;
      if (contactForm) {
        const rect = contactForm.getBoundingClientRect();
        contactVisible = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setIsVisible(pastHero && !contactVisible);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-gray-200/70 bg-white/95 p-3 backdrop-blur-xs md:right-8 md:bottom-8 md:left-auto md:w-auto md:border-t-0 md:bg-transparent md:p-0 md:backdrop-blur-none">
      <div className="mx-auto flex max-w-lg items-center gap-2 md:mx-0 md:flex-col md:gap-2.5">
        <a
          href="#contact-form"
          className="bg-cta hover:bg-cta-hover block flex-1 rounded-full px-5 py-3 text-center font-sans text-sm font-bold whitespace-nowrap text-white shadow-md transition-colors md:flex-none md:px-8 md:py-3.5 md:text-base"
        >
          {WHOLESALE_FACTS.ctaLabel}
        </a>
        <a
          href={WHOLESALE_FACTS.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-full bg-[#06C755] px-4 py-3 font-sans text-sm font-bold whitespace-nowrap text-white shadow-md transition-colors hover:bg-[#05b34c] md:px-7 md:py-3"
        >
          LINE相談
        </a>
      </div>
    </div>
  );
}
