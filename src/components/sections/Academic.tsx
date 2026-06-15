import { Section } from "../layout/Section";
import { SectionDivider } from "../ui/Divider";
import { EducationItem } from "../ui/EducationItem";
import { PublicationCard } from "../ui/PublicationCard";
import { SkillBadge } from "../ui/SkillBadge";
import { education, certifications, publication } from "../../data/portfolio";

export function Academic() {
  return (
    <Section id="academic">
      <h2 className="font-newsreader text-3xl font-bold">Academic</h2>
      <SectionDivider className="my-4" />

      <h3 className="font-newsreader text-xl font-semibold mt-4">Education</h3>
      <div className="mt-4">
        {education.map((edu, index) => (
          <div key={edu.institution}>
            <EducationItem education={edu} />
            {index < education.length - 1 && (
              <div className="h-0.5 rounded-full bg-gray-200 my-4" />
            )}
          </div>
        ))}
      </div>

      <h3 className="font-newsreader text-xl font-semibold mt-8">Certifications</h3>
      <div className="flex flex-wrap gap-2 pt-4">
        {certifications.map((cert) => (
          <SkillBadge
            key={cert.name}
            name={`${cert.name} – ${cert.issuer}`}
            variant="dark"
          />
        ))}
      </div>

      <h3 className="font-newsreader text-xl font-semibold mt-8">Publications</h3>
      <PublicationCard publication={publication} />
    </Section>
  );
}
