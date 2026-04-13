# ATLAS-V Implementation Plan

## Objective
Build a minimal, professional personal website for Pete Marino on `welcometomarz.net` to replace Linktree with a branded landing page that is easy to maintain and easy to expand.

## Product Goal
The first version should act as a polished public front door, not a full portfolio system.
It should answer three questions quickly:
1. Who is Pete?
2. What should someone click next?
3. Where can they find Pete's work online?

## Recommended v1 Scope
Keep the first release intentionally small.

### Core sections
1. **Hero / intro**
   - Name: Peter Marino
   - Short title/tagline
   - 1-2 sentence bio
   - Clear primary action buttons

2. **Primary links**
   - LinkedIn
   - GitHub
   - Email / contact

3. **Featured projects**
   - LUMINAL
   - HELIOS
   - Optional third project later
   - Each with: name, one-line description, repo link

4. **Social links**
   - X / Instagram / YouTube / Twitch / other selected profiles
   - Kept below the primary professional content so the page still feels professional first

5. **Footer**
   - Short copyright / identity line
   - Domain / basic attribution

## What v1 should NOT include
To keep this clean and shippable, avoid these in the first release:
- Blog engine
- Notion embed
- Complex animations
- CMS/backend
- Contact form with spam handling
- Detailed case studies
- Heavy framework features we do not need yet

## Recommended technical approach
### Recommendation
**Astro + Cloudflare Pages**

Why:
- Static output, fast and cheap
- Cleaner long-term structure than raw HTML
- Easier to extend later with pages/components
- Good fit for a custom domain on Cloudflare
- Less machinery than Next.js for this use case

### Backup option
**Plain static HTML/CSS + Cloudflare Pages**

Use this if we want the absolute fastest path to launch and minimal dependencies.

## Proposed information architecture
### Top navigation
- Home
- Projects
- Links
- Resume (button)

### Homepage flow
1. Hero
2. Professional links
3. Featured projects
4. Social links
5. Footer

## Proposed content model
### Hero copy draft structure
- **Headline:** Peter Marino
- **Subheadline:** Product, automation, AI, and cloud-focused builder
- **Body:** Short bio emphasizing PM + automation + AI + homelab / builder identity

### Primary CTA set
- View LinkedIn
- View GitHub
- Email Me

### Featured project card structure
For each project:
- Project name
- 1-sentence summary
- Repo link
- Optional live/demo link later

## Design direction
### Desired feel
- Minimal
- Professional
- Slightly technical
- Clean typography
- Dark mode first is acceptable if done well
- Small hints of personality, not internet chaos

### Visual approach
- Strong type hierarchy
- Limited color palette
- Simple icon usage
- No giant social-embed wall
- Mobile-first layout

## Domain strategy
### Recommended production setup
- Primary site: `welcometomarz.net`
- Optional redirect/supporting aliases later:
  - `www.welcometomarz.net`
  - `links.welcometomarz.net`

### Recommendation
Use the root domain for the main site unless Pete wants a separate future homepage/product ecosystem.
If we later want a broader personal site plus a lightweight links page, then:
- `welcometomarz.net` = full homepage
- `links.welcometomarz.net` = compact link hub

## Repo / project structure
Proposed structure inside `ATLAS-V`:

```text
ATLAS-V/
  README.md
  docs/
    site-plan.md
    implementation-plan.md
    content-inventory.md
    launch-checklist.md
  site/
    src/
      components/
      layouts/
      pages/
      styles/
    public/
  assets/
    headshots/
    icons/
    social/
  content/
    bio.md
    links.json
    projects.json
```

## Implementation phases
### Phase 1: Planning and content inventory
Goal: define exactly what the site needs before scaffolding.

Tasks:
1. Confirm stack: Astro + Cloudflare Pages
2. Confirm domain target: `welcometomarz.net`
3. Decide which links belong in:
   - Primary professional links
   - Social links
4. Confirm featured projects:
   - LUMINAL
   - HELIOS
   - any additional repo(s)
5. Gather launch assets:
   - final short bio
   - project blurbs
   - optional favicon / brand assets later

Deliverables:
- `docs/content-inventory.md`
- approved sitemap/content list

### Phase 2: Scaffold the site
Goal: create the initial Astro project and baseline structure.

Tasks:
1. Initialize Astro in `site/`
2. Add base layout and styles
3. Create homepage structure
4. Add reusable components:
   - Hero
   - LinkList
   - ProjectCards
   - Footer
5. Add metadata, favicon, and social preview basics

Deliverable:
- local project structure ready for content

### Phase 3: Populate content
Goal: replace placeholder text with real content.

Tasks:
1. Write concise hero copy
2. Add professional link set
3. Add selected social profiles
4. Add featured project cards for LUMINAL and HELIOS
5. Add email/contact target
6. Tighten mobile spacing and hierarchy

Deliverable:
- realistic v1 site content complete

### Phase 4: Polish and QA
Goal: make the site look intentional instead of merely functional.

Tasks:
1. Review on desktop and mobile
2. Check link correctness
3. Verify typography, spacing, hover states, and accessibility basics
4. Add Open Graph / SEO basics
5. Ensure fast static build and no broken assets

Deliverable:
- production-ready build candidate

### Phase 5: Deploy
Goal: publish the site cleanly on Pete's domain.

Tasks:
1. Create git remote/repo if needed
2. Connect repo to Cloudflare Pages
3. Configure build settings
4. Attach `welcometomarz.net`
5. Add DNS records in Cloudflare
6. Verify HTTPS and redirects

Deliverable:
- live public site on custom domain

## Content decisions we need from Pete before build
1. Preferred headline/tagline
2. Which social platforms belong publicly on the site
3. Preferred public email destination
4. Whether the tone should be strictly professional or lightly personal
5. Whether to include a photo in a later version

## Suggested v1 link set
### Professional first
- LinkedIn
- GitHub
- Email

### Projects
- LUMINAL repo
- HELIOS repo

### Social, optional
- None in v1 unless added later
- Instagram
- YouTube
- Twitch

## Risks / tradeoffs
- **Notion** is faster to edit but weaker as a professional front page
- **GitHub Pages** is fine, but Cloudflare Pages is cleaner for custom-domain-first hosting
- **Too many socials** can make the page feel like Linktree in a blazer
- **Too much content too early** will delay launch and make the site feel unfocused

## Recommended immediate next step
Approve this plan, then move directly into **Phase 1 content inventory**.
That means we define:
- final link list
- featured projects
- short bio
- whether we want photo + resume in v1

## My recommendation in one sentence
Build a one-page Astro site, host it on Cloudflare Pages, keep it professional-first, and let socials live below the fold so the page feels like a personal brand hub instead of a list of apps.


## Decisions confirmed on 2026-04-13
- Use Astro + Cloudflare Pages
- Start with LinkedIn, GitHub, and email only
- Do not include resume in v1
- Do not include a photo/avatar in v1
- Tone should be professional with a lightly personal edge
- Pete expects to revise some copy personally
