import Image from "next/image";
import { TeamMember } from "@/types";

// Props defines the data this component needs to render
type Props = {
  member: TeamMember;
};

// TeamMemberCard shows a student's photo, name, role, education, and email in a grid card
export default function TeamMemberCard({ member }: Props) {
  return (
    <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">

      {/* Profile photo circle — shows a photo if available, otherwise shows the first letter of the name */}
      <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-3">
        {member.photo ? (
          <Image
            src={`/images/teampic/${member.photo}`}
            alt={member.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-3xl font-bold">
            {member.name[0]}
          </div>
        )}
      </div>

      {/* Name and role/info label */}
      <h3 className="font-semibold text-gray-900 text-sm">{member.name}</h3>
      <p className="text-xs text-ub-blue mt-0.5 mb-2">{member.info}</p>

      {/* Education list — only shown if the member has at least one education entry */}
      {member.education.length > 0 && (
        <ul className="space-y-0.5 mb-2">
          {member.education.map((edu, i) => (
            <li key={i} className="text-xs text-gray-500">
              {edu.degree}, {edu.institution}, {edu.year}
            </li>
          ))}
        </ul>
      )}

      {/* Email link — clicking this opens the user's email app */}
      <a
        href={`mailto:${member.email}`}
        className="text-xs text-ub-blue hover:underline mt-auto pt-1"
      >
        {member.email}
      </a>
    </div>
  );
}
