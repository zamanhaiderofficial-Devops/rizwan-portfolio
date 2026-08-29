import type {
  Faq,
  ProcessStep,
  QuickFact,
  Service,
  Testimonial,
  TimelineItem,
} from "@/types";

export const siteConfig = {
  name: "Rizwan Mehdi",
  role: "SEO Executive",
  title: "Rizwan Mehdi — SEO Executive",
  description:
    "SEO Executive with 2+ years of hands-on experience in On-Page, Off-Page and Technical SEO. I help brands grow organic traffic, rankings and revenue through semantic SEO, topical authority and content-driven strategies.",
  url: "https://rizwanmehdi.com",
  email: "rizwanmehdi341@gmail.com",
  phone: "+92 317 6851391",
  location: "Township, Lahore, Pakistan",
  linkedin: "https://linkedin.com/in/rizwan-mehdi-52681434b",
  availability: "Available for SEO projects",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const profile: {
  headshot: string;
  bio: string[];
  quickFacts: QuickFact[];
  highlights: string[];
} = {
  headshot: "/images/about.svg",
  bio: [
    "I'm an SEO Executive with 2+ years of hands-on experience helping websites earn more organic visibility — through On-Page, Off-Page and Technical SEO.",
    "I work at the intersection of search intent and content strategy, using semantic SEO, topical authority mapping and keyword clustering to build websites Google actually understands.",
    "Beyond strategy, I build and customise WordPress websites with Elementor and SiteOrigin, and I use basic HTML, CSS and JavaScript to ship polished, responsive pages.",
  ],
  quickFacts: [
    { label: "Location", value: "Lahore, Pakistan", icon: "pin" },
    { label: "Experience", value: "2+ years", icon: "clock" },
    { label: "Focus", value: "On-Page · Technical · Off-Page SEO", icon: "tag" },
    { label: "Email", value: "rizwanmehdi341@gmail.com", icon: "mail" },
  ],
  highlights: [
    "Published and optimised 100+ SEO-focused articles",
    "Ranked 5 target articles on the first page of Google",
    "Improved Core Web Vitals and page speed across client sites",
    "Built and shipped 5+ WordPress websites for international markets",
  ],
};

export const heroStats = [
  { value: 2, suffix: "+", label: "Years of SEO experience" },
  { value: 7, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "+", label: "Articles published & optimised" },
  { value: 5, suffix: "+", label: "Keywords ranked on page 1" },
];

export const marqueeItems = [
  "On-Page SEO",
  "Technical SEO",
  "Off-Page SEO",
  "Semantic SEO",
  "Keyword Research",
  "Topical Authority",
  "Content Strategy",
  "Core Web Vitals",
  "Link Building",
  "Local SEO",
  "Screaming Frog",
  "Ahrefs",
  "SEMrush",
  "Google Analytics",
  "Search Console",
  "Rank Math",
  "WordPress",
  "Elementor",
];

export const services: Service[] = [
  {
    slug: "on-page-seo",
    title: "On-Page SEO",
    description:
      "Semantic keyword placement, meta and heading optimisation, internal linking and content structuring that helps every page of your site rank for the right intent.",
    icon: "tag",
    deliverables: [
      "Keyword research & clustering",
      "Title, meta & heading optimisation",
      "Semantic & topical content strategy",
      "Internal linking architecture",
    ],
    tools: ["Ahrefs", "SEMrush", "Google Keyword Planner", "Rank Math"],
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    description:
      "Behind-the-scenes optimisation that keeps Google crawling and indexing your site efficiently — speed, crawlability and clean technical foundations.",
    icon: "wrench",
    deliverables: [
      "Core Web Vitals optimisation",
      "Site speed & performance",
      "Technical audits & fix recommendations",
      "XML sitemaps & robots.txt",
    ],
    tools: ["Screaming Frog", "Search Console", "PageSpeed Insights", "Lighthouse"],
  },
  {
    slug: "off-page-seo",
    title: "Off-Page & Authority Building",
    description:
      "Link building and digital PR that earns your site the authority and trust signals it needs to outrank the competition.",
    icon: "link",
    deliverables: [
      "High-quality link building",
      "Guest posting outreach",
      "Business citations & local listings",
      "Web 2.0 & contextually relevant backlinks",
    ],
    tools: ["Ahrefs", "SEMrush", "Moz", "HARO"],
  },
  {
    slug: "content-seo",
    title: "Content & Semantic SEO",
    description:
      "What I'm known for — building topical authority with content clusters, semantic keyword strategy and structured internal linking that makes Google trust you as an expert.",
    icon: "pen",
    deliverables: [
      "Topical authority maps",
      "Content clusters & silos",
      "SEO-friendly blog publishing",
      "Keyword clustering by search intent",
    ],
    tools: ["Surfer SEO", "Ahrefs", "Google Search Console", "Clearscope"],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    description:
      "Location-based optimisation for businesses that depend on local customers — service pages, local keywords and listings that put you on the map.",
    icon: "pin",
    deliverables: [
      "Service & location page optimisation",
      "Local keyword research",
      "Business citations & GBP optimisation",
      "Local content updates",
    ],
    tools: ["Google Business Profile", "BrightLocal", "Ahrefs"],
  },
  {
    slug: "wordpress-seo",
    title: "WordPress & Web SEO",
    description:
      "Design, build and optimize. Figma-to-WordPress builds with Elementor and SiteOrigin, fully responsive, technically sound and SEO-ready from day one.",
    icon: "layout",
    deliverables: [
      "Figma-to-WordPress implementation",
      "Responsive UI/UX layouts",
      "Theme & plugin customisation",
      "SEO plugin setup (Yoast / Rank Math)",
    ],
    tools: ["WordPress", "Elementor", "SiteOrigin", "HTML/CSS/JS"],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Audit & Research",
    description:
      "Technical audits, competitor analysis and keyword research to map exactly where the opportunities are.",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    description:
      "A clear, measurable SEO roadmap — topical maps, content clusters and a prioritised action plan.",
  },
  {
    step: "03",
    title: "Execute & Optimise",
    description:
      "On-page, technical and content work executed meticulously, with every change tracked and measured.",
  },
  {
    step: "04",
    title: "Measure & Scale",
    description:
      "Reporting on rankings, traffic and conversions — then doubling down on what's working.",
  },
];

export const skillGroups = [
  {
    title: "SEO Expertise",
    skills: [
      "On-Page SEO",
      "Technical SEO",
      "Off-Page SEO",
      "Semantic SEO",
      "Topical Authority", 
      "Keyword Research & Clustering",
      "Content Strategy",
      "Internal Linking",
      "Core Web Vitals",
      "Crawlability & Indexation",
      "XML Sitemaps",
      "Robots.txt",
    ],
  },
  {
    title: "Tools & Analytics",
    skills: [
      "Google Search Console",
      "Google Analytics",
      "Screaming Frog",
      "Ahrefs",
      "SEMrush",
      "Google Keyword Planner",
      "Rank Math SEO",
      "Yoast SEO",
      "PageSpeed Insights",
    ],
  },
  {
    title: "Web & CMS",
    skills: [
      "WordPress",
      "Elementor",
      "SiteOrigin",
      "Figma to WordPress",
      "Responsive UI/UX",
      "HTML",
      "CSS",
      "Basic JavaScript",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    period: "January 2026 — Present",
    role: "SEO Executive",
    company: "Soft Solution",
    location: "Lahore, Pakistan",
    points: [
      "Executing On-Page SEO strategies — keyword placement, meta tag optimisation, heading hierarchy and internal linking.",
      "Running Off-Page campaigns with guest posting, local citations and directory submissions.",
      "Building Web 2.0 backlink properties with contextually relevant, optimised content.",
      "Auditing competitor backlinks via Ahrefs and SEMrush to uncover new link-building prospects.",
      "Monitoring backlink profiles for quality and varied anchor text distribution.",
    ],
  },
  {
    period: "January 2024 — December 2025",
    role: "SEO Intern → SEO Executive",
    company: "Qovex Studio",
    location: "Lahore, Pakistan",
    points: [
      "Started as an SEO Intern and progressed to SEO Executive across multiple projects.",
      "Conducted keyword research, competitor analysis, site audits and SEO performance analysis for UAE-based websites.",
      "Published and optimised daily SEO-friendly blog posts based on search intent and target keywords.",
      "Managed On-Page, Off-Page and Technical SEO — meta tags, internal linking, indexing, sitemaps, robots.txt and link building.",
      "Built and customised WordPress websites and landing pages using Elementor and SiteOrigin.",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Rizwan rebuilt our On-Page foundation from the ground up. The technical fixes alone lifted our Core Web Vitals into the green — and it shows in our rankings.",
    name: "Ahmed Raza",
    role: "Digital Marketing Lead",
    company: "Soft Solution",
    initials: "AR",
  },
  {
    quote:
      "His understanding of semantic SEO and topical authority is what separates him. He structured our content clusters and Google finally started trusting us as an expert.",
    name: "Sarah Khalid",
    role: "Content Manager",
    company: "Qovex Studio",
    initials: "SK",
  },
  {
    quote:
      "Five of our target articles hit the first page of Google in a matter of months. Clean reporting, clear communication, and real results.",
    name: "Usman Tariq",
    role: "Founder",
    company: "Urban Pet Guide",
    initials: "UT",
  },
];

export const faqs: Faq[] = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "Realistically 3 to 6 months for meaningful movement, and semantic/topical content strategies often mature even faster. I focus on quick technical wins up front and compound content gains over time.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "Education, moving & relocation, self-storage, eCommerce, pet and lifestyle blogs, and Quran/religious academies. The approach transfers — I build my strategy around search intent and the business model.",
  },
  {
    question: "Do you provide reports and tracking?",
    answer:
      "Yes. I use Google Search Console, Google Analytics and Screaming Frog to track rankings, indexed pages, clicks, impressions and Core Web Vitals, and share plain-language reports.",
  },
  {
    question: "Can you build the website as well as the SEO?",
    answer:
      "Yes. I build responsive WordPress sites with Elementor and SiteOrigin, customise themes and plugins, and handle the technical SEO setup — so you get one person for both.",
  },
  {
    question: "Do you do local SEO for international markets?",
    answer:
      "I've run SEO for UAE and Dubai-based businesses, including location-based keyword optimisation, service page structuring and local listings. Happy to work with any geographic market.",
  },
];

export const pageDescriptions = {
  home: siteConfig.description,
  about:
    "Learn about Rizwan Mehdi — his SEO background, skills, tools and experience.",
  work: "A portfolio of SEO projects — On-Page, Technical, Local, Content & Semantic SEO and WordPress builds completed by Rizwan Mehdi.",
  services:
    "On-Page SEO, Technical SEO, Off-Page SEO, Content & Semantic SEO, Local SEO and WordPress development services by Rizwan Mehdi.",
  blog: "SEO insights on semantic SEO, topical authority, keyword clustering, Core Web Vitals, internal linking and more.",
  contact:
    "Get in touch with Rizwan Mehdi for SEO consulting, audits or WordPress development.",
} as const;