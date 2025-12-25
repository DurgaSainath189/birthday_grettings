"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * FloatingLights Component
 * Creates animated floating lights and sparkles in the background
 */
export default function FloatingLights() {
  const [lights, setLights] = useState<
    Array<{
      id: number;
      left: number;
      top: number;
      size: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    // Generate random floating lights with more variety
    const generatedLights = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 40 + 15,
      duration: Math.random() * 25 + 20,
    }));
    setLights(generatedLights);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50"
        animate={{
          background: [
            "linear-gradient(135deg, #fef3f0 0%, #fdeef5 50%, #f0e8ff 100%)",
            "linear-gradient(225deg, #ffe4e9 0%, #f3e0ff 50%, #e0f2ff 100%)",
            "linear-gradient(315deg, #fff0e6 0%, #ffe6f5 50%, #f0e8ff 100%)",
            "linear-gradient(135deg, #fef3f0 0%, #fdeef5 50%, #f0e8ff 100%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated floating lights */}
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute rounded-full blur-3xl opacity-50"
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            width: `${light.size}px`,
            height: `${light.size}px`,
            background: `radial-gradient(circle, ${
              ["#ff69b4", "#ffd700", "#87ceeb", "#dda0dd", "#ffb6c1"][
                light.id % 5
              ]
            }, transparent)`,
            boxShadow: `0 0 ${light.size * 1.5}px ${
              [
                "rgba(255, 105, 180, 0.6)",
                "rgba(255, 215, 0, 0.6)",
                "rgba(135, 206, 235, 0.6)",
                "rgba(221, 160, 221, 0.6)",
              ][light.id % 4]
            }`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.sin(light.id) * 30, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            delay: light.id * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated stars/sparkles with glow */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.9)",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
