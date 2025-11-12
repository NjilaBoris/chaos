# Polite Chaos

A modern single-page experience built with Next.js App Router, React 19, Tailwind CSS, and smooth-scrolling/animation libraries. The app uses the App Directory (`app/`), React Server Components by default, client components where needed, and view transitions for page changes.

- Framework: Next.js 16 (App Router)
- Language: JavaScript (ESNext) with React 19
- Styling: Tailwind CSS v4 (+ PostCSS)
- Animations/UX: GSAP, Lenis (smooth scrolling), next-view-transitions, split-type, react-icons
- Package manager: npm (lockfile present)

---

## Requirements

- Node.js 18.18+ (20+ recommended)
- npm 9+ (bundled with Node)

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000

Hot reload is enabled. Edit `app/page.js` or other files in `app/` to see changes.

## Scripts

- `npm run dev` — Start Next.js in development mode.
- `npm run build` — Create a production build (`.next/`).
- `npm run start` — Start the production server (after `npm run build`).
- `npm run lint` — Run ESLint using the Next.js config.

## Application Entry Points

- `app/layout.js` — Root layout, global fonts, metadata, and view transitions wrapper.
- `app/page.js` — Home page (server component by default).
- `client-layout.js` — Client-only wrapper providing Lenis scroll and global `Menu`.
- `components/` — Reusable UI components (e.g., `Menu`, `Button`, `ClientReviews`).
- `app/globals.css` — Global styles; Tailwind CSS base/utilities applied via PostCSS.

Related configuration:
- `next.config.mjs` — Next.js configuration (currently minimal).
- `postcss.config.mjs` — PostCSS config for Tailwind CSS.
- `eslint.config.mjs` — ESLint configuration.
- `jsconfig.json` — JS path aliases; project-wide settings.

## Environment Variables

No required environment variables are detected in the codebase at this time.
- TODO: Document any runtime configuration if added later (e.g., public API keys as `NEXT_PUBLIC_*`).
- TODO: Provide example `.env.local` if/when env vars are introduced.

## Building and Running in Production

```bash
npm run build
npm run start
```

- The app will start on `http://localhost:3000` by default.
- Ensure your environment matches the Node.js version in "Requirements".

## Testing

No test framework is configured in this repository yet.
- TODO: Add unit/integration tests (e.g., Jest + React Testing Library).
- TODO: Add end-to-end tests (e.g., Playwright) and CI workflow.

## Project Structure

Top-level files and directories:

- `app/` — App Router pages and nested layouts
  - `layout.js` — Root layout
  - `page.js` — Index route
  - `globals.css` — Global styles
- `components/` — UI components (e.g., `Menu/`, `Button/`, `ClientReviews/`)
- `hooks/` — Custom React hooks (if any)
- `public/` — Static assets (e.g., `site-logo.png` referenced in metadata)
- `client-layout.js` — Client-side layout with Lenis and global `Menu`
- `next.config.mjs`, `postcss.config.mjs`, `eslint.config.mjs` — Tooling configs
- `package.json`, `package-lock.json` — Dependencies and scripts

## Development Notes

- Fonts: Uses `next/font` to load Google `Space Grotesk` with CSS variable `--font-space-grotesk`.
- View Transitions: `next-view-transitions` wraps the app to animate route changes.
- Smooth Scrolling: `lenis` settings adapt to mobile/desktop in `client-layout.js`.
- Animations: `gsap` and `split-type` available for text and element animations.

## License

No license file was found.
- TODO: Add a `LICENSE` file and update this section accordingly (MIT, Apache-2.0, etc.).

## Resources

- Next.js: https://nextjs.org/docs
- Tailwind CSS v4: https://tailwindcss.com/docs
- GSAP: https://greensock.com/gsap/
- Lenis: https://lenis.studiofreight.com/
- React Icons: https://react-icons.github.io/react-icons/
