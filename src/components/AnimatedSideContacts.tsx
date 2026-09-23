import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { STORE_CONTACTS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export const AnimatedSideContacts: React.FC = () => {
  const { lang } = useLanguage();
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const phoneDigits = STORE_CONTACTS.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl =
    lang === 'kg'
      ? STORE_CONTACTS.whatsappUrlKg
      : STORE_CONTACTS.whatsappUrlRu;

  const contacts = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: `@${STORE_CONTACTS.instagramHandle}`,
      detail: lang === 'kg' ? 'Жаңылыктар жана сүрөттөр' : 'Фото и новинки',
      url: STORE_CONTACTS.instagramUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: Instagram,
      iconColor: 'text-[#E1306C] group-hover:text-white',
      hoverBg: 'group-hover:bg-gradient-to-tr group-hover:from-[#F58529] group-hover:via-[#DD2A7B] group-hover:to-[#8134AF]',
      pulseColor: 'bg-[#E1306C]/30',
      ariaLabel: 'Instagram mompoti_kg',
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      handle: STORE_CONTACTS.whatsappNumber,
      detail: lang === 'kg' ? 'Тез жооп берүү' : 'Быстрый ответ в чате',
      url: whatsappUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: MessageCircle,
      iconColor: 'text-[#25D366] group-hover:text-white',
      hoverBg: 'group-hover:bg-[#25D366]',
      pulseColor: 'bg-[#25D366]/35',
      ariaLabel: 'WhatsApp +996 500 751 557',
      hasActivePulse: true,
    },
    {
      id: 'phone',
      name: lang === 'kg' ? 'Телефон' : 'Телефон',
      handle: STORE_CONTACTS.phone,
      detail: lang === 'kg' ? 'Түз чалуу' : 'Прямой звонок',
      url: `tel:${phoneDigits}`,
      target: undefined,
      rel: undefined,
      icon: Phone,
      iconColor: 'text-[#E76F51] group-hover:text-white',
      hoverBg: 'group-hover:bg-[#E76F51]',
      pulseColor: 'bg-[#E76F51]/30',
      ariaLabel: 'Телефон +996 500 751 557',
    },
  ];

  return (
    <aside
      id="animated-side-contacts"
      aria-label="Байланыштар / Контакты"
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3 select-none pointer-events-none"
    >
      {/* Floating vertical stack of clean borderless icons with rich animations */}
      <motion.div
        initial={{ opacity: 0, x: 40, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.4 }}
        className="flex flex-col items-center gap-3.5 pointer-events-auto"
      >
        {contacts.map((c, index) => {
          const Icon = c.icon;
          const isHovered = hoveredIcon === c.id;

          return (
            <div
              key={c.id}
              className="relative flex items-center justify-end"
              onMouseEnter={() => setHoveredIcon(c.id)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {/* Animated Flyout Tooltip / Badge */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 14, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 10, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute right-14 mr-2 hidden sm:flex flex-col items-end py-2 px-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl pointer-events-none whitespace-nowrap z-30"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-[#3A2B20]">
                        {c.name}
                      </span>
                      <span className="text-[11px] font-semibold text-[#E76F51]">
                        {c.handle}
                      </span>
                    </div>
                    <span className="text-[10px] text-[#8F7D6D]">
                      {c.detail}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating Contact Icon Button */}
              <motion.a
                href={c.url}
                target={c.target}
                rel={c.rel}
                id={`side-contact-${c.id}`}
                aria-label={c.ariaLabel}
                title={`${c.name}: ${c.handle}`}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3 + index * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.35,
                }}
                whileHover={{ scale: 1.18, rotate: [0, -6, 6, 0] }}
                whileTap={{ scale: 0.9 }}
                className={`group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ${c.hoverBg}`}
              >
                {/* Soft ambient pulsating aura glow */}
                <motion.span
                  animate={{
                    scale: [1, 1.45, 1],
                    opacity: [0.35, 0, 0.35],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.6,
                  }}
                  className={`absolute inset-0 rounded-full ${c.pulseColor} pointer-events-none -z-10`}
                />

                {/* Additional ping wave for WhatsApp */}
                {c.hasActivePulse && (
                  <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping pointer-events-none" />
                )}

                <motion.div
                  whileHover={{ rotate: 12 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-300 ${c.iconColor}`} />
                </motion.div>
              </motion.a>
            </div>
          );
        })}
      </motion.div>
    </aside>
  );
};

