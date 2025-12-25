"use client";

import { motion } from "framer-motion";

interface MessageSectionProps {
  message?: string;
  senderName?: string;
}

/**
 * MessageSection Component
 * Displays a heartfelt birthday message with elegant animations
 */
export default function MessageSection({
  message = `Dear [Friend's Name],

As I sit down to write this, I'm overwhelmed with gratitude for having you in my life. Today, we celebrate not just another year, but another year of the beautiful journey we've shared together.

You're the kind of friend who doesn't just exist in my life—you elevate it. Your kindness, your infectious laugh, your unwavering support, and your genuine care have been the most precious gifts. Every moment with you feels special, whether we're having deep conversations until 3 AM or laughing so hard we cry over something silly.

This past year, you've shown me what true friendship means. You've been my cheerleader, my confidant, and my anchor. The way you love so fiercely, dream so boldly, and live so authentically inspires me every single day.

As you step into this new year, I want you to know that you deserve all the happiness in the world. You deserve to shine brighter than ever, to achieve your wildest dreams, and to be surrounded by people who cherish you as much as I do.

Here's to a year filled with magical moments, unexpected adventures, personal growth, and endless reasons to smile. Here's to celebrating YOU—the incredible person you are and all that you're becoming.

Thank you for being the most amazing friend. I love you more than words could ever express.

Happy Birthday to my soul sister. Let's make this year unforgettable together! 💖

Forever yours,
[Your Name]`,
  senderName = "Your Best Friend",
}: MessageSectionProps) {
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

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <motion.div
        className="w-full max-w-2xl z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Letter container */}
        <motion.div variants={letterVariants} className="relative group">
          {/* Dual glowing background with animation */}
          <motion.div
            className="absolute -inset-6 bg-gradient-to-br from-rose-300/50 via-pink-300/40 to-purple-300/50 rounded-3xl blur-3xl"
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -inset-4 bg-gradient-to-tl from-purple-200/30 via-pink-200/30 to-rose-200/30 rounded-3xl blur-2xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, linear: true }}
          />

          <motion.div 
            className="relative bg-gradient-to-br from-white via-pink-50/30 to-purple-50/30 rounded-3xl shadow-2xl p-8 sm:p-12 border-2 border-gold/50 backdrop-blur-sm group-hover:border-gold transition-colors duration-300"
            whileHover={{ scale: 1.02, boxShadow: "0 30px 60px rgba(217, 119, 6, 0.3)" }}
          >
            {/* Decorative top element */}
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-4xl"
              >
                💌
              </motion.div>
            </div>

            {/* Letter content */}
            <div className="space-y-6">
              {message.split("\n\n").map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-700 leading-relaxed font-light text-base sm:text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gold/20"
            >
              <p className="font-script text-2xl text-pink-500 mb-2">
                {senderName}
              </p>
              <div className="flex gap-3 text-2xl">
                <span>💖</span>
                <span>✨</span>
                <span>🎀</span>
              </div>
            </motion.div>

            {/* Decorative side elements */}
            <div className="absolute -left-8 top-1/4 text-4xl animate-float">
              🌸
            </div>
            <div
              className="absolute -right-8 bottom-1/3 text-4xl animate-float"
              style={{ animationDelay: "1s" }}
            >
              🌷
            </div>
          </motion.div>
        </motion.div>

        {/* Floating flowers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {["🌹", "🌸", "🌺", "🌻", "💐", "🌷"][i % 6]}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
