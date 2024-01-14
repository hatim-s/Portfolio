import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <div style={{ background: "#10091D" }}>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default App;
