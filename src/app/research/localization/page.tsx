// Localization research detail page
import { Metadata } from "next";
import Link from "next/link";
import ResearchPaperCard from "@/components/research/ResearchPaperCard";
import { researchAreas } from "@/data/research";

// Metadata shown in the browser tab
export const metadata: Metadata = {
  title: "Localization & Navigation - WiRES Lab",
  description:
    "Indoor positioning, localization, navigation, and tracking using wireless sensors.",
};

// List of phrases that should appear in bold in the second body paragraph
const HIGHLIGHT_PHRASES = [
  "navigation and localization",
  "Robot Automation, tracking, and last-mile delivery",
  "VR Tracking and other Mixed Reality",
];

// boldPhrases takes a string of text and a list of phrases, and returns the text
// split into parts where matching phrases are wrapped in <strong> tags.
// Example: boldPhrases("I like navigation and localization", ["navigation and localization"])
// returns: ["I like ", <strong>navigation and localization</strong>]
function boldPhrases(text: string, phrases: string[]) {
  // Escape any special regex characters in each phrase so they are matched literally
  const escapedPhrases = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

  // Build a regex that matches any of the phrases (case-insensitive)
  const regex = new RegExp(`(${escapedPhrases.join("|")})`, "gi");

  // Split the text at every match — matched parts and non-matched parts alternate in the array
  const parts = text.split(regex);

  // Return each part, wrapping matched phrases in <strong>
  return parts.map((part, i) => {
    const isMatch = phrases.some((p) => p.toLowerCase() === part.toLowerCase());
    if (isMatch) {
      return <strong key={i}>{part}</strong>;
    }
    return part;
  });
}

export default function LocalizationPage() {
  // Find the localization research area from the shared data
  const area = researchAreas.find((a) => a.slug === "localization");

  // If no matching area is found, show nothing (this should not happen in normal use)
  if (!area) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back link to the research overview page */}
      <Link
        href="/research/"
        className="inline-flex items-center gap-1 text-sm text-ub-blue hover:underline mb-6"
      >
        ← All Research
      </Link>

      {/* Page title and lead description */}
      <h1 className="text-3xl font-bold text-ub-darkblue mb-3">{area.title}</h1>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        {area.bodyText[0]}
      </p>

      {/* First detail image — only shown if it exists */}
      {area.detailImages[0] && (
        <img
          src={area.detailImages[0]}
          alt={area.title}
          className="w-full h-auto rounded-xl mb-8"
        />
      )}

      {/* Second body paragraph with key phrases bolded — only shown if it exists */}
      {area.bodyText[1] && (
        <p className="text-gray-700 leading-relaxed mb-4">
          {boldPhrases(area.bodyText[1], HIGHLIGHT_PHRASES)}
        </p>
      )}

      {/* Second detail image — only shown if it exists */}
      {area.detailImages[1] && (
        <img
          src={area.detailImages[1]}
          alt={`${area.title} detail`}
          className="w-full h-auto rounded-xl my-8"
        />
      )}

      {/* Extra paragraph describing specific localization systems (DLoc, WILD, BLoc, ULoc) */}
      <p className="text-gray-700 leading-relaxed mb-4">
        Two of the major issues for localization and navigation using wireless-sensors
        is the need to overcome two major issues with wireless transmissions: Multipath
        and Non-Line of Sight issues. My research focuses on solving these issues to
        achieve accurate indoor localization and navigation for Wi-Fi devices in{" "}
        <a href="https://wcsng.ucsd.edu/dloc/" target="_blank" rel="noopener noreferrer" className="text-ub-blue underline font-medium">DLoc</a>
        {" "}and open-sourced the first largest dataset called{" "}
        <a href="https://wcsng.ucsd.edu/wild/" target="_blank" rel="noopener noreferrer" className="text-ub-blue underline font-medium">WILD</a>
        ; also to achieve low-power localization using BLE devices in{" "}
        <a href="https://wcsng.ucsd.edu/bloc/" target="_blank" rel="noopener noreferrer" className="text-ub-blue underline font-medium">BLoc</a>
        ; and UWB based industrial assets localization based on the upcoming
        industrial FiRa standards in{" "}
        <a href="https://wcsng.ucsd.edu/uloc/" target="_blank" rel="noopener noreferrer" className="text-ub-blue underline font-medium">ULoc</a>
        {" "}that achieves 14x better battery life while achiieving 5x times better
        localization accuracy and stability compared to the COTS devices.
      </p>

      {/* Any remaining body paragraphs after the first three */}
      {area.bodyText.slice(3).map((para, i) => (
        <p key={i} className="text-gray-700 leading-relaxed mb-4">
          {para}
        </p>
      ))}

      {/* References section */}
      <h2 className="text-xl font-bold text-ub-darkblue mt-10 mb-4">
        References
      </h2>
      <div className="space-y-4">
        {area.references.map((ref, i) => (
          <ResearchPaperCard key={i} paper={ref} />
        ))}
      </div>
    </div>
  );
}
