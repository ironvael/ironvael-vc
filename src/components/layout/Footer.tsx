import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--section-alt)] py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} Ironvael. All rights reserved.
          </span>
          <nav className="flex gap-8">
            <Link
              href="/press"
              className="text-sm text-[var(--muted)] hover:text-foreground transition-colors"
            >
              Press
            </Link>
            <a
              href="https://advisory.ironvael.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] hover:text-foreground transition-colors"
            >
              Advisory
            </a>
            <Link
              href="/privacy"
              className="text-sm text-[var(--muted)] hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[var(--muted)] hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
