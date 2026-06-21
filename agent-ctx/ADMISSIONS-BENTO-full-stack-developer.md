# Task: ADMISSIONS-BENTO — Admissions page premium Bento rebuild

**Agent:** full-stack-developer (Admissions Bento rebuild)
**Task:** Rebuild Admissions with premium Bento, preserve expandable courses + form → email.

## Context read
- `worklog.md` — Task 5 (design system: navy #1a2744 / gold #d4a04c / hairline borders / grain-bg / mesh-light / mesh-navy / bento-grid / card-premium / icon-duotone). Task ADMISSIONS-REBUILD (current expandable course logic + apply form → navpreet8testing@gmail.com).
- `home.tsx` — NEW reference pattern (page-enter + revealRef, force-is-visible 100ms useEffect, BentoCard usage, IconBadge duotone containers, bento-wide/bento-narrow spans, Section bg="mesh"/"navy"/"muted").
- `admissions.tsx` (current) — 10 expandable course panels (useState accordion with CSS grid-rows animation), SiteForm type="admissions" 6 fields, FormCard, dates table, fee structure, scholarships, contact info card with WhatsApp link.
- `ui.tsx` — Section / SectionHeading / PageHero / NavOutlineButton / IconBadge / BentoCard API.
- `site-form.tsx` — SiteForm + FormCard (DO NOT modify). FormCard = `rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5`.
- `globals.css` — `.bento-grid` 6-col with `.bento-wide`/`.bento-narrow`/`.bento-half` spans, `.card-premium` gold border tint on hover, `.icon-duotone`/`.icon-duotone-light`, `.mesh-light`/`.mesh-navy`, `.grain-bg`.

## Work log
1. Completely overwrote `/home/z/my-project/src/components/site/pages/admissions.tsx` as a single `"use client"` module exporting `AdmissionsPage()`.
2. Used `useScrollReveal<HTMLDivElement>()` ref on `<div className="page-enter">` wrapper. Copied force-is-visible 100ms useEffect from home.tsx verbatim.
3. Preserved the entire data layer from the prior file verbatim — STEPS (4), ELIGIBILITY (6), COURSES (10), DATES (6), STATUS_STYLES, FEE_SUMMARY (3), SCHOLARSHIPS (4), DOCUMENTS (5), PROGRAM_OPTIONS (12), CATEGORY_OPTIONS (5).
4. Added per-step `icon` to STEPS data (FileText / UploadCloud / ListChecks / BadgeCheck) so IconBadge could be rendered for each.
5. Section 1 — PageHero (eyebrow "Admissions 2025-26", title "Join Shivaji College" with gold span, description, image `ef13916d9cc1.jpg`).
6. Section 2 — Process Steps (`bg="mesh"`): 4 `.card-premium` glass cards on mesh-light bg, each with a top-right `IconBadge` (sm) for the step icon + a centered gold-gradient numbered circle (`h-20 w-20 rounded-full bg-gradient-to-br from-[#d4a04c] to-[#b8862f] shadow-lg shadow-[#d4a04c]/30`) with serif white numeral. Hover scale-105.
7. Section 3 — Eligibility (`bg="muted"`): 2-col grid (heading + body LEFT, glass checklist RIGHT). Checklist header now uses `IconBadge ClipboardCheck` next to the title. 6 gold `CheckCircle2` bullets preserved. Gold "Check & Apply" button calls `scrollToForm()`.
8. Section 4 — Courses (`bg="white"`): **PRESERVED 10 EXPANDABLE COURSE PANELS** (useState accordion with smooth `grid-rows-[1fr]→[0fr]` + opacity transition). Upgraded wrapper styling to `.card-premium` with hairline border + soft shadow; on open the border tints gold (`border-[rgba(212,160,76,0.35)]`) and shadow deepens. Course header icon now uses `IconBadge` (duotone gradient container) instead of plain navy-tinted square. ChevronDown rotates 180° on open. Each expanded body shows eligibility + syllabus (5 gold bullets) + duration/seats badges + gold-gradient "Apply for this course" button (calls `scrollToForm()`) + outline "Enquire" button (`navigate("contact")`). Each course has a unique lucide subject icon (BookOpen, Scale, Landmark, Atom, FlaskConical, Sigma, Leaf, BarChart3, Laptop, GraduationCap).
9. Section 5 — Important Dates (`bg="mesh"`): preserved glass table (`bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl`) with navy header, alternating rows, status badges (Open=green / Upcoming=gold / Closed=gray). 6 events preserved verbatim.
10. Section 6 — Fee Structure (`bg="white"`): **BENTO GRID using `.bento-grid` + `.bento-half`** (3 cards in equal halves). Each uses `BentoCard` wrapper with `IconBadge` (lg) in top-left, tier label in top-right, gold-gradient range text (30-34px serif bold), hairline divider, gray description, and "Apply for {tier}" gold link calling `scrollToForm()`.
11. Section 7 — Scholarships (`bg="navy"`, mesh-navy): 4 glass cards (`border-white/10 bg-white/[0.05] backdrop-blur-md`) with `.card-premium` hover. Each uses `IconBadge icon={s.icon} light` (gold duotone on navy). 4 scholarships preserved verbatim (Merit / Need-based / SC-ST-OBC / Sports & ECA). Below: outline-light button "Ask about scholarship eligibility" navigates to contact.
12. Section 8 — Apply Form (`bg="mesh"`): heading div carries `id="apply-form"` + `scroll-mt-24` (scrollToForm target). 2-col grid (lg): LEFT = `FormCard` from site-form.tsx wrapping `SiteForm type="admissions"` with the SAME 6 fields (Full Name / Email / Phone / Program of Interest select / Category select / Message textarea), submitLabel "Submit Application Enquiry", successTitle "Application enquiry received!", successMessage explicitly mentioning navpreet8testing@gmail.com + 24-hour SLA. RIGHT = navy glass gradient info card with `IconBadge icon={Phone} light` header, 4 contact rows (email / phone / WhatsApp green / hours) + Documents Needed checklist with 5 entries each using gold-tinted icon container. WhatsApp link uses `SOCIAL_LINKS.whatsapp`.
13. Section 9 — Final CTA (`bg="navy" !py-20`): centered glass panel (`border-white/15 bg-white/[0.06] backdrop-blur-md`) with "Still have questions?" heading, body copy, two CTAs (`NavOutlineButton to="contact" light` "Contact Admissions" + green WhatsApp button linking `SOCIAL_LINKS.whatsapp`).

## Preserved functionality (verified)
- 10 expandable course panels — useState accordion + CSS grid-rows animation, chevron rotation, eligibility + syllabus bullets, "Apply for this course" scrolls to #apply-form, "Enquire" navigates to contact.
- Apply form — SiteForm type="admissions", 6 fields (name/email/phone/program select/category select/message), wrapped in FormCard, successMessage explicitly mentions navpreet8testing@gmail.com + 24h SLA, POSTs to /api/contact → DB INSERT → email.
- Important dates table with Open/Upcoming/Closed status badges.
- Scholarship section (4 entries).
- Contact info card with email / phone / WhatsApp (SOCIAL_LINKS.whatsapp) / hours + Documents Needed checklist.
- Hero image: `https://sfile.chatglm.cn/images-ppt/ef13916d9cc1.jpg` (4320x2880 Indian students).

## Design changes applied (premium Bento)
- IconBadge used for ALL icon containers (process steps, eligibility header, course headers, fee structure, scholarships, info card header).
- Section bg="mesh" / "navy" / "muted" for textured backgrounds (grain-bg + radial-gradient mesh).
- Process steps: 4 glass cards with IconBadge + gold gradient numbered circles on mesh bg.
- Expandable course panels: `.card-premium` styling (hairline border + soft shadow + gold border tint on open).
- Dates table: glass-styled (bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl).
- Fee structure: `.bento-grid` with `.bento-half` (3 cards) using `BentoCard`.
- Scholarships: glass cards on navy mesh with `IconBadge light`.
- Apply form: `FormCard` (already glass-like with shadow + ring) on mesh bg, navy info card beside it.
- Refined buttons: `.btn-gold` (gold gradient + tactile hover) and `.btn-outline-light` (border + fill transition).

## Rules respected
- `"use client"` ✓
- `export function AdmissionsPage()` ✓
- `page-enter` wrapper + `revealRef` ✓
- `.reveal` / `.reveal-stagger` + force-is-visible 100ms useEffect ✓
- NO header/footer ✓
- lucide icons only ✓
- NO indigo/blue (only navy #1a2744 / gold #d4a04c / green #25D366 for WhatsApp / gray #6b7280) ✓
- Did NOT touch chatbot.tsx, /api/chat, /api/contact, site-form.tsx, or the email navpreet8testing@gmail.com ✓

## Lint / compile
- `bun run lint` — 0 errors.
- Dev server log shows clean compile (multiple "✓ Compiled in XYZms" entries, no errors, `GET /` 200).

## Stage Summary
- admissions.tsx completely rebuilt with premium Bento design; exports `AdmissionsPage()`.
- 9 sections delivered, all premium Bento/glassmorphism per v5 design system.
- Form STILL emails navpreet8testing@gmail.com — SiteForm type="admissions" unchanged, successMessage explicitly mentions the email, POSTs to /api/contact (verified by dev.log: `POST /api/contact 200 in 110ms` with Prisma INSERT INTO ContactSubmission).
- 10 expandable course panels PRESERVED with the same useState accordion + grid-rows animation + Apply/Enquire CTAs.
- All BentoCard / IconBadge / Section / SectionHeading / PageHero / NavOutlineButton / FormCard from shared ui.tsx & site-form.tsx are used as designed.
- Lint-clean; dev server compiles cleanly. Mobile-first responsive (sm/lg breakpoints). 44px+ touch targets. aria-expanded on accordion buttons.
