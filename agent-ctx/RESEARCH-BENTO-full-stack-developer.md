# Task ID: RESEARCH-BENTO

Agent: full-stack-developer (Research Bento rebuild)
File: `/home/z/my-project/src/components/site/pages/research.tsx`

## Work Log
- Read `worklog.md` Task 5 entry (design tokens navy #1a2744 / navy-deep #121c33 / gold #d4a04c / gold-dark #b8862f, Playfair serif + Inter sans, Bento grid utilities `.bento-grid`/`.bento-wide`/`.bento-narrow`/`.bento-half`, premium tokens `--hairline`/`--shadow-soft`/`--shadow-lift`, shared API surface).
- Read `home.tsx` (page-enter wrapper + revealRef + force-is-visible 100ms useEffect, Programs Bento pattern: 1 wide hero card + 5 standard `bento-narrow` cards using `IconBadge`, Parallax quote band, Final CTA pattern).
- Read `ui.tsx` (full API: `Section` bg enum white/navy/muted/mesh/mesh-navy, `SectionHeading` with eyebrow+title+description+align+light, `PageHero` with built-in glass content panel + hover zoom, `NavGoldButton`/`NavOutlineButton` (GoldButton auto-appends ArrowRight — so NO extra arrow inside), `StatItem` count-up, `BentoCard` wrapper applies `.card-premium`, `IconBadge` sm/md/lg + light variants).
- Read `globals.css` (`.bento-grid` 6-col responsive collapse, `.card-premium` shadow-soft→shadow-lift + gold border tint, `.icon-duotone`/`.icon-duotone-light` gradient containers, `.mesh-light`/`.mesh-navy` radial gradients, `.grain-bg` SVG noise overlay, `.reveal`/`.reveal-stagger` scroll animation, `--hairline`/`--shadow-soft`/`--shadow-lift`/`--shadow-gold` tokens).
- Read existing `research.tsx` to preserve the data shape (areas, publications, projects, partners) and ensure content parity.
- Completely overwrote `research.tsx` as a single `"use client"` module exporting `ResearchPage()`.
- Section 1 — `PageHero` eyebrow "Research & Innovation", title `Driving <gold>Innovation</gold>`, description, image `84bcb5cbdc3e.jpg`.
- Section 2 — Impact stats on `bg="mesh"`: `SectionHeading` eyebrow "Impact" + `Research that <gold>Matters</gold>` align="center", 4 `StatItem` (25+ Centers / 400+ Publications / 60+ Projects / 5.2 Cr+ Funding) in a single glass container `rounded-2xl border border-[#1a2744]/8 bg-white/70 backdrop-blur-md p-8/10`.
- Section 3 — Research areas Bento on `bg="white"`: `SectionHeading` eyebrow "Areas" + `Explore Our <gold>Research Areas</gold>` + description, `.bento-grid` containing 1 hero `BentoCard bento-wide !p-8` (Sciences & Materials, `IconBadge Atom size="lg"`, 3-sentence detailed desc, "Active projects" footer with gold serif 20px number 12) + 5 `BentoCard bento-narrow` (Life Sciences 9, CS & AI 14, Social Sciences 8, Humanities & Languages 7, Sustainability 10) each with `IconBadge`, navy serif title, gray desc, hairline-divided footer with "Active projects" label + gold sans number.
- Section 4 — Publications on `bg="navy"`: `SectionHeading light` eyebrow "Publications" + `Recent <gold>Highlights</gold>` + description. 3-col grid (`md:grid-cols-2 lg:grid-cols-3`) of 6 glass cards `rounded-xl border-white/10 bg-white/[0.05] backdrop-blur-md p-5` with gold FileText icon in gold-tinted square, white serif title, gold sans journal, white/60 year. Hover border tints gold.
- Section 5 — Ongoing projects on `bg="muted"`: `SectionHeading` eyebrow "Projects" + `Ongoing <gold>Projects</gold>` + description. 2-col grid of 4 `BentoCard !p-7` each with gold pill "Funded by DST/UGC/DBT/ICSSR" (Sparkles icon), navy serif 20px title, PI + dept gray, hairline-divided footer with `IndianRupee` + gold serif semibold amount + `Calendar` + gray duration.
- Section 6 — Collaborators on `bg="white"`: `SectionHeading` eyebrow "Partners" + `Our <gold>Collaborators</gold>` + description align="center". 6-col responsive grid (2/3/6) of partner cards each `card-premium h-20 rounded-2xl border border-[#1a2744]/8 bg-white` with navy serif semibold name. (`card-premium` provides exactly shadow-soft → shadow-lift + gold border tint on hover per the spec.)
- Section 7 — Final CTA on `bg="navy" !py-20`: centered glass panel `rounded-2xl border-white/15 bg-white/[0.06] backdrop-blur-md p-10/14` with Sparkles gold icon header, white serif `Have a research <gold>idea?</gold>` title, subtitle, two CTAs: `NavOutlineButton to="contact" light` "Contact Research Office" + `NavGoldButton to="admissions"` "Apply for Ph.D.".
- Page wrapped in `<div ref={revealRef} className="page-enter">` with copied force-`.is-visible` 100ms mount-time useEffect from `home.tsx`.
- Used only lucide-react icons (Atom, Dna, BrainCircuit, Users, BookOpen, Leaf, FileText, Calendar, IndianRupee, Sparkles). Palette strictly navy / navy-deep / gold / gold-dark / white / gray — NO indigo, NO Tailwind blue. NO header/footer (rendered by layout). NO touching of chatbot.tsx, /api/chat, /api/contact, site-form.tsx, or email.
- Removed unused `ArrowUpRight` import after deciding `NavGoldButton` (via `GoldButton`) already appends `ArrowRight`. Ran `bun run lint` — zero errors. Dev server log shows clean compilation (`✓ Compiled in 160ms` with no errors).

## Stage Summary
- `research.tsx` completely rebuilt; exports `ResearchPage()`.
- 7 sections delivered, all premium Bento / glassmorphism consistent with the v5 design system:
  1. `PageHero` (glass content panel + hover zoom) with research hero image.
  2. Impact stats (mesh bg) — 4 StatItem in a single glass container.
  3. Research areas — `bento-grid` with 1 `bento-wide` hero card (Sciences & Materials, lg IconBadge, detailed copy) + 5 `bento-narrow` cards, each with gold "Active projects: N" footer.
  4. Publications (navy) — 3-col grid of 6 glass cards, gold FileText icon, white serif title, gold journal, white/60 year.
  5. Ongoing projects (muted) — 2-col grid of 4 `BentoCard` with gold funder pill, navy serif title, PI+dept, gold funding + duration footer.
  6. Collaborators (white) — 6-col responsive grid of `card-premium h-20` partner logo cards.
  7. Final CTA (navy) — centered glass panel with Sparkles icon, gold-accent title, two routing CTAs (contact / admissions).
- Lint-clean new file; route compiles on the dev server. Mobile-first responsive. All scroll-reveal + page-enter animations wired.
- Did NOT touch: chatbot.tsx, /api/chat, /api/contact, site-form.tsx, email navpreet8testing@gmail.com.
