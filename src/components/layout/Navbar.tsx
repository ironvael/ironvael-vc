"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/approach", label: "Approach" },
  { href: "/insights", label: "Insights" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-white/95 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight font-display text-foreground hover:text-[var(--accent)] transition-colors"
          >
            Ironvael
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" size="sm">
              Contact
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[var(--border)] bg-white"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "py-3 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-[var(--accent)]"
                      : "text-foreground hover:text-[var(--accent)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/contact"
                size="sm"
                className="mt-2 w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
