import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { UI_TRANSLATIONS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F4ECE1] relative overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-[#E9C46A]/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-[#E76F51]/10 blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-12 h-12 mx-auto rounded-full bg-[#EADCCB] border border-[#DCBFA6] flex items-center justify-center text-[#E76F51] shadow-2xs"
        >
          <Heart className="w-6 h-6 fill-current" />
        </motion.div>

        {/* Brand Core Philosophy Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#3A2B20] leading-snug sm:leading-normal"
        >
          {UI_TRANSLATIONS.about.quote[lang]}
        </motion.blockquote>

        {/* Brand Explanatory Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-[#6B5749] max-w-2xl mx-auto leading-relaxed"
        >
          {UI_TRANSLATIONS.about.desc[lang]}
        </motion.p>

        {/* Decorative Badge */}
        <div className="pt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E2D6C3] text-xs font-bold text-[#635144]">
          <Sparkles className="w-3.5 h-3.5 text-[#E9C46A]" />
          <span>mompoti • Made in Kyrgyzstan</span>
        </div>
      </div>
    </section>
  );
};
