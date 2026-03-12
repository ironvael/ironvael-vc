export interface PressRelease {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

export const pressReleases: PressRelease[] = [
  {
    slug: "ironvael-advisory-virtual-business-webinar",
    title: "Ironvael Advisory Launches Virtual Business Webinar",
    excerpt: "Free 60-minute webinar on basic business, operations hygiene, and scaling for early-stage and SaaS founders. May 13, 2026.",
    date: "2026-05-13",
    content: `
Ironvael Advisory today announced the launch of a Virtual Business Webinar, a free 60-minute session covering basic business fundamentals, operations hygiene, and scaling for early-stage founders. The webinar will take place on May 13, 2026, and is designed to give SaaS founders and startup operators the operational foundations many miss in the early stages.

The session addresses a gap Ironvael has observed across its portfolio and advisory work: founders often have strong product instincts and vision but lack structured exposure to the fundamentals that determine whether a company can scale. Business structure, cap table hygiene, process design, and operational discipline—these are rarely taught in a way that lands for operators in the trenches.

"We're running this webinar to address the operational questions I wish had been answered when I was first building companies and designing their operations," said Aiden Hovren, Founder and CEO of Ironvael. "Our goal is for attendees to leave with a stronger foundation for getting their SaaS startup off the ground—structure, discipline, and clarity they can apply immediately."

The format will combine a structured 60-minute presentation with live Q&A and workshop-style elements. Attendees can expect to cover three core areas: basic business structure and entity setup, operations hygiene—including processes, documentation, and systems that prevent breakage as you grow—and scaling principles for SaaS and software businesses. The session is intentionally practical, with actionable takeaways rather than theoretical frameworks.

The webinar is tailored for early-stage startups, first-time founders, and SaaS founders who are pre-Series A or early in their scaling journey. No prior operational training is required. Ironvael Advisory plans to follow this session with a more advanced workshop for senior executives and operators at a later date, covering deeper operational and strategic topics.

Registration and additional details, including timing and access information, are available at advisory.ironvael.com.

About Ironvael Advisory
Ironvael Advisory provides strategic advisory and operational support for growth-stage companies. Services include strategic planning, operations optimization, and capital planning. The practice extends Ironvael's venture studio model—operator-led execution and structured thinking—to companies outside its capital structure. Ironvael Advisory operates at advisory.ironvael.com.

About Ironvael
Ironvael is a venture studio and capital partner focused on asymmetric opportunities and operator-led execution. We build companies that dominate their category through origination, co-build partnerships, and strategic capital. Ironvael is based in Kalispell, Montana.
    `.trim(),
  },
  {
    slug: "ironvael-advisory-launch",
    title: "Ironvael Advisory Launches Strategic Advisory Practice",
    excerpt: "Ironvael Advisory launches to provide strategic and operational support for growth-stage companies.",
    date: "2025-01-20",
    content: `
Ironvael today announced the launch of Ironvael Advisory, a strategic advisory practice providing operational support for growth-stage companies.

Ironvael Advisory brings operator-led execution and structured thinking to companies at inflection points. Services include strategic planning, operations optimization, and capital planning.

"Ironvael Advisory extends our venture studio model—we're deploying the same rigor we use in our portfolio to help companies outside our capital structure," said Ironvael leadership.

Ironvael Advisory operates at advisory.ironvael.com.

About Ironvael
Ironvael is a venture studio and capital partner focused on asymmetric opportunities and operator-led execution. We build companies that dominate their category through origination, co-build partnerships, and strategic capital.
    `.trim(),
  },
  {
    slug: "operations-university-kaploosh-in-build",
    title: "Ironvael Adds Operations University and Kaploosh Energy to Portfolio",
    excerpt: "Two new ventures in build: operations training platform and energy drink company.",
    date: "2025-01-08",
    content: `
Ironvael today announced two new ventures in development: Operations University and Kaploosh Energy.

Operations University is building a training and development platform focused on operations excellence. Kaploosh Energy is developing an energy drink brand with further details to be announced.

"Both ventures represent thesis-driven opportunities we've identified through our origination process," said the Ironvael team. "We're in active build and will share more as we reach key milestones."

Ironvael is based in Kalispell, Montana, with portfolio companies and partners across North America.
    `.trim(),
  },
  {
    slug: "aiden-hovren-founder-ironvael",
    title: "Aiden Hovren Establishes Ironvael as an Operator-Led Venture Studio",
    excerpt: "Founder Aiden Hovren builds Ironvael as a disciplined venture studio focused on asymmetric opportunities and institutional-grade execution.",
    date: "2025-02-28",
    content: `
  Ironvael today formalized the positioning of its founder, Aiden Hovren, as the architect behind the firm’s operator-led venture studio model.
  
  Hovren established Ironvael with a singular thesis: most early-stage companies fail not from lack of vision, but from lack of structure. Rather than pursuing a traditional holding company or accelerator approach, Ironvael was designed as a disciplined venture studio — originating ideas internally, validating risk before capital deployment, and building operational architecture from day one.
  
  Drawing from a background in aviation operations and Lean Six Sigma methodology, Hovren applies systems thinking to venture creation. Each company formed under Ironvael undergoes structured risk assessment, market validation, and operational design prior to meaningful investment. The firm’s capital is deployed selectively and with long-term governance in mind.
  
  “We do not optimize for volume,” Hovren said. “We optimize for durability. Venture building is not a factory — it is a structured discipline.”
  
  Under Hovren’s leadership, Ironvael focuses on asymmetric opportunity structures, operator-led development, and controlled portfolio construction. The studio maintains a closed structure, engaging in external partnerships only where alignment and execution standards meet its mandate.
  
  About Aiden Hovren  
  Aiden Hovren is the Founder and Chief Executive Officer of Ironvael. He oversees venture origination, portfolio governance, and capital allocation, with a focus on institutional-grade execution and long-term enterprise value creation.
  
  About Ironvael  
  Ironvael is a venture studio and capital partner focused on asymmetric opportunities and operator-led execution. The firm builds companies through disciplined origination, structured development, and strategic capital deployment.
      `.trim(),
  },
];

export const mediaKit = {
  logoDescription: "Ironvael logo and brand assets",
  boilerplate: `Ironvael is a venture studio and capital partner focused on asymmetric opportunities and operator-led execution. We build companies that dominate their category through origination, co-build partnerships, and strategic capital. Ironvael is based in Kalispell, Montana.`,
  contact: "press@ironvael.com",
};
