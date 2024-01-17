import "./styles/ProjectCard.css";

const ProjectCard = () => {
  return (
    <div
      className="project-card min-w-1/3 relative flex-1 flex flex-wrap flex-col p-4 sm:p-10 border-b rounded-2xl border-fuchsia-200"
      // style={{
      //   background:
      //     "linear-gradient(180deg, rgba(57, 41, 94, 0.30) 0%, rgba(36, 32, 45, 0.30) 100%)",
      //   content: "fit",
      //   overflow: "visible",
      //   flexBasis: "30%",
      // }}
    >
      <img
        className="py-4 px-auto flex-1 justify-center"
        src="https://placehold.co/200"
      />
      <div>
        <div className="flex justify-between flex-wrap">
          <h2
            className="text-3xl xl:text-5xl"
            style={{
              color: "#E45FFD",
            }}
          >
            Company
          </h2>
          <h2
            className="text-6xl text-transparent absolute top-4 right-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(124, 73, 252, 0.20) 0%, rgba(53, 30, 94, 0.00) 100%)",
              backgroundClip: "text",
            }}
          >
            02
          </h2>
        </div>
        <p
          className="pt-4 xl:text-2xl"
          style={{
            color: "#F5C2FF",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
          quo qui assumenda consequuntur debitis adipisci at reiciendis mollitia
          repudiandae voluptatem saepe aut est enim sunt voluptate possimus
        </p>
        <div className="flex gap-4 sm:gap-8 pt-4">
          <button className="py-2 px-4 rounded-md">
            <h3 className="text-md sm:text-xl">Website</h3>
          </button>
          <button className="p-2 rounded-md">
            <h3 className="text-md sm:text-xl">Repository</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
