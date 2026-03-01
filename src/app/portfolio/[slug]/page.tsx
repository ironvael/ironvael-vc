import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import { pressReleases } from "@/data/press";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/StatusPill";
import { Tag } from "@/components/ui/Tag";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) notFound();

  const relatedPress = (project.pressSlugs ?? [])
    .map((ps) => pressReleases.find((r) => r.slug === ps))
    .filter((r): r is (typeof pressReleases)[number] => r != null);

  const relatedProjects = portfolioProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/5 via-transparent to-transparent pointer-events-none" />
        <Container className="relative">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <StatusPill status={project.status} />
              <span className="text-sm text-[var(--muted)]">
                {project.industry}
              </span>
              {project.stage && (
                <>
                  <span className="text-[var(--muted)]">·</span>
                  <span className="text-sm text-[var(--muted)]">
                    {project.stage}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-4xl font-bold font-display sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>

            {project.tagline && (
              <p className="mt-4 text-xl text-[var(--accent)] font-medium">
                {project.tagline}
              </p>
            )}

            <p className="mt-4 text-lg text-[var(--muted)] max-w-2xl">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              {project.founded && (
                <span className="text-sm text-[var(--muted)]">
                  Founded {project.founded}
                </span>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#1D4ED8] hover:shadow"
                >
                  Visit website
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Overview + Highlights */}
      <section className="py-12 md:py-16 bg-[var(--section-alt)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              {project.longDescription && (
                <div>
                  <h2 className="text-xl font-semibold font-display mb-4">
                    Overview
                  </h2>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>
              )}
            </div>

            {project.highlights && project.highlights.length > 0 && (
              <div className="lg:border-l lg:border-[var(--border)] lg:pl-8">
                <h2 className="text-xl font-semibold font-display mb-4">
                  Highlights
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[var(--muted)]"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Related Press */}
      {relatedPress.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <h2 className="text-xl font-semibold font-display mb-6">
              Related Press
            </h2>
            <div className="space-y-4">
              {relatedPress.map((release) => (
                <Link
                  key={release.slug}
                  href={`/press-release/${release.slug}`}
                  className="flex items-start gap-4 rounded-2xl border border-[var(--card-border)] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-200 group"
                >
                  <FileText className="h-5 w-5 shrink-0 text-[var(--accent)] mt-0.5" />
                  <div>
                    <h3 className="font-semibold group-hover:text-[var(--accent)] transition-colors">
                      {release.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {release.excerpt}
                    </p>
                    <p className="mt-2 text-xs text-[var(--muted)]">
                      {release.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-[var(--section-alt)]">
          <Container>
            <h2 className="text-xl font-semibold font-display mb-6">
              Other Portfolio Companies
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((p) => (
                <div
                  key={p.slug}
                  className="rounded-2xl border border-[var(--card-border)] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-200 group"
                >
                  <Link href={`/portfolio/${p.slug}`}>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold font-display group-hover:text-[var(--accent)] transition-colors">
                        {p.name}
                      </h3>
                      <StatusPill status={p.status} />
                    </div>
                    <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {p.tags.slice(0, 2).map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                  </Link>
                  {p.website && (
                    <a
                      href={p.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs text-[var(--accent)] hover:underline"
                    >
                      Visit site
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-xl rounded-2xl border border-[var(--border)] bg-[var(--section-alt)] p-8 md:p-10">
            <h2 className="text-2xl font-bold font-display">
              Interested in {project.name}?
            </h2>
            <p className="mt-3 text-[var(--muted)]">
              Get in touch for partnerships, advisory, or investment inquiries.
            </p>
            <div className="mt-6">
              <Button href="/contact">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
