import type { Project } from "@/types";

export const projectCategories = [
  "On-Page SEO",
  "Technical SEO",
  "Content & Semantic SEO",
  "Local SEO",
  "Web Design & Dev",
  "eCommerce",
] as const;

export const projects: Project[] = [
  {
    slug: "urban-pet-guide",
    title: "Urban Pet Guide — Semantic SEO That Broke Into Google's First Page",
    categories: ["Content & Semantic SEO"],
    category: "Content & Semantic SEO",
    client: "Urban Pet Guide",
    location: "Remote",
    year: "2024",
    industry: "Lifestyle / Pet Content",
    image: "/images/dog-card.png",
    gallery: [
      "/images/projects/urban-pet-guide/gallery-1.svg",
      "/images/projects/urban-pet-guide/gallery-2.svg",
    ],
    summary:
      "Built a pet content site from the ground up using Semantic SEO and topical authority mapping — 100+ articles published and 5 target pages ranked on Google's first page.",
    challenge:
      "The site started with no organic visibility and no topical focus. Content was being published without search intent, semantic coverage or internal linking — so nothing was gaining traction.",
    solution:
      "I built a complete topical map around pet-related intents, clustered keywords by search intent, and published 100+ optimised articles in structured content clusters. Every page was wired into a deliberate internal-linking architecture to consolidate authority.",
    services: [
      "Semantic SEO",
      "Topical Authority Mapping",
      "Keyword Research & Clustering",
      "On-Page SEO",
      "Content Strategy",
    ],
    tools: ["Ahrefs", "Google Keyword Planner", "Rank Math", "Search Console"],
    stats: [
      { value: "100+", label: "Articles published" },
      { value: "5", label: "Articles ranked page 1" },
      { value: "0 → 1", label: "Organic visibility growth" },
    ],
    highlights: [
      {
        title: "Ranked on page 1",
        description:
          "5 target blog articles reached Google's first SERP through a structured semantic keyword strategy.",
      },
      {
        title: "100+ optimised articles",
        description:
          "Every article planned around search intent, keyword clusters and topical coverage.",
      },
      {
        title: "Topical authority built",
        description:
          "Content clusters and silos that helped Google recognise the site as an authority in pet topics.",
      },
      {
        title: "From zero to indexed",
        description:
          "Every new article was written to target a specific search query and cluster, so Google indexed further and faster.",
      },
      {
        title: "Compounding authority",
        description:
          "Content clusters and internal linking kept pushing page after page toward the first results.",
      },
    ],
  },
  {
    slug: "ilm-ki-dunya",
    title: "Ilm Ki Dunya — Scaling SEO for a High-Traffic Education Website",
    categories: ["On-Page SEO", "Technical SEO"],
    category: "On-Page SEO",
    client: "Ilm Ki Dunya",
    location: "Pakistan",
    year: "2025",
    industry: "Education",
    image: "/images/projects/ilm-ki-dunya/cover.svg",
    gallery: [
      "/images/projects/ilm-ki-dunya/gallery-1.svg",
      "/images/projects/ilm-ki-dunya/gallery-2.svg",
    ],
    summary:
      "On-Page, Off-Page and technical SEO for a large education platform — protecting and growing organic performance across Notes, Books and Results sections.",
    challenge:
      "Ilm Ki Dunya is a massive education resource with established organic visibility. The challenge was maintaining rankings across high-traffic sections while finding new opportunities to grow.",
    solution:
      "I optimized titles, meta descriptions, headings and content across Notes, Books and Results, layered in a sustained off-page and backlink program, and focused on Core Web Vitals and page speed to secure the technical foundation.",
    services: [
      "On-Page SEO",
      "Off-Page SEO",
      "Technical SEO",
      "Core Web Vitals",
      "Content Optimisation",
    ],
    tools: [
      "Google Search Console",
      "Google Analytics",
      "Ahrefs",
      "Screaming Frog",
    ],
    stats: [
      { value: "4", label: "High-traffic sections optimised" },
      { value: "0", label: "Ranking drops during migration" },
      { value: "Green", label: "Core Web Vitals" },
    ],
    highlights: [
      {
        title: "Visibility protected & grown",
        description:
          "Maintained strong rankings across Notes, Books and Results while expanding organic reach with new opportunities.",
      },
      {
        title: "Faster, healthier site",
        description:
          "Page speed and Core Web Vitals improvements that helped stabilise performance during traffic peaks.",
      },
      {
        title: "Authority reinforced",
        description:
          "Off-page work and backlinks that supported the site's existing authority at national scale.",
      },
      {
        title: "Rankings held through change",
        description:
          "Organic visibility stayed intact across high-traffic sections even as the site was being worked on.",
      },
      {
        title: "More pages understood",
        description:
          "Structural and technical fixes helped Google crawl and index more of the site's content.",
      },
    ],
  },
  {
    slug: "delight-movers-uae",
    title: "Delight Movers UAE — Website Design & SEO for a UAE Moving Company",
    categories: ["Web Design & Dev", "On-Page SEO"],
    category: "Web Design & Dev",
    client: "Delight Movers",
    location: "Dubai, UAE",
    year: "2025",
    industry: "Moving & Relocation",
    image: "/images/projects/delight-movers-uae/cover.svg",
    gallery: [
      "/images/projects/delight-movers-uae/gallery-1.svg",
      "/images/projects/delight-movers-uae/gallery-2.svg",
    ],
    summary:
      "Designed and developed a villa and furniture moving website for the UAE market from Figma, with On-Page SEO, content and performance baked in from day one.",
    challenge:
      "Delight Movers needed a fresh, conversion-focused website for the UAE market — built fast, fully responsive and optimised for mobile-heavy local searches.",
    solution:
      "I implemented the Figma designs into a responsive WordPress build, customised layouts and sections to the brief, then layered in On-Page SEO with target keywords, meta titles, headings and regular moving-related blog content.",
    services: [
      "Figma to WordPress",
      "Responsive Web Design",
      "On-Page SEO",
      "Content Writing",
      "Performance Optimisation",
    ],
    tools: ["Figma", "WordPress", "Elementor", "Google Search Console"],
    stats: [
      { value: "100%", label: "Responsive across devices" },
      { value: "15+", label: "Pages designed & built" },
      { value: "On-Page", label: "SEO from launch day" },
    ],
    highlights: [
      {
        title: "Designed from Figma",
        description:
          "Pixel-faithful, responsive implementation of the client's design across desktop, tablet and mobile.",
      },
      {
        title: "SEO-ready build",
        description:
          "Keywords, meta titles, descriptions and headings implemented across key pages from launch.",
      },
      {
        title: "Faster experience",
        description:
          "Structure, page speed and performance improved for a better user experience and higher conversions.",
      },
      {
        title: "Built to convert",
        description:
          "Clear calls-to-action and mobile-first sections that turn local searches into enquiries.",
      },
      {
        title: "Ready to scale",
        description:
          "A WordPress foundation built to grow with new service pages, blogs and campaigns.",
      },
    ],
  },
  {
    slug: "ruby-mover-dubai",
    title: "Ruby Mover & Packer Dubai — Local SEO for a Dubai Moving Company",
    categories: ["Local SEO", "On-Page SEO"],
    category: "Local SEO",
    client: "Ruby Mover & Packer",
    location: "Dubai, UAE",
    year: "2024",
    industry: "Moving & Packing",
    image: "/images/projects/ruby-mover/cover.svg",
    gallery: ["/images/projects/ruby-mover/gallery-1.svg", "/images/projects/ruby-mover/gallery-2.svg"],
    summary:
      "Local and On-Page SEO for a Dubai moving and packing company — service pages, location-based keywords, content updates and social visibility.",
    challenge:
      "Ruby Mover needed to be found by customers searching for moving and packing services in specific Dubai locations — with pages that matched exact local intent.",
    solution:
      "I managed On-Page SEO across service and location-based pages, ran keyword research to target the right local terms, and optimised meta, headings and content. Ongoing content updates and social media posts supported brand visibility.",
    services: [
      "Local SEO",
      "On-Page SEO",
      "Keyword Research",
      "Content Updates",
      "Social Media Support",
    ],
    tools: ["Ahrefs", "Semrush", "Google Business Profile", "Search Console"],
    stats: [
      { value: "10+", label: "Location pages optimised" },
      { value: "High", label: "Search term relevance" },
      { value: "Ongoing", label: "Content improvements" },
    ],
    highlights: [
      {
        title: "Local intent matched",
        description:
          "Service and location pages aligned exactly with how Dubai customers search for movers.",
      },
      {
        title: "Content kept relevant",
        description:
          "Updated page content and published social posts that supported ongoing search visibility.",
      },
      {
        title: "Stronger local footprint",
        description:
          "Optimised listings and keywords that made the brand easier to find and trust locally.",
      },
      {
        title: "Relevant in search",
        description:
          "Pages aligned with how Dubai customers search for movers — matched intent, better clicks.",
      },
      {
        title: "A local brand presence",
        description:
          "Consistent listings and optimised content that made the business easier to find nearby.",
      },
    ],
  },
  {
    slug: "eself-storage-uae",
    title: "eSelf Storage UAE — Content-Driven SEO for a Storage Brand",
    categories: ["Content & Semantic SEO", "Technical SEO"],
    category: "Content & Semantic SEO",
    client: "eSelf Storage",
    location: "UAE",
    year: "2024",
    industry: "Self-Storage",
    image: "/images/projects/eself-storage/cover.svg",
    gallery: [
      "/images/projects/eself-storage/gallery-1.svg",
      "/images/projects/eself-storage/gallery-2.svg",
    ],
    summary:
      "Managed SEO and content for a UAE self-storage website — service page optimisation, location-based searches, regular SEO blogs and stronger organic visibility.",
    challenge:
      "eSelf Storage had a solid website but thin content coverage. Location-based storage searches and informational queries weren't being captured.",
    solution:
      "I optimised key service and location pages, tightened keywords, meta, headings and internal links, and researched, wrote and published regular SEO-friendly blogs targeting storage-related queries.",
    services: [
      "Content SEO",
      "On-Page SEO",
      "Blog Strategy",
      "Internal Linking",
      "Local Keyword Optimisation",
    ],
    tools: ["Ahrefs", "SEMrush", "Rank Math", "Google Search Console"],
    stats: [
      { value: "5+", label: "Service & location pages refined" },
      { value: "15+", label: "SEO blogs published" },
      { value: "Improved", label: "Organic visibility" },
    ],
    highlights: [
      {
        title: "Blog engine built",
        description:
          "A steady cadence of SEO-friendly blogs targeting storage searches and location-based queries.",
      },
      {
        title: "Pages sharpened",
        description:
          "Service and location pages re-optimised around keywords, headings, meta and internal links.",
      },
      {
        title: "Social support",
        description:
          "Created and managed social posts to increase online visibility and audience engagement.",
      },
      {
        title: "A repeatable content engine",
        description:
          "A steady editorial workflow for publishing storage-focused blogs exactly when they mattered.",
      },
      {
        title: "A wider query net",
        description:
          "More service and location searches captured through sharper targeting and coverage.",
      },
    ],
  },
  {
    slug: "hadi-quran-academy",
    title: "Hadi Quran Academy — Website Build & Technical SEO",
    categories: ["Web Design & Dev", "On-Page SEO", "Technical SEO"],
    category: "Web Design & Dev",
    client: "Hadi Quran Academy",
    location: "Remote",
    year: "2025",
    industry: "Online Education",
    image: "/images/projects/hadi-quran-academy/cover.svg",
    gallery: [
      "/images/projects/hadi-quran-academy/gallery-1.svg",
      "/images/projects/hadi-quran-academy/gallery-2.svg",
    ],
    summary:
      "Designed, developed and SEO-optimised an online Quran academy website — from responsive pages and Yoast setup to Search Console configuration and content.",
    challenge:
      "Quran academy needed a professional online presence that could attract students globally — a polished site with a clean technical and SEO setup from day one.",
    solution:
      "I designed and developed responsive pages to the project brief, customised layouts and content, and implemented On-Page SEO. I configured the Yoast SEO plugin, connected Google Search Console and monitored indexing and search performance.",
    services: [
      "Web Design",
      "WordPress Development",
      "On-Page SEO",
      "SEO Plugin Setup",
      "Search Console Setup",
    ],
    tools: ["WordPress", "Elementor", "Yoast SEO", "Google Search Console"],
    stats: [
      { value: "New", label: "Website launched" },
      { value: "Yes", label: "Yoast fully configured" },
      { value: "Live", label: "Indexing monitored" },
    ],
    highlights: [
      {
        title: "Full build, one source",
        description:
          "Design, development, content and SEO handled end-to-end for a consistent experience.",
      },
      {
        title: "Technical SEO from day one",
        description:
          "Yoast configured, Search Console connected and indexing monitored from launch.",
      },
      {
        title: "Responsive everywhere",
        description:
          "Custom layouts and content tuned for users on every device.",
      },
      {
        title: "Findable from day one",
        description:
          "Search Console and indexing set up so students across the world could find the academy immediately.",
      },
      {
        title: "A clean technical base",
        description:
          "Page structure, speed and plugin configuration built to support long-term search growth.",
      },
    ],
  },
  {
    slug: "shah-gee-electronics",
    title: "Shah Gee Electronics — eCommerce Setup & SEO for a Dubai Store",
    categories: ["eCommerce", "On-Page SEO"],
    category: "eCommerce",
    client: "Shah Gee Electronics",
    location: "Dubai, UAE",
    year: "2025",
    industry: "Electronics eCommerce",
    image: "/images/projects/shah-gee-electronics/cover.svg",
    gallery: [
      "/images/projects/shah-gee-electronics/gallery-1.svg",
      "/images/projects/shah-gee-electronics/gallery-2.svg",
    ],
    summary:
      "Designed and set up a Dubai electronics eCommerce store — theme customisation, full product setup, basic On-Page SEO and social media management.",
    challenge:
      "An electronics business needed a complete online store in Dubai — a fast launch with clean product architecture, a polished storefront and SEO basics in place.",
    solution:
      "I set up the site on a premium ThemeForest theme, customised layouts, menus and design elements for the brand, added and organised products with categories, prices and images, and implemented basic On-Page SEO across product and website pages.",
    services: [
      "eCommerce Setup",
      "Theme Customisation",
      "Product Setup",
      "On-Page SEO",
      "Social Media Management",
    ],
    tools: ["WordPress", "WooCommerce", "ThemeForest", "Elementor"],
    stats: [
      { value: "Full", label: "Product catalogue set up" },
      { value: "SEO", label: "Applied across all pages" },
      { value: "Live", label: "Store launched" },
    ],
    highlights: [
      {
        title: "Store ready to sell",
        description:
          "Complete eCommerce setup with organised products, categories, pricing, images and info.",
      },
      {
        title: "On-brand design",
        description:
          "Theme customised to match the brand with improved menus, layouts and user experience.",
      },
      {
        title: "SEO from the start",
        description:
          "Basic On-Page SEO implemented so product pages could start earning organic visibility.",
      },
      {
        title: "Easy to browse, easy to buy",
        description:
          "Organised categories and clean product pages that help visitors find and purchase faster.",
      },
      {
        title: "Discovery ready",
        description:
          "SEO fundamentals in place so fresh product pages could start earning organic traffic.",
      },
    ],
  },
];

export const featuredProject = projects[0];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(slug: string, count = 2): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return projects.slice(0, count);
  return projects
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aOverlap = a.categories.filter((c) => current.categories.includes(c)).length;
      const bOverlap = b.categories.filter((c) => current.categories.includes(c)).length;
      return bOverlap - aOverlap;
    })
    .slice(0, count);
}