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
    <div className="border-2 border-gray-300 flex flex-col rounded-2xl p-8 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#191919] hover:text-white hover:border-white">
      {image && (
        <img src={image} alt={`Logo ${title}`} width="80" />
      )}
      {Icon && <Icon className="w-8 h-8 shrink-0" />}
      <div className="my-4 font-manrope font-semibold">{title}</div>
      <div className="font-manrope text-gray-500">{description}</div>
      <a href={href} target="_blank">
        <div className="flex flex-row gap-2 mt-4">
          <Link className="w-6 h-6 shrink-0" />
          <div className="font-manrope font-semibold">{linkText}</div>
        </div>
      </a>
    </div>
  );
}
