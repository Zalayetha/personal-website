import type { Education } from "../../data/portfolio";

interface EducationItemProps {
  education: Education;
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
      <div className="flex-1">
        <h4 className="font-newsreader text-lg font-semibold text-gray-950">
          {education.institution}
        </h4>
        <p className="font-manrope text-sm text-gray-500">
          {education.location} · {education.period}
        </p>
      </div>
      <div className="flex-1">
        <p className="font-manrope font-medium text-gray-700">
          {education.degree}
        </p>
        {education.gpa && (
          <p className="font-manrope text-sm text-gray-400">{education.gpa}</p>
        )}
        {education.achievement && (
          <p className="font-manrope text-sm text-gray-500 italic mt-1">
            {education.achievement}
          </p>
        )}
      </div>
    </div>
  );
}
