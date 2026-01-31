# Faisin S Muhammed — Portfolio

A simple, responsive React portfolio with:

- **Hero** — Intro, tagline, and call-to-action
- **Skills** — Flutter, Dart, Firebase, UI/UX, APIs & state management
- **Services** — Cross-platform apps, UI development, backend/APIs, maintenance
- **Contact** — Email, LinkedIn, GitHub, and a contact form

## Tech

- **React 18** + **Vite 5**

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Update your links** in `src/components/`:
   - **Hero.jsx** & **Contact.jsx**: Replace `LINKEDIN`, `GITHUB`, and in Contact `EMAIL` with your real URLs and email.

3. **Run locally**
   ```bash
   npm run dev
   ```
   Open the URL shown (e.g. http://localhost:5173).

4. **Build for production**
   ```bash
   npm run build
   ```
   Output is in `dist/`. Deploy that folder to Netlify, Vercel, GitHub Pages, etc.

## Project structure

- `src/App.jsx` — Main app
- `src/components/` — Nav, Hero, Skills, Services, Contact, Footer
- `src/index.css` — Global styles
- `index.html` — Vite entry
- `vite.config.js` — Vite config
