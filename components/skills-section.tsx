import { skills } from "@/lib/skills";

export function SkillsSection() {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-medium text-primary">Skills</h2>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-border bg-secondary/40 px-3 py-1 text-sm text-secondary-foreground transition-colors duration-300 hover:bg-secondary"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
