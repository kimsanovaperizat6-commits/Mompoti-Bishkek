import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, MessageCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS, STORE_CONTACTS, UI_TRANSLATIONS } from '../data/products';
import { Product } from '../types';
import { ProductModal } from './ProductModal';
import { ProductImage } from './ProductImage';
import { useLanguage } from '../context/LanguageContext';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { lang } = useLanguage();

  const categoryTabs = [
    { key: 'all', label: UI_TRANSLATIONS.catalog.filterAll[lang] },
    { key: 'beds', label: UI_TRANSLATIONS.catalog.categories.beds[lang] },
    { key: 'tables', label: UI_TRANSLATIONS.catalog.categories.tables[lang] },
    { key: 'shelves', label: UI_TRANSLATIONS.catalog.categories.shelves[lang] },
    { key: 'storage', label: UI_TRANSLATIONS.catalog.categories.storage[lang] },
    { key: 'safety', label: UI_TRANSLATIONS.catalog.categories.safety[lang] },
    { key: 'sets', label: UI_TRANSLATIONS.catalog.categories.sets[lang] },
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="catalog" className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE8DC] border border-[#E2D6C3] text-xs font-semibold text-[#635144]">
            <Sparkles className="w-3.5 h-3.5 text-[#E76F51]" />
            <span>{UI_TRANSLATIONS.catalog.badge[lang]}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#3A2B20]">
            {UI_TRANSLATIONS.catalog.title[lang]}
          </h2>

          <p className="text-sm sm:text-base text-[#6B5749] leading-relaxed">
            {UI_TRANSLATIONS.catalog.subtitle[lang]}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 sm:pb-6 mb-8 no-scrollbar">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveCategory(tab.key)}
                className={`relative px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'text-white bg-[#E76F51] shadow-xs'
                    : 'text-[#635144] bg-[#F0E8DC] hover:bg-[#E8DFC9]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => {
              const productName = product.name[lang];
              const productDesc = product.shortDescription[lang];
              const encodedText =
                lang === 'kg'
                  ? encodeURIComponent(`Саламатсызбы! "${productName}" боюнча сурайын дегем.`)
                  : encodeURIComponent(`Здравствуйте! Хочу заказать "${productName}" в детскую комнату.`);

              const phoneDigits = STORE_CONTACTS.whatsappNumber.replace(/[^0-9]/g, '');
              const productWhatsapp = `https://wa.me/${phoneDigits}?text=${encodedText}`;

              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.4, delay: (idx % 3) * 0.06 }}
                  className="group relative flex flex-col rounded-3xl bg-[#F4ECE1] border border-[#E8DFC9] overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-500 hover:-translate-y-1.5"
                >
                  {/* Image Container with ProductImage */}
                  <div className="relative aspect-4/3 overflow-hidden bg-[#EAE0D0]">
                    <ProductImage
                      product={product}
                      aspectClass="aspect-4/3"
                      className="group-hover:scale-108 group-hover:-translate-y-1"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#FAF7F2]/95 backdrop-blur-xs text-[#5C4033] border border-[#E3D7C5] shadow-2xs transition-transform group-hover:scale-105 inline-block">
                          {product.badge[lang]}
                        </span>
                      </div>
                    )}

                    {/* Quick View Floating Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#2C2420]/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none p-4 z-20">
                      <motion.button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 text-xs font-bold text-[#3A2B20] shadow-md hover:bg-white transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#E76F51]" />
                        <span>{UI_TRANSLATIONS.catalog.quickView[lang]}</span>
                      </motion.button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-[#3A2B20] group-hover:text-[#E76F51] transition-colors">
                          {productName}
                        </h3>
                        {product.priceNote && (
                          <span className="text-xs font-semibold text-[#8C7A6B] shrink-0">
                            {product.priceNote[lang]}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-[#6B5749] line-clamp-2 leading-relaxed">
                        {productDesc}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 flex items-center gap-2 border-t border-[#E8DEC8]">
                      <motion.button
                        type="button"
                        onClick={() => setSelectedProduct(product)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-[#4A3B32] bg-[#EFE8DC] hover:bg-[#E5DAC8] transition-colors cursor-pointer group/btn"
                      >
                        <span>{UI_TRANSLATIONS.catalog.details[lang]}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#7A6A5E] group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>

                      <motion.a
                        href={productWhatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-bold text-white bg-[#E76F51] hover:bg-[#D45D3F] transition-all shadow-2xs"
                        title={UI_TRANSLATIONS.catalog.order[lang]}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{UI_TRANSLATIONS.catalog.order[lang]}</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Product Quick View & Specs Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
