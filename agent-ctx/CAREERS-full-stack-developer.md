# CAREERS — Careers Page Agent Record

**Task ID:** CAREERS
**Agent:** full-stack-developer (Careers page)
**File written:** `src/components/site/pages/careers.tsx`

## Context reviewed
- `worklog.md` — full design system (navy #1a2744, navy-deep #121c33, gold #d4a04c), serif Playfair / sans Inter, `.card-lift`, `.reveal` / `.reveal-stagger`, `.page-enter`, `.btn-gold` / `.btn-outline`.
- `pages/home.tsx` — page-enter wrapper + `revealRef` + force-is-visible `useEffect` pattern copied verbatim.
- `pages/contact.tsx` — two-column form + navy info-card layout, `FormCard` + `SiteForm` usage.
- `ui.tsx` — `Section` only accepts `bg` / `className` / `children` (no `id`), so I wrapped the apply-form section in a `<div id="apply-form" className="scroll-mt-20">` to provide the anchor target.
- `router.tsx` — `SOCIAL_LINKS.whatsapp`, `COLLEGE_PHONE`, `PageKey="careers"` already registered.
- `site-form.tsx` — `SiteForm` auto-POSTs to `/api/contact`; `select` field uses `options` array.

## Sections implemented (all 8)
1. **PageHero** — eyebrow "Careers", title with gold `Shivaji College` span, description, image `afaf375d7649.jpg`.
2. **Why work with us** (white) — `SectionHeading` "A Place to Grow", 4 benefit `.card-lift` cards (Wallet / FlaskConical / HeartPulse / GraduationCap).
3. **Stats strip** (muted) — 4 `StatItem` (100+ Faculty, 50+ Research Grants, 30+ PhDs Pursuing, 12:1 Faculty Ratio) in a `.reveal` grid.
4. **Current Openings table** (white) — clean table with navy header row, alternating white/muted rows, 6 openings, gold "Apply" anchor button `<a href="#apply-form">`.
5. **Application Process** (muted) — `SectionHeading` centered "How We Hire", 4 numbered cards with gold circle numerals.
6. **Employee testimonials** (navy) — `light` heading, 3 `bg-white/[0.04]` cards with gold `Quote` icon, white/85 quote text, gold name + designation.
7. **Application Form** (white, id="apply-form") — two-column grid: LEFT `FormCard` + `SiteForm type="careers"` with name/email/phone + 2 selects (Position, Experience) + textarea (rows 5), success message quotes HR email; RIGHT navy info card with HR email / phone / WhatsApp link + CV-attachment note.
8. **Final CTA** (navy) — "Have questions about a role?" + `NavOutlineButton to="contact" light` "Contact HR" + green WhatsApp button (`#25D366`) + tertiary gold "Explore Academics" link.

## Rules honored
- `"use client"`, `export function CareersPage()`, `revealRef` + `.page-enter` wrapper.
- Force-is-visible `useEffect` copied from home.tsx.
- No header/footer rendered.
- Only lucide-react icons; no indigo / blue colors.
- Tailwind responsive at every breakpoint (mobile-first, sm / lg splits).
- No other files modified.

## Verification
- `bun run lint` → clean, no errors.
- `bunx tsc --noEmit` → no errors attributable to careers.tsx (only pre-existing errors in unrelated files: examples/websocket, skills, and other agents' not-yet-built page modules).
- `dev.log` shows `✓ Compiled in 261ms` after my file landed; my module resolves correctly per `import { CareersPage } from "@/components/site/pages/careers"` in `src/app/page.tsx`.
