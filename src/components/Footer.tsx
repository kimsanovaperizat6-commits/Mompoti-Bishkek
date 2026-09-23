import React from 'react';
import { STORE_CONTACTS, UI_TRANSLATIONS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#EFE7DA] border-t border-[#E2D6C3] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#DDD0BC] flex items-center justify-center text-[#5C4033]">
              <svg viewBox="0 0 32 32" className="w-5 h-5 fill-none stroke-[#5C4033] stroke-2">
                <path d="M6 16 L16 8 L26 16 V24 C26 25.1 25.1 26 24 26 H8 C6.9 26 6 25.1 6 24 Z" />
                <path d="M13 26 V18 H19 V26" />
              </svg>
            </div>
            <div>
              <span className="font-display text-lg font-bold text-[#3A2B20]">
                mompoti
              </span>
              <p className="text-xs text-[#8F7D6D]">
                everything for kidsroom • Кыргызстан
              </p>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#635144]">
            <a href="#hero" className="hover:text-[#E76F51] transition-colors">
              {UI_TRANSLATIONS.nav.home[lang]}
            </a>
            <a href="#catalog" className="hover:text-[#E76F51] transition-colors">
              {UI_TRANSLATIONS.nav.catalog[lang]}
            </a>
            <a href="#installment" className="hover:text-[#E76F51] transition-colors">
              {UI_TRANSLATIONS.nav.installment[lang]}
            </a>
            <a href="#about" className="hover:text-[#E76F51] transition-colors">
              {UI_TRANSLATIONS.nav.about[lang]}
            </a>
            <a href="#contacts" className="hover:text-[#E76F51] transition-colors">
              {UI_TRANSLATIONS.nav.contacts[lang]}
            </a>
          </div>

          {/* Language Switcher in Footer & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <LanguageToggle size="sm" />
            <p className="text-xs text-[#8F7D6D] text-center md:text-right">
              © {currentYear} mompoti. {UI_TRANSLATIONS.footer.rights[lang]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
