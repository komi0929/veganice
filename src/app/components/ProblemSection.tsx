"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      id="problem" 
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] text-[#2D3A3A] font-sans"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              インバウンドのヴィーガン対応、<br className="block sm:hidden"/>現場の負担になっていませんか？
            </h2>
            <p className="text-xl sm:text-2xl font-medium text-[#4A5568]">
              グループに1人でもヴィーガンがいれば、全員が別のお店へ — <span className="font-bold text-[#C67C3E]">『Veto Vote（拒否権）の恐怖』</span>
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {/* Left: Pain Points & Visual */}
            <motion.div variants={itemVariants} className="flex flex-col gap-8">
              {/* Visual Veto Vote */}
              <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 relative">
                <div className="flex items-center justify-center gap-4 mb-6">
                  {/* Group of people */}
                  <div className="flex gap-2 text-4xl">
                    <span role="img" aria-label="Person">🧍</span>
                    <span role="img" aria-label="Person">🧍</span>
                    <span role="img" aria-label="Vegan Person" className="inline-block scale-125 bg-green-100 rounded-full p-1 border-2 border-[#3E6044]">🌱</span>
                    <span role="img" aria-label="Person">🧍</span>
                    <span role="img" aria-label="Person">🧍</span>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4 font-bold">
                  <div className="flex flex-col items-center text-red-500">
                    <span className="text-2xl">←</span>
                    <span className="text-sm mt-1">Your Store ✕</span>
                  </div>
                  <div className="text-sm text-gray-400 bg-gray-50 px-3 py-1 rounded-full">全員で移動</div>
                  <div className="flex flex-col items-center text-[#3E6044]">
                    <span className="text-2xl">→</span>
                    <span className="text-sm mt-1">Competitor ○</span>
                  </div>
                </div>
              </div>

              {/* Pain Point List */}
              <div className="space-y-4">
                {[
                  "調理オペレーションを分ける余裕がない（コンタミが不安）",
                  "メニュー開発のノウハウがなく、美味しく作れない",
                  "インバウンド客の来店機会を逃している実感がある"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#3E6044]/10 text-[#3E6044] text-xl font-bold">
                      ☑
                    </span>
                    <p className="text-lg pt-1 font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Stat Card */}
            <motion.div variants={itemVariants} className="flex items-center">
              <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border-t-8 border-[#C67C3E] w-full flex flex-col justify-center h-full text-center">
                <h3 className="text-xl font-bold mb-4 text-[#2D3A3A]">実に</h3>
                <div className="flex justify-center items-baseline gap-2 mb-4">
                  <span className="text-7xl sm:text-8xl font-serif font-bold text-[#C67C3E]">54.3</span>
                  <span className="text-3xl sm:text-4xl font-bold text-[#C67C3E]">%</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-8 text-[#2D3A3A]">
                  の飲食店が<br/>ヴィーガン対応を負担に感じています
                </h3>
                <p className="text-sm text-gray-500 mt-auto">※ 観光庁等調査より</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
