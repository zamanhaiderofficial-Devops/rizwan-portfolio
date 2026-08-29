import type { BlogPost } from "@/types";

export const blogCategories = [
  "Semantic SEO",
  "Technical SEO",
  "Content Strategy",
  "Local SEO",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "semantic-seo-complete-guide",
    title: "Semantic SEO: The Complete Guide to Ranking for Meaning, Not Just Keywords",
    category: "Semantic SEO",
    excerpt:
      "Keyword stuffing is dead. Here's how to structure content around entities, intent and meaning so Google actually understands what your page is about.",
    image: "/images/blog/semantic-seo-guide.svg",
    date: "January 12, 2026",
    dateISO: "2026-01-12",
    readTime: "8 min read",
    author: "Rizwan Mehdi",
    authorRole: "SEO Executive",
    tags: ["Semantic SEO", "On-Page SEO", "Content Strategy"],
    lead: "The days of optimising for exact-match keywords are over. Semantic SEO is about building pages that answer questions, connect related concepts and match the way people actually search.",
    content: [
      {
        heading: "Why semantic SEO matters in 2026",
        body: [
          "Search engines have moved from matching words to understanding meaning. Google's systems now evaluate whether a page covers the full context of a query — the entities involved, the relationships between them and the intent behind the words.",
          "Two pages can be built around the same target keyword, yet one ranks while the other collects dust. The difference is usually semantic depth: does the page prove it understands the topic, not just restate a phrase?",
        ],
      },
      {
        heading: "Entities, context and co-occurring terms",
        body: [
          "A semantic strategy starts with entities — the people, places, things and concepts that matter to your topic. If you're optimising a page about 'house plants', the entities include care, light, soil, watering, repotting and more.",
          "Search engines watch for co-occurring terms and related concepts. When your content naturally covers them, the engine builds a stronger mental model of your page and ranks it for a wider range of related queries.",
        ],
      },
      {
        heading: "How to audit your content for semantics",
        body: [
          "Start by pulling the top 5 results for your target keyword and look at the sections they share. Don't copy them — map them. That shared skeleton is what Google believes a complete page covers.",
          "Map your content against that skeleton, then fill any gaps with genuinely useful coverage. Add internal links to the related pages you already have, and write for humans first; the semantics follow the meaning.",
        ],
      },
      {
        heading: "The practical workflow",
        body: [
          "1. Define your entity and all related concepts. 2. Outline the page to cover each concept. 3. Write naturally with co-occurring terms. 4. Link out to supporting pages on your own site. 5. Let search analytics tell you which concepts are earning impressions.",
          "This is exactly the workflow I used to rank five target articles on the first page of Google for a pet content site — built purely on semantic structure and intent-first writing.",
        ],
      },
    ],
  },
  {
    slug: "building-topical-authority",
    title: "How to Build Topical Authority with Content Clusters",
    category: "Content Strategy",
    excerpt:
      "One page can win one keyword. A content cluster can win an entire topic. Here's how to map, structure and scale topical authority that compounds.",
    image: "/images/blog/topical-authority.svg",
    date: "December 3, 2025",
    dateISO: "2025-12-03",
    readTime: "7 min read",
    author: "Rizwan Mehdi",
    authorRole: "SEO Executive",
    tags: ["Topical Authority", "Content Clusters", "Internal Linking"],
    lead: "Make Google believe you're the expert on a topic, not just a page that happens to mention it. Topical authority is built page by page — but it has to be planned in clusters.",
    content: [
      {
        heading: "Authority lives across pages, not on one",
        body: [
          "A single great article tells Google you wrote one good thing. A network of interlinked, comprehensive content tells Google you know an entire subject. That's the difference between a page ranking and a site owning a topic.",
          "Topical authority is earned when the search engine can move freely through your cluster and see connected coverage of every important sub-topic.",
        ],
      },
      {
        heading: "Mapping your topical clusters",
        body: [
          "Start from your core topic — say, 'dog nutrition'. Break it into pillars: raw feeding, kibble, supplements, allergies, age-based feeding. Then break each pillar into supporting articles.",
          "Every pillar gets a hub page; every supporting article links up to its hub, and hubs cross-link where topics genuinely overlap. The result is a map search engines can crawl like a mind.",
        ],
      },
      {
        heading: "Internal linking is where the magic is",
        body: [
          "Clusters only work if the links flow. Anchor text should describe the destination naturally ('how to switch dogs to raw food' beats 'click here'). Deep pages should always be a click or two from the surface.",
          "This is the architecture I built for Urban Pet Guide — and it turned a brand-new site into one whose articles started showing up on page one.",
        ],
      },
      {
        heading: "Scale without sacrificing depth",
        body: [
          "Authority compounds when each new article fills a gap in the map rather than repeating what's covered. Before writing, check the map. If the topic is covered, your next article should go deeper or sideways, not parallel.",
        ],
      },
    ],
  },
  {
    slug: "core-web-vitals-checklist",
    title: "Core Web Vitals: A Practical Optimisation Checklist",
    category: "Technical SEO",
    excerpt:
      "LCP, INP and CLS aren't abstract lab metrics — they're ranking factors and user-experience levers. A checklist your team can run today.",
    image: "/images/blog/core-web-vitals.svg",
    date: "November 8, 2025",
    dateISO: "2025-11-08",
    readTime: "6 min read",
    author: "Rizwan Mehdi",
    authorRole: "SEO Executive",
    tags: ["Core Web Vitals", "Page Speed", "Technical SEO"],
    lead: "Every technical SEO audit I run starts and ends with speed. Core Web Vitals are the three numbers that decide whether your site feels fast — and rank better for it.",
    content: [
      {
        heading: "The three metrics that matter",
        body: [
          "LCP (Largest Contentful Paint) measures how quickly the main content loads. INP (Interaction to Next Paint) measures how responsive the page feels to taps and clicks. CLS (Cumulative Layout Shift) measures visual stability.",
          "Google treats these as real-world UX signals. Sites that consistently hit 'good' thresholds tend to come out ahead — and users visibly engage with faster pages.",
        ],
      },
      {
        heading: "LCP: fix the largest element first",
        body: [
          "Your hero image is usually the culprit. Preload it, size it correctly, serve modern formats, and make sure it doesn't render below the fold. If text is your LCP element, that often points to slow webfont loading — subset and preload your font files.",
          "Server response time matters too. A fast edge cache or CDN can shave significant milliseconds off your TTFB.",
        ],
      },
      {
        heading: "INP: keep the main thread free",
        body: [
          "Long JavaScript tasks are the enemy. Defer non-critical scripts, break up heavy work, and lazy-load everything that isn't needed to render the page. Third-party scripts are the number one source of INP blowouts.",
          "Audit your tag stack. More pixels and trackers not only hurt INP — they invisibly cost you conversions.",
        ],
      },
      {
        heading: "CLS: reserve the space",
        body: [
          "Every dynamic element needs reserved space: ads, images, embeds, banners that load late. Give dimensions to media, use aspect-ratio on images, and never inject content above the fold without reserving its slot.",
          "Run this checklist once a month. Core Web Vitals drift as your site grows — the sites that stay green are the ones that treat speed as continuous, not a one-time project.",
        ],
      },
    ],
  },
  {
    slug: "keyword-clustering-guide",
    title: "Keyword Clustering: Grouping Search Intent the Right Way",
    category: "Semantic SEO",
    excerpt:
      "Thousands of long-tail keywords look like opportunity. Most of them are the same intent wearing different clothes. Learn to cluster — not chase.",
    image: "/images/blog/keyword-clustering.svg",
    date: "October 15, 2025",
    dateISO: "2025-10-15",
    readTime: "7 min read",
    author: "Rizwan Mehdi",
    authorRole: "SEO Executive",
    tags: ["Keyword Research", "Keyword Clustering", "Content Strategy"],
    lead: "The keyword research most sites do is keyword counting. Real research groups terms by intent into clusters — one page, one cluster, maximum coverage.",
    content: [
      {
        heading: "Stop optimising one keyword per page",
        body: [
          "If you give every page one exact-match keyword, you'll need thousands of pages to cover a niche. Search engines don't think in exact matches anymore — they think in intents and topics.",
          "A better model: group 20-50 related keywords that share intent into one cluster, then build one comprehensive page that answers the cluster.",
        ],
      },
      {
        heading: "How to build a cluster",
        body: [
          "Pull your keyword list, then sort by intent buckets: informational ('how to'), transactional ('buy', 'price'), commercial ('best', 'vs'), navigational (brand terms).",
          "Within each bucket, group by topic similarity — keywords that a single page could legitimately answer. Use Search Console or Ahrefs to check which terms your existing pages already rank for and fold them in.",
        ],
      },
      {
        heading: "One page, many intents? No.",
        body: [
          "A page that tries to serve 'how to pot a plant' and 'buy ceramic pots' fails both. Split mixed-intent clusters. Spelling variations and synonyms are fine together; different jobs-to-be-done are not.",
        ],
      },
      {
        heading: "Cluster first, then write",
        body: [
          "Every content brief I write starts with the cluster, not the keyword. The cluster defines the outline, the subtopics and the internal links. This single habit is the highest-leverage change most content teams can make.",
        ],
      },
    ],
  },
  {
    slug: "local-seo-moving-companies",
    title: "Local SEO for Moving Companies: Winning the 'Near Me' Search",
    category: "Local SEO",
    excerpt:
      "Moving is inherently local. The businesses that win are the ones who structure service and location pages around how customers actually search in their city.",
    image: "/images/blog/local-seo-moving.svg",
    date: "September 22, 2025",
    dateISO: "2025-09-22",
    readTime: "6 min read",
    author: "Rizwan Mehdi",
    authorRole: "SEO Executive",
    tags: ["Local SEO", "Service Pages", "Google Business Profile"],
    lead: "For moving companies, the search journey is short and local: a stressful event, a quick search, a call. Local SEO is about being the name they find.",
    content: [
      {
        heading: "Location pages, built properly",
        body: [
          "The biggest mistake moving sites make is one 'locations' page stuffed with a dropdown. Google can't build a location entity from a dropdown. Build a real, written page for each area you serve.",
          "Each page should include genuine local context — areas you actually cover, landmarks, typical routes and a unique phone-pathway if you track calls per location.",
        ],
      },
      {
        heading: "Match search intent at the city level",
        body: [
          "'Movers in Dubai' and 'villa moving company Marina' are different intents. Your homepage should target the broad brand term; service pages should target the specific offer; location pages should target the geo modifier.",
          "After I structured Delight Movers UAE this way, the site could capture both broad brand searches and hyper-local moving queries.",
        ],
      },
      {
        heading: "Your Google Business Profile is a landing page",
        body: [
          "Treat GBP as owned media. Complete every field, add high-quality photos, publish posts, collect and respond to reviews. It's often the first thing a 'moving company near me' search surfaces.",
        ],
      },
      {
        heading: "Citations and consistent NAP",
        body: [
          "Name, address, phone — they must match across your website, GBP and directories. Inconsistent NAP is the silent killer of local packs. Clean it up once, then audit your citations quarterly.",
        ],
      },
    ],
  },
  {
    slug: "internal-linking-strategy",
    title: "Internal Linking Strategy That Actually Moves Rankings",
    category: "Content Strategy",
    excerpt:
      "Internal links are the one ranking lever you fully control. Here's how to design an architecture that distributes authority and keeps crawlers moving.",
    image: "/images/blog/internal-linking.svg",
    date: "August 18, 2025",
    dateISO: "2025-08-18",
    readTime: "5 min read",
    author: "Rizwan Mehdi",
    authorRole: "SEO Executive",
    tags: ["Internal Linking", "Site Architecture", "On-Page SEO"],
    lead: "You don't need links from sites you don't control to win rankings. The links you control — internal ones — are often the difference between pages that rank and pages that sit idle.",
    content: [
      {
        heading: "Internal links distribute authority",
        body: [
          "Every page passes a fraction of its authority to the pages it links to. A well-linked page earns more from the site's strongest pages — and in turn boosts the pages below it.",
          "Sites with flat, thoughtless linking leave authority stranded in blog posts while money pages starve.",
        ],
      },
      {
        heading: "Design the architecture first",
        body: [
          "Top down: homepage → category/hub pages → individual articles. Hierarchy isn't decorative; it tells search engines what you consider important.",
          "I apply this in projects by mapping the cluster first and treating every internal link as a decision: which page deserves this authority, and which intent do these words describe.",
        ],
      },
      {
        heading: "Anchor text should mean something",
        body: [
          "Use descriptive, natural anchors — the words a searcher would type. 'Read our complete guide to raw feeding' beats 'this post'. Avoid stuffing every anchor with the exact target keyword; variety reads as natural.",
        ],
      },
      {
        heading: "Three practical checks",
        body: [
          "1. Every money page should receive links from content that ranks. 2. No page should be more than 3 clicks from the homepage. 3. Add contextual links in the body, not just a 'related posts' box.",
          "Run these checks quarterly. Internal linking is cheap, fully in your control and — when done with architecture in mind — genuinely moves rankings.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 2): BlogPost[] {
  const current = getBlogPostBySlug(slug);
  if (!current) return blogPosts.slice(0, count);
  return blogPosts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aSame = a.category === current.category ? 1 : 0;
      const bSame = b.category === current.category ? 1 : 0;
      return bSame - aSame;
    })
    .slice(0, count);
}