import Image from "next/image";
import { TeamMember } from "@/types";

// Props defines the data this component needs to render
type Props = {
  member: TeamMember;
};

// ProfessorCard shows the Principal Investigator (PI / lab professor) in a larger, horizontal layout
export default function ProfessorCard({ member }: Props) {
  return (
    // Horizontal card layout: photo on the left, details on the right
    <div className="flex flex-col sm:flex-row gap-6 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">

      {/* Large circular profile photo — shows a placeholder letter if no photo is available */}
      <div className="relative w-32 h-32 shrink-0 rounded-full overflow-hidden bg-gray-200 self-center sm:self-start">
        {member.photo ? (
          <Image
            src={`/images/teampic/${member.photo}`}
            alt={member.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-bold">
            {member.name[0]}
          </div>
        )}
      </div>

      {/* Professor details: name, title/info, education history, and email */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-ub-darkblue">{member.name}</h2>

        {/* Role or title (e.g., "Assistant Professor") */}
        <p className="text-ub-blue font-medium text-sm mt-0.5 mb-3">
          {member.info}
        </p>

        {/* Education list — only shown if there is at least one entry */}
        {member.education.length > 0 && (
          <ul className="space-y-1 mb-3">
            {member.education.map((edu, i) => (
              <li key={i} className="text-sm text-gray-600">
                {edu.degree} - {edu.institution}, {edu.year}
              </li>
            ))}
          </ul>
        )}

        {/* Email link */}
        <a
          href={`mailto:${member.email}`}
          className="text-sm text-ub-blue hover:underline"
        >
          {member.email}
        </a>
      </div>
    </div>
  );
}
