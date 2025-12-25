"use client";

import { motion } from "framer-motion";

interface MemoriesCard {
  quote: string;
  emoji: string;
}

interface MemoriesSectionProps {
  memories?: MemoriesCard[];
}

/**
 * MemoriesSection Component
 * Card-based layout showcasing special quotes and memories with hover animations
 */
export default function MemoriesSection({
  memories = [
    {
      emoji: "😂",
      quote: "That one time we laughed so hard we couldn't breathe",
    },
    { emoji: "🌙", quote: "Late night talks that lasted until sunrise" },
    { emoji: "🎭", quote: "Adventures we never planned but will never forget" },
    { emoji: "🤝", quote: "Being there for each other through thick and thin" },
    { emoji: "🎨", quote: "Creating countless beautiful memories together" },
    { emoji: "💪", quote: "Lifting each other up on our toughest days" },
  ],
}: MemoriesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <motion.div
        className="w-full max-w-6xl z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section title */}
        <motion.div
          variants={cardVariants}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="absolute -inset-20 bg-gradient-to-r from-purple-200/40 via-pink-200/40 to-rose-200/40 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <div className="relative">
            <h2 className="text-4xl sm:text-6xl font-display font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
                Our Memories
              </span>
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Cherished moments that make our friendship unforgettable
            </p>
          </div>
        </motion.div>

        {/* Memory cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {memories.map((memory, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                y: -20,
                boxShadow: "0 40px 80px rgba(255, 105, 180, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group h-full"
            >
              <motion.div
                className="relative h-full bg-gradient-to-br from-white via-pink-50/40 to-purple-50/40 rounded-3xl p-8 border-2 border-pink-300/60 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md group-hover:border-pink-400 group-hover:bg-gradient-to-br group-hover:from-white group-hover:via-pink-100/50 group-hover:to-purple-100/50"
                whileHover={{ scale: 1.03 }}
              >
                {/* Animated glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-rose-400/30 via-pink-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                  animate={{ opacity: [0, 0.15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Emoji */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl mb-6"
                  >
                    {memory.emoji}
                  </motion.div>

                  {/* Quote */}
                  <p className="text-gray-800 font-light text-lg leading-relaxed flex-grow">
                    {memory.quote}
                  </p>

                  {/* Bottom accent line - animated */}
                  <motion.div
                    className="mt-6 h-1.5 bg-gradient-to-r from-rose-400 via-gold to-pink-400 rounded-full"
                    animate={{ width: ["3rem", "4rem", "3rem"] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </div>

                {/* Decorative corner elements */}
                <motion.div
                  className="absolute top-4 right-4 text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  ✨
                </motion.div>
              </motion.div>

              {/* Animated glow on hover - outer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-rose-400/30 via-pink-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 rounded-3xl"
                animate={{ opacity: [0, 0.15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {["💝", "🎀", "💕", "🌹", "✨"][i]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
