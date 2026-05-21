// 404 page — shown automatically by Next.js when a URL does not match any page
import Link from "next/link";

export default function NotFound() {
  return (
    // Centered layout with a large "404" heading and a back-to-home button
    <div className="max-w-2xl mx-auto px-4 py-32 text-center">
      <h1 className="text-6xl font-bold text-ub-darkblue mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found.</p>
      <Link
        href="/"
        className="inline-block bg-ub-blue text-white px-6 py-2.5 rounded-lg hover:bg-ub-darkblue transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
