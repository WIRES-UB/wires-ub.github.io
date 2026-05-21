// Privacy research detail page
import { Metadata } from "next";
import Link from "next/link";
import ResearchPaperCard from "@/components/research/ResearchPaperCard";
import { researchAreas } from "@/data/research";

// Metadata shown in the browser tab
export const metadata: Metadata = {
  title: "Privacy for Sensing - WiRES Lab",
  description:
    "Ensuring wireless sensor information does not reveal user or device information.",
};

export default function PrivacyPage() {
  // Find the privacy research area from the shared data
  const area = researchAreas.find((a) => a.slug === "privacy");

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

      {/* Second body paragraph — only shown if it exists */}
      {area.bodyText[1] && (
        <p className="text-gray-700 leading-relaxed mb-8">{area.bodyText[1]}</p>
      )}

      {/* First detail image — only shown if it exists */}
      {area.detailImages[0] && (
        <img
          src={area.detailImages[0]}
          alt={area.title}
          className="w-full h-auto rounded-xl mb-8"
        />
      )}

      {/* Extra paragraph about the MIRAGE privacy system */}
      <p className="text-gray-700 leading-relaxed mb-4">
        The attacker can either passively listen through a passive device or
        even compromise the sensor network to compromise the user sensed
        information like localization and other aspects. So, I worked towards
        developing a RF-privacy system that when turned ON can confuse the
        attacker or the snooper regarding the device&apos;s location in{" "}
        <a
          href="https://wcsng.ucsd.edu/mirage/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ub-blue underline font-medium"
        >
          MIRAGE
        </a>
        . We can further develop differential-privacy and authentication systems
        enabled byt federated-learning approaches to enable privacy for wireless
        sensors and learning based wireless sensing systems.
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
