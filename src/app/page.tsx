"use client";

import FloatingLights from "@/components/FloatingLights";
import HeroSection from "@/components/HeroSection";
import DateSection from "@/components/DateSection";
import AgeCounter from "@/components/AgeCounter";
import MessageSection from "@/components/MessageSection";
import MemoriesSection from "@/components/MemoriesSection";
import CelebrationSection from "@/components/CelebrationSection";
import FinalWishSection from "@/components/FinalWishSection";
import { useEffect } from "react";

declare global {
  interface Window {
    confetti?: (options: any) => void;
  }
}

export default function Home() {
  useEffect(() => {
    // Load confetti library dynamically
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.0/dist/confetti.browser.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="relative w-full overflow-hidden">
      {/* Background effects */}
      <FloatingLights />

      {/* Content sections */}
      <div className="relative z-10">
        {/* CUSTOMIZE: Change name and subtitle here */}
        <HeroSection
          name="Chandana"
          subtitle="To the person who makes every year brighter ✨"
        />

        {/* Date section - January 1st */}
        <DateSection />

        {/* Age Counter - Years, months, weeks, days, etc */}
        <AgeCounter />

        {/* CUSTOMIZE: Change the birthday message here */}
        <MessageSection
          message={`Dear Best Friend,

As I sit down to write this, I'm overwhelmed with gratitude for having you in my life. Today, we celebrate not just another year, but another year of the beautiful journey we've shared together.

You're the kind of friend who doesn't just exist in my life—you elevate it. Your kindness, your infectious laugh, your unwavering support, and your genuine care have been the most precious gifts. Every moment with you feels special, whether we're having deep conversations until 3 AM or laughing so hard we cry over something silly.

This past year, you've shown me what true friendship means. You've been my cheerleader, my confidant, and my anchor. The way you love so fiercely, dream so boldly, and live so authentically inspires me every single day.

As you step into this new year, I want you to know that you deserve all the happiness in the world. You deserve to shine brighter than ever, to achieve your wildest dreams, and to be surrounded by people who cherish you as much as I do.

Here's to a year filled with magical moments, unexpected adventures, personal growth, and endless reasons to smile. Here's to celebrating YOU—the incredible person you are and all that you're becoming.

Thank you for being the most amazing friend. I love you more than words could ever express.

Happy Birthday to my soul sister. Let's make this year unforgettable together! 💖

Forever yours,
Your Best Friend`}
          senderName="With endless love 💕"
        />

        {/* Memories section */}
        <MemoriesSection
          memories={[
            {
              emoji: "😂",
              quote: "That one time we laughed so hard we couldn't breathe",
            },
            {
              emoji: "🌙",
              quote: "Late night talks that lasted until sunrise",
            },
            {
              emoji: "🎭",
              quote: "Adventures we never planned but will never forget",
            },
            {
              emoji: "🤝",
              quote: "Being there for each other through thick and thin",
            },
            {
              emoji: "🎨",
              quote: "Creating countless beautiful memories together",
            },
            {
              emoji: "💪",
              quote: "Lifting each other up on our toughest days",
            },
          ]}
        />

        {/* Celebration section */}
        <CelebrationSection />

        {/* Final wish section */}
        <FinalWishSection
          mainMessage="May This Year Bring You Endless Happiness"
          closeMessage="You deserve all the magic, joy, and love the world has to offer. Here's to making every single day as special as you are. Forever grateful for you, always celebrating you. 💖"
        />
      </div>
    </main>
  );
}
