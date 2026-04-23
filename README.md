# Sidarth Krishna Portfolio

Minimal single-page portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Edit content

All main site content is centralized in:

- `data/siteContent.ts`

This includes:

- Personal info
- Social links
- Project list
- Experience and personal section content
- Personal photo placeholder slots
- Resume link in top contact links
- Navbar labels and section order

## Update resume PDF

1. Put your PDF in `public/` (for example: `public/Sidarth_Krishna_Resume.pdf`).
2. Update these fields in `data/siteContent.ts` if needed:
   - `links` -> `Resume`

## Structure

- `app/page.tsx`: page composition and section order
- `components/Navbar.tsx`: sticky top-right nav with active section state
- `components/Section.tsx`: shared section wrapper
- `components/HeroSection.tsx`: Home section
- `components/ProjectList.tsx`: project list/cards
- `components/ExperienceItem.tsx`: experience entry
- `components/PersonalSection.tsx`: personal text + photo placeholder cards
- `components/Footer.tsx`: footer
- `data/siteContent.ts`: all editable content

## Notes

- Layout is intentionally minimal and single-page.
- Styling uses a white base with vibrant blue accents and rounded UI elements.
- Smooth scrolling is enabled globally.
