// Components
import Main from "@/components/Main";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

// Page
export default function Home() {
  return (
    <>
      <Header />

      <Main>
        <Intro />

        <About />

        <Projects />

        <Contact />
      </Main>

      <Footer />
    </>
  );
}
