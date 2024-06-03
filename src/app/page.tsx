// Components
import Main from "@/components/Main";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
      </Main>

      <Footer />
    </>
  );
}
