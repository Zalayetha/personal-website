import { Section } from "../layout/Section";
import { SectionDivider } from "../ui/Divider";
import { ExperienceItem } from "../ui/ExperienceItem";
import { experience } from "../../data/portfolio";

export function Experience() {
  return (
    <Section id="experience">
      <h2 className="font-newsreader text-3xl font-bold">Experience</h2>
      <SectionDivider className="my-4" />

      <div className="mt-4">
        {experience.map((exp, index) => (
          <div key={exp.company}>
            <ExperienceItem experience={exp} />
            {index < experience.length - 1 && (
              <div className="h-0.5 rounded-full bg-gray-200 my-4" />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
