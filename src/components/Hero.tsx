import "./styles/Hero.css";

const Hero = () => {
  return (
    <div
      id="hero-section"
      className="items-center mt-48 mb-96 mx-12 md:mx-28 lg:mx-32 xl:ml-52 xl:mr-28"
      style={{
        zIndex: "10",
      }}
    >
      <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        i write code to
      </h1>
      <h1
        className="moving-gradient text-6xl md:text-7xl lg:text-8xl xl:text-9xl inline"
        style={{
          letterSpacing: "10",
        }}
      >
        make a change
      </h1>
      <div className="divider-line py-10 h-10 flex items-center gap-2 lg:gap-6 xl:gap-8">
        <div
          className="flex-shrink-1 hidden sm:flex"
          style={{
            width: "30vw",
            height: "8px",
            background: "linear-gradient(90deg, #e45ffd 0%, #542cf9 100%)",
          }}
        ></div>
        <div className="flex-grow-0 inline-flex flex-basis-content">
          <h2
            className="text-white text-2xl sm:text-3xl xl:text-5xl tracking-wide xl:tracking-widest"
            style={{
              fontFamily: "Tabular, monospace",
              borderRight: "3px solid",
              width: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              animation:
                "typing 2s steps(13) infinite alternate, cursor 0.4s step-end infinite alternate",
            }}
          >
            &lt;developer/&gt;&nbsp;
          </h2>
        </div>
      </div>
      <div
        className="text-xl text-white sm:text-2xl xl:text-2xl"
        style={{ fontFamily: "Tabular, monospace" }}
      >
        Impressed? ✨ Reach out to me here: 📩 hatimcodes@gmail.com
      </div>
    </div>
  );
};

export default Hero;
