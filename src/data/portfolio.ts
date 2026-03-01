export type ProjectStatus = "Active" | "In Build" | "Evaluating";

export interface PortfolioProject {
  slug: string;
  name: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  industry: string;
  longDescription?: string;
  founded?: string;
  website?: string;
  /** Key highlights or bullet points */
  highlights?: string[];
  /** Stage or focus area (e.g. "Seed", "Pre-launch") */
  stage?: string;
  /** Related press release slugs */
  pressSlugs?: string[];
  /** Short punchy tagline */
  tagline?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "ironvael-advisory",
    name: "Ironvael Advisory",
    description: "Strategic advisory and operational support for growth-stage companies.",
    tags: ["Advisory", "Operations", "Strategy"],
    status: "Active",
    industry: "Advisory",
    website: "https://advisory.ironvael.com",
    tagline: "Operator-led advisory at the inflection point.",
    longDescription:
      "Ironvael Advisory extends our venture studio model to companies outside our capital structure. We deploy the same operational rigor we use in our portfolio—strategic planning, operations optimization, capital planning, and execution support—to help growth-stage companies navigate inflection points.",
    highlights: [
      "Operator-led advisory from Ironvael partners and portfolio operators",
      "Strategic planning and capital allocation support",
      "Operations optimization and process design",
      "Retainer and project-based engagements",
    ],
    stage: "Active",
    pressSlugs: ["ironvael-advisory-launch"],
  },
  {
    slug: "operations-university",
    name: "Operations University",
    description: "Training and development for operations excellence.",
    tags: ["Education", "Operations", "Training"],
    status: "In Build",
    industry: "Education",
    website: "https://operationsuniversity.com",
    tagline: "Level up your execution.",
    longDescription:
      "Operations University is building a training platform focused on operations excellence. We're developing curriculum and delivery models to help operators and leaders level up their execution capabilities.",
    highlights: [
      "Curriculum in development for operations fundamentals",
      "Targeting operators and operational leaders",
      "Modular, self-paced and cohort-based formats",
      "Launch expected 2025",
    ],
    stage: "Pre-launch",
    pressSlugs: ["operations-university-kaploosh-in-build"],
  },
  {
    slug: "kaploosh-energy",
    name: "Kaploosh Energy",
    description: "Energy drink company in development.",
    tags: ["CPG", "Beverage", "Consumer"],
    status: "In Build",
    industry: "Food & Beverage",
    website: "https://kaplooshenergy.com",
    tagline: "Energy when you need it.",
    longDescription:
      "Kaploosh Energy is an energy drink company currently in active development. We're building a consumer brand in the beverage space with a thesis-driven approach and operator-led execution.",
    highlights: [
      "Energy drink brand in development",
      "Consumer packaged goods focus",
      "Active build phase",
      "Further details to be announced at key milestones",
    ],
    stage: "In Build",
    pressSlugs: ["operations-university-kaploosh-in-build"],
  },
  {
    slug: "celiac-cafe",
    name: "Celiac Cafe",
    description: "Celiac-safe food and dining concept under evaluation.",
    tags: ["Food", "Healthcare", "Consumer"],
    status: "Evaluating",
    industry: "Food & Beverage",
    website: "https://celiaccafe.com",
    tagline: "Eat with confidence.",
    longDescription:
      "Celiac Cafe is a celiac-safe food and dining concept under evaluation. We're assessing market opportunity, unit economics, and operational feasibility for a dedicated gluten-free dining experience.",
    highlights: [
      "Addressing unmet demand for certified celiac-safe dining",
      "Focus on clarity, safety, and taste in gluten-free food",
      "Under active evaluation for fit and structure",
    ],
    stage: "Evaluation",
  },
  {
    slug: "self-rescue-co",
    name: "Self Rescue Co.",
    description: "Safety and rescue products under evaluation.",
    tags: ["Safety", "Consumer", "Outdoor"],
    status: "Evaluating",
    industry: "Consumer",
    website: "https://selfrescue.co",
    tagline: "Be prepared. Stay safe.",
    longDescription:
      "Self Rescue Co. is exploring safety and rescue products for outdoor and emergency use. We're evaluating product-market fit and operational requirements for a consumer-focused safety brand.",
    highlights: [
      "Consumer safety and rescue product space",
      "Outdoor and emergency use cases",
      "Under evaluation for thesis alignment and structure",
    ],
    stage: "Evaluation",
  },
];

export const projectIndustries = [
  "All",
  ...Array.from(new Set(portfolioProjects.map((p) => p.industry))).sort(),
];

export const projectStatuses: ProjectStatus[] = ["Active", "In Build", "Evaluating"];
