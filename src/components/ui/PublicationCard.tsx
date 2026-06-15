import { Link } from "lucide-react";
import type { Publication } from "../../data/portfolio";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <div className="mt-4 border-2 border-gray-300 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-[#191919] hover:text-white hover:border-white hover:shadow-xl hover:shadow-gray-400/50 group">
      <div className="font-manrope font-semibold text-md transition-colors duration-300">
        {publication.title}
      </div>
      <div className="font-manrope text-sm text-gray-600 mt-2 transition-colors duration-300 group-hover:text-gray-200">
        {publication.authors}
      </div>
      <div className="font-manrope text-sm text-gray-500 mt-1 transition-colors duration-300 group-hover:text-gray-300">
        {publication.venue}
      </div>
      <a
        href={publication.url}
        target="_blank"
        className="inline-flex items-center gap-2 mt-4 text-gray-500 font-manrope text-sm transition-all duration-300 group-hover:text-gray-200 group-hover:gap-3"
      >
        <Link className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        View Publication
      </a>
    </div>
  );
}
