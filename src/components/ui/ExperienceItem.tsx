import type { Experience } from "../../data/portfolio";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
      <div className="flex-1">
        <h4 className="font-newsreader text-lg font-semibold text-gray-950">
          {experience.company}
        </h4>
      </div>
      <div className="flex-1">
        <p className="font-manrope font-medium text-gray-700">
          {experience.role}
        </p>
        <p className="font-manrope text-sm text-gray-500">
          {experience.location} · {experience.period}
        </p>
      </div>
    </div>
  );
}
