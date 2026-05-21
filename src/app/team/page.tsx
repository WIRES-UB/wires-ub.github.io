// Team page — shows the Principal Investigator, PhD students, and other students
import { Metadata } from "next";
import ProfessorCard from "@/components/team/ProfessorCard";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import { teamMembers } from "@/data/team";

// Metadata shown in the browser tab
export const metadata: Metadata = {
  title: "Team - WiRES Lab",
  description: "Meet the faculty and students of the WiRES Lab at UB.",
};

export default function TeamPage() {
  // Separate team members into three groups based on their role
  const pi = teamMembers.filter((m) => m.role === "pi");
  const phd = teamMembers.filter((m) => m.role === "phd");
  const grad = teamMembers.filter(
    (m) => m.role === "masters" || m.role === "bachelors"
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-ub-darkblue mb-8">Team</h1>

      {/* Section: Principal Investigator (the lab professor) */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
          Principal Investigator
        </h2>
        <div className="space-y-4">
          {pi.map((m) => (
            <ProfessorCard key={m.id} member={m} />
          ))}
        </div>
      </section>

      {/* Section: PhD Students */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
          PhD Students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {phd.map((m) => (
            <TeamMemberCard key={m.id} member={m} />
          ))}
        </div>
      </section>

      {/* Section: Masters and Bachelors students — only shown if there are any */}
      {grad.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b border-gray-200">
            Master & Bachelor Students
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {grad.map((m) => (
              <TeamMemberCard key={m.id} member={m} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
