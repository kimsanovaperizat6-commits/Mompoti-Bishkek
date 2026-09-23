import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, ShieldCheck, Sparkles, CheckCircle2, Ruler, Factory, Layers } from 'lucide-react';
import { Product } from '../types';
import { STORE_CONTACTS, UI_TRANSLATIONS } from '../data/products';
import { ProductImage } from './ProductImage';
import { useLanguage } from '../context/LanguageContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { lang } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const productName = product.name[lang];
  const encodedText =
    lang === 'kg'
      ? encodeURIComponent(`Саламатсызбы! "${productName}" товары боюнча маалымат алып, буйрутма бергим келет.`)
      : encodeURIComponent(`Здравствуйте! Интересует "${productName}", хочу узнать подробности и сделать заказ.`);

  const phoneDigits = STORE_CONTACTS.whatsappNumber.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodedText}`;

  return (
    <AnimatePresence>
      <div
        id="product-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-[#2C2420]/60 backdrop-blur-xs overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          id="product-modal-container"
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl border border-[#E8DFC9] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            id="modal-close-button"
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#4A3B32] hover:bg-white hover:text-[#E76F51] shadow-xs transition-all"
            aria-label={UI_TRANSLATIONS.modal.close[lang]}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Scrollable Content */}
          <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
            {/* Image banner */}
            <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-[#EFE8DC]">
              <ProductImage
                product={product}
                aspectClass="aspect-16/10"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold bg-[#FAF7F2]/95 text-[#4A3728] shadow-xs border border-[#E3D7C5]">
                  {product.badge[lang]}
                </span>
              )}
            </div>

            {/* Header info */}
            <div>
              <div className="flex items-center justify-between gap-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3A2B20]">
                  {productName}
                </h2>
                {product.priceNote && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EFE8DC] text-[#6B5749] shrink-0">
                    {product.priceNote[lang]}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm sm:text-base text-[#6B5749] leading-relaxed">
                {product.details.description[lang]}
              </p>
            </div>

            {/* Specifications Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {/* Materials */}
              <div className="p-3.5 rounded-2xl bg-[#F4ECE1] border border-[#E6DBCA] flex items-start gap-3">
                <Layers className="w-5 h-5 text-[#8C6B1F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A6756]">
                    {UI_TRANSLATIONS.modal.specs.materials[lang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A3B32] mt-0.5">
                    {product.details.materials[lang]}
                  </p>
                </div>
              </div>

              {/* Safety */}
              <div className="p-3.5 rounded-2xl bg-[#F4ECE1] border border-[#E6DBCA] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#E76F51] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A6756]">
                    {UI_TRANSLATIONS.modal.specs.safety[lang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A3B32] mt-0.5">
                    {product.details.safety[lang]}
                  </p>
                </div>
              </div>

              {/* Dimensions */}
              {product.details.dimensions && (
                <div className="p-3.5 rounded-2xl bg-[#F4ECE1] border border-[#E6DBCA] flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-[#546A55] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A6756]">
                      {UI_TRANSLATIONS.modal.specs.dimensions[lang]}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#4A3B32] mt-0.5">
                      {product.details.dimensions[lang]}
                    </p>
                  </div>
                </div>
              )}

              {/* Manufacturing */}
              <div className="p-3.5 rounded-2xl bg-[#F4ECE1] border border-[#E6DBCA] flex items-start gap-3">
                <Factory className="w-5 h-5 text-[#635144] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A6756]">
                    {UI_TRANSLATIONS.modal.specs.manufacturing[lang]}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#4A3B32] mt-0.5">
                    {product.details.manufacturing[lang]}
                  </p>
                </div>
              </div>
            </div>

            {/* Installment banner note in modal */}
            <div className="p-3.5 rounded-2xl bg-[#FDF0E9] border border-[#F4D2C3] flex items-center justify-between gap-3 text-xs text-[#994732]">
              <div className="flex items-center gap-2">
                <span className="text-base">🟠</span>
                <span className="font-bold">
                  {UI_TRANSLATIONS.modal.installmentAvailable[lang]}
                </span>
              </div>
              <a
                href="#installment"
                onClick={onClose}
                className="underline hover:text-[#7A3321] font-semibold shrink-0"
              >
                {UI_TRANSLATIONS.nav.installment[lang]}
              </a>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="modal-order-whatsapp-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full text-sm font-bold text-white bg-[#E76F51] hover:bg-[#D45D3F] shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{UI_TRANSLATIONS.modal.orderWhatsapp[lang]}</span>
              </motion.a>

              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold text-[#6B5A4D] hover:bg-[#EFE8DC] transition-colors cursor-pointer"
              >
                {UI_TRANSLATIONS.modal.close[lang]}
              </motion.button>
            </div>

            <p className="text-[11px] text-center text-[#8F7D6D]">
              {UI_TRANSLATIONS.modal.managerNote[lang]}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
