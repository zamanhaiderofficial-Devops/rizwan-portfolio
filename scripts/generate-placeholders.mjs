import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..", "public");

const palettes = [
  { from: "#DFE5F3", to: "#557373", text: "#0D0D0D", accent: "#F2EFEA" },
  { from: "#557373", to: "#0D0D0D", text: "#DFE5F3", accent: "#F2EFEA" },
  { from: "#F2EFEA", to: "#557373", text: "#0D0D0D", accent: "#272401" },
  { from: "#272401", to: "#557373", text: "#DFE5F3", accent: "#F2EFEA" },
  { from: "#0D0D0D", to: "#557373", text: "#DFE5F3", accent: "#DFE5F3" },
];

function makeSvg(name, paletteIndex, variant) {
  const { from, to, text, accent } = palettes[paletteIndex % palettes.length];
  const w = 1600;
  const h = 1000;
  const rings = [];
  for (let i = 0; i < 4; i++) {
    const size = 240 + i * 190;
    const cx = w - 220 - (i % 2) * 60;
    const cy = 180 + (i % 3) * 140;
    rings.push(
      `<circle cx="${cx}" cy="${cy}" r="${size}" fill="none" stroke="${accent}" stroke-opacity="0.18" stroke-width="2"/>`
    );
  }
  const dots = [];
  for (let d = 0; d < 14; d++) {
    const x = 80 + ((d * 137) % (w - 200));
    const y = 90 + ((d * 211) % (h - 200));
    dots.push(
      `<circle cx="${x}" cy="${y}" r="${d % 2 === 0 ? 5 : 9}" fill="${accent}" opacity="0.22"/>`
    );
  }
  const title = name.replace(/&/g, "&amp;");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${from}"/>
      <stop offset="1" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="r" cx="1" cy="0" r="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.20"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#r)"/>
  ${dots.join("\n  ")}
  ${rings.join("\n  ")}
  <circle cx="1250" cy="300" r="320" fill="${accent}" opacity="0.10"/>
  <rect x="90" y="760" width="96" height="8" rx="4" fill="${accent}" opacity="0.85"/>
  <rect x="90" y="140" width="180" height="14" rx="7" fill="${accent}" opacity="0.35"/>
  <text x="92" y="690" font-family="'Segoe UI', Helvetica, Arial, sans-serif" font-size="56" font-weight="700" letter-spacing="-1" fill="${text}" opacity="0.95">${title}</text>
  <text x="92" y="900" font-family="'Courier New', ui-monospace, monospace" font-size="26" letter-spacing="4" fill="${text}" opacity="0.6">CASE STUDY — ${variant.toUpperCase()}</text>
</svg>`;
}

const projects = [
  ["urban-pet-guide", "Urban Pet Guide", 1],
  ["ilm-ki-dunya", "Ilm Ki Dunya", 0],
  ["delight-movers-uae", "Delight Movers UAE", 3],
  ["ruby-mover", "Ruby Mover & Packer", 2],
  ["eself-storage", "eSelf Storage UAE", 4],
  ["hadi-quran-academy", "Hadi Quran Academy", 3],
  ["shah-gee-electronics", "Shah Gee Electronics", 1],
];

const blogs = [
  ["semantic-seo-guide", "Semantic SEO: Complete Guide", 1],
  ["topical-authority", "Building Topical Authority", 3],
  ["core-web-vitals", "Core Web Vitals Checklist", 4],
  ["keyword-clustering", "Keyword Clustering Guide", 0],
  ["local-seo-moving", "Local SEO for Movers", 2],
  ["internal-linking", "Internal Linking Strategy", 1],
];

function write(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
}

for (const [slug, name, palette] of projects) {
  const dir = join(root, "images", "projects", slug);
  write(join(dir, "cover.svg"), makeSvg(name, palette, "cover"));
  write(join(dir, "gallery-1.svg"), makeSvg(name, palette + 1, "strategy"));
  write(join(dir, "gallery-2.svg"), makeSvg(name, palette + 2, "results"));
}

for (const [slug, name, palette] of blogs) {
  write(join(root, "images", "blog", `${slug}.svg`), makeSvg(name, palette, "ARTICLE"));
}

write(
  join(root, "images", "about.svg"),
  makeSvg("Rizwan Mehdi", 0, "SEO EXECUTIVE")
);

console.log("Generated", projects.length * 3 + blogs.length + 1, "SVG placeholders");
