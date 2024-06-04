// Types
import { type Lenguage } from "@/types/lenguage";

// Util
export const english: Lenguage = {
  header: {
    lenguage: "ES",
    button: "Resume",
    logo: "My portfolio logo",
    link: "/resume-carlos-martinez.pdf",
    ariaLabelDark: "Button to switch to dark mode",
    ariaLabelMenu: "button for mobile devices menu",
    ariaLabelLenguage: "Button to switch to spanish",
    ariaLabelLight: "Button to switch to light mode",
    menu: [
      { text: "Introduction", link: "#introduction" },
      { text: "About Me", link: "#about" },
      { text: "Projects", link: "#projects" },
    ],
  },
  intro: {
    button: "Contact Me",
    text: "Hello, my name is",
    subtitle: "I'm a Front-End Developer and a Informatics Engineering graduate. I specialize in creating and designing user interfaces for the web",
    quote: "I'm a Front-End Developer passionate about creating web pages <br /> that stand out for their unique style.",
  },
  about: {
    resume: "Resume",
    title: "About Me",
    resumeLink: "/resume-carlos-martinez.pdf",
    ariaLabelGithub: "Link to my Github profile",
    ariaLabelLinkedin: "Link to my LinkedIn profile",
    text1:
      "I currently work with technologies such as HTML5, CSS3, JavaScript, TypeScript, React.js / Next.js, among others. I also have experience in conceptualizing web designs with Figma.",
    text2:
      "Additionally, I have worked on the Back-End to complement the Front-End with Node.js and occasionally on projects with WordPress.",
    text3:
      "Here are some of the technologies that I have been working with recently:",
  },
  projects: {
    title: "Projects",
    ariaLabelGithub: "Project's Github link",
    ariaLabelWebsite: "Project's website link",
    cards: [
      {
        title: "Hackers news",
        technologies: ["React.js", "TypeScript"],
        website: "https://hackers-news-ruby.vercel.app/",
        github: "https://github.com/carlosmartoz/hackers-news",
        text: "Web application for a technical test, displays articles via an API and allows saving articles as favorites.",
      },
      {
        title: "Task app",
        technologies: ["React.js", "JavaScript"],
        website: "https://task-app-six-chi.vercel.app/",
        github: "https://github.com/carlosmartoz/task-app",
        text: "Web application for a technical test where a task manager is created, allowing you to create, edit, and delete your tasks.",
      },
      {
        title: "Pokédex",
        website: "https://pokedex-vert-nine.vercel.app/",
        github: "https://github.com/carlosmartoz/pokedex",
        technologies: ["React.js", "JavaScript"],
        text: "A web application to create a Pokédex where an API is consumed, allowing you to see the information of each Pokémon.",
      },
      {
        title: "Bill calculator",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        website: "https://bill-calculator-phi.vercel.app/",
        github: "https://github.com/carlosmartoz/bill-calculator",
        text: "Web application developed for a technical test, designed to calculate invoices accurately and efficiently.",
      },
      {
        github: "",
        title: "Mindara",
        website: "https://app.mindara.ai/",
        technologies: ["React.js", "Next.js", "TypeScript"],
        text: "Project where I collaborated with an agency on the Front-end, integrating artificial intelligence to create a user registration system.",
      },
      {
        github: "",
        title: "Canal usa",
        website: "https://ia.canalusa.com.br/",
        technologies: ["React.js", "Next.js", "TypeScript"],
        text: "Project where I collaborated with an agency on the Front-end, integrating artificial intelligence to check a channel's schedule.",
      },
      {
        github: "",
        title: "Koins",
        website: "https://koins.run/",
        technologies: ["React.js", "TypeScript"],
        text: "Project where I collaborated with an agency on the Front-end, integrating blockchain and developing components and screens.",
      },
      {
        github: "",
        title: "Love",
        website: "https://lovelct.com/",
        technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        text: "Freelance project in which I built a professional website for a client, showcasing their services and detailed contact information.",
      },
      {
        github: "",
        title: "Dominique",
        technologies: ["JavaScript", "WordPress"],
        website: "https://dominiquepanczuch.com/",
        text: "Project for a client, developing their portfolio to showcase design, photography, and logos professionally.",
      },
      {
        github: "",
        title: "Oshica",
        technologies: ["JavaScript", "WordPress"],
        website: "https://oshica.com.ve/",
        text: "Project for client, website development for industrial processes company showcasing products and contact information.",
      },
      {
        github: "",
        title: "artisanNow",
        technologies: ["JavaScript", "WordPress"],
        website: "https://artisannow.org/",
        text: "Project for client, website development for craftsmanship entrepreneurship, featuring courses and NFTs.",
      },
    ],
  },
  footer: {
    text: "Created by Carlos Martínez.",
  },
};
