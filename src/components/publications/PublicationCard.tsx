import Image from "next/image";
import Link from "next/link";
import { Publication } from "@/types";

type Props = {
  pub: Publication;
};

export default function PublicationCard({ pub }: Props) {
  return (
    <Link
      href={`/publications/${pub.id}`}
      className="group flex flex-col sm:flex-row gap-4 border border-gray-200 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white"
    >
      {pub.image && (
        <div className="relative w-full sm:w-40 h-28 shrink-0 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={`/images/publications/${pub.image}`}
            alt={pub.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex flex-col justify-center flex-1">
        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-ub-blue transition-colors leading-snug">
          {pub.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{pub.authors}</p>
        <p className="text-xs text-gray-600 mt-1 italic">
          {pub.venue} — {pub.year}
        </p>
      </div>
    </Link>
  );
}
