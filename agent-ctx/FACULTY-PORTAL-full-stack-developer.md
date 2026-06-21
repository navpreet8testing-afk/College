# Task: FACULTY-PORTAL — Faculty Portal page

**Agent:** full-stack-developer (Faculty Portal page)
**File written:** `/home/z/my-project/src/components/site/pages/faculty-portal.tsx` (only file touched)

## What was built
A long, rich `FacultyPortalPage` ("use client") that mirrors the student-portal structure:
1. **PageHero** — eyebrow "Faculty Portal", gold-spanned "Login" title, hero image `87641eba9a3c.jpg`.
2. **Login + Features** (white, 2-col) — plain `<form>` login card (Faculty ID, Password, Remember me, gold Login) with useState-driven amber demo info box; "Forgot password?" navigates to contact, "New faculty? Contact HR" navigates to careers. Right column: `SectionHeading` "Educator Tools / Portal Features" + 6 gold-icon feature rows (ClipboardCheck, CalendarCheck, FlaskConical, CalendarClock, Upload, BarChart3).
3. **Stats strip** (muted) — 4 stats: 100+ Faculty Members, 400+ Publications, 60+ Research Projects, and a custom ₹5.2Cr+ Grant Funding inline stat (StatItem only accepts numbers, so the rupee-prefixed stat uses identical styling without count-up).
4. **Faculty Resources** (navy) — `SectionHeading` light + 6 cards on `bg-white/[0.04]` (Calendar, FileText, BookOpen, Scale, Receipt, FlaskConical), each `.card-lift`.
5. **Development Programs** (white) — `SectionHeading` "Grow Your Career" + 4-card grid (Hammer/FDPs, Mic/Conferences, Plane/Sabbaticals, GraduationCap/Skill Upgradation).
6. **FAQ** (muted) — 5 styled `<details>`/`<summary>` items (navy summary, gold chevron, gray body).
7. **Final CTA** (navy) — "Need IT support?" + light `NavOutlineButton to="contact"` + green WhatsApp button using `SOCIAL_LINKS.whatsapp`.

## Conventions followed
- `page-enter` wrapper + `revealRef`, `.reveal` / `.reveal-stagger`, force-is-visible `useEffect`.
- NO header/footer (rendered by layout), lucide icons only, NO indigo/blue.
- Shared `Section`, `SectionHeading`, `PageHero`, `NavOutlineButton`, `StatItem`; `useRouter`, `SOCIAL_LINKS`.
- Plain `<form>` (NOT SiteForm) per spec; on submit, `useState` shows the amber info box.

## Quality checks
- `bun run lint` — passed, zero errors.
- Dev server compiles the faculty-portal module without errors (the unrelated `@/components/site/pages/downloads` error in dev.log is a separate page another agent will build).

## Other agents can build on this
- The Faculty Portal page is fully integrated via `src/app/page.tsx` line 22 (`FacultyPortalPage` import).
- The `careers` page (linked from "New faculty? Contact HR") should already exist; verify it renders the careers page if not.
- The `contact` page (linked from "Forgot password?" and the IT Helpdesk button) should already exist.
