"use client";

import { motion } from "framer-motion";

interface FinalWishSectionProps {
  mainMessage?: string;
  closeMessage?: string;
}

/**
 * FinalWishSection Component
 * Big emotional closing message to end the birthday experience
 */
export default function FinalWishSection({
  mainMessage = "May This Year Bring You Endless Happiness",
  closeMessage = "You deserve all the magic, joy, and love the world has to offer. Here's to making every single day as special as you are. 💖",
}: FinalWishSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 via-pink-100/20 to-purple-200/30" />

      <motion.div
        className="text-center z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Top heart emoji */}
        <motion.div variants={textVariants} className="mb-10 relative">
          <motion.div
            className="absolute -inset-8 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full blur-3xl opacity-40"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.span
            className="text-7xl sm:text-8xl inline-block relative z-10"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💖
          </motion.span>
        </motion.div>

        {/* Main wish message */}
        <motion.h2
          variants={textVariants}
          className="text-4xl sm:text-7xl md:text-8xl font-display font-bold mb-8 leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500">
            {mainMessage}
          </span>
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          variants={textVariants}
          className="flex justify-center gap-3 my-10"
        >
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold rounded-full" />
          <span className="text-2xl">✨</span>
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold rounded-full" />
        </motion.div>

        {/* Close message */}
        <motion.p
          variants={textVariants}
          className="text-lg sm:text-2xl text-gray-700 font-light max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {closeMessage}
        </motion.p>

        {/* Signature elements */}
        <motion.div variants={textVariants} className="mb-12 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-rose-200 to-pink-200 rounded-3xl blur-2xl opacity-30 -z-10"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="flex justify-center gap-6 text-5xl sm:text-6xl mb-6">
            <motion.span
              animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              🌟
            </motion.span>
            <motion.span
              animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
            >
              💕
            </motion.span>
            <motion.span
              animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
            >
              🌸
            </motion.span>
          </div>
          <p className="text-gray-600 text-lg font-medium">
            Forever by your side
          </p>
        </motion.div>

        {/* Final accent */}
        <motion.div variants={textVariants} className="relative inline-block">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold to-pink-400 rounded-full blur-xl opacity-50"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="relative bg-gradient-to-r from-white via-pink-50 to-white px-10 py-6 rounded-full border-2 border-gold/60 backdrop-blur-sm shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 uppercase tracking-widest">
              With All My Love 💌
            </p>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl sm:text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.3, 1],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            >
              {
                [
                  "✨",
                  "💝",
                  "🌹",
                  "🎀",
                  "💫",
                  "🌷",
                  "💖",
                  "🌺",
                  "🎊",
                  "💐",
                  "🌟",
                  "🦋",
                  "🌼",
                  "💕",
                  "🎆",
                ][i]
              }
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-gray-600 text-sm">~ End of Wish ~</p>
      </motion.div>
    </section>
  );
}
