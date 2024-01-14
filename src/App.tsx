import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Header />
      <div style={{ background: "#10091D" }}>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </div>
    </>
  );
};

export default App;
