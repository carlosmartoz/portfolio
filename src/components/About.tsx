"use client";

import Button from "@/components/Button";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="flex min-h-svh flex-col justify-center gap-2 sm:gap-4"
      >
        <h1 className="font-inter text-light xs:text-4xl dark:text-dark text-3xl leading-tight font-semibold transition-all duration-[400ms] ease-in-out md:text-5xl lg:text-7xl lg:leading-none">
          Carlos Martínez
        </h1>

        <h2 className="font-inter text-gray xs:text-3xl dark:text-dark text-2xl leading-tight font-semibold transition-all duration-[400ms] ease-in-out md:text-5xl lg:text-7xl lg:leading-none">
          Front-End Developer
        </h2>

        <p className="font-fira text-gray xs:text-base dark:text-dark text-sm font-normal transition-all duration-[400ms] ease-in-out md:w-[90%] lg:w-[80%]">
          Front-End Developer con experiencia en Next.js y React.js. Apasionado
          por crear interfaces web con un estilo único.
        </p>

        <p className="font-fira text-gray xs:text-base dark:text-dark text-sm font-normal transition-all duration-[400ms] ease-in-out md:w-[90%] lg:w-[80%]">
          Especializado en transformar diseños de Figma a código de alta
          fidelidad, integrar APIs y optimizar interacciones en tiempo real.
          Comprometido con la creación de interfaces eficientes y de alta
          calidad.
        </p>

        <section className="mt-2 self-start">
          <Button link="#projects" text="Mis projectos" />
        </section>
      </section>
    </>
  );
}
