import Image from "next/image";
import { ResearchAreaReference } from "@/types";

// Props defines the data this component needs to render
type Props = {
  paper: ResearchAreaReference;
};

// ResearchPaperCard shows a single research paper with its image, title, authors, and venue
export default function ResearchPaperCard({ paper }: Props) {
  return (
    // Opens the paper URL in a new browser tab
    <a
      href={paper.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white"
    >
      {/* Paper thumbnail image */}
      <div className="relative w-full sm:w-44 h-32 shrink-0 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={paper.image}
          alt={paper.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Paper details: title, authors, venue and year */}
      <div className="flex flex-col justify-center">
        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-ub-blue transition-colors mb-1">
          {paper.title}
        </h3>
        <p className="text-xs text-gray-500 mb-1">{paper.authors}</p>
        <p className="text-xs text-gray-600 italic">
          {paper.venue}, {paper.year}
        </p>
      </div>
    </a>
  );
}
