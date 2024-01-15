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
      <div
        className="w-screen"
        style={{
          backgroundColor: "#10091D",
          // opacity: "1",
          // backgroundImage: "radial-gradient(#E45FFD 0.65px, #10091D 0.65px)",
          // backgroundSize: "13px 13px",
        }}
      >
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
