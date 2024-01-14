const Hero = () => {
  return (
    <div className="hero-section h-screen flex items-center py-32 px-10">
      <div className="text-section flex-1 px-10">
        <div className="flex flex-wrap gap-6 items-center">
          <h1 className="flex-shrink-0 flex-grow-0 text-9xl">Hi</h1>
          <h1 className="flex-shrink-0 flex-grow-0 text-8xl">🙋‍♂️</h1>
        </div>
        <div>
          <h1 className="text-9xl">I am Hatim</h1>
        </div>
        <div className="divider-line h-10 flex items-center gap-8">
          <div
            className="bg-black h-px w-200"
            style={{
              width: "40vw",
            }}
          ></div>
          <div className="text-2xl">&lt;coder&gt;</div>
        </div>
        <div className="text-xl">Get to know more about me</div>
      </div>
      <div className="hero-image flex-1 p-10">
        <img src="https://placehold.co/600x400" />
      </div>
    </div>
  );
};

export default Hero;
