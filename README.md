# ATLAS-V

Personal website for **welcometomarz.net** - a minimal, text-driven landing page for Peter J. Marino.

Live site: **https://welcometomarz.net**

Built with [Astro](https://astro.build) and deployed to [Cloudflare Pages](https://pages.cloudflare.com) via **GitHub Actions**.

## Overview

ATLAS-V is a lightweight personal site with a strong editorial feel, dark mode by default, and a small animated theme toggle for light mode. The site focuses on a short professional profile, selected project environments, and a few primary links.

### Features

- **Dark/light mode** with animated sun-to-moon toggle
- **PJM signature** in the header, swapped by theme
- **Responsive** single-column layout
- **Three sections** - about, projects, links
- **Auto-deploy** on push to `main` via GitHub Actions + Cloudflare Pages

## Project Structure

```text
ATLAS-V/
|-- site/                          # Astro application
|   |-- src/
|   |   |-- pages/index.astro      # Single-page site, primary content lives here
|   |   |-- layouts/Layout.astro   # Base layout, theme system, global styles
|   |   `-- data/site.ts           # Site metadata (title, description)
|   |-- public/
|   |   |-- sig-black.png          # Signature used in light mode
|   |   |-- sig-white.png          # Signature used in dark mode
|   |   `-- favicon.png            # PJM signature favicon
|   |-- astro.config.mjs
|   `-- package.json
|-- assets/                        # Source signature image assets
|-- .github/workflows/
|   `-- deploy-pages.yml           # CI/CD pipeline
`-- README.md
```

## Quick Start

```bash
cd site
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Build & Deploy

```bash
cd site
npm run build
```

Build output is written to `site/dist/`.

Pushes to `main` trigger a GitHub Actions workflow that:
1. installs dependencies
2. builds the Astro site
3. uploads the built output to Cloudflare Pages

Required GitHub repo secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### Deployment note

Cloudflare native Git integration is **not** used here. Deployment is handled by **GitHub Actions uploading build output to Cloudflare Pages**.

## Asset workflow

- `assets/` contains the source signature image files
- `site/public/` contains the web-served copies used by the live site

When updating the signature, replace the source asset first, then export/update the corresponding public asset.

## Content model

This site intentionally keeps most visible content directly in `site/src/pages/index.astro`.

For a small one-page personal site, that is a deliberate simplicity tradeoff rather than an unfinished content system.

## Stack

| Layer | Choice |
|---|---|
| Framework | Astro 6.1.6 |
| Hosting | Cloudflare Pages |
| CI/CD | GitHub Actions |
| Fonts | Google Fonts (EB Garamond, Inter) |
| Node | >= 22.12.0 |
