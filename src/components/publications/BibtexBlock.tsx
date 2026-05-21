"use client";

import { useState } from "react";

export default function BibtexBlock({ bibtex }: { bibtex: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-50 rounded-lg border border-gray-200 p-4">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-xs px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="text-xs text-gray-700 font-mono whitespace-pre-wrap overflow-x-auto pr-16">
        {bibtex}
      </pre>
    </div>
  );
}
