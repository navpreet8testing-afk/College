# Task ID: ALUMNI — Alumni page

Agent: full-stack-developer (Alumni page)
File touched: `/home/z/my-project/src/components/site/pages/alumni.tsx` (NEW only)

## What I built
A single client component `AlumniPage()` for the Shivaji College website, matching the home.tsx visual pattern exactly.

## Sections (8 total)
1. **PageHero** — eyebrow "Alumni Network", title with gold span "Always a Shivajian", graduation hero image (`492ca6a761d6.jpg`).
2. **Stats strip (muted)** — `SectionHeading` "Our Reach / A Global Family" + 4 `StatItem`s (15000+, 40+, 60+, 500+).
3. **Notable Alumni (white)** — 6 `.card-lift` cards with circular gold-initial avatars (AV/RM/PN/VS/SR/AK) + name, batch, role, quote.
4. **Spotlight (navy)** — 3 testimonial cards on `bg-white/[0.04]` with gold `Quote` icon, white/85 body, gold batch label.
5. **Reunions (muted)** — 3 `.card-lift` cards with image, title, Calendar date, MapPin location, gold "Register" mailto link.
6. **Benefits (white)** — 4 `.card-lift` cards: Networking (Users), Mentorship (GraduationCap), Career Support (Briefcase), Library Access (BookOpen).
7. **Registration (muted)** — 2-col: LEFT `FormCard` + `SiteForm` type="alumni" (6 fields incl. Course select), RIGHT navy info card with email/phone/WhatsApp + social row.
8. **Newsletter + WhatsApp CTA (navy)** — title "Never miss a reunion", `NewsletterChip`, green WhatsApp button linking to `SOCIAL_LINKS.whatsapp`.

## Patterns reused from home.tsx
- `useScrollReveal<HTMLDivElement>()` ref on wrapper `<div className="page-enter">`.
- Force-is-visible `useEffect` (100ms timeout, scans `.reveal:not(.is-visible)` for above-the-fold items).
- `.reveal` on every major block, `.reveal-stagger` on every grid.
- `.card-lift` for hover-scale, `.gallery-item` for image zoom, `.btn-gold`/`.btn-outline` button classes.
- Palette strictly navy (#1a2744, #121c33), gold (#d4a04c, #b8862f), white, gray (#5a6478). Green #25D366 used only for the WhatsApp CTA (explicitly requested).

## Imports
- `../hooks` → `useScrollReveal`
- `../ui` → `Section`, `SectionHeading`, `PageHero`, `StatItem`
- `../site-form` → `SiteForm`, `FormCard`, `NewsletterChip`
- `../router` → `SOCIAL_LINKS`
- `lucide-react` icons: `Quote`, `Calendar`, `MapPin`, `ArrowUpRight`, `Users`, `GraduationCap`, `Briefcase`, `BookOpen`, `Mail`, `Phone`, `MessageCircle`, `Facebook`, `Twitter`, `Instagram`, `Linkedin`, `Youtube`

## Form submission
`SiteForm` auto-POSTs to `/api/contact` (persists to DB + emails navpreet8testing@gmail.com). successMessage ends with the navpreet8testing@gmail.com mention as required.

## Lint / compile
- `bun run lint` — 0 errors across the repo (alumni.tsx clean).
- `dev.log` shows dev server compiled successfully. The only module-not-found errors are for sibling pages (library/downloads/grievance) being authored by other agents — not my responsibility.
