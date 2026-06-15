import { Section } from "../layout/Section";
import { SectionDivider } from "../ui/Divider";
import { ProjectCard } from "../ui/ProjectCard";
import { FingerprintPattern, ChartScatter } from "lucide-react";
import { projects } from "../../data/portfolio";

export function Projects() {
  return (
    <Section id="projects">
      <h2 className="font-newsreader text-3xl font-bold">Projects</h2>
      <p className="font-newsreader text-lg font-semibold mt-4 text-gray-500">
        Check out my latest work, hope you like it.
      </p>
      <SectionDivider className="my-4" />

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-32 lg:gap-y-18 gap-y-8 justify-center lg:px-32 px-4 mt-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            icon={project.icon === "FingerprintPattern" ? FingerprintPattern : project.icon === "ChartScatter" ? ChartScatter : undefined}
            href={project.href}
            linkText={project.linkText}
          />
        ))}
      </div>
    </Section>
  );
}
