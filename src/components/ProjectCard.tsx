import "./styles/ProjectCard.css";

const ProjectCard = () => {
  return (
    <div
      className="project-card min-w-1/3 flex-1 flex flex-wrap flex-col lg:flex-row p-4 sm:p-10 border-b rounded-2xl border-fuchsia-200"
      // style={{
      //   background:
      //     "linear-gradient(180deg, rgba(57, 41, 94, 0.30) 0%, rgba(36, 32, 45, 0.30) 100%)",
      //   content: "fit",
      //   overflow: "visible",
      //   flexBasis: "30%",
      // }}
    >
      <img className="py-4 px-auto" src="https://placehold.co/200" />
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
            className="text-4xl xl:text-6xl text-transparent"
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
        <div className="flex gap-8 pt-4">
          <button
            className="text-white p-2 rounded-md"
            style={{
              background: "#F5C2FF",
              color: "#10091D",
              boxShadow: "0 0 20px rgba(245, 194, 255, 0.3)",
            }}
          >
            <h3 className="text-xl">Website</h3>
          </button>
          <button
            className="text-white p-2 rounded-md"
            style={{
              background: "#F5C2FF",
              color: "#10091D",
              boxShadow: "0 0 20px rgba(245, 194, 255, 0.3)",
            }}
          >
            <h3 className="text-xl">Repository</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
