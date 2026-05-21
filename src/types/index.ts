// Shared TypeScript types used across the whole site.
// Define the shape of your data here so every component agrees on the structure.

// The four valid research area slugs used in the URL (e.g., /research/robotics/)
export type ResearchSlug = "localization" | "digital-twins" | "robotics" | "privacy";

// A single education entry (degree + school + year)
export interface Education {
  degree: string;
  institution: string;
  year: number;
}

// A single team member (professor, PhD student, or other student)
export interface TeamMember {
  id: string;
  name: string;
  photo: string | null; // null means no photo — show initials instead
  role: string;         // "pi" | "phd" | "masters" | "bachelors"
  info: string;         // short title or description shown under the name
  email: string;
  education: Education[];
}

// A single link button on a publication detail page
export interface PublicationLink {
  label: string;
  url: string;
}

// A single publication entry shown on the Publications page
export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;        // conference or journal name
  year: number;
  url: string;
  image: string | null; // null means no cover image
  highlight: boolean;   // true for featured publications
  abstract?: string;
  links?: PublicationLink[];
  video?: string;   // YouTube embed URL
  bibtex?: string;
}

// A paper reference shown at the bottom of a research detail page
export interface ResearchAreaReference {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url: string;
  image: string;
}

// A single research area with all content needed for its card and detail page
export interface ResearchArea {
  slug: ResearchSlug;
  title: string;
  shortTitle: string;
  cardDescription: string;  // short text shown on the research card
  heroImage: string;        // image shown on the card thumbnail
  bodyText: string[];       // paragraphs of text for the detail page
  detailImages: string[];   // images shown inline on the detail page
  references: ResearchAreaReference[];
}

// A single news item shown in the sidebar on the home page
export interface NewsItem {
  date: string;
  headline: string;
}
