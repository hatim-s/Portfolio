const Hero = () => {
  return (
    <div className="hero-section items-center mt-48 mb-96 mx-12 md:mx-28 lg:mx-32 xl:mx-40">
      <h1 className="text-white text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        i write code to
      </h1>
      <h1
        className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600 text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
        style={{
          letterSpacing: "10",
        }}
      >
        make a change
      </h1>
      <div className="divider-line h-10 flex items-center gap-8">
        <div
          style={{ width: 435.16, height: 0, border: "4px #E45FFD solid" }}
        ></div>
        <div
          className="text-2xl text-white sm:text-3xl xl:text-5xl tracking-wide xl:tracking-widest"
          style={{ fontFamily: "Tabular, monospace" }}
        >
          &lt;coder&gt;
        </div>
      </div>
      <div
        className="text-xl text-white sm:text-2xl xl:text-3xl"
        style={{ fontFamily: "Tabular, monospace" }}
      >
        Get to know more about me
      </div>
    </div>
  );
};

export default Hero;
