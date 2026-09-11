"use client";

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex flex-col">
          <span className={`text-[10px] md:text-xs font-sans tracking-widest ${isScrolled ? 'text-gray-500' : 'text-gray-600'}`}>
            和ヴィーガンジェラート
          </span>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#3E6044] tracking-tight">
            SoyStories
          </h1>
        </div>
      </div>
    </header>
  );
}
