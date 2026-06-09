import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-svh bg-background text-foreground flex flex-col justify-center items-center">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 md:py-24 space-y-10">
        <div className="animate-fade-up">
          <HeroSection />
        </div>

        <div className="animate-fade-up [animation-delay:120ms]">
          <SkillsSection />
        </div>

        <div className="animate-fade-up [animation-delay:240ms]">
          <ProjectsSection />
        </div>

        <div className="animate-fade-up [animation-delay:360ms]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
