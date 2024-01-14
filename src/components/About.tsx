import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div
      className="flex-1 my-32 mx-40 grid grid-cols-3 gap-10"
      style={{
        gridTemplateColumns: "auto repeat(2, fr)",
      }}
    >
      <img className="col-span" src="https://placehold.co/400" />
      <div className="col-span-2 grid grid-cols-2 items-center">
        <div>
          <h2 className="text-6xl inline text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-600">
            About me
          </h2>
        </div>
        <p
          className="col-span-2"
          style={{
            color: "#F5C2FF",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          provident explicabo alias, quidem eius cupiditate dolores et ratione
          assumenda ab aperiam voluptatum, similique vel. Unde perferendis est
          temporibus, ut sint non repellat earum ex ipsa, saepe optio aliquid,
          dolore praesentium eum nobis repudiandae officia fuga magni. Est
          voluptate in doloribus quo excepturi nulla, officia animi magnam iure
          blanditiis fuga magni illo sunt esse, alias, assumenda placeat. Quasi
          nostrum ad, optio nihil qui veritatis voluptate tenetur suscipit.
          Doloremque aperiam culpa enim, eius cumque, accusantium praesentium,
          numquam laudantium a illo deserunt neque. Qui et maiores minima
          provident quo accusantium nemo quasi quas?
        </p>
        <div className="flex col-span-1 justify-evenly">
          <button className="text-4xl text-white">
            <FaLinkedin />
          </button>
          <button className="text-4xl text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
