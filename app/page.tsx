import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <main className="min-h-svh bg-background text-foreground flex flex-col justify-center items-center">
      <div className="mx-auto max-w-3xl px-4 py-16 md:py-24 space-y-10">
        <HeroSection />

        <ProjectsSection />
      </div>
    </main>
  );
}
