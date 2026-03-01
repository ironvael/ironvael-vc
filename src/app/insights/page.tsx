"use client";

import { insights } from "@/data/insights";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Tag } from "@/components/ui/Tag";

export default function InsightsPage() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Insights"
          title="From the Studio"
          description="Market theses, technical breakdowns, and institutional memos."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post) => (
            <GlowCard key={post.slug} href={`/insights/${post.slug}`}>
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <h3 className="font-bold font-display text-lg">{post.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)] line-clamp-3">
                {post.excerpt}
              </p>
              <p className="mt-4 text-xs text-[var(--muted)]">{post.date}</p>
            </GlowCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
