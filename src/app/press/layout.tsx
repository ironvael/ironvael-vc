import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press releases, media kit, and press contact for Ironvael.",
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
