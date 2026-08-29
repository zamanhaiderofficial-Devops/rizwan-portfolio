# Rizwan Mehdi — SEO Portfolio

A sleek, responsive, SEO-first portfolio built with **Next.js 16**, **Tailwind CSS v4** and **TypeScript**, animated with **Framer Motion**.

## Pages

- **Home** — Hero, About, Selected Work, stats band, services, process, skills, testimonials, blog preview, FAQ & CTA.
- **Work** (`/work`) — featured case study + filterable project cards (All + category tabs) linking to case study pages.
- **Project detail** (`/work/[slug]`) — dynamic case study pages with stats, challenge/approach, gallery and related projects.
- **Blog** (`/blog`) — filterable article cards.
- **Blog detail** (`/blog/[slug]`) — dynamic article pages.
- **About**, **Services**, **Contact** + custom **404**.

One source of truth per content type lives in `src/data/`:

- `src/data/site.ts` — profile, skills, experience, services, testimonials, FAQ
- `src/data/projects.ts` — all projects, slugs, categories, stats, galleries
- `src/data/blog.ts` — all articles

## Design

Palette (see `src/app/globals.css`):

| Color | Hex |
| --- | --- |
| Misty Blue | `#DFE5F3` |
| Muted Teal | `#557373` |
| Deep Olive Black | `#272401` |
| Warm Ivory | `#F2EFEA` |
| Rich Black | `#0D0D0D` |

Project/article images are elegant SVG placeholders generated from the palette by `scripts/generate-placeholders.mjs` (re-run with `node scripts/generate-placeholders.mjs` after changing anything). Replace them with real assets in `public/images/` whenever ready — just edit the `image` / `gallery` fields in the data files.

## Contact form

The contact form is wired for **Web3Forms** but runs in **demo mode** until you add your key:

1. Copy `.env.local.example` to `.env.local`.
2. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` to your key from [web3forms.com](https://web3forms.com).

## Getting started

```bash
npm install
npm run dev     # → http://localhost:3000
npm run build   # production build
npm run lint    # ESLint
```