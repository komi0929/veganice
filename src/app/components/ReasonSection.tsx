"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "朝搾り純豆乳",
    description: "毎朝搾りたての国産大豆100%豆乳を使用。大豆本来の甘みとコクが活きています。",
    icon: (
      <svg className="w-6 h-6 text-[#3E6044]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "白みそ・甘酒",
    description: "日本の伝統発酵食材が、植物性100%とは思えない圧倒的なコクと深みを生み出します。",
    icon: (
      <svg className="w-6 h-6 text-[#3E6044]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "米粉ベース",
    description: "小麦粉の代わりに米粉を使用。グルテンフリーでありながら、なめらかな食感を実現。",
    icon: (
      <svg className="w-6 h-6 text-[#3E6044]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

export default function ReasonSection() {
  return (
    <section id="reason" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-serif text-[#2D3A3A] sm:text-4xl"
          >
            なぜ、世界中から絶賛されるのか
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-[#3E6044] font-medium"
          >
            日本の伝統発酵技術 × 植物性100%の黄金比
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://placehold.co/600x500/3E6044/FDFBF7?text=製造工程イメージ" 
              alt="製造工程イメージ" 
              className="w-full h-auto object-cover rounded-2xl shadow-xl"
            />
          </motion.div>

          <div className="space-y-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#3E6044]/10">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2D3A3A] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
