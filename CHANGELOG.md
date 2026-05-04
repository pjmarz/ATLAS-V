# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
