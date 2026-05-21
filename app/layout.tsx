import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GlobalNav from "@/components/GlobalNav";
import SiteBackgroundRoot from "@/components/SiteBackgroundRoot";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const GTM_ID = "GTM-W3985XV3";
const GA_ID2 = "G-PEPEGCGN9F";

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
    <html
      lang="en"
      className={`dark ${heading.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        {/* Google Tag Manager — head script (loads as early as possible) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-screen relative isolation-isolate bg-[#0d0500]">
        <SiteBackgroundRoot />
        {/* Google Tag Manager — noscript fallback, immediately after <body> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
        <GlobalNav />
        <div className="h-14 shrink-0" aria-hidden="true" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID2}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics-2" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID2}', { page_path: window.location.pathname });
          `}
        </Script>
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
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
