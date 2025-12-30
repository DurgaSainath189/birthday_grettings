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
    const generatedLights = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 50 + 20,
      duration: Math.random() * 30 + 25,
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
          className="absolute rounded-full blur-3xl opacity-60"
          style={{
            left: `${light.left}%`,
            top: `${light.top}%`,
            width: `${light.size}px`,
            height: `${light.size}px`,
            background: `radial-gradient(circle, ${
              [
                "#ff69b4",
                "#ffd700",
                "#87ceeb",
                "#dda0dd",
                "#ffb6c1",
                "#ff1493",
              ][light.id % 6]
            }, transparent)`,
            boxShadow: `0 0 ${light.size * 2}px ${
              [
                "rgba(255, 105, 180, 0.8)",
                "rgba(255, 215, 0, 0.8)",
                "rgba(135, 206, 235, 0.8)",
                "rgba(221, 160, 221, 0.8)",
                "rgba(255, 182, 193, 0.8)",
                "rgba(255, 20, 147, 0.8)",
              ][light.id % 6]
            }`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.sin(light.id) * 50, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            delay: light.id * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated stars/sparkles with glow */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2 bg-white rounded-full shadow-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: `0 0 20px rgba(255, 255, 255, 1), 0 0 40px ${
              [
                "rgba(255, 105, 180, 0.6)",
                "rgba(255, 215, 0, 0.6)",
                "rgba(135, 206, 235, 0.6)",
              ][i % 3]
            }`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2.5 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
