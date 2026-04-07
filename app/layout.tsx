import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The New Human Ontology",
  description: "A collection of verified documents exploring the new human ontology, psychological sovereignty, and an expanded understanding of our world.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
