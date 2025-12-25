# 🎉 Birthday Website - Customization Guide

Welcome to your beautiful birthday website! This guide will help you personalize every aspect of the site for your special friend.

## Quick Start

### 1. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site

### 2. Make it Personal

## Customization Steps

### Step 1: Friend's Name

Edit `src/app/page.tsx`, find the `HeroSection` component:

```typescript
<HeroSection
  name="Your Best Friend" // ← Change this to her name
  subtitle="To the person who makes every year brighter ✨"
/>
```

**Example:**

```typescript
<HeroSection
  name="Sarah"
  subtitle="To the girl who makes every year brighter ✨"
/>
```

---

### Step 2: Birthday Message

In the same file, update the `MessageSection`:

```typescript
<MessageSection
  message={`Dear Best Friend,

Your custom message here...

Forever yours,
Your Best Friend`}
  senderName="With endless love 💕"
/>
```

**Tips:**

- Keep paragraphs separated with blank lines for better formatting
- Use emojis to add warmth (💖✨🌹)
- Sign with your name instead of "Your Best Friend"
- Length: 300-500 words works best

---

### Step 3: Memories Section

Customize the memorable moments:

```typescript
<MemoriesSection
  memories={[
    { emoji: "😂", quote: "That one time we laughed so hard" },
    { emoji: "🌙", quote: "Late night talks until sunrise" },
    // Add more memories...
  ]}
/>
```

**Add up to 12 memories. Some emoji ideas:**

- 😂 Funny moments
- 🌙 Late nights
- 🎭 Adventures
- 🤝 Support moments
- 🎨 Creative projects
- 💪 Strength & growth
- 🍔 Food adventures
- 🚗 Road trips
- 📚 Learning together
- 🎵 Music & dancing
- 🌍 Travel moments
- 💕 Love & care

---

### Step 4: Final Wish Message

Update the closing messages:

```typescript
<FinalWishSection
  mainMessage="May This Year Bring You Endless Happiness"
  closeMessage="Your custom closing message here..."
/>
```

---

## Advanced Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  rose: { /* Modify rose colors */ },
  gold: '#ffd700',  // ← Change to your preferred accent color
  cream: '#fffef0',
}
```

**Color suggestions:**

- Peachy: `#FFDAB9`
- Lavender: `#E6E6FA`
- Mint: `#F0FFFF`
- Coral: `#FF7F50`

---

### Change Fonts

Google Fonts are imported in `src/app/globals.css`. To change:

1. Open Google Fonts (fonts.google.com)
2. Select fonts you like
3. Update the import URL in `globals.css`
4. Update font names in `tailwind.config.ts`

**Current fonts:**

- Display: Playfair Display
- Body: Inter
- Script: Great Vibes

---

### Customize Animation Speed

In component files, adjust transition durations:

```typescript
transition={{ duration: 0.8 }}  // ← 0.8 seconds
// Increase for slower, more dramatic animations
// Decrease for snappier animations
```

---

### Add Custom Elements

#### Add More Sections

1. Create new component in `src/components/MySection.tsx`
2. Import in `src/app/page.tsx`
3. Add to page between existing sections

**Example template:**

```typescript
"use client";

import { motion } from "framer-motion";

export default function MySection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        {/* Your content here */}
      </motion.div>
    </section>
  );
}
```

---

## Content Ideas

### Birthday Message Content

- How you met
- Favorite memories together
- Her best qualities
- Inside jokes
- Hopes for her future
- Thank you for specific things
- Your favorite moments with her

### Memories Quotes

- Something she said that made you laugh
- A challenge you overcame together
- Your favorite place you went together
- Something you learned from her
- A moment she made you feel loved
- Her biggest achievement you witnessed
- A tradition you share

---

## Emoji Quick Reference

**Emotions:** 😂 😍 🥰 😭 😌 🤗 💪

**Celebration:** 🎉 🎊 🎈 🎁 🎀 🎆 🎇

**Love & Care:** 💖 💕 💝 🧡 💚 💙 💜

**Nature:** 🌹 🌸 🌺 🌻 🌷 🌹 🌼 🍀

**Stars & Magic:** ✨ 🌟 💫 ⭐ 🌠 🦋

---

## Deployment

### Deploy to Vercel (FREE!)

1. Push to GitHub:

```bash
git init
git add .
git commit -m "Birthday website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/birthday-website.git
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "Import Project"
5. Select your repository
6. Click "Deploy"

Your site will be live at `birthday-website.vercel.app` (or custom domain)

### Share

- Send the link via WhatsApp, Email, or Social Media
- Works on all devices (mobile, tablet, desktop)
- No login required to view

---

## Troubleshooting

**Changes not appearing?**

- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

**Dev server not starting?**

```bash
npm run dev
```

**Build errors?**

```bash
# Clear build cache
rm -r .next
npm run build
```

---

## Tips for the Best Experience

✨ **Mobile First**: Test on phone first, it's the most common view
🎨 **Consistent Tone**: Keep messages warm and genuine
📝 **Proofread**: Check spelling and grammar
🎯 **Specificity**: Use real names and actual memories
⏱️ **Length**: Each section should take 2-3 minutes to read
🎬 **Pacing**: Users scroll through gradually, let animations shine

---

## Getting Help

If you need help:

1. Check the README.md for technical info
2. Visit [Next.js Docs](https://nextjs.org/docs)
3. Visit [Tailwind CSS Docs](https://tailwindcss.com/docs)
4. Visit [Framer Motion Docs](https://www.framer.com/motion/)

---

## File Structure Reference

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page - EDIT HERE
│   └── globals.css         # Global styles
├── components/
│   ├── FloatingLights.tsx  # Background effects
│   ├── HeroSection.tsx     # "Happy Birthday"
│   ├── DateSection.tsx     # January 1st badge
│   ├── MessageSection.tsx  # Letter - EDIT HERE
│   ├── MemoriesSection.tsx # Memories - EDIT HERE
│   ├── CelebrationSection.tsx # Confetti button
│   └── FinalWishSection.tsx  # Closing - EDIT HERE
```

---

**Happy customizing! Your friend is going to love this! 💖✨**
