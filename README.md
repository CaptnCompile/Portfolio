# Portfolio

Bilingual (EN/JA) portfolio site for a senior full-stack and AI engineer. Built as a 和モダン (wa-modern) fusion of Japanese design principles and modern web aesthetics. Pure React SPA — no Next.js.

## Stack

- **Vite 8** + **React 19** + **TypeScript**
- **React Router v7** (client-only, BrowserRouter)
- **Tailwind CSS v4** + **shadcn/ui** (Base UI primitives)
- **react-i18next** — EN/JA with URL-based locale routing
- Custom **light/dark/system theme** (no next-themes)
- **Velite + MDX** — type-safe blog and case study content
- **Motion** — animations
- **EmailJS** — client-side contact form submission
- **No server** — pure static build, deploys anywhere

## Getting started

```bash
npm install
cp .env.local.example .env.local  # fill in EmailJS credentials
npm run dev
```

Dev server starts on `http://localhost:3000`. Visit `/` to auto-redirect to `/en` or `/ja` based on your browser language.

## Scripts

- `npm run dev` — Velite watcher + Vite dev server
- `npm run build` — Build content, type-check, and produce static `dist/`
- `npm run preview` — Preview the production build locally
- `npm run content` — Rebuild Velite content index only

## Project structure

```
index.html              # Entry HTML with FOUC theme script
vite.config.ts
src/
  main.tsx              # React mount point
  App.tsx               # BrowserRouter + routes
  index.css             # Tailwind v4 @theme + design tokens
  i18n/config.ts        # react-i18next setup
  routes/               # Page components
    root-layout.tsx     # Header + Outlet + Footer
    home.tsx
    blog-index.tsx
    blog-post.tsx
    work-index.tsx
    work-detail.tsx
    about.tsx
    services.tsx
    contact.tsx
    not-found.tsx
components/             # Shared components (unchanged between migrations)
  layout/               # Header, footer, mobile nav, toggles
  sections/             # Home page sections
  forms/                # Contact form (EmailJS)
  mdx/                  # MDX renderer
  providers/            # Theme provider
  ui/                   # shadcn primitives
  icons/                # Brand SVG icons
lib/
  i18n-compat.ts        # next-intl → react-i18next compat shim
  navigation.tsx        # Link / usePathname / useRouter for react-router
  content.ts            # Velite query helpers
  validators.ts         # Zod schema for contact form
  utils.ts              # cn() class merger
  theme.ts              # Theme types
content/
  blog/{en,ja}/         # MDX blog posts
  work/{en,ja}/         # MDX case studies
messages/
  en.json, ja.json      # UI strings loaded by i18next
```

## Content

Blog posts and case studies are MDX files validated by Velite's Zod schemas. To add a post:

1. Create `content/blog/en/my-post.mdx` and `content/blog/ja/my-post.mdx` (same slug).
2. Add frontmatter matching the schema in `velite.config.ts`.
3. `npm run content` regenerates types and data.

## Design philosophy

The site fuses modern web aesthetics (clean sans-serif, shadcn components, smooth micro-interactions) with traditional Japanese principles — 間 (ma, intentional whitespace), 簡素 (kanso, simplicity), 渋い (shibui, unobtrusive beauty), and 侘寂 (wabi-sabi, asymmetry). Japanese motifs (hanko stamps, noren dividers, vermillion accents) appear as small accents, never as wallpaper.

## Deployment

The build output in `dist/` is a plain static site. Deploy anywhere:

- **Netlify / Vercel / Cloudflare Pages** — connect repo, build command `npm run build`, publish `dist/`
- **GitHub Pages** — push `dist/` to `gh-pages` branch
- **S3 / any static host** — upload `dist/`

**SPA fallback required:** configure your host to serve `index.html` for all unknown routes (React Router handles them client-side). Netlify: add `_redirects` with `/* /index.html 200`. Vercel: add a `vercel.json` rewrite. Cloudflare Pages: automatic.
