# Kannai Agro Tourism Website

Marketing website for **Kannai Agro Tourism Centre** in Gharpi, Maharashtra — built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Extracting Images from PDF

To re-extract brochure images:

```bash
python scripts/extract-pdf-images.py
```

Requires Python with PyMuPDF (installed automatically on first run). Update the PDF path in the script if needed.

Image mappings are defined in `content/images.ts`.

## Project Structure

```
app/           # Next.js pages and API routes
components/    # Reusable UI components
content/       # Brochure text and image mappings
lib/           # SEO helpers and JSON-LD
public/images/ # Extracted brochure and page images
scripts/       # PDF image extraction
```

## Pages

- **Home** — Hero, intro, climate stats, quick links
- **About** — Gharpi village, climate, landscape
- **Stay** — Cottage, bedroom, digital detox, washrooms
- **Dining** — Organic restaurant and kitchen
- **Explore** — Trails, water features, waterfall
- **Flora** — Plantations and rare trees
- **Fauna** — Birds, wildlife, farms
- **Sustainability** — Solar farm and green energy
- **How to Reach** — Airports, trains, buses via Sawantwadi
- **Contact** — Phone, email, map

## Deployment

Deploy to [Vercel](https://vercel.com):

1. Push the repository to GitHub
2. Import the project in Vercel
3. Add environment variables if needed
4. Point `kannaiagrotourism.com` to Vercel

```bash
npm run build
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
