# ATLAS-V

Personal website for **welcometomarz.net** — a minimal, professional landing page for Peter J. Marino.

Built with [Astro](https://astro.build) and deployed to [Cloudflare Pages](https://pages.cloudflare.com).

## Overview

A clean, text-driven personal site inspired by [lauriparonen.com](https://www.lauriparonen.com/). Dark mode by default with an animated sun/moon toggle for light mode. No frameworks, no JavaScript libraries — just Astro, CSS, and a few lines of vanilla JS.

### Features

- **Dark/light mode** with animated sun-to-moon toggle (clouds morph into stars)
- **PJM signature** in the header, swaps black/white based on theme
- **Responsive** single-column layout
- **Three sections** — about, projects, links
- **Auto-deploy** on push to `main` via GitHub Actions + Cloudflare Pages

## Project Structure

```
ATLAS-V/
├── site/                          # Astro application
│   ├── src/
│   │   ├── pages/index.astro      # Single-page site (all content here)
│   │   ├── layouts/Layout.astro   # Base layout, theme system, global styles
│   │   └── data/site.ts           # Site metadata (title, description)
│   ├── public/
│   │   ├── sig-black.png          # Signature (light mode)
│   │   ├── sig-white.png          # Signature (dark mode)
│   │   └── favicon.png            # PJM signature favicon
│   ├── astro.config.mjs
│   └── package.json
├── assets/                        # Source signature images
├── .github/workflows/
│   └── deploy-pages.yml           # CI/CD pipeline
└── README.md
```

## Quick Start

```bash
cd site
npm install
npm run dev        # http://localhost:4321
```

## Build & Deploy

```bash
npm run build      # outputs to site/dist/
```

Pushes to `main` auto-deploy to Cloudflare Pages via GitHub Actions. Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets in the repo.

## Design Decisions

- **Astro** — static site generator, zero client JS by default, perfect for a landing page
- **No component library** — single page doesn't need one
- **CSS variables for theming** — `data-theme` attribute on `<html>` toggles all colors
- **Content hardcoded in template** — for a single-page site, a CMS or data layer adds complexity without value
- **EB Garamond** for headings (serif personality), **Inter** for body (clean readability)

## Stack

| Layer       | Choice              |
|-------------|---------------------|
| Framework   | Astro 6.1.6         |
| Hosting     | Cloudflare Pages    |
| CI/CD       | GitHub Actions      |
| Fonts       | Google Fonts (EB Garamond, Inter) |
| Node        | >= 22.12.0          |
