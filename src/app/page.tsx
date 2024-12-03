// Components
import Main from "@/components/Main";
import About from "@/components/About";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

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

      <Footer />
    </>
  );
}
