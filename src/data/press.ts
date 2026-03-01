export interface PressRelease {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string;
}

export const pressReleases: PressRelease[] = [
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
