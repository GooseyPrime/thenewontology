"use client";

import Script from "next/script";

const GA_ID_PATTERN = /^G-[A-Z0-9]{6,}$/;

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  if (!gaId || !GA_ID_PATTERN.test(gaId)) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { page_path: window.location.pathname });
        `}
      </Script>
    </>
  );
}
