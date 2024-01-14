const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div className="logo">
        <button>
          <h5>hatimcodes</h5>
        </button>
      </div>
      <div
        className="nav-buttons"
        style={{
          padding: "10px",
        }}
      >
        <button>Home.</button>
        <button>About me.</button>
        <button>Experiences.</button>
        <button>Skills.</button>
        <button>Projects.</button>
      </div>
    </div>
  );
};

export default Header;
