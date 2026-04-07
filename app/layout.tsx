import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const SITE_URL = "https://thenewontology.life";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The New Human Ontology",
    template: "%s | The New Human Ontology",
  },
  description:
    "Verified documents exploring the new human ontology — psychological sovereignty, non-human intelligence, AI, consciousness physics, and civilizational transition.",
  keywords: [
    "human ontology",
    "non-human intelligence",
    "NHI disclosure",
    "consciousness",
    "psychological sovereignty",
    "UAP",
    "AI transition",
    "ontological shock",
    "energy suppression",
    "civilizational shift",
    "thenewontology.life",
  ],
  authors: [{ name: "Michael Brandon Lane" }],
  creator: "Michael Brandon Lane",
  publisher: "The New Human Ontology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "The New Human Ontology",
    title: "The New Human Ontology",
    description:
      "Verified documents exploring the new human ontology — psychological sovereignty, non-human intelligence, AI, consciousness physics, and civilizational transition.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The New Human Ontology — thenewontology.life",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The New Human Ontology",
    description:
      "Verified documents exploring psychological sovereignty, non-human intelligence, AI, and civilizational transition.",
    images: ["/og-image.png"],
    creator: "@thenewontology",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Replace with your actual Google Search Console verification token
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "The New Human Ontology",
              url: SITE_URL,
              description:
                "Verified documents exploring the new human ontology — psychological sovereignty, non-human intelligence, AI, consciousness physics, and civilizational transition.",
              author: {
                "@type": "Person",
                name: "Michael Brandon Lane",
              },
              inLanguage: "en-US",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
