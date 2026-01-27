import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectsSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-medium text-primary">Projects</h2>

        <p className="text-muted-foreground leading-relaxed">
          Occasionally, I work on personal projects to continue improving my
          skills and stay up to date with the latest trends in the technology
          world.
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
