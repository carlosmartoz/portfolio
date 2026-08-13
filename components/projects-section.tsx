import { ExternalLink } from "@/components/external-link";
import { projects, site } from "@/lib/site";

export function ProjectsSection() {
  return (
    <section className="space-y-3">
      <h2 className="font-medium">Projects</h2>

      <p className="leading-relaxed text-muted">{site.projectsIntro}</p>

      <ul className="space-y-4 pt-1">
        {projects.map(({ name, href, description }) => (
          <li key={name} className="space-y-1">
            <h3>
              <ExternalLink href={href} className="font-medium">
                {name}
              </ExternalLink>
            </h3>

            <p className="leading-relaxed text-muted">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
