import type { Education } from "../../data/portfolio";

interface EducationItemProps {
  education: Education;
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
      <div className="font-manrope font-semibold text-md">
        {education.institution}
        <div className="font-manrope font-normal text-sm text-gray-500">
          {education.location} • {education.period}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-manrope font-semibold text-md">{education.degree}</div>
        {education.gpa && (
          <div className="font-manrope text-sm text-gray-600">{education.gpa}</div>
        )}
        {education.achievement && (
          <div className="font-manrope text-sm text-gray-600 italic">
            {education.achievement}
          </div>
        )}
      </div>
    </div>
  );
}
