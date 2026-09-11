"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah M.",
    country: "USA 🇺🇸",
    rating: 5,
    text: '"The ice cream was super creamy and chocolaty! I couldn\'t believe it was completely plant-based. A must-visit in Fukuoka!"',
    translation:
      "最高にクリーミーでチョコが濃厚！100%植物性なんて信じられない。福岡必訪です！",
  },
  {
    name: "James L.",
    country: "New York 🇺🇸",
    rating: 5,
    text: '"Best strawberry ice cream I\'ve ever had and it\'s vegan! The texture is incredibly smooth."',
    translation:
      "今までで最高のストロベリーアイス！しかもヴィーガン！信じられない滑らかさ。",
  },
  {
    name: "Emma W.",
    country: "UK 🇬🇧",
    rating: 5,
    text: '"The matcha flavor was absolutely divine. You can taste the quality of every ingredient."',
    translation:
      "抹茶味は本当に最高。すべての素材の品質が伝わってきます。",
  },
  {
    name: "Lucas B.",
    country: "Germany 🇩🇪",
    rating: 5,
    text: '"Finally, a vegan gelato that doesn\'t compromise on taste. The miso flavor blew my mind!"',
    translation:
      "味に妥協しないヴィーガンジェラートについに出会えた。味噌味に衝撃！",
  },
  {
    name: "Chloé D.",
    country: "France 🇫🇷",
    rating: 5,
    text: '"Incroyable! The amazake gelato is so unique and delicious. Japanese fermentation at its finest."',
    translation:
      "素晴らしい！甘酒ジェラートはとてもユニークで美味しい。日本の発酵技術の極み。",
  },
  {
    name: "Min-ji K.",
    country: "South Korea 🇰🇷",
    rating: 5,
    text: '"I visited three times during my trip. Every flavor was perfect. My favorite was the kinako one!"',
    translation:
      "旅行中3回も訪れました。全フレーバー完璧。きなこが一番のお気に入り！",
  },
];

const StarRating = () => (
  <div className="flex gap-1 text-[#F59E0B] text-lg mb-4">
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star}>★</span>
    ))}
  </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SocialProofSection() {
  return (
    <section id="social-proof" className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-[10%] -right-[5%] w-96 h-96 rounded-full bg-[#3E6044]/5 blur-3xl" />
        <div className="absolute top-[40%] -left-[10%] w-[30rem] h-[30rem] rounded-full bg-[#C67C3E]/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
              <span className="text-xl">🐮</span>
              <span className="font-semibold text-[#2D3A3A]">HappyCow</span>
              <span className="text-sm text-[#4A5568]">Top Rated in Fukuoka</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif text-[#2D3A3A] mb-4"
          >
            世界中のお客様から届く、感動のレビュー
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#4A5568] text-lg max-w-2xl mx-auto"
          >
            世界最大のヴィーガンアプリ『HappyCow』で絶賛。貴店のお客様にも同じ感動を。
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-md border border-gray-50 relative group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Background Quote Mark */}
              <div className="absolute top-4 right-6 text-8xl font-serif text-gray-100 opacity-50 group-hover:scale-110 group-hover:text-gray-200 transition-all duration-500 pointer-events-none">
                "
              </div>
              
              <div className="relative z-10">
                <StarRating />
                
                <p className="text-xl text-[#2D3A3A] font-serif italic mb-4 leading-relaxed">
                  {review.text}
                </p>
                
                <div className="mb-6">
                  <p className="text-sm text-[#4A5568] leading-relaxed">
                    {review.translation}
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#FDFBF7] flex items-center justify-center text-[#3E6044] font-bold border border-[#3E6044]/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#2D3A3A] text-sm">{review.name}</p>
                    <p className="text-xs text-[#4A5568]">{review.country}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
