"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
  const [balloonReleased, setBalloonReleased] = useState(false);

  const handleReleaseBalloons = () => {
    setBalloonReleased(true);
    // Reset after animation
    setTimeout(() => setBalloonReleased(false), 4000);
  };
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
              With All My Respect 💌
            </p>
          </motion.div>
        </motion.div>

        {/* Balloons Section */}
        <motion.div
          variants={textVariants}
          className="mb-16 relative flex items-start justify-between gap-8 sm:gap-12"
        >
          {/* Left: Release Button */}
          <div className="flex flex-col items-start justify-start pt-8">
            <p className="text-gray-600 text-base sm:text-lg font-medium mb-6">
              Release the past, embrace the calm! 🎈
            </p>
            <motion.button
              onClick={handleReleaseBalloons}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 text-sm sm:text-base whitespace-nowrap"
              disabled={balloonReleased}
            >
              🎈 Release! 🎈
            </motion.button>
          </div>

          {/* Right: Balloon Bunch */}
          <div className="relative h-96 sm:h-screen flex-1 flex justify-end items-end">
            {[
              { color: "#ff69b4", offsetX: 0, offsetY: 0 },
              { color: "#ffd700", offsetX: 18, offsetY: 12 },
              { color: "#87ceeb", offsetX: 36, offsetY: 24 },
              { color: "#dda0dd", offsetX: -18, offsetY: 12 },
              { color: "#ffb6c1", offsetX: -36, offsetY: 24 },
              { color: "#ff6b6b", offsetX: 9, offsetY: 36 },
              { color: "#4ecdc4", offsetX: -9, offsetY: 36 },
              { color: "#ffe66d", offsetX: 0, offsetY: 48 },
              { color: "#ff1493", offsetX: 27, offsetY: 40 },
              { color: "#20b2aa", offsetX: -27, offsetY: 40 },
              { color: "#ffa500", offsetX: 14, offsetY: 60 },
              { color: "#ff69b4", offsetX: -14, offsetY: 60 },
              { color: "#32cd32", offsetX: 5, offsetY: 72 },
            ].map((balloon, idx) => {
              // Generate random scatter values per balloon
              const randomX = (Math.random() - 0.5) * 250;
              const randomRotation = Math.random() * 360;

              return (
                <motion.div
                  key={idx}
                  className="absolute w-14 h-20 sm:w-20 sm:h-32 cursor-pointer"
                  style={{
                    right: `${balloon.offsetX}px`,
                    bottom: `${balloon.offsetY}px`,
                  }}
                  animate={
                    balloonReleased
                      ? {
                          y: -800,
                          x: randomX,
                          opacity: [1, 1, 0],
                          rotate: randomRotation,
                        }
                      : { y: 0, x: 0, rotate: 0 }
                  }
                  transition={{
                    duration: 3.5 + Math.random() * 0.5,
                    ease: "easeInOut",
                    delay: idx * 0.05,
                  }}
                >
                  {/* Balloon Body */}
                  <motion.div
                    className="w-full h-14 sm:h-24 rounded-full relative shadow-lg hover:shadow-xl transition-shadow"
                    style={{ backgroundColor: balloon.color }}
                    whileHover={{ scale: 1.2 }}
                    animate={
                      !balloonReleased
                        ? { y: [0, -8, 0], scale: [1, 1.08, 1] }
                        : {}
                    }
                    transition={{
                      duration: 2.5 + idx * 0.1,
                      repeat: !balloonReleased ? Infinity : 0,
                      delay: idx * 0.1,
                    }}
                  >
                    {/* Shine Effect */}
                    <motion.div className="absolute top-3 left-3 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full opacity-80" />
                  </motion.div>

                  {/* Balloon String */}
                  <div
                    className="w-0.5 h-8 sm:h-14 mx-auto"
                    style={{ backgroundColor: balloon.color, opacity: 0.5 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
