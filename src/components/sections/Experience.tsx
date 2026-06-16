import { Section } from "../layout/Section";
import { SectionDivider } from "../ui/Divider";
import { ExperienceItem } from "../ui/ExperienceItem";
import { experience } from "../../data/portfolio";

export function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-2xl">
        <h2 className="font-newsreader text-3xl font-bold text-gray-950">Experience</h2>
        <p className="font-manrope text-base text-gray-500 mt-3">
          My professional journey so far.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {experience.map((exp, index) => (
          <div key={exp.company}>
            <ExperienceItem experience={exp} />
            {index < experience.length - 1 && <SectionDivider className="my-6" />}
          </div>
        ))}
      </div>
    </Section>
  );
}
