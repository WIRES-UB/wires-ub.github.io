// Import the list of news items from the data file
import { newsItems } from "@/data/news";

// NewsSidebar displays a vertical list of recent lab news on the home page
export default function NewsSidebar() {
  return (
    // Styled aside panel with a light blue background
    <aside className="bg-blue-50 border border-blue-100 rounded-xl p-5">
      {/* Section header with a colored accent bar on the left */}
      <h2 className="text-lg font-semibold text-ub-darkblue mb-4 flex items-center gap-2">
        <span className="inline-block w-1 h-5 bg-ub-blue rounded" />
        News
      </h2>

      {/* Loop through each news item and display the date and headline */}
      <ul className="space-y-4">
        {newsItems.map((item, i) => (
          <li key={i} className="text-sm">
            {/* Date shown in small blue text above the headline */}
            <span className="block text-xs font-medium text-ub-blue mb-0.5">
              {item.date}
            </span>
            {/* The actual news headline */}
            <span className="text-gray-700">{item.headline}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
