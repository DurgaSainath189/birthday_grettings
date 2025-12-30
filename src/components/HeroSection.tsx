"use client";

import { motion } from "framer-motion";

interface HeroSectionProps {
  name: string;
  subtitle?: string;
}

/**
 * HeroSection Component
 * Animated hero section with big birthday message and name highlight
 */
export default function HeroSection({
  name,
  subtitle = "To the person who makes every year brighter",
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "backOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <motion.div
        className="text-center z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Birthday emoji and text animation */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block relative"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 rounded-full blur-2xl opacity-50"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
          <motion.span
            className="text-6xl sm:text-8xl inline-block relative z-10"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            🎉
          </motion.span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl font-display font-black mb-8 leading-tight drop-shadow-2xl"
        >
          <motion.span
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Happy
          </motion.span>
          <br />
          <motion.span
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          >
            Birthday
          </motion.span>
        </motion.h1>

        {/* Name highlight */}
        <motion.div variants={nameVariants} className="mb-8 relative group">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 blur-3xl opacity-70 rounded-full"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full blur-2xl opacity-30"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, linear: true }}
          />
          <h2 className="pt-2 relative text-4xl sm:text-6xl font-script text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mb-4 font-bold drop-shadow-lg">
            {name}
          </h2>
          <motion.div
            className="h-2 w-32 sm:w-40 bg-gradient-to-r from-rose-400 via-gold to-pink-400 mx-auto rounded-full shadow-xl"
            animate={{
              width: ["8rem", "10rem", "8rem"],
              boxShadow: [
                "0 0 10px rgba(217, 119, 6, 0.5)",
                "0 0 20px rgba(217, 119, 6, 0.8)",
                "0 0 10px rgba(217, 119, 6, 0.5)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          variants={itemVariants}
          className="mt-12 flex justify-center gap-4 sm:gap-6 text-4xl sm:text-5xl"
        >
          <motion.span
            className="relative"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 20, -20, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            💝
          </motion.span>
          <motion.span
            className="relative"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
              rotate: [0, -20, 20, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
          >
            ✨
          </motion.span>
          <motion.span
            className="relative"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 20, -20, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
          >
            🎂
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-pink-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
