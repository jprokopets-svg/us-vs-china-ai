import Hero from "@/components/Hero";
import ComputePanel from "@/components/ComputePanel";
import CapabilityPanel from "@/components/CapabilityPanel";
import CapexPanel from "@/components/CapexPanel";
import ProductivityPanel from "@/components/ProductivityPanel";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // Single centered column, max 720px, with horizontal padding for small screens
    <main className="max-w-[720px] mx-auto px-6">
      <Hero />
      <hr className="border-gray-200" />
      <ComputePanel />
      <hr className="border-gray-200" />
      <CapabilityPanel />
      <hr className="border-gray-200" />
      <CapexPanel />
      <hr className="border-gray-200" />
      <ProductivityPanel />
      <hr className="border-gray-200" />
      <Methodology />
      <hr className="border-gray-200" />
      <Footer />
    </main>
  );
}
