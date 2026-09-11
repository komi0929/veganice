"use client";

import { motion } from "framer-motion";

const products = [
  { name: "至高の濃厚抹茶", image: "https://placehold.co/400x300/4A7C59/FDFBF7?text=濃厚抹茶" },
  { name: "とろけるショコラ", image: "https://placehold.co/400x300/5C3A21/FDFBF7?text=ショコラ" },
  { name: "朝搾り豆乳バニラ", image: "https://placehold.co/400x300/F5E6CC/2D3A3A?text=豆乳バニラ" },
  { name: "完熟ストロベリー", image: "https://placehold.co/400x300/C44B6C/FDFBF7?text=ストロベリー" },
  { name: "白みそキャラメル", image: "https://placehold.co/400x300/D4A574/2D3A3A?text=白みそキャラメル" },
  { name: "甘酒ジンジャー", image: "https://placehold.co/400x300/E8D5B7/2D3A3A?text=甘酒ジンジャー" },
  { name: "焙煎きなこ", image: "https://placehold.co/400x300/B8956A/FDFBF7?text=焙煎きなこ" },
  { name: "黒ごまプラリネ", image: "https://placehold.co/400x300/2D2D2D/FDFBF7?text=黒ごまプラリネ" },
];

const b2bTerms = [
  { label: "最小ロット", value: "1バット（2L）〜 小ロットでのテスト導入が可能です", icon: "📦" },
  { label: "配送", value: "全国対応（ヤマト運輸 クール冷凍便）", icon: "🚚" },
  { label: "お支払い", value: "月末締め翌月末払い（請求書払い対応可能）", icon: "💳" },
  { label: "賞味期限", value: "製造日より6ヶ月（冷凍保存 -18℃以下）", icon: "❄️" },
  { label: "サポート", value: "メニュー提案・POP素材のご提供も可能です", icon: "🤝" },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Products Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-serif text-[#2D3A3A] sm:text-4xl"
            >
              全8種のプレミアムフレーバー
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-[#3E6044] font-medium"
            >
              すべて乳・卵・小麦・白砂糖不使用
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl mb-4 bg-white shadow-sm">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-center text-[#2D3A3A] font-bold md:text-lg">{product.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* B2B Terms */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif text-[#2D3A3A] mb-3">お取引条件</h3>
            <p className="text-gray-600">小ロットからテスト導入が可能です</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {b2bTerms.map((term, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100 last:border-0 gap-2 sm:gap-6">
                <div className="flex items-center gap-3 sm:w-48 flex-shrink-0 text-[#3E6044] font-bold text-lg">
                  <span className="text-xl">{term.icon}</span>
                  {term.label}
                </div>
                <div className="text-[#2D3A3A] sm:flex-1">
                  {term.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
