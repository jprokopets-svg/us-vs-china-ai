// Main page: assembles all sections in order.
// This is a static page — no server-side data fetching, no client state at this level.

import Hero from "@/components/Hero";
import ComputePanel from "@/components/ComputePanel";
import CapabilityPanel from "@/components/CapabilityPanel";
import CapexPanel from "@/components/CapexPanel";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ComputePanel />
      <CapabilityPanel />
      <CapexPanel />
      <Methodology />
      <Footer />
    </main>
  );
}
