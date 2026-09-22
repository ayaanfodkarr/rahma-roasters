# Rahma Roasters

A dark, cozy landing page for a specialty coffee brand. It leans into deep espresso browns, a warm gold accent, and a soft coffee bean texture in the background, so the whole page feels a little like sitting in a dim, good smelling cafe.

The star of the page is the cup. It rests in the middle of the "Why Rahma" section while the four reasons to love the coffee reveal themselves one at a time as you scroll, and then it glides down and settles into a waiting hand at the end, the way someone would pick it up and hold it. On phones the same story is told without the heavy scroll effects, so it stays light and smooth under your thumb.

Better beans, brighter days.

## What is inside

- A hero with a big coffee splash that floats gently on its own
- A three card menu where each cup pops up out of the top of its card
- A pinned "Why Rahma" section that reveals its points one by one as you scroll
- The traveling cup that leaves the center and lands neatly in the hand as the final beat
- A visit section with a stylised map, and a footer with a bean spoon tucked into the corner
- A real, full screen hamburger menu on mobile, and a layout that feels right on desktop, tablet and phone

## Built with

- React and Vite for the app and the build
- GSAP with ScrollTrigger for the scroll driven animation and the pinned section
- Lenis for smooth momentum scrolling on desktop
- Plain CSS, no UI framework, just custom properties, grid and a few keyframes

## Running it locally

```bash
npm install
npm run dev
```

Then open the address it prints, usually http://localhost:5173.

To make a production build and preview it:

```bash
npm run build
npm run preview
```

## Good to know

The smooth scrolling, the pinned cup and the traveling animation are desktop touches. On phones they are switched off on purpose, so scrolling stays quick and never fights your finger. All of the imagery lives in `public/images`, and the colors, fonts and the shared cup size all sit as design tokens at the top of `src/index.css`, so the whole thing is easy to reskin.
