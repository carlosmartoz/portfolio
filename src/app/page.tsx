// Next
import Link from "next/link";

// Components
import Main from "@/components/Main";
import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

// React icons
import { IoIosGitBranch } from "react-icons/io";

// Page
export default function Home() {
  // Return
  return (
    <>
      <Header />

      <Main>
        <About />

        <Projects />
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
