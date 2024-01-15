import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-4/5 my-32 mx-auto">
      <div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
          About me
        </h2>
      </div>
      <p
        className="py-8"
        style={{
          color: "#F5C2FF",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident
        explicabo alias, quidem eius cupiditate dolores et ratione assumenda ab
        aperiam voluptatum, similique vel. Unde perferendis est temporibus, ut
        sint non repellat earum ex ipsa, saepe optio aliquid, dolore praesentium
        eum nobis repudiandae officia fuga magni. Est voluptate in doloribus quo
        excepturi nulla, officia animi magnam iure blanditiis fuga magni illo
        sunt esse, alias, assumenda placeat. Quasi nostrum ad, optio nihil qui
        veritatis voluptate tenetur suscipit. Doloremque aperiam culpa enim,
        eius cumque, accusantium praesentium, numquam laudantium a illo deserunt
        neque. Qui et maiores minima provident quo accusantium nemo quasi quas?
      </p>
      <div className="w-1/2 flex col-span-1 justify-evenly">
        <button className="text-4xl text-white">
          <FaLinkedin />
        </button>
        <button className="text-4xl text-white">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default About;
