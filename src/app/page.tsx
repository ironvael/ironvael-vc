"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/StatusPill";
import { Tag } from "@/components/ui/Tag";
import { portfolioProjects } from "@/data/portfolio";
import { insights } from "@/data/insights";

const engagementLanes = [
  {
    title: "Origination",
    description:
      "Internal ventures from thesis to launch. We identify asymmetric opportunities, validate them, and build with dedicated operators.",
  },
  {
    title: "Co-Build",
    description:
      "Partner with founders who have conviction and a clear edge. We contribute capital, structure, and execution capacity at the inflection point.",
  },
  {
    title: "Strategic Capital",
    description:
      "Selective backing of proven teams and validated models. We deploy where we can add operational leverage, not just capital.",
  },
];

const principles = [
  "Execution over narrative—we measure by outcomes and velocity.",
  "Structure matters—cap tables, governance, and incentives built from day one.",
  "Capital discipline—every dollar deployed with clear thesis and return expectation.",
  "Selectivity—fewer bets, deeper conviction, higher ownership.",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-gradient">
        <div className="absolute inset-0 -z-10" aria-hidden="true" />

        <Container>
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-foreground"
            >
              We build companies that{" "}
              <span className="text-[var(--accent)]">
                dominate their category.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-[var(--muted)] sm:text-xl max-w-2xl"
            >
              Ironvael is a venture studio and capital partner focused on
              asymmetric opportunities and operator-led execution.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button href="/contact" size="lg">
                Build With Ironvael
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Engagement Lanes */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="How we work"
            title="Engagement Lanes"
            description="Three ways we create and capture value."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {engagementLanes.map((lane, i) => (
              <GlowCard key={lane.title}>
                <span className="text-sm font-medium text-[var(--accent)]">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold font-display">
                  {lane.title}
                </h3>
                <p className="mt-3 text-[var(--muted)]">{lane.description}</p>
              </GlowCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Proof / Principles */}
      <section className="py-24 md:py-32 bg-[var(--section-alt)]">
        <Container>
          <SectionHeader
            eyebrow="What we believe"
            title="Proof & Principles"
          />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl">
            {principles.map((principle, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 text-[var(--muted)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{principle}</span>
              </motion.li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Portfolio"
            title="Active & In Build"
            description="Companies we're building, backing, or evaluating."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.slice(0, 6).map((project) => (
              <GlowCard key={project.slug} href={`/portfolio/${project.slug}`}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold font-display">{project.name}</h3>
                  <StatusPill status={project.status} />
                </div>
                <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2 flex-1 min-h-[2.5rem]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/portfolio" variant="secondary">
              View Full Portfolio
            </Button>
          </div>
        </Container>
      </section>

      {/* Manifesto */}
      <section className="py-24 md:py-32 bg-[var(--section-alt)]">
        <Container>
          <motion.blockquote
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-center max-w-4xl mx-auto leading-tight"
          >
            Build hard things. Move decisively. Structure matters. Capital is
            earned.
          </motion.blockquote>
        </Container>
      </section>

      {/* Insights Preview */}
      <section className="py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Insights"
            title="From the studio"
            description="Market theses, technical breakdowns, and institutional memos."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((post) => (
              <GlowCard key={post.slug} href={`/insights/${post.slug}`}>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
                <h3 className="font-bold font-display">{post.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-[var(--muted)]">{post.date}</p>
              </GlowCard>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/insights" variant="secondary">
              View All Insights
            </Button>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold font-display sm:text-4xl">
              Ready to build?
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              If you have conviction and a clear edge, we want to hear from you.
            </p>
            <div className="mt-10">
              <Button href="/contact" size="lg">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
