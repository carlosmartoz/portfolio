// Client component
"use client";

// Components
import Card from "@/components/Card";

// Next intl
import { useTranslations } from "next-intl";

// Types
import { type Project } from "@/types/project";

// Component
export default function Projects() {
  // Translations
  const t = useTranslations();

  // Return
  return (
    <>
      <section id="projects" className="flex min-h-svh flex-col gap-4 md:gap-8">
        <h2 className="font-inter text-xl font-semibold text-light xs:text-2xl md:text-3xl lg:text-4xl dark:text-dark">
          {t.raw("links")[1].label}
        </h2>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.raw("projects").map((project: Project) => (
            <li key={project.title}>
              <Card {...project} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
