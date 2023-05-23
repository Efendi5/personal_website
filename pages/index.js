import Navbar from "../components/Navbar";
import Start from "../components/Start";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Start />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
