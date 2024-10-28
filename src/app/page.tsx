import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { VscColorMode } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import { IoIosGitBranch, IoMdMenu } from "react-icons/io";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-dark px-8 py-6">
        <Link href="/" title="Logo" aria-label="Logo">
          <Logo width={56} height={56} />
        </Link>

        <section className="hidden items-center gap-8 lg:flex xl:gap-12">
          <nav>
            <ul className="flex items-center justify-between gap-4">
              <li className="flex items-center gap-4">
                <Link
                  href="/"
                  className="font-fira text-base font-normal text-gray transition-all duration-[200ms] ease-in-out hover:text-red"
                >
                  About
                </Link>

                <span className="text-red" aria-label="Divider">
                  -
                </span>
              </li>

              <li className="flex items-center gap-4">
                <Link
                  href="/"
                  className="font-fira text-base font-normal text-gray transition-all duration-[200ms] ease-in-out hover:text-red"
                >
                  Experience
                </Link>

                <span className="text-red" aria-label="Divider">
                  -
                </span>
              </li>

              <li className="flex items-center gap-4">
                <Link
                  href="/"
                  className="font-fira text-base font-normal text-gray transition-all duration-[200ms] ease-in-out hover:text-red"
                >
                  Projects
                </Link>

                <span className="text-red" aria-label="Divider">
                  -
                </span>
              </li>

              <li>
                <Button
                  external
                  text="Resume"
                  link="/carlos-martinez-resume.pdf"
                />
              </li>
            </ul>
          </nav>

          <section className="flex items-center gap-4">
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  target="_blank"
                  aria-label="Github"
                  rel="noopener noreferrer"
                  href="https://github.com/carlosmartoz"
                  className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red"
                >
                  <FaGithub />
                </Link>
              </li>

              <li>
                <Link
                  target="_blank"
                  aria-label="Linkedin"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/carlosmartoz"
                  className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red"
                >
                  <FaLinkedin />
                </Link>
              </li>

              <li>
                <Link
                  target="_blank"
                  aria-label="Email"
                  rel="noopener noreferrer"
                  href="mailto:carlosmrtzo@gmail.com"
                  className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red"
                >
                  <FaRegEnvelope />
                </Link>
              </li>
            </ul>

            <span className="text-red" aria-label="Divider">
              -
            </span>

            <ul className="relative z-50 flex items-center gap-2">
              <li>
                <button
                  type="button"
                  aria-label="Spanish"
                  className="font-fira text-lg font-normal text-light transition-all duration-[200ms] ease-in-out hover:text-red"
                >
                  ES
                </button>
              </li>

              <li>
                <button
                  type="button"
                  aria-label="Light mode"
                  className="flex items-center"
                >
                  <VscColorMode className="rotate-180 text-2xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                </button>
              </li>
            </ul>
          </section>
        </section>

        <button className="lg:hidden">
          <IoMdMenu className="text-4xl text-red" />
        </button>
      </header>

      <main className="min-h-svh">
        <article className="relative mx-auto min-h-svh w-full px-6 lg:max-w-5xl xl:px-0">
          <section className="flex min-h-svh flex-col justify-center gap-4">
            <h3 className="font-fira text-lg font-normal text-gray">
              Hello, my name is
            </h3>

            <h1 className="font-inter text-3xl font-semibold text-light md:text-5xl lg:text-7xl">
              Carlos Martínez
            </h1>

            <h2 className="font-inter text-3xl font-semibold text-gray md:text-5xl lg:text-7xl">
              I create cool web interfaces
            </h2>

            <p className="font-fira text-base font-normal text-gray lg:w-3/4">
              Front-End Developer with over 2 years of experience specializing
              in creating and designing user interfaces for the web using
              technologies such as React.js, Next.js, JavaScript, TypeScript,
              and Tailwind CSS. I also have experience using Figma for interface
              design.
            </p>
          </section>

          <section className="flex min-h-svh flex-col gap-8">
            <h2 className="font-inter text-2xl font-semibold text-light md:text-3xl lg:text-4xl">
              Projects
            </h2>

            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <li>
                <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[200ms] ease-in-out hover:-translate-y-2">
                  <header className="flex items-center justify-between">
                    <Link
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-fira text-lg font-semibold text-light md:text-xl"
                    >
                      Web
                    </Link>

                    <ul className="flex items-center gap-3">
                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Github"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Website"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>
                    </ul>
                  </header>

                  <section>
                    <p className="font-fira text-base font-normal text-gray">
                      Web application developed for a technical test, designed
                      to calculate invoices accurately and efficiently.
                    </p>
                  </section>

                  <footer>
                    <ul className="flex flex-wrap gap-3">
                      <li className="font-fira text-sm font-normal text-light">
                        HTML5
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        CSS3
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        JavaScript
                      </li>
                    </ul>
                  </footer>
                </section>
              </li>

              <li>
                <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[200ms] ease-in-out hover:-translate-y-2">
                  <header className="flex items-center justify-between">
                    <Link
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-fira text-lg font-semibold text-light md:text-xl"
                    >
                      Web
                    </Link>

                    <ul className="flex items-center gap-3">
                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Github"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Website"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>
                    </ul>
                  </header>

                  <section>
                    <p className="font-fira text-base font-normal text-gray">
                      Web application developed for a technical test, designed
                      to calculate invoices accurately and efficiently.
                    </p>
                  </section>

                  <footer>
                    <ul className="flex flex-wrap gap-3">
                      <li className="font-fira text-sm font-normal text-light">
                        HTML5
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        CSS3
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        JavaScript
                      </li>
                    </ul>
                  </footer>
                </section>
              </li>

              <li>
                <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[200ms] ease-in-out hover:-translate-y-2">
                  <header className="flex items-center justify-between">
                    <Link
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-fira text-lg font-semibold text-light md:text-xl"
                    >
                      Web
                    </Link>

                    <ul className="flex items-center gap-3">
                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Github"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Website"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>
                    </ul>
                  </header>

                  <section>
                    <p className="font-fira text-base font-normal text-gray">
                      Web application developed for a technical test, designed
                      to calculate invoices accurately and efficiently.
                    </p>
                  </section>

                  <footer>
                    <ul className="flex flex-wrap gap-3">
                      <li className="font-fira text-sm font-normal text-light">
                        HTML5
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        CSS3
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        JavaScript
                      </li>
                    </ul>
                  </footer>
                </section>
              </li>

              <li>
                <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[200ms] ease-in-out hover:-translate-y-2">
                  <header className="flex items-center justify-between">
                    <Link
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-fira text-lg font-semibold text-light md:text-xl"
                    >
                      Web
                    </Link>

                    <ul className="flex items-center gap-3">
                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Github"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Website"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>
                    </ul>
                  </header>

                  <section>
                    <p className="font-fira text-base font-normal text-gray">
                      Web application developed for a technical test, designed
                      to calculate invoices accurately and efficiently.
                    </p>
                  </section>

                  <footer>
                    <ul className="flex flex-wrap gap-3">
                      <li className="font-fira text-sm font-normal text-light">
                        HTML5
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        CSS3
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        JavaScript
                      </li>
                    </ul>
                  </footer>
                </section>
              </li>

              <li>
                <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[200ms] ease-in-out hover:-translate-y-2">
                  <header className="flex items-center justify-between">
                    <Link
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-fira text-lg font-semibold text-light md:text-xl"
                    >
                      Web
                    </Link>

                    <ul className="flex items-center gap-3">
                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Github"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Website"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>
                    </ul>
                  </header>

                  <section>
                    <p className="font-fira text-base font-normal text-gray">
                      Web application developed for a technical test, designed
                      to calculate invoices accurately and efficiently.
                    </p>
                  </section>

                  <footer>
                    <ul className="flex flex-wrap gap-3">
                      <li className="font-fira text-sm font-normal text-light">
                        HTML5
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        CSS3
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        JavaScript
                      </li>
                    </ul>
                  </footer>
                </section>
              </li>

              <li>
                <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[200ms] ease-in-out hover:-translate-y-2">
                  <header className="flex items-center justify-between">
                    <Link
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-fira text-lg font-semibold text-light md:text-xl"
                    >
                      Web
                    </Link>

                    <ul className="flex items-center gap-3">
                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Github"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/"
                          target="_blank"
                          aria-label="Website"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink className="text-xl text-light transition-all duration-[200ms] ease-in-out hover:text-red" />
                        </Link>
                      </li>
                    </ul>
                  </header>

                  <section>
                    <p className="font-fira text-base font-normal text-gray">
                      Web application developed for a technical test, designed
                      to calculate invoices accurately and efficiently.
                    </p>
                  </section>

                  <footer>
                    <ul className="flex flex-wrap gap-3">
                      <li className="font-fira text-sm font-normal text-light">
                        HTML5
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        CSS3
                      </li>

                      <li className="font-fira text-sm font-normal text-light">
                        JavaScript
                      </li>
                    </ul>
                  </footer>
                </section>
              </li>
            </ul>
          </section>
        </article>
      </main>

      <footer className="flex w-full items-center justify-center p-12 lg:p-6">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/carlosmartoz/portfolio"
          className="flex gap-2 font-fira text-base font-normal text-gray transition-all duration-[200ms] ease-in-out hover:text-red"
        >
          <IoIosGitBranch className="text-2xl text-red" />
          Created by Carlos Martínez.
        </Link>
      </footer>
    </>
  );
}
