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
    slug: "why-operations-university",
    title: "Why We're Building Operations University",
    excerpt: "Operators are underserved by existing training. We're building curriculum for execution, not theory.",
    tags: ["Market Thesis", "Institutional Memo"],
    date: "2025-02-01",
    author: "Ironvael",
    content: `The gap between strategy and execution is where most ventures fail. MBA programs teach frameworks. Bootcamps teach tactics. Almost nobody teaches operators how to run—how to build processes, maintain velocity, and scale without breaking.

We started Operations University because we kept seeing the same pattern: talented people with conviction who could sell, fundraise, or build product, but who hit a wall when it came to running the machine. Inventory. Hiring. Capacity planning. Quality. These aren't sexy topics. They're the difference between a good idea and a real business.

Our thesis is simple. Operations excellence is learnable. It's also scarce. The operators who level up—who can translate a validated model into repeatable execution—create disproportionate value. We're building the curriculum we wish existed when we were in the trenches.

Operations University is in development. We're designing for operators and operational leaders who want to move faster and break fewer things. Modular format. Self-paced and cohort-based. Launch expected 2025.`,
  },
  {
    slug: "capital-discipline-in-venture-studio",
    title: "Capital Discipline in Venture Studio Models",
    excerpt: "How we structure deployment, reserve allocation, and follow-on strategy to avoid spray-and-pray.",
    tags: ["Institutional Memo", "Market Thesis"],
    date: "2024-12-20",
    author: "Ironvael",
    content: `Venture studios can drift into spray-and-pray. Too many bets. Too little reserve. Too much hope. We structure differently.

Every dollar we deploy has a clear thesis and return expectation. We don't "experiment" with capital—we validate with customers and experts, then build with conviction. Reserve allocation is built in from day one. We assume things take longer and cost more than the deck says.

Follow-on strategy is decided before we write the first check. Will we lead the next round? At what threshold? What's our walk-away? These aren't post-hoc decisions. They're part of the initial structure.

Capital is earned. We treat it that way. Fewer bets. Deeper conviction. Higher ownership. That's the model.`,
  },
  {
    slug: "operator-led-advisory",
    title: "The Case for Operator-Led Advisory",
    excerpt: "Why advisory from operators beats consulting. Ironvael Advisory extends our venture studio model.",
    tags: ["Institutional Memo", "Market Thesis"],
    date: "2025-01-20",
    author: "Ironvael",
    content: `Consultants optimize for deliverables. Operators optimize for outcomes. That's the core distinction behind Ironvael Advisory.

We launched Ironvael Advisory because we kept getting asked: "Can you help us even if you're not writing a check?" The answer is yes. We deploy the same operational rigor we use in our portfolio—strategic planning, operations optimization, capital planning, execution support—to companies outside our capital structure.

The difference is skin in the game. We've built and scaled. We've made the mistakes. We're not selling a deck. We're rolling up our sleeves.

Retainer and project-based engagements. Operator-led from Ironvael partners and portfolio operators. If you're at an inflection point and need structure, not slides, that's what we do.`,
  },
  {
    slug: "building-consumer-brands-in-cpg",
    title: "Building Consumer Brands in CPG",
    excerpt: "Why we're building Kaploosh Energy and what we've learned about beverage and consumer.",
    tags: ["Market Thesis", "Technical Breakdown"],
    date: "2025-01-15",
    author: "Ironvael",
    content: `CPG isn't dead. It's just harder. The energy drink category is crowded. The barriers to entry are real. So why Kaploosh Energy?

We see structural opportunity. Brand matters more than ever. Distribution has fragmented. DTC and retail can coexist. The companies that win will combine product excellence with operational discipline—supply chain, unit economics, and capital efficiency from day one.

We're building Kaploosh in active development. Energy when you need it. A consumer brand with a thesis-driven approach. We're not spraying capital. We're testing, iterating, and building with the same rigor we apply to software and services.

The lessons apply beyond beverage: know your unit economics before you scale, structure your cap table for the long haul, and don't confuse brand with marketing. Brand is what you do when nobody's watching.`,
  },
  {
    slug: "asymmetric-opportunities-in-underserved-markets",
    title: "Asymmetric Opportunities in Underserved Markets",
    excerpt: "Where we look for structural advantages: Celiac Cafe, Self Rescue, and the logic of selectivity.",
    tags: ["Market Thesis", "Institutional Memo"],
    date: "2025-01-08",
    author: "Ironvael",
    content: `We look for asymmetric opportunities—markets where structural advantage, not momentum, drives returns. That means underserved segments. Real pain. Willingness to pay. And operators who can execute.

Celiac Cafe and Self Rescue Co. are under evaluation for this reason. Celiac-safe dining is a real need. The demand exists. The question is unit economics and operational feasibility. Same with safety and rescue products—consumer safety is a category where "good enough" isn't. We're assessing fit, structure, and our ability to add operational leverage.

The logic is consistent across our pipeline: we don't chase trends. We look for edges. We back conviction with structure. And we pass on 95% of what we see.

Selectivity is the strategy. Fewer bets. Deeper conviction. Higher ownership. That's Ironvael.`,
  },
];
