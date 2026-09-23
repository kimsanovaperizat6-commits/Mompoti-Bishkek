import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { STORE_CONTACTS, UI_TRANSLATIONS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { lang } = useLanguage();

  const currentWhatsappUrl = lang === 'kg' ? STORE_CONTACTS.whatsappUrlKg : STORE_CONTACTS.whatsappUrlRu;

  return (
    <div className="fixed bottom-6 right-5 sm:right-7 z-40 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="hidden sm:block bg-white text-[#3A2B20] text-xs font-bold py-1.5 px-3 rounded-2xl shadow-md border border-[#E8DFC9] pointer-events-none select-none"
      >
        {UI_TRANSLATIONS.floating.tooltip[lang]}
      </motion.div>

      {/* Pulsing circular button */}
      <motion.a
        href={currentWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-shadow"
        aria-label="WhatsApp менен байланышуу"
      >
        {/* Soft pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </motion.a>
    </div>
  );
};
