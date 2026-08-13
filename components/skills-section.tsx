import { skills } from "@/lib/site";

export function SkillsSection() {
  return (
    <section className="space-y-3">
      <h2 className="font-medium">Skills</h2>

      <ul className="flex flex-wrap gap-x-2 gap-y-1 text-muted">
        {skills.map((skill) => (
          <li
            key={skill}
            className="after:ml-2 after:text-accent after:content-['·'] last:after:content-none"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
