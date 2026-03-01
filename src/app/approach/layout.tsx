import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How we operate. A structured process from thesis to scale, and what we don't do.",
};

export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
