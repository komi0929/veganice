"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
};

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden text-[#FDFBF7]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://placehold.co/1920x800/3E6044/FDFBF7?text=Hero+Image)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#2D3A3A]/70 to-[#2D3A3A]/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full flex flex-col items-center gap-8"
        >
          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-2">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-[#3E6044] text-[#FDFBF7] shadow-sm">
              HappyCow Top Rated 獲得
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-[#3E6044] text-[#FDFBF7] shadow-sm">
              乳・卵・小麦・白砂糖不使用
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight md:leading-tight tracking-tight text-white"
          >
            すくって、添えるだけ。<br className="hidden sm:block" />
            インバウンド客が熱狂する<br className="hidden sm:block" />
            『世界基準の和ヴィーガンジェラート』を<br className="hidden md:block" />
            貴店のメニューに。
          </motion.h1>

          {/* Sub Headline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-sans font-medium text-white/90"
          >
            福岡発・米粉ジェラート専門店 SoyStories の業務用卸売サービス
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full max-w-2xl">
            <Link href="#contact-form" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C67C3E] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:bg-[#b06a33] transition-colors relative overflow-hidden group"
              >
                <span className="relative z-10">【無料】サンプルを取り寄せる</span>
                <span className="absolute inset-0 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </motion.button>
            </Link>
            
            <Link href="#contact-form" className="w-full sm:w-auto">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#4A5568] text-white font-bold text-base shadow-md hover:shadow-lg hover:bg-[#394252] transition-colors"
              >
                3分でわかる！<br className="sm:hidden"/>卸価格表・導入資料をダウンロード
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
