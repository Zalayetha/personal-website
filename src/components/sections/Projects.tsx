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
      <div>
        <h2 className="font-newsreader text-3xl font-bold text-gray-950">
          Projects
        </h2>
        <p className="font-manrope text-base text-gray-500 mt-3">
          A collection of things I've built and shipped.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.tagline}
            image={project.image}
            icon={project.iconName ? iconMap[project.iconName] : undefined}
            href={`/projects/${project.slug}`}
            linkText="View Project"
          />
        ))}
      </div>
    </Section>
  );
}
