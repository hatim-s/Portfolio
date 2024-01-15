const Header = () => {
  return (
    <div
      className="grid md:grid-cols-3 gap-4 p-8 lg:px-10 xl:px-16"
      style={{
        height: "15vh",
      }}
    >
      <h2 className="logo col-1 text-fuchsia-400 text-3xl xl:text-4xl tracking-wide text-center self-center xl:text-left xl:pl-20 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
        hatimcodes/
      </h2>
      <div className="nav-buttons hidden md:flex col-span-2 flex-wrap justify-between">
        <button className="flex-grow-0 flex-shrink-0 text-white bg-transparent">
          <h4 className="text-xl lg:text-2xl xl:text-3xl">Home.</h4>
        </button>
        <button className="flex-grow-0 flex-shrink-0 text-white bg-transparent">
          <h4 className="text-xl lg:text-2xl xl:text-3xl">About me.</h4>
        </button>
        <button className="flex-grow-0 flex-shrink-0 text-white bg-transparent">
          <h4 className="text-xl lg:text-2xl xl:text-3xl">Experiences.</h4>
        </button>
        <button className="flex-grow-0 flex-shrink-0 text-white bg-transparent">
          <h4 className="text-xl lg:text-2xl xl:text-3xl">Skills.</h4>
        </button>
        <button className="flex-grow-0 flex-shrink-0 text-white bg-transparent">
          <h4 className="text-xl lg:text-2xl xl:text-3xl">Projects.</h4>
        </button>
      </div>
    </div>
  );
};

export default Header;
