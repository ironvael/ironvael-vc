export type InsightTag = "Market Thesis" | "Technical Breakdown" | "Institutional Memo";

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  tags: InsightTag[];
  date: string;
  author?: string;
  content?: string;
}

export const insights: Insight[] = [
  {
    slug: "asymmetric-opportunities-in-logistics",
    title: "Asymmetric Opportunities in Logistics Tech",
    excerpt: "Why mid-market logistics software remains underserved—and where we're placing bets in supply chain visibility and orchestration.",
    tags: ["Market Thesis", "Institutional Memo"],
    date: "2025-01-15",
    author: "Ironvael",
  },
  {
    slug: "building-a-climate-data-stack",
    title: "Building a Climate Data Stack That Auditors Trust",
    excerpt: "Technical architecture for emissions measurement software that meets both operational and compliance requirements.",
    tags: ["Technical Breakdown", "Institutional Memo"],
    date: "2025-01-08",
    author: "Ironvael",
  },
  {
    slug: "capital-discipline-in-venture-studio",
    title: "Capital Discipline in Venture Studio Models",
    excerpt: "How we structure deployment, reserve allocation, and follow-on strategy to avoid spray-and-pray.",
    tags: ["Institutional Memo", "Market Thesis"],
    date: "2024-12-20",
    author: "Ironvael",
  },
];
