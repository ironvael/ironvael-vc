"use client";

import { useState } from "react";
import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const stages = [
  "Idea / Pre-seed",
  "Seed",
  "Series A",
  "Growth",
  "Other",
];

const contactInfo = {
  email: "hello@ironvael.com",
  address: "Kalispell, MT",
};

const socialLinks = [
  { href: "https://linkedin.com/company/ironvael", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/ironvael", label: "X / Twitter", icon: Twitter },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-20 md:py-28 min-h-[60vh] flex items-center">
        <Container>
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-bold font-display">
              Message received.
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              We respond to all inquiries within 3–5 business days.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          eyebrow="Contact"
          title="Get in Touch"
          description="We respond to all inquiries."
        />

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-foreground"
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
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                />
                </div>
              </div>

              <div>
                <label
                htmlFor="building"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                What you&apos;re building
              </label>
              <Input
                id="building"
                name="building"
                placeholder="Brief description of your venture"
                required
              />
            </div>

            <div>
              <label
                htmlFor="stage"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Stage
              </label>
              <select
                id="stage"
                name="stage"
                className="flex h-11 w-full rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm text-foreground focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20 focus:ring-offset-2 focus:ring-offset-white"
              >
                <option value="">Select stage</option>
                {stages.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your venture, thesis, and what you're looking for."
                rows={5}
              />
            </div>

              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--section-alt)] p-6 lg:p-8">
              <h3 className="text-lg font-semibold font-display">
                Contact Info
              </h3>
              <div className="mt-4 space-y-4">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  <span>{contactInfo.email}</span>
                </a>
                <div className="flex items-start gap-3 text-[var(--muted)]">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              <h3 className="mt-8 text-lg font-semibold font-display">
                Connect
              </h3>
              <div className="mt-4 flex gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-white text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-white p-4 shadow-sm">
                <p className="text-sm font-medium text-foreground">
                  Response time
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  We respond to every inquiry within 3–5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
