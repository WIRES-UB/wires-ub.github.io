import Link from "next/link";
import Image from "next/image";
import { ResearchArea } from "@/types";

// Props defines the data this component needs to render
type Props = {
  area: ResearchArea;
};

// ResearchCard shows a single research area as a clickable card with an image and description
export default function ResearchCard({ area }: Props) {
  return (
    // The whole card is a link — clicking it navigates to the research area's detail page
    <Link
      href={`/research/${area.slug}/`}
      className="group flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white"
    >
      {/* Thumbnail image for the research area */}
      <div className="relative w-full sm:w-48 h-36 shrink-0 rounded-lg overflow-hidden bg-gray-100">
        <Image
          src={area.heroImage}
          alt={area.title}
          fill
          className="object-cover"
          unoptimized={area.heroImage.endsWith(".gif")} // GIFs need unoptimized to preserve animation
        />
      </div>

      {/* Text content: title, short description, and a "Learn more" label */}
      <div className="flex flex-col justify-center">
        <h3 className="text-base font-semibold text-ub-darkblue group-hover:text-ub-blue transition-colors mb-1">
          {area.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {area.cardDescription}
        </p>
        <span className="mt-2 text-xs font-medium text-ub-blue">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
