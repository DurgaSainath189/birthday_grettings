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

    script.onload = () => {
      // Trigger confetti on page load
      if (typeof window !== "undefined" && window.confetti) {
        // Main burst
        window.confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.3 },
          colors: [
            "#ff69b4",
            "#ffd700",
            "#87ceeb",
            "#dda0dd",
            "#ffb6c1",
            "#ff1493",
          ],
        });

        // Second burst from sides
        setTimeout(() => {
          if (typeof window !== "undefined" && window.confetti) {
            window.confetti({
              particleCount: 100,
              spread: 180,
              startVelocity: 30,
              origin: { x: 0, y: 0.5 },
              colors: ["#ff69b4", "#87ceeb", "#dda0dd"],
            });
            window.confetti({
              particleCount: 100,
              spread: 180,
              startVelocity: 30,
              origin: { x: 1, y: 0.5 },
              colors: ["#ffd700", "#ffb6c1", "#ff1493"],
            });
          }
        }, 300);

        // Final burst
        setTimeout(() => {
          if (typeof window !== "undefined" && window.confetti) {
            window.confetti({
              particleCount: 120,
              spread: 100,
              origin: { y: 0.5 },
              colors: ["#ff69b4", "#ffd700", "#87ceeb", "#dda0dd"],
            });
          }
        }, 600);
      }
    };

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
          name="Chandana Sree"
          subtitle="To the person who makes every year brighter ✨"
        />

        {/* Date section - January 1st */}
        <DateSection />

        {/* Age Counter - Years, months, weeks, days, etc */}
        <AgeCounter />

        {/* CUSTOMIZE: Change the birthday message here */}
        <MessageSection
          message={`Dear Best Friend,

Four years ago (19th May 2022), in a quiet corner of our college library, something unexpected began. Among books, exams, and unspoken dreams, our friendship found its first page. We didn't know then that this simple beginning would turn into one of the most meaningful chapters of my life.

Our journey hasn't been perfect—and that's what makes it real. We've had arguments, misunderstandings, moments of silence, and times when words failed us. But through every fight, we chose each other again. We learned, we grew, and we became stronger—not because we never broke, but because we always came back.

You've seen me at my best and stood by me at my worst. You've been my calm in chaos, my strength on weak days, and my comfort when the world felt heavy. Some bonds aren't built on constant happiness—they're built on patience, forgiveness, and trust. Ours is one of those rare bonds.

As you celebrate another year of your life, I want you to know this: you are deeply valued, endlessly important, and truly irreplaceable. The world is brighter with you in it, and my life is better because you're part of it.

May this birthday bring you peace for everything you've endured, joy for everything you've earned, and hope for everything that's yet to come. May you always remember how strong you are and how deeply you are loved.

Happy Birthday, and Happy New Year too—because you deserve new beginnings just as beautiful as your heart.

Here's to us, to our memories, and to many more years of friendship that no misunderstanding could ever break.

Always with you. Always grateful. 💙

Forever,
Your Best Friend`}
          senderName="Durga Sainath"
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
