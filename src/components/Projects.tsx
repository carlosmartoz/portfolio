"use client";

import Card from "@/components/Card";
import { projects } from "@/utils/projects";
import { type Project } from "@/types/project";

export default function Projects() {
  return (
    <>
      <section id="projects" className="flex min-h-svh flex-col gap-4 md:gap-8">
        <h3 className="font-inter text-light xs:text-2xl dark:text-dark text-xl font-semibold md:text-3xl lg:text-4xl">
          Projects
        </h3>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: Project) => (
            <li key={project.title}>
              <Card {...project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
