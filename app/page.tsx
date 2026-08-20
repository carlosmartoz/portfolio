import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center gap-12 px-6 py-20 text-sm">
      <main className="flex flex-col gap-12">
        <HeroSection />

        <SkillsSection />

        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
