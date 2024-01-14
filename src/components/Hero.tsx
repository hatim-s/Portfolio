const Hero = () => {
  return (
    <div className="hero-section grid grid-cols-3 grid-rows-2 items-center my-80 mx-40">
      <div className="text-section row-span-2 col-span-2 px-10">
        <div className="flex flex-wrap gap-6 items-center">
          <h1 className="flex-shrink-0 flex-grow-0 text-9xl text-white font-bold font-family-ClashDisplay-Bold">
            Hi
          </h1>
          <h1 className="flex-shrink-0 flex-grow-0 text-8xl">🙋‍♂️</h1>
        </div>
        <div>
          <h1
            className="text-9xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600"
            style={{
              fontWeight: "700",
              letterSpacing: "10",
            }}
          >
            I'm Hatim
          </h1>
        </div>
        <div className="divider-line h-10 flex items-center gap-8">
          <div
            style={{ width: 435.16, height: 0, border: "4px #E45FFD solid" }}
          ></div>
          <div className="text-2xl text-white">&lt;coder&gt;</div>
        </div>
        <div className="text-xl text-white">Get to know more about me</div>
      </div>
      <div className="hero-image row-span-2">
        <img src="https://placehold.co/400" />
      </div>
    </div>
  );
};

export default Hero;
