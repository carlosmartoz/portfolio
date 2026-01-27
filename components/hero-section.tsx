import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="space-y-2">
      <h1 className="text-2xl font-bold text-primary mb-6">Carlos Martínez</h1>

      <h2 className="text-lg font-medium text-primary">Frontend Developer</h2>

      <p className="text-muted-foreground leading-relaxed">
        I currently work at a consulting firm as a frontend developer for a
        client in the banking sector, where I contribute to the development of
        efficient and scalable solutions.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <Button asChild variant="default">
          <Link target="_blank" rel="noopener noreferrer" href="/resume.pdf/">
            Resume
          </Link>
        </Button>

        <Button asChild variant="secondary">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:carlosmrtzo@gmail.com"
          >
            E-mail
          </Link>
        </Button>

        <Button asChild variant="secondary">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/carlosmartoz/"
          >
            LinkedIn
          </Link>
        </Button>

        <Button asChild variant="secondary">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/carlosmartoz"
          >
            GitHub
          </Link>
        </Button>
      </div>
    </section>
  );
}
