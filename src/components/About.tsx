import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex-1 py-32 px-10 grid grid-cols-5 gap-10">
      <img className="col-span-2" src="https://placehold.co/600x400" />
      <div className="col-span-3 grid grid-cols-2 items-center">
        <h2 className="text-6xl col-span-2">About me</h2>
        <p className="col-span-2">
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
          <button className="text-4xl">
            <FaLinkedin />
          </button>
          <button className="text-4xl">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
