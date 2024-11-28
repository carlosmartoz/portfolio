// Next
import Link from "next/link";

// Components
import Main from "@/components/Main";
import About from "@/components/About";
import Header from "@/components/Header";

// React icons
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { IoIosGitBranch } from "react-icons/io";

// Page
export default function Home() {
  // Return
  return (
    <>
      <Header />

      <Main>
        <About />

        <section className="flex min-h-svh flex-col gap-8">
          <h2 className="font-inter text-2xl font-semibold text-light md:text-3xl lg:text-4xl">
            Projects
          </h2>

          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <li>
              <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[400ms] ease-in-out hover:-translate-y-2">
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
                        <FaGithub className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/"
                        target="_blank"
                        aria-label="Website"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>
                  </ul>
                </header>

                <section>
                  <p className="font-fira text-base font-normal text-gray">
                    Web application developed for a technical test, designed to
                    calculate invoices accurately and efficiently.
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
              <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[400ms] ease-in-out hover:-translate-y-2">
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
                        <FaGithub className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/"
                        target="_blank"
                        aria-label="Website"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>
                  </ul>
                </header>

                <section>
                  <p className="font-fira text-base font-normal text-gray">
                    Web application developed for a technical test, designed to
                    calculate invoices accurately and efficiently.
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
              <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[400ms] ease-in-out hover:-translate-y-2">
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
                        <FaGithub className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/"
                        target="_blank"
                        aria-label="Website"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>
                  </ul>
                </header>

                <section>
                  <p className="font-fira text-base font-normal text-gray">
                    Web application developed for a technical test, designed to
                    calculate invoices accurately and efficiently.
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
              <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[400ms] ease-in-out hover:-translate-y-2">
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
                        <FaGithub className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/"
                        target="_blank"
                        aria-label="Website"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>
                  </ul>
                </header>

                <section>
                  <p className="font-fira text-base font-normal text-gray">
                    Web application developed for a technical test, designed to
                    calculate invoices accurately and efficiently.
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
              <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[400ms] ease-in-out hover:-translate-y-2">
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
                        <FaGithub className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/"
                        target="_blank"
                        aria-label="Website"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>
                  </ul>
                </header>

                <section>
                  <p className="font-fira text-base font-normal text-gray">
                    Web application developed for a technical test, designed to
                    calculate invoices accurately and efficiently.
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
              <section className="relative flex h-full flex-col justify-between gap-6 border border-red p-4 transition-all duration-[400ms] ease-in-out hover:-translate-y-2">
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
                        <FaGithub className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/"
                        target="_blank"
                        aria-label="Website"
                        rel="noopener noreferrer"
                      >
                        <FiExternalLink className="text-xl text-light transition-all duration-[400ms] ease-in-out hover:text-red" />
                      </Link>
                    </li>
                  </ul>
                </header>

                <section>
                  <p className="font-fira text-base font-normal text-gray">
                    Web application developed for a technical test, designed to
                    calculate invoices accurately and efficiently.
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
      </Main>

      <footer className="flex w-full items-center justify-center p-12 lg:p-6">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/carlosmartoz/portfolio"
          className="flex gap-2 font-fira text-base font-normal text-gray transition-all duration-[400ms] ease-in-out hover:text-red"
        >
          <IoIosGitBranch className="text-2xl text-red" />
          Created by Carlos Martínez.
        </Link>
      </footer>
    </>
  );
}
