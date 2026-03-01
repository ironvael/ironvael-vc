"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function GlowCard({
  children,
  className,
  href,
}: GlowCardProps) {
  const baseClasses =
    "group relative flex flex-col rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5 h-full";

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={cn(baseClasses, className)}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
