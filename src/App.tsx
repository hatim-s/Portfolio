import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import waves1 from "../src/assets/vectors/waves-1.png";
import waves2 from "../src/assets/vectors/waves-2.png";
import waves3 from "../src/assets/vectors/waves-3.png";
import waves4 from "../src/assets/vectors/waves-4.png";
import waves5 from "../src/assets/vectors/waves-5.png";

const App = () => {
  return (
    <>
      <div className="w-screen">
        <img
          src={waves1}
          className="absolute"
          style={{
            zIndex: "-1",
            top: "0vh",
            left: "0vw",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <img
          src={waves2}
          className="absolute"
          style={{
            zIndex: "-1",
            top: "100vh",
            left: "0px",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <img
          src={waves3}
          className="absolute"
          style={{
            zIndex: "-1",
            top: "150vh",
            left: "0vh",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <img
          src={waves4}
          className="absolute"
          style={{
            zIndex: "-1",
            top: "200vh",
            left: "0px",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <img
          src={waves5}
          className="absolute"
          style={{
            zIndex: "-1",
            top: "270vh",
            left: "0px",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <img
          src={waves3}
          className="absolute"
          style={{
            zIndex: "-1",
            top: "350vh",
            left: "0vh",
            width: "100%",
            objectFit: "cover",
          }}
        />

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
