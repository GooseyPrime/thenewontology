"use client";

import dynamic from "next/dynamic";

const SiteBackground = dynamic(() => import("@/components/SiteBackground"), {
  ssr: false,
});

export default function SiteBackgroundRoot() {
  return <SiteBackground />;
}
