# Task ID: EVENTS — Events page

Agent: full-stack-developer (Events page)
File: `/home/z/my-project/src/components/site/pages/events.tsx`

## Work Log
- Read `worklog.md` (design tokens, shared component API, Indian image URL catalog), `home.tsx` (page-assembly pattern + force-is-visible useEffect), `ui.tsx` (Section / SectionHeading / PageHero / NavOutlineButton / StatItem signatures), `router.tsx` (useRouter + SOCIAL_LINKS.whatsapp + PageKey union), `hooks.ts` (useScrollReveal), `site-form.tsx` (for completeness).
- Created `events.tsx` as a single `"use client"` module exporting `EventsPage()`. Wrapped content in `<div ref={revealRef} className="page-enter">` and copied the home-page 100ms force-`.is-visible` mount-time useEffect verbatim.
- Section 1 — PageHero (eyebrow "Events", title `Where <gold>Memories</gold> Are Made`, description, hero image `6fb3150be1c0.jpg`).
- Section 2 — Upcoming events (white bg). `SectionHeading` eyebrow "Upcoming" + title `<gold>Mark</gold> Your Calendar`. Vertical stack of 5 horizontal cards: LEFT gold date block (month + day big serif on `bg-[#d4a04c]`), MIDDLE title + MapPin venue + Clock time, RIGHT gold "Register" pill that routes to `contact`. All 5 events with the exact dates/titles/venues/times from the brief.
- Section 3 — Flagship events (navy bg). `SectionHeading` light, eyebrow "Flagship", title `Our <gold>Signature</gold> Events`. Grid `sm:grid-cols-2 lg:grid-cols-3` of 6 cards on `bg-white/[0.04]` with `backdrop-blur-sm` + `border-white/10`. Each card: gold icon (Music / Cpu / Trophy / Mic / Drama / Lightbulb) in gold/15 box, month tag pill (Calendar icon, gold uppercase), white serif name, white/70 description, gold "View Highlights" link → `campus-life`.
- Section 4 — Past events gallery (muted bg). `SectionHeading` eyebrow "Gallery", title `<gold>Memories</gold> Revisited`. Grid `grid-cols-2 sm:grid-cols-3` of 6 `.gallery-item` tiles (aspect-[4/3]) using cultural/sports/tech/grad images from the worklog catalog. Each tile: navy gradient overlay (`from-[#121c33]/90`), gold category pill top-left (Tag icon), serif label bottom-left with event name + 2024 year.
- Section 5 — By the numbers (white bg). `SectionHeading` centered eyebrow "By the Numbers", title `A Year of <gold>Moments</gold>`. 4-col StatItem grid (200+ Events Yearly, 50,000+ Footfall, 30+ Cultural Fests, 15+ Sports Meets) wrapped in `.reveal`.
- Section 6 — Host with us / venue booking (navy bg). `SectionHeading` light eyebrow "Host With Us", title `<gold>Book</gold> Our Venue`. Two-column: LEFT copy + 3 venue cards (750-seat Auditorium / Conference Halls / Sports Ground with Building2 / Users / Trophy icons on `bg-white/[0.04]`) + `NavOutlineButton to="contact" light` "Enquire Now". RIGHT a WhatsApp green panel — large `MessageCircle` icon, headline, bullet list of perks, and a green (`#25D366`) "Chat about venue booking" button linking to `SOCIAL_LINKS.whatsapp`.
- Section 7 — Final CTA (white bg, `!py-16`). Centered `MessageCircle` icon, headline `Want event updates on <green>WhatsApp?</green>` (using WhatsApp green `#25D366` accent — allowed as it is the brand color, not blue/indigo), subtitle, then a green "Join WhatsApp List" button (`SOCIAL_LINKS.whatsapp`) + `NavOutlineButton to="news"` "Read Latest News".
- Used only lucide-react icons. Palette strictly navy `#1a2744` / navy-deep `#121c33` / gold `#d4a04c` / white / gray / muted cream / WhatsApp green `#25D366` — no indigo, no Tailwind blue. All cards use `.card-lift` for hover lift; gallery tiles use `.gallery-item` for zoom-on-hover.
- Ran `bun run lint` on the file: zero errors. (Repo-wide lint shows 1 pre-existing error in `careers.tsx` and missing-page-module warnings for `library`/`downloads`/`grievance` — all outside this task's scope.) Dev server log shows clean compilation (`✓ Compiled in 171ms`) with no events-specific errors.

## Stage Summary
- `events.tsx` is complete at `/home/z/my-project/src/components/site/pages/events.tsx`, exports `EventsPage()`.
- All 7 required sections delivered with exact copy, dates, venues, icon mappings, image URLs and CTAs from the brief.
- Visual style is identical to `home.tsx`: same Section/SectionHeading/PageHero/Nav*Button/StatItem usage, same `.reveal`/`.reveal-stagger` + force-is-visible mount effect, same `.card-lift` / `.gallery-item` patterns, same navy/gold/white palette.
- Responsive (mobile-first; scales through `sm:` and `lg:` breakpoints), accessible touch targets, no restricted colors.
- Lint-clean new file; route compiles on the dev server with no events-related errors.
