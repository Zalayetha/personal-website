import type { Experience } from "../../data/portfolio";

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
      <div className="font-manrope font-semibold text-md text-gray-500">
        {experience.company}
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-manrope font-semibold text-md">{experience.role}</div>
        <div className="font-manrope font-semibold text-md text-gray-500">
          {experience.location} • {experience.period}
        </div>
      </div>
    </div>
  );
}
