import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { STORE_CONTACTS, UI_TRANSLATIONS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: UI_TRANSLATIONS.nav.home[lang], href: '#hero' },
    { label: UI_TRANSLATIONS.nav.catalog[lang], href: '#catalog' },
    { label: UI_TRANSLATIONS.nav.installment[lang], href: '#installment' },
    { label: UI_TRANSLATIONS.nav.about[lang], href: '#about' },
  ];

  const currentWhatsappUrl = lang === 'kg' ? STORE_CONTACTS.whatsappUrlKg : STORE_CONTACTS.whatsappUrlRu;

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#EFE8DC]/80 py-2.5 sm:py-3'
          : 'bg-[#FAF7F2] py-3.5 sm:py-4 md:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          id="header-logo"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="mompoti башкы бет"
        >
          <div className="w-10 h-10 rounded-full bg-[#F3ECE0] border border-[#E5DAC8] flex items-center justify-center text-[#5C4033] shadow-xs group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 32 32" className="w-5 h-5 fill-none stroke-[#5C4033] stroke-2">
              <path d="M6 16 L16 8 L26 16 V24 C26 25.1 25.1 26 24 26 H8 C6.9 26 6 25.1 6 24 Z" />
              <path d="M13 26 V18 H19 V26" />
              <path d="M21 7 L22 5 L24 6 L23 8 L25 10 L23 10 L21 12 L21 10 L19 9 L21 9 Z" fill="#7A8B7B" stroke="none" />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-display text-xl font-bold tracking-tight text-[#4A3728]">
                mompoti
              </span>
              <svg className="w-3.5 h-3.5 fill-[#7A8B7B]" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z" />
              </svg>
            </div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#8F7D6D]">
              everything for kidsroom
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#4A3B32] hover:text-[#E76F51] transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action button & Language Switcher (Desktop) */}
        <div className="hidden sm:flex items-center gap-3 md:gap-4">
          {/* Language Switcher KG / RU */}
          <LanguageToggle size="sm" />

          <a
            href={`tel:${STORE_CONTACTS.phone.replace(/[^0-9+]/g, '')}`}
            className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-[#4A3B32] hover:text-[#E76F51] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E76F51]" />
            <span>{STORE_CONTACTS.phone}</span>
          </a>

          <a
            href={currentWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-cta-whatsapp"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold text-white bg-[#E76F51] hover:bg-[#D45D3F] transition-colors shadow-xs active:scale-98 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{UI_TRANSLATIONS.header.writeWhatsapp[lang]}</span>
          </a>
        </div>

        {/* Mobile Actions: Language toggle + Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <LanguageToggle size="sm" />

          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#4A3B32] hover:bg-[#EFE8DC] transition-colors"
            aria-label={mobileMenuOpen ? 'Менюну жабуу' : 'Менюну ачуу'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-[#EFE8DC] bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-3 duration-200"
        >
          <div className="flex items-center justify-between px-3 py-1 border-b border-[#EAE1D3] pb-3">
            <span className="text-xs font-bold text-[#7A6A5E] uppercase tracking-wider">
              {lang === 'kg' ? 'Тилди тандоо' : 'Выбор языка'}
            </span>
            <LanguageToggle size="sm" />
          </div>

          <div className="flex flex-col space-y-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-base font-semibold text-[#4A3B32] hover:bg-[#F2ECE1] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EFE8DC] flex flex-col gap-3">
            <div className="text-xs text-[#8F7D6D] px-3">
              {STORE_CONTACTS.address[lang]}
            </div>
            <a
              href={`tel:${STORE_CONTACTS.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 px-3 text-sm font-bold text-[#4A3B32]"
            >
              <Phone className="w-4 h-4 text-[#E76F51]" />
              <span>{STORE_CONTACTS.phone}</span>
            </a>
            <a
              href={currentWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white bg-[#E76F51] hover:bg-[#D45D3F] shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{UI_TRANSLATIONS.header.writeWhatsapp[lang]}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
