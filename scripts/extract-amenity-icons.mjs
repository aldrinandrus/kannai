/**
 * Extracts the eight "Free 8's" glyphs from the printed flyer into transparent
 * PNGs so the website badges match the flyer artwork exactly.
 *
 * Each flyer icon is a cream glyph on a solid dark-green disc. We locate the
 * disc, and write the glyph in the flyer olive so it reads on the cream page.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const FLYER = process.argv[2];
const OUT_DIR = path.resolve("public/images/amenities");
const OUT_SIZE = 256;
const OLIVE = { r: 31, g: 58, b: 4 };

// Approximate disc centres in the 682x1024 flyer, in flyer reading order.
const SEEDS = [
  { id: "digital-detox", x: 80, y: 661 },
  { id: "farm-fresh-food", x: 203, y: 661 },
  { id: "high-oxygen", x: 329, y: 661 },
  { id: "counselling", x: 456, y: 661 },
  { id: "wifi", x: 590, y: 661 },
  { id: "meditation", x: 156, y: 813 },
  { id: "farm-tour", x: 277, y: 813 },
  { id: "boating", x: 395, y: 813 },
];

const luma = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

const WINDOW = 33;
const DARK = 120;
const MIN_RUN = 4;

/**
 * Finds the dark disc around a seed by measuring how far its dark pixels
 * reach. Rows and columns need several dark pixels to count, which keeps
 * JPEG speckle in the surrounding cream from inflating the bounds.
 */
function disc(data, w, h, seed) {
  const x0 = Math.max(0, seed.x - WINDOW);
  const x1 = Math.min(w - 1, seed.x + WINDOW);
  const y0 = Math.max(0, seed.y - WINDOW);
  const y1 = Math.min(h - 1, seed.y + WINDOW);

  const cols = new Array(x1 - x0 + 1).fill(0);
  const rows = new Array(y1 - y0 + 1).fill(0);

  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const o = (y * w + x) * 3;
      if (luma(data[o], data[o + 1], data[o + 2]) < DARK) {
        cols[x - x0]++;
        rows[y - y0]++;
      }
    }
  }

  const span = (counts, base) => {
    let lo = -1;
    let hi = -1;
    for (let i = 0; i < counts.length; i++) {
      if (counts[i] >= MIN_RUN) {
        if (lo === -1) lo = i;
        hi = i;
      }
    }
    return [base + lo, base + hi];
  };

  const [left, right] = span(cols, x0);
  const [top, bottom] = span(rows, y0);

  return {
    cx: (left + right) / 2,
    cy: (top + bottom) / 2,
    radius: (right - left + (bottom - top)) / 4,
  };
}

async function main() {
  if (!FLYER) throw new Error("usage: node extract-amenity-icons.mjs <flyer.jpg>");
  await mkdir(OUT_DIR, { recursive: true });

  const src = sharp(FLYER).removeAlpha();
  const { width: w, height: h } = await src.metadata();
  const { data } = await src.raw().toBuffer({ resolveWithObject: true });

  for (const seed of SEEDS) {
    const { cx, cy, radius } = disc(data, w, h, seed);

    // Crop the disc, then upscale before thresholding so edges stay smooth.
    const box = Math.round(radius * 2);
    const crop = await sharp(FLYER)
      .removeAlpha()
      .extract({
        left: Math.round(cx - radius),
        top: Math.round(cy - radius),
        width: box,
        height: box,
      })
      .resize(OUT_SIZE, OUT_SIZE, { kernel: "lanczos3" })
      .raw()
      .toBuffer();

    const out = Buffer.alloc(OUT_SIZE * OUT_SIZE * 4);
    const centre = (OUT_SIZE - 1) / 2;
    // Stay inside the disc so the cream page around it is never picked up.
    const limit = centre * 0.93;
    const lo = 95;
    const hi = 165;

    for (let y = 0; y < OUT_SIZE; y++) {
      for (let x = 0; x < OUT_SIZE; x++) {
        const i = y * OUT_SIZE + x;
        const o = i * 3;
        const t = i * 4;
        const inside = Math.hypot(x - centre, y - centre) <= limit;
        const v = luma(crop[o], crop[o + 1], crop[o + 2]);
        let a = inside ? (v - lo) / (hi - lo) : 0;
        a = Math.max(0, Math.min(1, a));
        out[t] = OLIVE.r;
        out[t + 1] = OLIVE.g;
        out[t + 2] = OLIVE.b;
        out[t + 3] = Math.round(a * 255);
      }
    }

    const file = path.join(OUT_DIR, `${seed.id}.png`);
    const png = await sharp(out, {
      raw: { width: OUT_SIZE, height: OUT_SIZE, channels: 4 },
    })
      .png({ compressionLevel: 9 })
      .toBuffer();
    await writeFile(file, png);

    console.log(
      `${seed.id.padEnd(18)} centre=(${cx.toFixed(1)},${cy.toFixed(1)}) r=${radius.toFixed(1)} -> ${png.length} bytes`,
    );
  }
}

main();
