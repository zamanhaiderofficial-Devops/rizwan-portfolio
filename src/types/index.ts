export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectHighlight {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  categories: string[];
  category: string;
  client: string;
  location: string;
  year: string;
  industry: string;
  image: string;
  gallery: string[];
  summary: string;
  challenge: string;
  solution: string;
  services: string[];
  tools: string[];
  stats: ProjectStat[];
  highlights: ProjectHighlight[];
}

export interface BlogSection {
  heading: string;
  body: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  dateISO: string;
  readTime: string;
  author: string;
  authorRole: string;
  tags: string[];
  lead: string;
  content: BlogSection[];
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  tools: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface QuickFact {
  label: string;
  value: string;
  icon: "pin" | "clock" | "tag" | "mail";
}

export interface TimelineItem {
  period: string;
  role: string;
  company: string;
  location: string;
  points: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface Faq {
  question: string;
  answer: string;
}