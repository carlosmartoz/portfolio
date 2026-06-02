export interface Project {
  name: string;
  link: string;
  description: string;
}

export const projects: Project[] = [
  {
    name: "Mindara",
    link: "https://app.mindara.ai/",
    description:
      "I led the front-end development of Mindara, integrating APIs, managing global state, and developing an AI-powered chat for the platform.",
  },
  {
    name: "Expense Tracker",
    link: "https://expense-tracker-three-topaz-90.vercel.app/",
    description:
      "I built Expense Tracker, a personal finance app to record transactions, organize them by category, and visualize spending through an interactive dashboard.",
  },
];
