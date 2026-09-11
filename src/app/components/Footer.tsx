"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2D3A3A] text-white py-12 px-4 md:px-8 border-t border-gray-800">
      <div className="container mx-auto max-w-4xl flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <h2 className="text-2xl font-serif font-bold text-white tracking-tight mb-2">
            SoyStories<span className="text-sm font-sans font-normal ml-2 opacity-80">（ソイストーリーズ）</span>
          </h2>
          <p className="text-sm text-gray-400 font-sans mt-4">
            〒810-0000 福岡県福岡市中央区（住所はダミーです）
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 w-full">
          <p className="text-xs text-gray-500 font-sans">
            &copy; 2024 SoyStories. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
