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
    subtitle: string;
    button: string;
  };
  about: {
    title: string;
    text1: string;
    text2: string;
    text3: string;
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
  contact: {
    text: string;
    title: string;
    button: string;
    subtitle: string;
  };
  footer: {
    text: string;
  };
}
