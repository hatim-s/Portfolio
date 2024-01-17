import "./styles/ProjectCard.css";

interface Props {
  index: string;
  name: string;
  description: string;
  image?: string;
  repository: string;
  website?: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  image,
  repository,
  website,
}: Props) => {
  return (
    <div
      className="project-card relative flex flex-wrap flex-col p-4 sm:p-10 border-b rounded-2xl border-fuchsia-200 items-top"
      // style={{
      //   background:
      //     "linear-gradient(180deg, rgba(57, 41, 94, 0.30) 0%, rgba(36, 32, 45, 0.30) 100%)",
      //   content: "fit",
      //   overflow: "visible",
      //   flexBasis: "30%",
      // }}
    >
      <img
        className={`py-4 px-auto flex-1 flex-grow-0 justify-center aspect-square object-scale-down rounded-lg md:rounded-xl xl:rounded-2xl`}
        src={image}
        style={{
          borderRadius: "10px",
        }}
      />
      <div>
        <div className="flex justify-between flex-wrap">
          <h2
            className="text-3xl xl:text-5xl"
            style={{
              color: "#E45FFD",
            }}
          >
            {name}
          </h2>
          <h2
            className="text-6xl text-transparent absolute top-4 right-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(124, 73, 252, 0.20) 0%, rgba(53, 30, 94, 0.00) 100%)",
              backgroundClip: "text",
            }}
          >
            {index}
          </h2>
        </div>
        <p
          className="pt-4 xl:text-2xl"
          style={{
            color: "#F5C2FF",
          }}
        >
          {description}
        </p>
        <div className={`flex flex-wrap gap-2 sm:gap-4 lg:gap-8 pt-4`}>
          <a
            href={website}
            target="_blank"
            className={`py-2 px-4 rounded-md ${!website && "hidden"}`}
          >
            <h3 className="text-md sm:text-xl">Website</h3>
          </a>
          <a href={repository} target="_blank" className="p-2 rounded-md">
            <h3 className="text-md sm:text-xl">Repository</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
