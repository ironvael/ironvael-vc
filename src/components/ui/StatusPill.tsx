import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/portfolio";

const statusStyles: Record<ProjectStatus, string> = {
  Active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "In Build": "bg-amber-50 text-amber-700 border-amber-200",
  Evaluating: "bg-slate-100 text-slate-600 border-slate-200",
};

interface StatusPillProps {
  status: ProjectStatus;
  className?: string;
}

export function StatusPill({ status, className }: StatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
}
