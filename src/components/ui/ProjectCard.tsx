import { Link } from "lucide-react";
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
    <div className="border-2 border-gray-300 flex flex-col rounded-2xl p-8 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-[#191919] hover:text-white hover:border-white hover:shadow-xl hover:shadow-gray-400/50 group">
      {image && (
        <img
          src={image}
          alt={`Logo ${title}`}
          width="80"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      )}
      {Icon && (
        <Icon className="w-8 h-8 shrink-0 transition-transform duration-300 group-hover:scale-110" />
      )}
      <div className="my-4 font-manrope font-semibold">{title}</div>
      <div className="font-manrope text-gray-500 transition-colors duration-300 group-hover:text-gray-200">
        {description}
      </div>
      <a
        href={href}
        target="_blank"
        className="mt-auto pt-4 inline-flex items-center gap-2 font-manrope text-sm font-semibold transition-all duration-300 group-hover:text-gray-200"
      >
        <Link className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        <span>{linkText}</span>
      </a>
    </div>
  );
}
