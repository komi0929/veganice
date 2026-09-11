"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    inquiryType: '無料サンプルを請求する',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。3営業日以内にご連絡いたします。');
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      inquiryType: '無料サンプルを請求する',
      notes: ''
    });
  };

  return (
    <section id="contact-form" className="py-20 px-4 md:px-8 bg-[#3E6044] text-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-serif font-bold mb-4"
        >
          まずは無料サンプルで、味をお確かめください
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl opacity-90 font-sans"
        >
          最短3営業日でお届けします。お気軽にお問い合わせください。
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl mx-auto bg-white text-[#2D3A3A] rounded-2xl shadow-xl p-8 md:p-10"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="companyName" className="block text-sm font-bold mb-2">
              貴社名/店舗名 <span className="text-red-500 text-xs ml-1 bg-red-100 px-2 py-1 rounded">必須</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E6044] focus:border-transparent transition-shadow"
              placeholder="株式会社ソイストーリーズ"
            />
          </div>

          <div>
            <label htmlFor="contactName" className="block text-sm font-bold mb-2">
              ご担当者名 <span className="text-red-500 text-xs ml-1 bg-red-100 px-2 py-1 rounded">必須</span>
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E6044] focus:border-transparent transition-shadow"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              メールアドレス <span className="text-red-500 text-xs ml-1 bg-red-100 px-2 py-1 rounded">必須</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E6044] focus:border-transparent transition-shadow"
              placeholder="example@soystories.jp"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-bold mb-2">
              電話番号 <span className="text-red-500 text-xs ml-1 bg-red-100 px-2 py-1 rounded">必須</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E6044] focus:border-transparent transition-shadow"
              placeholder="03-1234-5678"
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-3">
              お問い合わせ内容 <span className="text-red-500 text-xs ml-1 bg-red-100 px-2 py-1 rounded">必須</span>
            </label>
            <div className="space-y-3">
              {['無料サンプルを請求する', '導入資料・価格表をダウンロード', 'その他ご相談'].map((option) => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="inquiryType"
                    value={option}
                    checked={formData.inquiryType === option}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#3E6044] focus:ring-[#3E6044] border-gray-300"
                  />
                  <span className="text-sm font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-bold mb-2">
              備考 <span className="text-gray-500 text-xs ml-1 bg-gray-100 px-2 py-1 rounded">任意</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3E6044] focus:border-transparent transition-shadow resize-none"
              placeholder="ご質問やご要望があればご記入ください。"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#C67C3E] hover:bg-[#b06a31] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
            >
              送信する
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
