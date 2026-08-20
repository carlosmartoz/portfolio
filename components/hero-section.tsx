import { site } from "@/lib/site";
import { ExternalLink } from "@/components/external-link";

export function HeroSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-1">
        <h1 className="text-base font-medium tracking-tight">{site.name}</h1>

        <p className="text-muted">{site.role}</p>
      </div>

      <p className="leading-relaxed text-muted">{site.bio}</p>

      <nav aria-label="Profiles" className="flex flex-wrap gap-x-5 gap-y-2">
        {site.links.map(({ label, href }) => (
          <ExternalLink key={label} href={href}>
            {label}
          </ExternalLink>
        ))}
      </nav>
    </section>
  );
}
