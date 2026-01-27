import Link from "next/link";
import { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex gap-2">
      <div className="mt-1 text-muted-foreground">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <div className="space-y-1">
        <Link
          target="_blank"
          href={project.link}
          rel="noopener noreferrer"
          className="font-medium italic text-primary hover:text-primary/80 transition-all duration-300"
        >
          {project.name}
        </Link>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
    </div>
  );
}
