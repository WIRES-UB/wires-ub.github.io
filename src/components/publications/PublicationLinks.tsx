"use client";

import { FaGithub, FaFilePdf } from "react-icons/fa";
import { PublicationLink } from "@/types";

const PDF_LABELS = new Set(["paper", "supplementary", "slides"]);

function LinkIcon({ label }: { label: string }) {
  const key = label.toLowerCase();
  if (key === "code") return <FaGithub className="text-base" />;
  if (PDF_LABELS.has(key)) return <FaFilePdf className="text-base" />;
  return null;
}

export default function PublicationLinks({ links }: { links: PublicationLink[] }) {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-ub-blue text-white text-sm font-medium hover:bg-ub-darkblue transition-colors"
        >
          <LinkIcon label={link.label} />
          {link.label}
        </a>
      ))}
    </div>
  );
}
