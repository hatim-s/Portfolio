const Header = () => {
  return (
    <div
      className="grid grid-cols-3 gap-4"
      style={{
        height: "10vh",
        background: "#10091D",
      }}
    >
      <h2 className="logo col-1 text-fuchsia-400 text-2xl tracking-wide text-center self-center">
        hatimcodes/
      </h2>
      <div className="nav-buttons col-span-2 flex">
        <button className="flex-1 text-white bg-transparent">
          <h4 className="text-2xl">Home.</h4>
        </button>
        <button className="flex-1 text-white bg-transparent">
          <h4 className="text-2xl">About me.</h4>
        </button>
        <button className="flex-1 text-white bg-transparent">
          <h4 className="text-2xl">Experiences.</h4>
        </button>
        <button className="flex-1 text-white bg-transparent">
          <h4 className="text-2xl">Skills.</h4>
        </button>
        <button className="flex-1 text-white bg-transparent">
          <h4 className="text-2xl">Projects.</h4>
        </button>
      </div>
    </div>
  );
};

export default Header;
