// Home page component
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-svh w-full px-4 py-12 max-w-2xl mx-auto gap-6">
      <section className="w-full flex flex-col gap-2">
        <h1 className="text-base leading-none font-fira text-light font-bold">
          Carlos Martínez
        </h1>

        <h2 className="text-gray font-fira text-sm font-medium leading-none">
          Desarrollador Front-End
        </h2>

        <section className="mt-2 flex flex-col gap-2">
          <p className="text-gray font-fira font-normal text-sm">
            Vivo en Argentina. Actualmente trabajo en Tecnosoftware, una
            consultora de software, en donde me enfoco en el desarrollo,
            analisis y mejoras de aplicaciones basadas en la web.
          </p>
        </section>
      </section>

      <section className="w-full flex flex-col gap-4">
        <h3 className="text-base leading-none font-fira text-light font-medium">
          Links de interés
        </h3>

        <ul className="flex flex-col gap-1">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="/cv-carlos-martinez.pdf"
              className="text-gray font-fira font-medium text-sm hover:underline hover:text-light transition-colors duration-200"
            >
              — Curriculum
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:carlosmartoz@gmail.com"
              className="text-gray font-fira font-medium text-sm hover:underline hover:text-light transition-colors duration-200"
            >
              — E-mail
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/carlosmartoz/"
              className="text-gray font-fira font-medium text-sm hover:underline hover:text-light transition-colors duration-200"
            >
              — LinkedIn
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/carlosmartoz"
              className="text-gray font-fira font-medium text-sm hover:underline hover:text-light transition-colors duration-200"
            >
              — Github
            </a>
          </li>
        </ul>
      </section>

      <section className="w-full flex flex-col gap-4">
        <h3 className="text-base leading-none font-fira text-light font-medium">
          Proyectos
        </h3>

        <ul className="flex flex-col gap-1">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/carlosmartoz/portfolio"
              className="text-gray font-fira font-medium text-sm hover:underline hover:text-light transition-colors duration-200"
            >
              — Portfolio Este sitio web, hecho con Next.js y Tailwind CSS
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/carlosmartoz/nextjs-blog"
              className="text-gray font-fira font-medium text-sm hover:underline hover:text-light transition-colors duration-200"
            >
              — Next.js Blog Blog personal sobre desarrollo web
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/carlosmartoz/mini-projects"
              className="text-gray font-fira font-medium text-sm hover:underline hover:text-light transition-colors duration-200"
            >
              — Mini Projects Colección de pequeños proyectos y experimentos
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
