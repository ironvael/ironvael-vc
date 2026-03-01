import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { pressReleases } from "@/data/press";
import { Container } from "@/components/ui/Container";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return pressReleases.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const release = pressReleases.find((r) => r.slug === slug);
  if (!release) return { title: "Press Release Not Found" };
  return {
    title: release.title,
    description: release.excerpt,
  };
}

export default async function PressReleasePage({ params }: PageProps) {
  const { slug } = await params;
  const release = pressReleases.find((r) => r.slug === slug);

  if (!release) notFound();

  return (
    <section className="py-20 md:py-28">
      <Container>
        <Link
          href="/press"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Press
        </Link>

        <article className="max-w-2xl">
          <p className="text-sm text-[var(--muted)] mb-2">
            Press Release · {release.date}
          </p>
          <h1 className="text-4xl font-bold font-display sm:text-5xl">
            {release.title}
          </h1>
          <div className="mt-10 prose prose-slate max-w-none">
            <div className="text-[var(--muted)] leading-relaxed whitespace-pre-line">
              {release.content}
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <Link
              href="/press"
              className="text-sm text-[var(--accent)] hover:underline"
            >
              ← All press releases
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
