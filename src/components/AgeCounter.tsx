"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * AgeCounter Component
 * Displays detailed age information: years, months, weeks, days, hours, minutes, seconds
 * Born: January 1, 2004
 */
export default function AgeCounter() {
  const [ageData, setAgeData] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
  });

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(2004, 0, 1); // January 1, 2004
      const today = new Date();

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      // Adjust for negative days
      if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
      }

      // Adjust for negative months
      if (months < 0) {
        years--;
        months += 12;
      }

      // Calculate additional metrics
      const totalMilliseconds = today.getTime() - birthDate.getTime();
      const totalSeconds = Math.floor(totalMilliseconds / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const totalWeeks = Math.floor(totalDays / 7);

      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setAgeData({
        years,
        months,
        weeks: Math.floor((days + months * 30) / 7),
        days,
        hours,
        minutes,
        seconds,
        totalDays,
      });
    };

    calculateAge();
    const interval = setInterval(calculateAge, 1000);

    return () => clearInterval(interval);
  }, []);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const Counter = ({
    value,
    label,
    isPulse = false,
  }: {
    value: number;
    label: string;
    isPulse?: boolean;
  }) => (
    <motion.div
      variants={itemVariants}
      className="relative group h-full"
      whileHover={{ scale: 1.08 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500"
        animate={isPulse ? { scale: [1, 1.15, 1] } : {}}
        transition={
          isPulse
            ? { duration: 3, repeat: Infinity, delay: Math.random() }
            : undefined
        }
      />
      <div className="relative h-full bg-gradient-to-br from-white via-pink-50/60 to-white p-8 rounded-2xl border-2 border-pink-300/70 backdrop-blur-md shadow-xl hover:shadow-2xl group-hover:border-pink-500 transition-all duration-300">
        <motion.div
          className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 mb-4 leading-none"
          key={`${label}-${value}`}
          animate={isPulse ? { scale: [1, 1.05, 1] } : { scale: 1 }}
          transition={
            isPulse
              ? { duration: 1.5, repeat: Infinity }
              : {
                  duration: 0.3,
                  ease: "easeOut",
                }
          }
        >
          {String(value).padStart(2, "0")}
        </motion.div>
        <p className="text-sm sm:text-base font-bold text-gray-700 uppercase tracking-wider letter-spacing-1">
          {label}
        </p>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-b-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-visible px-4 py-20 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-rose-100/20 via-pink-100/20 to-purple-100/20"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating Decorative Elements - positioned absolutely */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl sm:text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 7 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            {
              ["🎂", "🎉", "🎊", "🎁", "✨", "💖", "🌟", "🎈", "🎀", "💝"][
                i % 10
              ]
            }
          </motion.div>
        ))}
      </div>

      {/* Main content - z-20 to be above floating elements */}
      <motion.div
        className="relative z-20 text-center max-w-6xl mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-7xl font-display font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500">
              You Are
            </span>
          </h2>
          <motion.div
            className="flex justify-center gap-2 text-3xl"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span>✨</span>
            <span>🎂</span>
            <span>✨</span>
          </motion.div>
        </motion.div>

        {/* Main Counter Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-12"
        >
          <Counter value={ageData.years} label="Years" />
          <Counter value={ageData.months} label="Months" />
          <Counter value={ageData.weeks} label="Weeks" />
          <Counter value={ageData.days} label="Days" />
          <Counter value={ageData.hours} label="Hours" />
          <Counter value={ageData.minutes} label="Minutes" />
          <Counter value={ageData.seconds} label="Seconds" isPulse={true} />
          <Counter value={ageData.totalDays} label="Total Days" />
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 space-y-6"
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-rose-200 via-pink-200 to-purple-200 px-8 py-4 rounded-full border-2 border-pink-400/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-lg sm:text-xl font-semibold text-gray-800">
              You've lived for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mx-2">
                {ageData.totalDays.toLocaleString()}
              </span>
              amazing days! 🌟
            </p>
          </motion.div>

          <motion.div
            className="inline-block bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 px-8 py-4 rounded-full border-2 border-pink-400/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg sm:text-xl font-semibold text-gray-800">
              That&apos;s
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mx-2">
                {Math.floor(ageData.totalDays * 24).toLocaleString()}
              </span>
              hours of memories! 💖
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
