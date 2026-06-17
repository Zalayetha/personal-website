import { Section } from "../../layout/Section";
import { SectionDivider } from "../../ui/Divider";
import { EducationItem } from "../../ui/EducationItem";
import { PublicationCard } from "../../ui/PublicationCard";
import { SkillBadge } from "../../ui/SkillBadge";
import {
  education,
  certifications,
  publication,
} from "../../../data/portfolio";

export function Academic() {
  return (
    <Section id="academic">
      <div className="max-w-2xl">
        <h2 className="font-newsreader text-3xl font-bold text-gray-950">
          Academic
        </h2>
        <p className="font-manrope text-base text-gray-500 mt-3">
          Education, certifications, and publications.
        </p>
      </div>

      <div className="mt-10 space-y-12">
        <div>
          <h3 className="font-manrope text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={edu.institution}>
                <EducationItem education={edu} />
                {index < education.length - 1 && (
                  <SectionDivider className="my-6" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-manrope text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <SkillBadge
                key={cert.name}
                name={`${cert.name} – ${cert.issuer}`}
                variant="light"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-manrope text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Publication
          </h3>
          <PublicationCard publication={publication} />
        </div>
      </div>
    </Section>
  );
}
