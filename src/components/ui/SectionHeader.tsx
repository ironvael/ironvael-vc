"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center max-w-2xl mx-auto",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[var(--accent)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-display">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-[var(--muted)] max-w-xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
