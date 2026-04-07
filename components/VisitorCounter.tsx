"use client";

interface VisitorCounterProps {
  /** Full canonical URL of the page being counted, e.g. https://thenewontology.life/the-sovereign-mind */
  pageUrl: string;
  className?: string;
}

const ALLOWED_ORIGIN = "https://thenewontology.life";

/**
 * Renders a live visitor counter badge powered by hits.seeyoufarm.com.
 * Each unique URL gets its own counter that increments on every page load.
 * The badge shows today's unique visits / all-time total visits.
 */
export default function VisitorCounter({ pageUrl, className = "" }: VisitorCounterProps) {
  // Only allow URLs within the expected site origin to avoid leaking arbitrary URLs to the counter service
  if (!pageUrl.startsWith(ALLOWED_ORIGIN)) return null;

  const encoded = encodeURIComponent(pageUrl);
  const badgeSrc = `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encoded}&count_bg=%239BBCFF&title_bg=%23222831&icon=eye&icon_color=%239BBCFF&title=visitors&edge_flat=true`;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`} aria-label="Page visitor count">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={badgeSrc}
        alt="Visitor count badge"
        height={20}
        style={{ display: "inline-block" }}
        loading="lazy"
      />
    </div>
  );
}
