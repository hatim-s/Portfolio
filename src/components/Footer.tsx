const Footer = () => {
  return (
    <div
      className="flex flex-col justify-evenly md:flex-row md:justify-between items-center w-full"
      style={{
        background: "#24154B",
        height: "10vh",
      }}
    >
      <h3 className="flex-grow-0 text-md lg:text-xl text-white inline mx-auto">
        📩 Contact :&nbsp;&nbsp;&nbsp;hatimcodes@gmail.com
      </h3>

      <h3 className="flex-grow-0 text-md lg:text-xl text-white inline mx-auto">
        Made with ❤️ and React, TS and Tailwind
      </h3>
    </div>
  );
};

export default Footer;
