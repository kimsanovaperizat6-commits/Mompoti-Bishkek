import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

interface LanguageToggleProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '', size = 'md' }) => {
  const { lang, setLang } = useLanguage();

  const options: { code: Language; label: string; flag: string }[] = [
    { code: 'kg', label: 'KG', flag: '🇰🇬' },
    { code: 'ru', label: 'RU', flag: '🇷🇺' },
  ];

  return (
    <div
      id="language-toggle"
      className={`inline-flex items-center p-1 rounded-full bg-[#EDE4D5] border border-[#E0D4C2] ${className}`}
      role="group"
      aria-label="Тилди тандоо / Выбор языка"
    >
      {options.map((opt) => {
        const isActive = lang === opt.code;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLang(opt.code)}
            id={`lang-btn-${opt.code}`}
            className={`relative flex items-center justify-center gap-1 font-bold rounded-full transition-colors z-10 select-none ${
              size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-xs'
            } ${isActive ? 'text-white' : 'text-[#6B5A4D] hover:text-[#2C2420]'}`}
            aria-pressed={isActive}
            aria-label={opt.label}
          >
            {isActive && (
              <motion.span
                layoutId="active-lang-pill"
                className="absolute inset-0 bg-[#E76F51] rounded-full shadow-xs -z-10"
                transition={{ type: 'spring', stiffness: 450, damping: 30 }}
              />
            )}
            <span className="tracking-wider">{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
};
