import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, ShieldCheck, Leaf, HeartHandshake } from 'lucide-react';
import { UI_TRANSLATIONS } from '../data/products';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28 bg-[#FAF7F2]"
    >
      {/* Subtle Background Nursery Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Warm Sunlight Gradient */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#F4A261]/12 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-[30rem] h-[30rem] rounded-full bg-[#E9C46A]/15 blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-[#7A8B7B]/10 blur-3xl" />

        {/* Floating Little Wooden Stars */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 left-[10%] text-[#D4A373]/40 hidden md:block"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z" />
          </svg>
        </motion.div>
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [0, -14, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-40 right-[12%] text-[#E76F51]/30 hidden lg:block"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z" />
          </svg>
        </motion.div>
        {/* Floating Soft Cloud */}
        <motion.div
          animate={{ x: [-20, 20, -20], y: [0, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-4 text-[#D8CFBF]/30 hidden xl:block"
        >
          <svg className="w-16 h-10 fill-current" viewBox="0 0 64 36">
            <path d="M20 28h28a12 12 0 0 0 0-24 16 16 0 0 0-30.8 5.6A10 10 0 0 0 20 28z" />
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] border border-[#E2D6C3] text-[#5C4033] text-xs sm:text-sm font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E76F51] animate-pulse" />
              <span>{UI_TRANSLATIONS.hero.badge[lang]}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#3A2B20] leading-[1.15]"
            >
              {lang === 'kg' ? (
                <>
                  Бөбөктөр үчүн{' '}
                  <span className="relative inline-block text-[#E76F51]">
                    жайлуу дүйнө
                    <svg
                      className="absolute left-0 -bottom-2 w-full h-3 text-[#E9C46A]/60 fill-none stroke-current stroke-[3] rounded"
                      viewBox="0 0 100 20"
                      preserveAspectRatio="none"
                    >
                      <path d="M0 14 Q 50 2, 100 12" />
                    </svg>
                  </span>{' '}
                  жаратабыз
                </>
              ) : (
                <>
                  Создаём{' '}
                  <span className="relative inline-block text-[#E76F51]">
                    уютный мир
                    <svg
                      className="absolute left-0 -bottom-2 w-full h-3 text-[#E9C46A]/60 fill-none stroke-current stroke-[3] rounded"
                      viewBox="0 0 100 20"
                      preserveAspectRatio="none"
                    >
                      <path d="M0 14 Q 50 2, 100 12" />
                    </svg>
                  </span>{' '}
                  для маленьких
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#6B5749] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {UI_TRANSLATIONS.hero.subtitle[lang]}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <motion.a
                href="#catalog"
                id="hero-cta-catalog"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-white bg-[#E76F51] hover:bg-[#D45D3F] shadow-sm hover:shadow-md transition-all group"
              >
                <span>{UI_TRANSLATIONS.hero.cta[lang]}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#installment"
                id="hero-cta-installment"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#4A3B32] bg-[#EFE8DC] hover:bg-[#E5DAC8] border border-[#DDD0BC] transition-all"
              >
                <span>{UI_TRANSLATIONS.hero.installmentCta[lang]}</span>
              </motion.a>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 border-t border-[#EAE1D3] grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#7A8B7B]/15 text-[#546A55] shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#4A3B32]">
                  {UI_TRANSLATIONS.hero.features.eco[lang]}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#E76F51]/15 text-[#E76F51] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#4A3B32]">
                  {UI_TRANSLATIONS.hero.features.safety[lang]}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-[#E9C46A]/20 text-[#8C6B1F] shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#4A3B32]">
                  {UI_TRANSLATIONS.hero.features.production[lang]}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Cozy Illustrated Kids Room Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto max-w-md lg:max-w-none rounded-3xl p-5 sm:p-6 bg-[#F3ECE0]/90 border border-[#E5DAC8] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              {/* Decorative Flags Bunting / Garland */}
              <div className="absolute top-2 left-6 right-6 flex justify-between z-10 opacity-80">
                <motion.span
                  animate={{ rotate: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-4 h-6 bg-[#E76F51] clip-flag origin-top"
                />
                <motion.span
                  animate={{ rotate: [3, -3, 3] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                  className="w-4 h-6 bg-[#E9C46A] clip-flag origin-top"
                />
                <motion.span
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                  className="w-4 h-6 bg-[#7A8B7B] clip-flag origin-top"
                />
                <motion.span
                  animate={{ rotate: [4, -4, 4] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
                  className="w-4 h-6 bg-[#D4A373] clip-flag origin-top"
                />
                <motion.span
                  animate={{ rotate: [-3, 4, -3] }}
                  transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="w-4 h-6 bg-[#E76F51] clip-flag origin-top"
                />
                <motion.span
                  animate={{ rotate: [3, -4, 3] }}
                  transition={{ duration: 2.9, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  className="w-4 h-6 bg-[#7A8B7B] clip-flag origin-top"
                />
              </div>

              {/* Cozy Room Vector Scene SVG */}
              <div className="relative pt-6 pb-2">
                <svg
                  viewBox="0 0 460 360"
                  className="w-full h-auto drop-shadow-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Floor line */}
                  <rect x="10" y="320" width="440" height="24" rx="4" fill="#DDCFBE" />
                  <line x1="20" y1="324" x2="440" y2="324" stroke="#CDBCAB" strokeWidth="2" strokeDasharray="16 8" />

                  {/* Window with mountain landscape of Kyrgyzstan & smiling sun */}
                  <g id="nursery-window">
                    <rect x="290" y="45" width="130" height="130" rx="65" fill="#E6F2F5" stroke="#B8C9CF" strokeWidth="4" />
                    {/* Mountains silhouette */}
                    <path d="M295 150 L335 95 L375 145 L415 110 L430 160 Z" fill="#9FB4B8" opacity="0.6" />
                    {/* Sun with warm glow */}
                    <circle cx="380" cy="80" r="14" fill="#F4A261" />
                    <circle cx="380" cy="80" r="20" fill="#F4A261" opacity="0.25" />
                    {/* Window cross frame */}
                    <line x1="355" y1="45" x2="355" y2="175" stroke="#C8D6DB" strokeWidth="3" />
                    <line x1="290" y1="110" x2="420" y2="110" stroke="#C8D6DB" strokeWidth="3" />
                  </g>

                  {/* House Bookshelf (Стеллаж-домик) */}
                  <g id="house-shelving">
                    {/* House roof outline */}
                    <path d="M40 160 L105 85 L170 160 Z" fill="#E8D5C1" stroke="#9E8570" strokeWidth="4" />
                    {/* Main frame */}
                    <rect x="44" y="158" width="122" height="162" rx="3" fill="#FDFBF7" stroke="#9E8570" strokeWidth="4" />
                    {/* Middle shelf */}
                    <line x1="46" y1="210" x2="164" y2="210" stroke="#9E8570" strokeWidth="3" />
                    <line x1="46" y1="265" x2="164" y2="265" stroke="#9E8570" strokeWidth="3" />
                    <line x1="105" y1="210" x2="105" y2="265" stroke="#9E8570" strokeWidth="3" />

                    {/* Books on top shelf */}
                    <rect x="55" y="172" width="10" height="38" rx="1" fill="#E76F51" />
                    <rect x="67" y="176" width="9" height="34" rx="1" fill="#E9C46A" />
                    <rect x="78" y="168" width="12" height="42" rx="1" fill="#7A8B7B" />
                    <rect x="92" y="178" width="8" height="32" rx="1" fill="#D4A373" />

                    {/* Cute toy bear in shelf */}
                    <circle cx="132" cy="188" r="12" fill="#DDA15E" />
                    <circle cx="123" cy="178" r="4.5" fill="#BC6C25" />
                    <circle cx="141" cy="178" r="4.5" fill="#BC6C25" />
                    <circle cx="132" cy="192" r="3.5" fill="#603808" />

                    {/* Toy block bin on bottom */}
                    <rect x="52" y="275" width="48" height="40" rx="3" fill="#F2E6D5" stroke="#C4AD97" strokeWidth="2" />
                    <text x="68" y="300" fill="#9C7E67" fontSize="14" fontWeight="bold">M</text>
                    <rect x="108" y="275" width="50" height="40" rx="3" fill="#EFE0D0" stroke="#C4AD97" strokeWidth="2" />
                    <circle cx="133" cy="295" r="7" fill="#E76F51" opacity="0.6" />
                  </g>

                  {/* Cozy Kids Bed (Детская кровать с мягким изголовьем) */}
                  <g id="kids-bed">
                    {/* Headboard with soft rounded ears/scallops */}
                    <path
                      d="M210 240 C210 200, 235 185, 275 185 C315 185, 340 200, 340 240 Z"
                      fill="#EAD9C6"
                      stroke="#8C735F"
                      strokeWidth="3.5"
                    />
                    {/* Bed body */}
                    <rect x="200" y="240" width="220" height="70" rx="10" fill="#FDFBF7" stroke="#8C735F" strokeWidth="3.5" />
                    {/* Mattress */}
                    <rect x="205" y="235" width="210" height="24" rx="6" fill="#F4A261" opacity="0.8" />
                    {/* Blanket folds */}
                    <rect x="250" y="245" width="165" height="58" rx="8" fill="#F2E9DE" stroke="#CBBBAA" strokeWidth="2" />
                    {/* Pillow */}
                    <ellipse cx="238" cy="235" rx="24" ry="12" fill="#FFFFFF" stroke="#D3C5B5" strokeWidth="2" />
                    {/* Wooden Bed Legs */}
                    <rect x="215" y="310" width="12" height="15" rx="2" fill="#A88B74" />
                    <rect x="395" y="310" width="12" height="15" rx="2" fill="#A88B74" />
                  </g>

                  {/* Little Cloud Nightlight on Wall with breathing warm aura */}
                  <g id="cloud-nightlight">
                    {/* Soft warm aura */}
                    <circle cx="234" cy="116" r="32" fill="#FFF2C6" opacity="0.6" />
                    <path
                      d="M190 120 C190 108 200 100 212 100 C216 90 228 85 240 90 C252 86 264 96 266 106 C275 108 280 116 278 125 C278 135 268 140 258 140 L198 140 C188 140 190 128 190 120 Z"
                      fill="#FFF9E6"
                      stroke="#E5C88F"
                      strokeWidth="2.5"
                    />
                    {/* Gentle light glow rays */}
                    <circle cx="235" cy="115" r="3" fill="#E76F51" />
                    <line x1="235" y1="140" x2="235" y2="152" stroke="#E5C88F" strokeWidth="2" strokeDasharray="2 2" />
                  </g>

                  {/* Little Chair with bunny ears in foreground */}
                  <g id="bunny-chair">
                    {/* Bunny ears */}
                    <ellipse cx="168" cy="245" rx="5" ry="16" fill="#DDA15E" stroke="#8C735F" strokeWidth="2" />
                    <ellipse cx="184" cy="245" rx="5" ry="16" fill="#DDA15E" stroke="#8C735F" strokeWidth="2" />
                    {/* Chair back */}
                    <circle cx="176" cy="265" r="18" fill="#F9F6F0" stroke="#8C735F" strokeWidth="2.5" />
                    {/* Chair seat */}
                    <ellipse cx="176" cy="285" rx="22" ry="7" fill="#E8D7C3" stroke="#8C735F" strokeWidth="2.5" />
                    {/* Legs */}
                    <line x1="162" y1="290" x2="156" y2="320" stroke="#8C735F" strokeWidth="3" strokeLinecap="round" />
                    <line x1="190" y1="290" x2="196" y2="320" stroke="#8C735F" strokeWidth="3" strokeLinecap="round" />
                  </g>
                </svg>
              </div>

              {/* Floating Room Badges */}
              <div className="flex items-center justify-between text-[11px] font-bold text-[#635144] pt-2 border-t border-[#EAE1D3]">
                <div className="flex items-center gap-1.5 bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E0D5C3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7A8B7B]" />
                  <span>{UI_TRANSLATIONS.hero.roomTooltips.shelving[lang]}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E0D5C3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E76F51]" />
                  <span>{UI_TRANSLATIONS.hero.roomTooltips.bed[lang]}</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#E0D5C3]">
                  <Sparkles className="w-3 h-3 text-[#E9C46A]" />
                  <span>{UI_TRANSLATIONS.hero.roomTooltips.standard[lang]}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
