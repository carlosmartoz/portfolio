// Next
import dynamic from "next/dynamic";

// Components
import Main from "@/components/Main";
import About from "@/components/About";
import Header from "@/components/Header";

// Dynamic components
const Footer = dynamic(() => import("@/components/Footer"));
const Contact = dynamic(() => import("@/components/Contact"));
const Projects = dynamic(() => import("@/components/Projects"));

// Page
export default function Home() {
  // Return
  return (
    <>
      <Header />

      <Main>
        <About />

        <Projects />

        <Contact />
      </Main>

      <Footer />
    </>
  );
}
