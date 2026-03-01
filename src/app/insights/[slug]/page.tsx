import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { insights } from "@/data/insights";
import { Container } from "@/components/ui/Container";
import { Tag } from "@/components/ui/Tag";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function InsightDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = insights.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <section className="py-20 md:py-28">
      <Container>
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Insights
        </Link>

        <article className="max-w-2xl">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <h1 className="text-4xl font-bold font-display sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-[var(--muted)]">
            {post.date}
            {post.author && ` · ${post.author}`}
          </p>
          <div className="mt-12 prose prose-slate max-w-none">
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              {post.excerpt}
            </p>
            {post.content ? (
              <div className="mt-8 text-foreground leading-relaxed space-y-4">
                {post.content.split(/\n\n+/).map((paragraph, i) => (
                  <p key={i}>{paragraph.trim()}</p>
                ))}
              </div>
            ) : (
              <p className="mt-8 text-[var(--muted)] italic">
                Full content coming soon. This post is structured for MDX
                integration.
              </p>
            )}
          </div>
        </article>
      </Container>
    </section>
  );
}
