import { Section } from "../layout/Section";
import { ProjectCard } from "../ui/ProjectCard";
import { FingerprintPattern, ChartScatter } from "lucide-react";
import { projects } from "../../data/portfolio";

const iconMap = {
  FingerprintPattern,
  ChartScatter,
};

export function Projects() {
  return (
    <Section id="projects">
      <div className="max-w-2xl">
        <h2 className="font-newsreader text-3xl font-bold text-gray-950">Projects</h2>
        <p className="font-manrope text-base text-gray-500 mt-3">
          A collection of things I've built and shipped.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            icon={project.iconName ? iconMap[project.iconName] : undefined}
            href={project.href}
            linkText={project.linkText}
          />
        ))}
      </div>
    </Section>
  );
}
