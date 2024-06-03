// Types
import { type Lenguage } from "@/types/lenguage";

// Util
export const spanish: Lenguage = {
  header: {
    lenguage: "EN",
    button: "Curriculum",
    logo: "Logo de mi portafolio",
    link: "/curriculum-carlos-martinez.pdf",
    menu: [
      { text: "Introducción", link: "#introduction" },
      { text: "Acerca de mí", link: "#about" },
      { text: "Proyectos", link: "#projects" },
    ],
    ariaLabelLenguage: "Botón para cambiar a inglés",
    ariaLabelLight: "Botón para cambiar a modo claro",
    ariaLabelDark: "Botón para cambiar a modo oscuro",
    ariaLabelMenu: "Botón de menú para dispositivos móviles",
  },
  intro: {
    button: "Sobre mi",
    subtitle: "Hola, mi nombre es",
    text: "Soy un desarrollador Front-End apasionado por crear páginas web <br /> que destacan por su estilo único.",
  },
  about: {
    resume: "Curriculum",
    title: "Acerca de mí",
    resumeLink: "/curriculum-carlos-martinez.pdf",
    ariaLabelGithub: "Enlace a mi perfil de Github",
    ariaLabelLinkedin: "Enlace a mi perfil de LinkedIn",
    text1:
      "Soy Desarrollador Front-End y graduado en Ingeniería Informática. Me especializo en la creación y maquetación de interfaces de usuario para la web utilizando tecnologías como HTML5, CSS3, JavaScript, TypeScript, React.js/Next.js, entre otras. También tengo experiencia en conceptualizar diseños web con Figma.",
    text2:
      "Además, he trabajado en el Back-End para complementar el Front-End con Node.js y ocasionalmente en proyectos con WordPress.",
    text3:
      "Estas son las tecnologías con las que he estado trabajando recientemente:",
  },
  projects: {
    title: "Proyectos",
    ariaLabelGithub: "Enlace al Github del proyecto",
    ariaLabelWebsite: "Enlace al sitio web del proyecto",
    cards: [
      {
        title: "Hackers news",
        technologies: ["React.js", "TypeScript"],
        website: "https://hackers-news-ruby.vercel.app/",
        github: "https://github.com/carlosamarto/hackers-news",
        text: "Aplicación web para prueba técnica, visualiza artículos mediante una API y permite guardar artículos como favoritos.",
      },
      {
        title: "Task app",
        technologies: ["React.js", "JavaScript"],
        website: "https://task-app-six-chi.vercel.app/",
        github: "https://github.com/carlosamarto/task-app",
        text: "Aplicación web para prueba técnica en la cual se crea un gestor de tareas, donde puedes crear, editar y eliminar tus tareas.",
      },
      {
        title: "Pokédex",
        website: "https://pokedex-vert-nine.vercel.app/",
        github: "https://github.com/carlosamarto/pokedex",
        technologies: ["React.js", "JavaScript"],
        text: "Aplicación web para crear una Pokédex en la cual se consume una API y puedes ver la información de cada Pokémon.",
      },
      {
        title: "Bill calculator",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        website: "https://bill-calculator-phi.vercel.app/",
        github: "https://github.com/carlosmartoz/bill-calculator",
        text: "Aplicación web desarrollada para una prueba técnica, destinada a calcular facturas con precisión y eficiencia.",
      },
      {
        github: "",
        title: "Mindara",
        website: "https://app.mindara.ai/",
        technologies: ["React.js", "Next.js", "TypeScript"],
        text: "Proyecto en el que colaboré con una agencia en el Front-end, integrando inteligencia artificial para crear un registro de usuarios.",
      },
      {
        github: "",
        title: "Canal usa",
        website: "https://ia.canalusa.com.br/",
        technologies: ["React.js", "Next.js", "TypeScript"],
        text: "Proyecto en el que colaboré con una agencia en el Front-end, integrando inteligencia artificial para consultar la programación de un canal.",
      },
      {
        github: "",
        title: "Koins",
        website: "https://koins.run/",
        technologies: ["React.js", "TypeScript"],
        text: "Proyecto en el que colaboré con una agencia en el Front-end, integrando blockchain y desarrollando componentes y pantallas.",
      },
      {
        github: "",
        title: "Love",
        website: "https://lovelct.com/",
        technologies: ["React.js", "TypeScript", "Tailwind CSS"],
        text: "Proyecto freelance en el cual construí una página web profesional para un cliente, mostrando detalladamente sus servicios y contacto.",
      },
      {
        github: "",
        title: "Dominique",
        technologies: ["JavaScript", "WordPress"],
        website: "https://dominiquepanczuch.com/",
        text: "Proyecto para cliente, desarrollando su portafolio para mostrar diseño, fotografía y logotipos de manera profesional.",
      },
      {
        github: "",
        title: "Oshica",
        technologies: ["JavaScript", "WordPress"],
        website: "https://oshica.com.ve/",
        text: "Proyecto para cliente, desarrollo de página web para empresa de procesos industriales mostrando productos y contacto.",
      },
      {
        github: "",
        title: "artisanNow",
        technologies: ["JavaScript", "WordPress"],
        website: "https://artisannow.org/",
        text: "Proyecto para cliente, desarrollo de página web para emprendimiento de artesanía, con cursos y NFTs.",
      },
    ],
  },
  footer: {
    text: "Creado por Carlos Martínez.",
  },
};
