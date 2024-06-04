// Types
export interface Lenguage {
  header: {
    link: string;
    logo: string;
    button: string;
    lenguage: string;
    ariaLabelDark: string;
    ariaLabelMenu: string;
    ariaLabelLight: string;
    ariaLabelLenguage: string;
    menu: Array<{ text: string; link: string }>;
  };
  intro: {
    text: string;
    quote: string;
    button: string;
    subtitle: string;
  };
  about: {
    title: string;
    text1: string;
    text2: string;
    text3: string;
    resume: string;
    resumeLink: string;
    ariaLabelGithub: string;
    ariaLabelLinkedin: string;
  };
  projects: {
    title: string;
    ariaLabelGithub: string;
    ariaLabelWebsite: string;
    cards: Array<{
      text: string;
      title: string;
      github: string;
      website: string;
      technologies: string[];
    }>;
  };
  footer: {
    text: string;
  };
}
