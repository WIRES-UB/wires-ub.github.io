// Publications page — lists all lab publications sorted from newest to oldest
import { Metadata } from "next";
import PublicationCard from "@/components/publications/PublicationCard";
import { publications } from "@/data/publications";

// Metadata shown in the browser tab
export const metadata: Metadata = {
  title: "Publications - WiRES Lab",
  description: "Research publications from the WiRES Lab at UB.",
};

export default function PublicationsPage() {
  // Sort publications by year, newest first
  // [...publications] creates a copy so we don't modify the original array
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-ub-darkblue mb-3">Publications</h1>

      {/* Summary line showing the total count */}
      <p className="text-gray-600 mb-8">
        {publications.length} publications - sorted by year
      </p>

      {/* List of publication cards */}
      <div className="space-y-4">
        {sorted.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </div>
    </div>
  );
}
