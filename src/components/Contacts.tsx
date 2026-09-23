import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone, Instagram, MapPin, Clock, Truck } from 'lucide-react';
import { STORE_CONTACTS, UI_TRANSLATIONS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export const Contacts: React.FC = () => {
  const { lang } = useLanguage();

  const currentWhatsappUrl = lang === 'kg' ? STORE_CONTACTS.whatsappUrlKg : STORE_CONTACTS.whatsappUrlRu;

  return (
    <section id="contacts" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DC] border border-[#E2D6C3] text-xs font-semibold text-[#635144]">
            <MessageCircle className="w-3.5 h-3.5 text-[#E76F51]" />
            <span>{UI_TRANSLATIONS.contacts.badge[lang]}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3A2B20]">
            {UI_TRANSLATIONS.contacts.title[lang]}
          </h2>

          <p className="text-sm sm:text-base text-[#6B5749] leading-relaxed">
            {UI_TRANSLATIONS.contacts.subtitle[lang]}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* WhatsApp Card */}
          <motion.a
            href={currentWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-card-whatsapp"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -5, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group flex flex-col p-6 rounded-3xl bg-[#F4ECE1] border border-[#E8DFC9] hover:border-[#25D366]/50 shadow-2xs hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#1B8A42] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#3A2B20] group-hover:text-[#1B8A42] transition-colors">WhatsApp</h3>
            <p className="text-xs text-[#7A6A5E] mt-1 mb-3">
              {UI_TRANSLATIONS.contacts.cards.whatsappDesc[lang]}
            </p>
            <span className="mt-auto text-sm font-bold text-[#25D366] flex items-center gap-1 group-hover:gap-2 transition-all">
              {STORE_CONTACTS.whatsappNumber} →
            </span>
          </motion.a>

          {/* Direct Phone Card */}
          <motion.a
            href={`tel:${STORE_CONTACTS.phone.replace(/[^0-9+]/g, '')}`}
            id="contact-card-phone"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            whileHover={{ y: -5, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group flex flex-col p-6 rounded-3xl bg-[#F4ECE1] border border-[#E8DFC9] hover:border-[#E76F51]/50 shadow-2xs hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E76F51]/15 text-[#E76F51] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#3A2B20] group-hover:text-[#E76F51] transition-colors">
              {lang === 'kg' ? 'Телефон' : 'Телефон'}
            </h3>
            <p className="text-xs text-[#7A6A5E] mt-1 mb-3">
              {UI_TRANSLATIONS.contacts.cards.phoneDesc[lang]}
            </p>
            <span className="mt-auto text-sm font-bold text-[#4A3B32] group-hover:text-[#E76F51] flex items-center gap-1 group-hover:gap-2 transition-all">
              {STORE_CONTACTS.phone} →
            </span>
          </motion.a>

          {/* Instagram Card */}
          <motion.a
            href={STORE_CONTACTS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-card-instagram"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            whileHover={{ y: -5, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group flex flex-col p-6 rounded-3xl bg-[#F4ECE1] border border-[#E8DFC9] hover:border-[#E1306C]/50 shadow-2xs hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E1306C]/15 text-[#C13584] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#3A2B20] group-hover:text-[#C13584] transition-colors">Instagram</h3>
            <p className="text-xs text-[#7A6A5E] mt-1 mb-3">
              {UI_TRANSLATIONS.contacts.cards.instagramDesc[lang]}
            </p>
            <span className="mt-auto text-sm font-bold text-[#4A3B32] group-hover:text-[#C13584] flex items-center gap-1 group-hover:gap-2 transition-all">
              {STORE_CONTACTS.instagramHandle} →
            </span>
          </motion.a>

          {/* Location / Delivery Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="flex flex-col p-6 rounded-3xl bg-[#F4ECE1] border border-[#E8DFC9] shadow-2xs"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#7A8B7B]/20 text-[#446346] flex items-center justify-center mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#3A2B20]">
              {UI_TRANSLATIONS.contacts.cards.addressTitle[lang]}
            </h3>
            <p className="text-xs text-[#7A6A5E] mt-1 mb-2">
              {STORE_CONTACTS.address[lang]}
            </p>
            <div className="mt-auto pt-2 border-t border-[#E5DAC8] flex items-center gap-1.5 text-[11px] font-semibold text-[#635144]">
              <Clock className="w-3.5 h-3.5 text-[#8C6B1F]" />
              <span>{STORE_CONTACTS.schedule[lang]}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
