import React, { useState } from 'react';
import { Bed, Table, BookOpen, Archive, Shield, Sparkles, Home } from 'lucide-react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProductImageProps {
  product: Product;
  className?: string;
  aspectClass?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
  className = '',
  aspectClass = 'aspect-4/3',
}) => {
  const [hasError, setHasError] = useState(false);
  const { lang } = useLanguage();

  const getCategoryIcon = () => {
    switch (product.category) {
      case 'beds':
        return <Bed className="w-10 h-10 text-[#E76F51]" />;
      case 'tables':
        return <Table className="w-10 h-10 text-[#D4A373]" />;
      case 'shelves':
      case 'shelving':
        return <BookOpen className="w-10 h-10 text-[#7A8B7B]" />;
      case 'storage':
        return <Archive className="w-10 h-10 text-[#8C6B1F]" />;
      case 'safety':
        return <Shield className="w-10 h-10 text-[#E76F51]" />;
      case 'sets':
      default:
        return <Home className="w-10 h-10 text-[#546A55]" />;
    }
  };

  const getCategoryLabel = () => {
    switch (product.category) {
      case 'beds':
        return lang === 'kg' ? 'Балдар керебети' : 'Детская кровать';
      case 'tables':
        return lang === 'kg' ? 'Үстөл жана отургуч' : 'Стол и стульчик';
      case 'shelves':
      case 'shelving':
        return lang === 'kg' ? 'Китеп жана оюнчук текчеси' : 'Стеллаж и витрина';
      case 'storage':
        return lang === 'kg' ? 'Сактоо тутуму' : 'Система хранения';
      case 'safety':
        return lang === 'kg' ? 'Коопсуздук жана өнүгүү' : 'Безопасность и развитие';
      case 'sets':
      default:
        return lang === 'kg' ? 'Толук топтом' : 'Мебельный гарнитур';
    }
  };

  if (hasError) {
    return (
      <div
        className={`w-full ${aspectClass} bg-gradient-to-br from-[#F5ECE1] to-[#EAE0D0] border-b border-[#E2D6C3] flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden ${className}`}
      >
        {/* Soft decorative background shapes */}
        <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#E76F51]/10 blur-xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-[#E9C46A]/15 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center space-y-2.5">
          <div className="w-16 h-16 rounded-2xl bg-[#FAF7F2] border border-[#E0D5C3] shadow-2xs flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            {getCategoryIcon()}
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C7564]">
              {getCategoryLabel()}
            </span>
            <p className="text-sm font-bold text-[#3A2B20] mt-0.5 max-w-[200px] line-clamp-1">
              {product.name[lang]}
            </p>
          </div>
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF7F2]/90 border border-[#E2D5C3] text-[10px] font-semibold text-[#6E594B]">
            <Sparkles className="w-2.5 h-2.5 text-[#E76F51]" />
            <span>mompoti • {lang === 'kg' ? 'Кыргызстанда жасалган' : 'Сделано в Кыргызстане'}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <img
      src={product.image}
      alt={product.name[lang]}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      loading="lazy"
      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${className}`}
    />
  );
};
