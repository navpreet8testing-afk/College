# Task ID: ABOUT-BENTO

Agent: full-stack-developer (About Bento rebuild)
File: `/home/z/my-project/src/components/site/pages/about.tsx` (OVERWRITTEN)

## What I built
A single client component `AboutPage()` for the Shivaji College website — completely rebuilt with premium Bento grids, glassmorphism, mesh-textured backgrounds and duotone IconBadge containers, matching the home.tsx reference pattern.

## Sections (6 total)
1. **PageHero** — eyebrow "About Us", title `Our Legacy & <gold>Mission</gold>`, description, HD Indian candid campus image `91e7a9fbe8c6.jpg` (2560x1277). Built-in glassmorphism content panel + hover zoom.
2. **History Timeline (mesh-light)** — `SectionHeading` "A Journey Since <gold>1962</gold>". Vertical timeline with thin gold left border (`border-l border-[#d4a04c]/30`), gold dots (4px ring on background + 3px gold glow halo) at each milestone. 6 milestones (1962 Founded / 1971 Science Block / 1985 PG Programs / 1998 First NAAC / 2010 NAAC A / 2020 NAAC A+ 3.28 CGPA). Each: gold serif year (24px), navy serif title (20px), gray sans description (15px). `.reveal` on every item for staggered scroll-in.
3. **Vision & Mission (navy mesh)** — `SectionHeading` light center. 2 glass cards side-by-side (`rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md p-8`). Vision card: `IconBadge Compass size="lg" light` + gold eyebrow "Vision" + white serif title + white/85 paragraph. Mission card: `IconBadge Target size="lg" light` + gold eyebrow "Mission" + white serif title + 5 gold `CheckCircle2` bullets in `space-y-3` list.
4. **Principal's Message (mesh-light)** — 2-col grid. LEFT: portrait image `4e4ea85d0645.jpg` with `rounded-2xl shadow-[0_12px_40px_-12px_rgba(26,39,68,0.25)] ring-1 ring-[#1a2744]/8 aspect-[4/5]`. RIGHT: `SectionHeading` "A Word from Our <gold>Principal</gold>" + 2 paragraphs + signature block (border-t navy/10, serif bold name + gray designation) + `NavGoldButton to="contact"` "Get in Touch".
5. **Accreditations Bento (muted)** — `SectionHeading` align center "Recognized <gold>Excellence</gold>". Bento grid: 1 WIDE hero card (NAAC A+ with `IconBadge size="lg"` + `!p-8` + longer 2-sentence copy) using `.bento-wide`, followed by 5 standard cards using `.bento-narrow` — Top 10 DU College, 15,000+ Alumni, 100+ Faculty, 25+ Research Centers, 200+ Events Yearly. Each standard card uses `BentoCard` wrapper with `IconBadge` (Award/Trophy/GraduationCap/Users/FlaskConical/Globe2), navy serif title, gray desc. `.reveal-stagger` on the bento-grid for cascade entrance.
6. **Stats bar (navy mesh, !py-20)** — single `.reveal` glass container (`rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md p-8 sm:p-10`) wrapping 4-col grid of `StatItem light` — 60+ Years / 25+ Programs / 15000+ Alumni / 100+ Faculty.

## Patterns reused / followed spec
- `useScrollReveal<HTMLDivElement>()` ref on wrapper `<div className="page-enter">`.
- Force-is-visible `useEffect` (100ms timeout, scans `.reveal:not(.is-visible)` for above-the-fold items) — copied verbatim from home.tsx.
- `.reveal` on every major block, `.reveal-stagger` on every grid/list.
- `"use client"`, `export function AboutPage()`, NO header/footer.
- Palette strictly navy (#1a2744, #121c33), gold (#d4a04c, #b8862f), white, gray (#6b7280). NO indigo/blue.
- Used `IconBadge` for ALL icon containers (duotone gradient + radial highlight + border + inset shadow) — both light (navy sections) and dark (mesh-light/muted sections) variants.
- Used `BentoCard` wrapper (premium `.card-premium` hover with gold border tint + -6px lift) for all accreditation cards.
- Used `Section` with bg="mesh" / "navy" / "muted" for textured sections (grain-bg + mesh gradients).
- Used `.bento-grid` (6-col responsive) + `.bento-wide` (span 4) + `.bento-narrow` (span 2) for asymmetric accreditation layout.
- Did NOT touch chatbot.tsx, /api/chat, /api/contact, site-form.tsx, or the email navpreet8testing@gmail.com.

## Imports
- `react` → `useEffect`
- `../hooks` → `useScrollReveal`
- `../ui` → `Section`, `SectionHeading`, `PageHero`, `NavGoldButton`, `StatItem`, `IconBadge`, `BentoCard`
- `lucide-react` → 9 icons (Award, Trophy, GraduationCap, Users, FlaskConical, Globe2, CheckCircle2, Target, Compass)

## Lint / compile
- `bun run lint` — 0 errors (about.tsx clean).
- All 9 lucide icons verified to exist in installed version.
- `dev.log` shows dev server compiled successfully (Ready in 991ms, GET / 200).
