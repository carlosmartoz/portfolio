export const site = {
  url: "https://carlosmartoz.com",
  name: "Carlos Martínez",
  role: "Frontend Engineer",
  email: "carlosmrtzo@gmail.com",
  linkedin: "https://www.linkedin.com/in/carlosmartoz/",
  github: "https://github.com/carlosmartoz",
  description:
    "Frontend developer specialized in React, Next.js and TypeScript, building efficient and scalable web applications.",
  bio: "I currently work at a consulting firm as a frontend engineer for a client in the banking sector, where I contribute to the development of efficient and scalable solutions.",
  projectsIntro:
    "Occasionally, I work on personal projects to continue improving my skills and stay up to date with the latest trends in the technology world.",
  stack: ["React", "Next.js", "TypeScript"],
  get title() {
    return `${this.name} - ${this.role}`;
  },
  get profiles() {
    return [this.linkedin, this.github];
  },
  get links() {
    return [
      { label: "Resume", href: "/resume.pdf" },
      { label: "LinkedIn", href: this.linkedin },
      { label: "GitHub", href: this.github },
    ];
  },
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "REST APIs",
    "Claude Code",
    "Git",
  ],
  projects: [
    {
      name: "Mindara",
      href: "https://app.mindara.ai/",
      description:
        "I led the front-end development of Mindara, integrating APIs, managing global state, and developing an AI-powered chat for the platform.",
    },
    {
      name: "Expense Tracker",
      href: "https://expense-tracker-three-topaz-90.vercel.app/",
      description:
        "I built Expense Tracker, a personal finance app to record transactions, organize them by category, and visualize spending through an interactive dashboard.",
    },
  ],
} as const;

export type Link = (typeof site.links)[number];
export type Project = (typeof site.projects)[number];
