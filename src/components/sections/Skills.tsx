import { Section } from "../layout/Section";
import { SectionDivider } from "../ui/Divider";
import { SkillBadge } from "../ui/SkillBadge";
import { hardSkills, softSkills } from "../../data/portfolio";

export function Skills() {
  return (
    <Section id="skills">
      <h2 className="font-newsreader text-3xl font-bold">My Skills</h2>
      <SectionDivider className="my-4" />

      <div className="flex flex-wrap gap-2 pt-8">
        {hardSkills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} variant={skill.variant} />
        ))}
      </div>

      <div className="flex flex-wrap gap-8 pt-8">
        {softSkills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} variant={skill.variant} />
        ))}
      </div>
    </Section>
  );
}
