export interface Project {
  name: string;
  description: string;
  href: string;
}

export interface Link {
  label: string;
  href: string;
}

const email = "carlosmrtzo@gmail.com";
const linkedin = "https://www.linkedin.com/in/carlosmartoz/";
const github = "https://github.com/carlosmartoz";

export const site = {
  url: "https://carlosmartoz.com",
  name: "Carlos Martínez",
  role: "Frontend Engineer",
  email,
  description:
    "Frontend developer specialized in React, Next.js and TypeScript, building efficient and scalable web applications.",
  bio: "I currently work at a consulting firm as a frontend engineer for a client in the banking sector, where I contribute to the development of efficient and scalable solutions.",
  projectsIntro:
    "Occasionally, I work on personal projects to continue improving my skills and stay up to date with the latest trends in the technology world.",
  /** Headline stack, shown on the social preview image. */
  stack: ["React", "Next.js", "TypeScript"],
  profiles: [linkedin, github],
} as const;

export const links: Link[] = [
  { label: "Resume", href: "/resume.pdf" },
  { label: "E-mail", href: `mailto:${email}` },
  { label: "LinkedIn", href: linkedin },
  { label: "GitHub", href: github },
];

export const skills: string[] = [
  "HTML5",
  "CSS3",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
  "Claude Code",
  "Git",
];

export const projects: Project[] = [
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
];
