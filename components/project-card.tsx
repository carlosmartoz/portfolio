import Link from "next/link";
import { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      target="_blank"
      href={project.link}
      rel="noopener noreferrer"
      className="group flex gap-2 rounded-lg border border-transparent p-3 -mx-3 transition-colors duration-300 hover:border-border hover:bg-secondary/30"
    >
      <div className="mt-1 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <div className="space-y-1">
        <span className="font-medium italic text-primary">{project.name}</span>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
