"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { pressReleases, mediaKit } from "@/data/press";

export default function PressPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Press"
          title="News & Media"
          description="Press releases, media kit, and press contact."
        />

        <div className="grid gap-16 lg:grid-cols-3 lg:gap-20">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-bold font-display mb-6">
                Press Releases
              </h2>
              <div className="space-y-4">
                {pressReleases.map((release) => (
                  <GlowCard
                    key={release.slug}
                    href={`/press-release/${release.slug}`}
                  >
                    <div className="flex items-start gap-4">
                      <FileText className="h-5 w-5 shrink-0 text-[var(--accent)] mt-0.5" />
                      <div>
                        <h3 className="font-semibold font-display">
                          {release.title}
                        </h3>
                        <p className="mt-1 text-sm text-[var(--muted)] line-clamp-2">
                          {release.excerpt}
                        </p>
                        <p className="mt-3 text-xs text-[var(--muted)]">
                          {release.date}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display mb-6">
                Media Kit
              </h2>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--section-alt)] p-6">
                <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                  {mediaKit.boilerplate}
                </p>
                <p className="text-sm font-medium text-foreground mb-2">
                  Logo & brand assets
                </p>
                <p className="text-sm text-[var(--muted)] mb-6">
                  {mediaKit.logoDescription}. Contact{" "}
                  <a
                    href={`mailto:${mediaKit.contact}`}
                    className="text-[var(--accent)] hover:underline"
                  >
                    {mediaKit.contact}
                  </a>{" "}
                  for high-res logos and brand guidelines.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  href={`mailto:${mediaKit.contact}?subject=Media%20Kit%20Request`}
                >
                  <Download className="h-4 w-4" />
                  Request Media Kit
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-display mb-6">
              Press Contact
            </h2>
            {submitted ? (
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--section-alt)] p-6">
                <h3 className="font-semibold">Message received.</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  We&apos;ll respond to press inquiries within 1–2 business days.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@outlet.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="outlet"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Publication / Outlet
                    </label>
                    <Input
                      id="outlet"
                      name="outlet"
                      placeholder="e.g. TechCrunch"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="What would you like to discuss?"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send
                  </Button>
                </form>
                <p className="mt-4 text-xs text-[var(--muted)]">
                  Or email directly:{" "}
                  <a
                    href={`mailto:${mediaKit.contact}`}
                    className="text-[var(--accent)] hover:underline"
                  >
                    {mediaKit.contact}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
