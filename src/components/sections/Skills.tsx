import { Section } from "../layout/Section";
import { SkillBadge } from "../ui/SkillBadge";
import { hardSkills, softSkills } from "../../data/portfolio";

export function Skills() {
  return (
    <Section id="skills">
      <div className="max-w-2xl">
        <h2 className="font-newsreader text-3xl font-bold text-gray-950">Skills</h2>
        <p className="font-manrope text-base text-gray-500 mt-3">
          Technologies and tools I work with.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <div>
          <h3 className="font-manrope text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Technical</h3>
          <div className="flex flex-wrap gap-2">
            {hardSkills.map((skill) => (
              <SkillBadge key={skill.name} name={skill.name} variant={skill.variant} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-manrope text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <SkillBadge key={skill.name} name={skill.name} variant={skill.variant} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
