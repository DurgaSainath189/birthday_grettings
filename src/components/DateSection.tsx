"use client";

import { motion } from "framer-motion";

/**
 * DateSection Component
 * Highlights the special birthday date (January 1st) with celebratory styling
 */
export default function DateSection() {
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
        className="text-center z-10 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Badge background */}
        <motion.div variants={itemVariants} className="inline-block mb-8">
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 rounded-full blur-2xl opacity-70"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative bg-gradient-to-br from-white via-pink-50 to-purple-50 px-8 py-6 rounded-full border-2 border-gold/60 backdrop-blur-sm shadow-xl">
              <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500 uppercase tracking-widest">
                🎆 New Year, New You 🎆
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main date display */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-6xl sm:text-8xl font-display font-black mb-4 drop-shadow-2xl">
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              January 1st
            </motion.span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 font-light">
            A day of celebration and new beginnings
          </p>
        </motion.div>

        {/* Decorative cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12"
        >
          {[
            { emoji: "🌟", text: "New Adventures" },
            { emoji: "💫", text: "Endless Possibilities" },
            { emoji: "🎊", text: "Pure Joy" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -15, scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group relative bg-gradient-to-br from-white via-pink-50 to-purple-50 p-8 rounded-2xl border-2 border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-pink-400 cursor-pointer"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300" />
              <motion.p
                className="text-5xl mb-4 relative z-10"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: idx * 0.2,
                }}
              >
                {item.emoji}
              </motion.p>
              <p className="text-gray-700 font-semibold text-lg relative z-10">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sparkle decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ rotate: 360, opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity }}
            >
              ✨
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
