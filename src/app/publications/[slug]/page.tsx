import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { publications } from "@/data/publications";
import BibtexBlock from "@/components/publications/BibtexBlock";
import PublicationLinks from "@/components/publications/PublicationLinks";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return publications.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const pub = publications.find((p) => p.id === params.slug);
  if (!pub) return {};
  return {
    title: `${pub.title} - WiRES Lab`,
    description: pub.abstract?.slice(0, 160),
  };
}

export default function PublicationDetailPage({ params }: Props) {
  const pub = publications.find((p) => p.id === params.slug);
  if (!pub) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link
        href="/publications"
        className="text-ub-blue hover:underline text-sm mb-8 inline-block"
      >
        ← Back to Publications
      </Link>

      {pub.image && (
        <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-100 mb-8">
          <Image
            src={`/images/publications/${pub.image}`}
            alt={pub.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <h1 className="text-3xl font-bold text-ub-darkblue mb-3">{pub.title}</h1>

      <p className="text-gray-600 mb-2">{pub.authors}</p>

      <p className="text-gray-500 italic mb-6">
        {pub.venue} &mdash; {pub.year}
      </p>

      {pub.links && pub.links.length > 0 && (
        <PublicationLinks links={pub.links} />
      )}

      {pub.abstract && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-ub-darkblue mb-3">
            Abstract
          </h2>
          <p className="text-gray-700 leading-relaxed">{pub.abstract}</p>
        </section>
      )}

      {pub.video && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-ub-darkblue mb-3">
            Video Presentation
          </h2>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src={pub.video}
              title={`${pub.title} — video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-xl"
            />
          </div>
        </section>
      )}

      {pub.bibtex && (
        <section>
          <h2 className="text-xl font-semibold text-ub-darkblue mb-3">
            BibTeX Citation
          </h2>
          <BibtexBlock bibtex={pub.bibtex} />
        </section>
      )}
    </div>
  );
}
