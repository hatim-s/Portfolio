const Hero = () => {
  return (
    <div
      className="hero-section"
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        className="text-section"
        style={{
          flex: "1",
        }}
      >
        <div
          style={{
            display: "flex",
            flexShrink: 0,
            flexGrow: 0,
            flexWrap: "wrap",
          }}
        >
          <h1>Hi</h1>
          <h1>[]</h1>
        </div>
        <div>
          <h1>I am Hatim</h1>
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            style={{
              background: "black",
              height: "1px",
              width: "200px",
            }}
          ></div>
          <div>coder</div>
        </div>
        <div>Get to know more about me</div>
      </div>
      <div
        className="hero-image"
        style={{
          flex: "1",
        }}
      >
        <img src="https://placehold.co/600x400" />
      </div>
    </div>
  );
};

export default Hero;
