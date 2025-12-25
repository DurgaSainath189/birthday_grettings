# Birthday Website

A beautiful, modern Next.js application celebrating a special birthday. Created with love using React, Tailwind CSS, and Framer Motion.

## Features

✨ **Modern Design**

- Soft, vibrant color palette with pastels, gradients, and gold accents
- Smooth animations and transitions using Framer Motion
- Elegant typography with handwritten-style and modern fonts
- Fully responsive design for mobile and desktop

🎉 **Interactive Sections**

1. **Hero Section** - Animated birthday greeting with name highlight
2. **Date Section** - Special January 1st celebration badge
3. **Message Section** - Heartfelt birthday letter with elegant styling
4. **Memories Section** - Card-based layout with memorable quotes
5. **Celebration Section** - Interactive confetti animation
6. **Final Wish** - Emotional closing message

✨ **Visual Effects**

- Floating lights and sparkles in background
- Confetti animation on button click
- Hover effects and micro-animations
- Smooth scroll animations
- Twinkling stars and floating elements

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Canvas Confetti** - Celebration effects

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Customization

Edit [src/app/page.tsx](src/app/page.tsx) to customize:

- **Friend's Name**: Update the `HeroSection` component
- **Birthday Message**: Modify the `MessageSection` message prop
- **Memories**: Edit the `MemoriesSection` memories array
- **Messages**: Update wish messages in `FinalWishSection`

### Component Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── FloatingLights.tsx  # Background floating elements
│   ├── HeroSection.tsx     # Birthday greeting hero
│   ├── DateSection.tsx     # January 1st celebration
│   ├── MessageSection.tsx  # Heartfelt letter
│   ├── MemoriesSection.tsx # Memory cards
│   ├── CelebrationSection.tsx # Interactive confetti
│   └── FinalWishSection.tsx  # Closing message
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

### Other Platforms

Build for production:

```bash
npm run build
npm start
```

## Color Palette

- **Primary**: Rose & Pink gradients (#ff69b4, #ff7a4f)
- **Accent**: Gold (#ffd700)
- **Soft**: Cream, pastels, purples
- **Text**: Dark gray (#3d3d3d)

## Fonts

- **Display**: Playfair Display (serif) - Headers
- **Body**: Inter (sans-serif) - Content
- **Script**: Great Vibes (cursive) - Elegant text

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized animations with Framer Motion
- CSS animations for background effects
- Lazy loading of confetti library
- Responsive images with Next.js optimization

## License

Created with 💖 for a special someone

---

Made with love using Next.js, React, and creativity ✨
