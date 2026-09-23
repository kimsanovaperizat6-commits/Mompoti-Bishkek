import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onFinish?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF7F2] text-[#2C2420] px-4 pointer-events-auto"
        >
          {/* Animated illustration of a cozy children's house & star */}
          <div className="relative w-28 h-28 flex items-center justify-center mb-6">
            <motion.svg
              viewBox="0 0 100 100"
              className="w-24 h-24 stroke-[#C49A6C]"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* House roof */}
              <motion.path
                d="M 20 48 L 50 20 L 80 48"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              {/* House walls */}
              <motion.path
                d="M 28 48 L 28 80 L 72 80 L 72 48"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              />
              {/* Window */}
              <motion.rect
                x="40"
                y="48"
                width="20"
                height="20"
                rx="4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5, ease: "backOut" }}
              />
              {/* Window crosses */}
              <motion.path
                d="M 50 48 L 50 68 M 40 58 L 60 58"
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              />
            </motion.svg>

            {/* Glowing star on top */}
            <motion.div
              initial={{ scale: 0, rotate: -30, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', damping: 10 }}
              className="absolute -top-1 -right-1 text-[#E76F51]"
            >
              <svg className="w-7 h-7 fill-current drop-shadow-sm" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.2h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z" />
              </svg>
            </motion.div>

            {/* Floating mini cloud */}
            <motion.div
              animate={{
                x: [-4, 4, -4],
                y: [0, -2, 0],
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="absolute -bottom-1 -left-4 text-[#D8E2DC] opacity-80"
            >
              <svg className="w-9 h-5 fill-current" viewBox="0 0 36 20">
                <path d="M10 18h18a6 6 0 0 0 1.5-11.8A7 7 0 0 0 16 5a8 8 0 0 0-7.8 6.2A5 5 0 0 0 10 18z" />
              </svg>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-1.5 font-display text-2xl font-bold tracking-tight text-[#4A3B32]">
              <span>mompoti</span>
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#E76F51]" />
            </div>
            <p className="text-xs uppercase tracking-widest text-[#8C7A6B] mt-1 font-semibold">
              everything for kidsroom
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
