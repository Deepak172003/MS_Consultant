# Guruzan — edtech company site

One React website, one WhatsApp number, four verticals:
- **Play School Franchise** — curriculum, teacher training, admissions & marketing support
- **Study Material & Test Software** — IIT-JEE, NEET, Board, Foundation, Higher Studies, Olympiad/NDA
- **Marketing** — Graphics Design, Photography, Videography, Video Editing, Ads Management, Web/App Development (online & offline)
- **HR Services** — faculty & staff placements, pan-India

Every CTA on every page opens WhatsApp with a prefilled message. No contact forms that submit anywhere, no payment/fee collection on the site — enquiry only, by design.

## Setup

```bash
npm install
npm run dev
```

Then build for production with `npm run build` (outputs to `dist/`), and deploy `dist/` to any static host (Netlify, Vercel, Hostinger, etc.) or your existing hosting.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — intro to all 4 verticals |
| `/play-school` | Play School franchise details |
| `/study-material` | Study material & test software streams |
| `/marketing` | Marketing services |
| `/hr-services` | Faculty & staff placements |
| `/how-it-works` | Process for each of the 4 verticals |
| `/about` | Company story + core team |
| `/testimonials` | Client quotes (**placeholder — replace with real ones**) |
| `/faq` | Common questions |
| `/contact` | Phone, email, both office addresses + maps, WhatsApp |

## Things to edit before you launch

1. **`src/data/constants.js`** — WhatsApp number, phone numbers, email, addresses, opening hours, and all four verticals' content live here in one place. Change something once and every page that uses it updates.
2. **`src/pages/Testimonials.jsx`** (and the Home page teaser) — currently placeholder quotes. Swap in real feedback.
3. **Opening hours** — still a placeholder in `constants.js` (`OPENING_HOURS`).
4. **Colors** — CSS variables at the top of `src/App.css` (`--accent`, `--accent2`, `--bg`, etc.) if you want to match an existing brand palette.

## Notes

- Built with Vite + React Router — no Tailwind dependency, plain CSS in `src/App.css`.
- The floating WhatsApp bubble (`src/components/WhatsAppButton.jsx`) appears on every page via `src/components/Layout.jsx`.
- No NACH / payment / auto-debit collection anywhere on the site, per instruction — all enquiries route to WhatsApp for the team to handle directly.
