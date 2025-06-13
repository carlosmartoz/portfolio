import Main from "@/components/Main";
import About from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
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
