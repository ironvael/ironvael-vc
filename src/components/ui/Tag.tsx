import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-[var(--muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
