import { ArrowUpRight } from "lucide-react";
import type { Publication } from "../../data/portfolio";

interface PublicationCardProps {
  publication: Publication;
}

export function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <a
      href={publication.url}
      target="_blank"
      className="group block p-6 rounded-xl bg-white border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-newsreader text-lg font-semibold text-gray-950 group-hover:text-gray-700 transition-colors">
            {publication.title}
          </h4>
          <p className="font-manrope text-sm text-gray-500 mt-1">{publication.authors}</p>
          <p className="font-manrope text-sm text-gray-400 mt-0.5">{publication.venue}</p>
        </div>
        <ArrowUpRight className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-hover:text-gray-600 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </a>
  );
}
