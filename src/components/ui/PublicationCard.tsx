import { Link } from "lucide-react";
import type { Publication } from "../../data/portfolio";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <div className="mt-4 border-2 border-gray-300 rounded-2xl p-6">
      <div className="font-manrope font-semibold text-md">{publication.title}</div>
      <div className="font-manrope text-sm text-gray-600 mt-2">
        {publication.authors}
      </div>
      <div className="font-manrope text-sm text-gray-500 mt-1">
        {publication.venue}
      </div>
      <a
        href={publication.url}
        target="_blank"
        className="inline-flex items-center gap-2 mt-3 text-[#191919] hover:underline font-manrope text-sm"
      >
        <Link className="w-4 h-4" />
        View Publication
      </a>
    </div>
  );
}
