import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: LucideIcon;
  href: string;
  linkText: string;
}

export function ProjectCard({
  title,
  description,
  image,
  icon: Icon,
  href,
  linkText,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="group relative flex flex-col p-6 rounded-2xl bg-white border border-gray-200 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50"
    >
      <div className="flex items-start justify-between mb-4">
        {image && (
          <img
            src={image}
            alt={`${title} logo`}
            width="48"
            className="object-contain"
          />
        )}
        {Icon && !image && (
          <Icon className="w-8 h-8 text-gray-400" />
        )}
        <ArrowUpRight className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:text-gray-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <h3 className="font-newsreader text-xl font-semibold text-gray-950 mb-2">{title}</h3>
      <p className="font-manrope text-sm text-gray-500 leading-relaxed">{description}</p>
      <span className="mt-4 font-manrope text-sm font-medium text-gray-400 transition-colors duration-300 group-hover:text-gray-700">
        {linkText} →
      </span>
    </a>
  );
}
