# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # ESLint via Next.js
```

No test suite is configured.

## Architecture

**Next.js 15 App Router** portfolio with a Spotify-inspired dark theme. All routes live under `src/app/`.

### Key Structural Patterns

- **Home page split**: `page.tsx` is a server component that renders `HomeClient.tsx`, which holds the main CSS grid dashboard and all client-side state/animations.
- **Dashboard grid**: 6-column × 8-row CSS grid on desktop, flex column on mobile. Each section is lazy-loaded via `React.lazy` + `Suspense`.
- **Section components** live in `src/app/components/sections/` — each renders one grid cell.
- **Blog system**: Markdown files in `src/content/blog/` processed by `src/lib/blog.ts` using `gray-matter` + `remark`. Posts with `hidden: true` in frontmatter are excluded from listings but accessible by direct URL.
- **Data files**: `data/experience.ts` and `data/projects.ts` are static TypeScript arrays — the single source of truth for portfolio content.

### Path Aliases

`@/*` maps to the repo root (not `src/`). So `@/data/projects` resolves to `./data/projects.ts`.

### Styling

- Tailwind with custom Spotify theme colors: `spotify.green` (`#1DB954`), `spotify.black`, `spotify.white`, `spotify.grey`
- CSS custom properties are generated from the Tailwind config via a custom plugin in `tailwind.config.ts`
- Blog post HTML gets custom Spotify-themed inline styles applied in `src/lib/blog.ts`

### Infrastructure

- `next.config.mjs` sets `output: "standalone"` for Docker deployment
- Remote images are served from CloudFront CDN and jsDelivr — new image domains must be added to `remotePatterns` in `next.config.mjs`
- Vercel Analytics and Speed Insights are wired in `src/app/layout.tsx`
