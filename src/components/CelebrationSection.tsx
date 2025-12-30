"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/**
 * CelebrationSection Component
 * Interactive section with confetti animation triggered by button click
 */
export default function CelebrationSection() {
  const [celebrate, setCelebrate] = useState(false);

  const handleCelebrate = async () => {
    setCelebrate(true);

    // Trigger confetti animation
    if (typeof window !== "undefined" && window.confetti) {
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff69b4", "#ffd700", "#87ceeb", "#dda0dd", "#ffb6c1"],
      });
    }

    // Reset after animation
    setTimeout(() => setCelebrate(false), 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <motion.div
        className="text-center z-10 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Celebration emoji */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.span
            className="text-8xl sm:text-9xl inline-block"
            animate={
              celebrate
                ? { scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }
                : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            🎆
          </motion.span>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl sm:text-6xl font-display font-bold mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500">
            It&apos;s Time to Celebrate!
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-700 mb-12 leading-relaxed"
        >
          This special day deserves all the joy and celebration. Let&apos;s make
          it unforgettable with a burst of happiness!
        </motion.p>

        {/* Celebration button */}
        <motion.div variants={itemVariants} className="mb-12 relative">
          {/* Animated glow container */}
          <motion.div
            className="absolute -inset-3 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.button
            onClick={handleCelebrate}
            whileHover={{ scale: 1.12, y: -3 }}
            whileTap={{ scale: 0.92 }}
            className="relative px-12 py-6 text-lg font-bold text-white rounded-full overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 group-hover:from-rose-600 group-hover:via-pink-600 group-hover:to-purple-600 transition-all duration-300" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 animate-pulse" />

            {/* Button text with animation */}
            <span className="relative z-10 flex items-center gap-3">
              <motion.span
                animate={{
                  scale: celebrate ? [1, 1.3, 1] : [1, 1.1, 1],
                  rotate: celebrate ? [0, 360, 360] : 0,
                }}
                transition={{
                  duration: 0.6,
                  repeat: celebrate ? 0 : Infinity,
                  repeatType: celebrate ? "loop" : undefined,
                }}
              >
                🎉
              </motion.span>
              <span>Celebrate Now!</span>
            </span>
          </motion.button>
        </motion.div>

        {/* Instructions */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-gray-600 italic"
        >
          Click the button above to unleash the celebration! 🎊
        </motion.p>

        {/* Animated confetti-like elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl sm:text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            >
              {[ "🎁", "🎀", "✨", "🌟", "💫"][i % 20]}
            </motion.div>
          ))}
        </div>

        {/* Additional celebration message */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl border-2 border-pink-300"
        >
          <p className="text-gray-800 font-semibold text-lg">
            💖 Every moment with you is worth celebrating!
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
