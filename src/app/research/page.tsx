// Research overview page — lists all four research areas as clickable cards
import { Metadata } from "next";
import ResearchCard from "@/components/research/ResearchCard";
import { researchAreas } from "@/data/research";

// Metadata shown in the browser tab
export const metadata: Metadata = {
  title: "Research - WiRES Lab",
  description:
    "Explore the four research areas of the WiRES Lab: localization, digital twins, wireless robotics, and privacy.",
};

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-ub-darkblue mb-3">Research</h1>
      <p className="text-gray-600 mb-8 leading-relaxed">
        I like to work on DEPLOYABLE wireless systems that can aid modern-day
        applications ranging from XR, Automation, IoT, etc. The following are a
        group of projects that I am generally excited to work in using Wireless
        Systems.
      </p>

      {/* One card per research area — each card links to its detail page */}
      <div className="space-y-4">
        {researchAreas.map((area) => (
          <ResearchCard key={area.slug} area={area} />
        ))}
      </div>
    </div>
  );
}
