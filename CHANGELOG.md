# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Upgraded Astro 7.1.6 → 7.2.9 and patched the transitive `nanoid` dependency to 3.3.18, clearing a high-severity advisory (custom generators could loop indefinitely when size is zero). `npm audit` reports 0 vulnerabilities. Build-time dependencies only; no runtime change for the static site.

## [0.7.1] — 2026-08-09

### Changed
- Upgraded Astro 7.0.9 → 7.1.6 and refreshed transitive build dependencies (sharp 0.35.3, svgo 4.0.2, esbuild 0.28.1, postcss 8.5.25), clearing all open advisories — `npm audit` now reports 0 vulnerabilities. Build-time dependencies only; no runtime change for the static site.
- Bumped `actions/setup-node` v6 → v7 in both workflows.

### Fixed
- Dependabot now groups security updates as well as version updates. `applies-to` defaults to `version-updates`, so advisory-driven bumps were opening one PR each and could duplicate a package already covered by the version-update group (e.g. two concurrent `astro` PRs).

## [0.7.0] — 2026-07-13

### Added
- `robots.txt`, `@astrojs/sitemap` integration, and a 404 page — the new domain now has proper crawl signals and real 404 responses instead of soft-404s (every unknown URL previously served the homepage with HTTP 200).
- Open Graph image (`og.png`, generated from the PJM wordmark), `twitter:card summary_large_image`, and JSON-LD `Person` structured data for richer link previews and search identity on the new domain.
- `/.well-known/security.txt` with the current contact address.
- Content-Security-Policy header tailored to the site (self-hosted assets, inline styles/scripts, same-origin PDF preview frames).
- PR build check CI and Dependabot (backfilled from 2026-06-07, PR #2).

### Changed
- Upgraded Astro 6.4.4 → 7.x (clears all open Dependabot security alerts: astro SSRF/XSS, vite fs.deny/launch-editor, esbuild) and added `@astrojs/sitemap`.
- Extended HSTS to `includeSubDomains; preload`.
- Moved the site to a new primary domain: `www.peterjmarino.com` → apex `peterjamarino.com`. The old domain is kept and 301-redirected (path-preserving) to the new one.
- Updated the contact email to `peterjamarino@gmail.com`.
- Updated the display name site-wide from "Peter J. Marino" to "Peter J. A. Marino" (wordmark, page title, meta description, `og:site_name`) to match the new domain and email.
- Updated the clearance line in the about section (2026-07-05, backfilled).
- Self-hosted the fonts via Astro's Fonts API, added canonical/OG meta, and hardened response headers; migrated the Pages deploy to `wrangler-action` v4 (backfilled from 2026-06-07, PR #2).
- ci: verified the automated deploy pipeline (push → GitHub Actions → Cloudflare Pages).
- Upgraded Astro from 6.2.2 → 6.4.4 (dependency update; no functional changes for this site).
- README: corrected the fonts row (self-hosted at build, not runtime Google Fonts CDN).

## [0.6.1] — 2026-05-04

### Changed
- Upgraded Astro from 6.1.6 → 6.2.2 (no functional changes for this site; brings in upstream bug fixes and keeps us within one minor of the 7.x line currently in alpha).

## [0.6.0] — 2026-05-04

### Added
- Visible underline on technical project title links so they read as links by default (hover still bumps to `currentColor`).

### Changed
- Replaced the pill-style dark-mode toggle with the [toggles.dev](https://toggles.dev/expand) "expand" sun/moon icon — a clip-path morph driven entirely off the existing checkbox's `:checked` state.
- Swapped the horizontal `mix-blend-mode: difference` curtain wipe for an opacity crossfade timed to the icon morph (~500ms), so the page-wide color inversion lands together with the sun↔moon transform instead of sweeping across.

## [0.5.0] — 2026-04-21

### Changed
- Polished the landing-page theme toggle styling and interaction.

## [0.4.0] — 2026-04-20

### Added
- Staggered "float in" reveal: each major section (hero, about, technical projects, strategic initiatives, links, colophon) fades up from below in sequence on page load. Honors `prefers-reduced-motion`.

## [0.3.0] — 2026-04-19

### Added
- Strategic initiatives section with a themed PDF preview modal that follows the dark-mode toggle.
- Initiative presentation deck PDFs (Project Lazarus, Prometheus Initiative).

### Fixed
- Signature stays right of the wordmark on mobile (regression introduced alongside the initiatives work).

## [0.2.0] — 2026-04-17 → 2026-04-18

### Changed
- Refined the landing page via the Claude Design draft.
- Signature now served via the Astro `<Image />` component (smaller payload, density-aware).
- Colophon formatting tweaks for consistency.

### Fixed
- Signature aligned closer to the header rule on desktop.
- Signature kept right of the wordmark on mobile.
- Colophon centered on mobile.

### Docs
- README cleanup and project description updates; site domain set to `peterjmarino.com`; corrected GitHub Actions link formatting.
- Removed unused white signature assets.

## [0.1.0] — 2026-04-13 → 2026-04-14

### Added
- Initial personal site scaffold (Astro).
- Cloudflare Pages deploy workflow, including the `deployments: write` permission needed by the GitHub Action.
- Minimal dark-mode landing page with an animated theme toggle.
- Curtain-style pill toggle using `mix-blend-mode: difference` to invert the page on toggle.

### Changed
- Cleaned up toggle CSS variables and simplified the about section.
- Enhanced README and project descriptions; tightened layout styles.
