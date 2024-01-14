import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-blue-500">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
