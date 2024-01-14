const Header = () => {
  return (
    <div
      className="sticky top-0 grid grid-cols-3 gap-4 bg-red-100"
      style={{ height: "10vh" }}
    >
      <div className="logo col-1 text-fuchsia-400 text-2xl font-semibold font-['Clash Display'] tracking-wide text-center self-center">
        hatimcodes /
      </div>
      {/* <button className=" font-bold">hatimcodes/</button> */}
      <div className="nav-buttons col-span-2 flex">
        <button className="flex-1">Home.</button>
        <button className="flex-1">About me.</button>
        <button className="flex-1">Experiences.</button>
        <button className="flex-1">Skills.</button>
        <button className="flex-1">Projects.</button>
      </div>
    </div>
  );
};

export default Header;
