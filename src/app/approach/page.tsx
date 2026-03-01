"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    title: "Thesis",
    description:
      "Identify asymmetric opportunities through deep domain research and operator insight. We look for structural advantages, not momentum plays.",
  },
  {
    title: "Validation",
    description:
      "Pressure-test assumptions with customers, experts, and capital. No build until we have conviction in market and unit economics.",
  },
  {
    title: "Build",
    description:
      "Operator-led execution with clear ownership. We structure teams, cap tables, and governance from day one.",
  },
  {
    title: "Launch",
    description:
      "Go to market with focus. We prioritize distribution and retention over vanity metrics.",
  },
  {
    title: "Scale / Steward",
    description:
      "Support growth with capital and operational leverage. We steward for long-term outcomes, not quick exits.",
  },
];

const dontDo = [
  "Spray capital across many bets without conviction",
  "Chase trends or momentum without structural edge",
  "Fund decks—we build or back proven execution",
  "Vanity startups built for press instead of customers",
];

export default function ApproachPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Approach"
            title="How We Operate"
            description="A structured process from thesis to scale."
          />

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)]/50 via-[var(--accent)]/20 to-transparent md:left-1/2 md:-translate-x-px" />
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex flex-col md:flex-row md:items-center gap-8 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 md:w-1/2 md:pl-12 md:pr-24">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-bold font-display">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                  <div
                    className={`hidden md:block flex-1 md:w-1/2 ${
                      i % 2 === 1 ? "md:pl-24 md:pr-12" : "md:pl-12 md:pr-24"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-32 bg-[var(--section-alt)]">
        <Container>
          <SectionHeader
            eyebrow="Clarity"
            title="What We Don't Do"
            description="We're selective about how we spend time and capital."
          />
          <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
            {dontDo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-white px-4 py-3 shadow-sm"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400" />
                <span className="text-[var(--muted)]">{item}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
