import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Market theses, technical breakdowns, and institutional memos from the Ironvael studio.",
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
