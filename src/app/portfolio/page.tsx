"use client";

import { useState, useMemo } from "react";
import {
  portfolioProjects,
  projectIndustries,
  projectStatuses,
} from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlowCard } from "@/components/ui/GlowCard";
import { StatusPill } from "@/components/ui/StatusPill";
import { Tag } from "@/components/ui/Tag";

export default function PortfolioPage() {
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [industryFilter, setIndustryFilter] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    return portfolioProjects.filter((p) => {
      const matchStatus =
        statusFilter === "All" || p.status === statusFilter;
      const matchIndustry =
        industryFilter === "All" || p.industry === industryFilter;
      return matchStatus && matchIndustry;
    });
  }, [statusFilter, industryFilter]);

  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Portfolio"
            title="Companies We Build & Back"
            description="A selection of active ventures, in-build projects, and opportunities under evaluation."
          />

          <div className="mb-12 flex flex-wrap gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-[var(--muted)]">
                Status:
              </span>
              {["All", ...projectStatuses].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    statusFilter === status
                      ? "bg-[var(--accent)] text-white"
                      : "bg-slate-100 text-[var(--muted)] hover:bg-slate-200 hover:text-foreground"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-[var(--muted)]">
                Industry:
              </span>
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="rounded-lg border border-[var(--border)] bg-white px-4 py-2 text-sm text-foreground focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
              >
                {projectIndustries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <GlowCard key={project.slug} href={`/portfolio/${project.slug}`}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold font-display">{project.name}</h3>
                  <StatusPill status={project.status} />
                </div>
                <p className="mt-2 text-sm text-[var(--muted)] line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </GlowCard>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="py-16 text-center text-[var(--muted)]">
              No projects match the selected filters.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
