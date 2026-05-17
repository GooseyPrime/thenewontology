"use client";

import dynamic from "next/dynamic";
import MobileNetworkList from "@/components/network/MobileNetworkList";

const NetworkGraph = dynamic(() => import("@/components/network/NetworkGraph"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64 text-muted font-serif text-sm">
      Loading network graph…
    </div>
  ),
});

export default function NetworkPageClient() {
  return (
    <>
      <div className="hidden md:block">
        <NetworkGraph />
      </div>
      <div className="md:hidden">
        <MobileNetworkList />
      </div>
    </>
  );
}
