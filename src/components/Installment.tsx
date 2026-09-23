import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { STORE_CONTACTS, UI_TRANSLATIONS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export const Installment: React.FC = () => {
  const { lang } = useLanguage();

  const queryText =
    lang === 'kg'
      ? encodeURIComponent('Саламатсызбы! МПлюс аркылуу эмеректи бөлүп төлөө боюнча шарттарды билгим келет.')
      : encodeURIComponent('Здравствуйте! Хочу узнать условия рассрочки через МПлюс на детскую мебель mompoti.');

  const phoneDigits = STORE_CONTACTS.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${queryText}`;

  return (
    <section id="installment" className="py-16 md:py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-8 sm:p-10 md:p-12 bg-gradient-to-br from-[#F5E6D3] via-[#F4E3CD] to-[#EBD5BB] border border-[#E2CEB3] shadow-sm overflow-hidden"
        >
          {/* Subtle Orange Glow Ambient */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#E76F51]/15 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Info */}
            <div className="space-y-4 text-center md:text-left max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 text-[#9E5124] text-xs font-bold border border-[#E6CDB6]">
                <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
                <span>{UI_TRANSLATIONS.installment.badge[lang]}</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3A2B20]">
                  {UI_TRANSLATIONS.installment.headline[lang]}
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-2 text-xl sm:text-2xl font-bold text-[#E76F51]">
                  <span>{UI_TRANSLATIONS.installment.subheadline[lang]}</span>
                  <span className="text-2xl">🟠</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#6B5749] leading-relaxed">
                {UI_TRANSLATIONS.installment.desc[lang]}
              </p>

              {/* Benefits Checklist */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2 text-xs sm:text-sm font-semibold text-[#4A3B32]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A8B7B]" />
                  <span>{UI_TRANSLATIONS.installment.features.online[lang]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7A8B7B]" />
                  <span>{UI_TRANSLATIONS.installment.features.noCommission[lang]}</span>
                </div>
              </div>
            </div>

            {/* Right Action Button & WhatsApp Note */}
            <div className="flex flex-col items-center shrink-0 w-full sm:w-auto">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="installment-whatsapp-cta"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-bold text-white bg-[#E76F51] hover:bg-[#D45D3F] shadow-sm hover:shadow-md transition-all group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{UI_TRANSLATIONS.installment.cta[lang]}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <span className="mt-2.5 text-[11px] text-[#7A6A5E] font-medium text-center">
                {UI_TRANSLATIONS.installment.note[lang]}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
